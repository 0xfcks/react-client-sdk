import React, { useEffect, useState } from 'react';
import { PaymentSuccessResult } from '../interfaces/PaymentSuccessResult';
import { TransferSuccessResult } from '../interfaces/TransferSuccessResult';

export enum PaperCheckoutDisplay {
  /**
   * Open the checkout in a new popup centered over the parent window.
   */
  POPUP = 'POPUP',

  /**
   * Open the checkout in a new browser tab.
   */
  NEW_TAB = 'NEW_TAB',

  /**
   * Open the checkout in a modal on the parent page with a darkened background.
   *
   * NOTE: Pay with Crypto is disabled in this view.
   */
  MODAL = 'MODAL',

  /**
   * Open the checkout in a drawer on the right side of the parent page with a darkened background.
   *
   * NOTE: Pay with Crypto is disabled in this view.
   */
  DRAWER = 'DRAWER',

  /**
   * Embed the checkout directly on the parent page.
   *
   * NOTE: Pay with Crypto is disabled in this view.
   */
  EMBED = 'EMBED',
}

export interface PaperCheckoutProps {
  checkoutId: string;
  display?: PaperCheckoutDisplay;
  options?: {
    width: number;
    height: number;
    colorPrimary: string;
    colorBackground: string;
    colorText: string;
    borderRadius: number;
    fontFamily: string;
    quantity?: number;
    appName?: string;
    recipientWalletAddress?: string;
    email?: string;
  };
  onPaymentSuccess?: (result: PaymentSuccessResult) => void;
  onTransferSuccess?: (result: TransferSuccessResult) => void;
  children?: React.ReactNode;
}

export const PaperCheckout: React.FC<PaperCheckoutProps> = ({
  checkoutId,
  display = PaperCheckoutDisplay.POPUP,
  options = {
    width: 400,
    height: 800,
    colorPrimary: '#cf3781',
    colorBackground: '#ffffff',
    colorText: '#1a202c',
    borderRadius: 12,
    fontFamily: 'Open Sans',
  },
  onPaymentSuccess,
  onTransferSuccess,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;

      switch (data.eventType) {
        case 'paymentSuccess':
          if (onPaymentSuccess) {
            onPaymentSuccess({ id: data.id });
          }
          break;

        case 'transferSuccess':
          if (onTransferSuccess) {
            // @ts-ignore
            onTransferSuccess({
              id: data.id,
              // ...
            });
          }
          break;

        case 'modalClosed':
          setIsOpen(false);
          break;

        default:
        // Ignore unrecognized event
      }
    };

    window.addEventListener('message', handleMessage);
  }, []);

  const checkoutUrl = new URL(`https://paper.xyz/checkout/${checkoutId}`);
  checkoutUrl.searchParams.append('display', display);

  if (options.colorPrimary) {
    checkoutUrl.searchParams.append('color_primary', options.colorPrimary);
  }
  if (options.colorBackground) {
    checkoutUrl.searchParams.append(
      'color_background',
      options.colorBackground,
    );
  }
  if (options.colorText) {
    checkoutUrl.searchParams.append('color_text', options.colorText);
  }
  if (options.borderRadius) {
    checkoutUrl.searchParams.append(
      'border_radius',
      options.borderRadius.toString(),
    );
  }
  if (options.fontFamily) {
    checkoutUrl.searchParams.append('font_family', options.fontFamily);
  }

  if (options.appName) {
    checkoutUrl.searchParams.append('app_name', options.appName);
  }
  if (options.recipientWalletAddress) {
    checkoutUrl.searchParams.append('wallet', options.recipientWalletAddress);
  }
  if (options.email) {
    checkoutUrl.searchParams.append('username', options.email);
  }
  if (options.quantity) {
    checkoutUrl.searchParams.append('quantity', options.quantity.toString());
  }

  const clickableElement = children || (
    <button
      style={{
        backgroundColor: '#cf3781',
        padding: '8px 20px 8px 20px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: 'bold',
      }}
    >
      Buy Now
    </button>
  );

  switch (display) {
    case PaperCheckoutDisplay.POPUP: {
      const onClick = () => {
        if (!window?.top) return;

        const y =
          window.top.outerHeight / 2 + window.top.screenY - options.height / 2;
        const x =
          window.top.outerWidth / 2 + window.top.screenX - options.width / 2;
        window.open(
          checkoutUrl,
          'Paper Checkout',
          `toolbar=no,
          location=no,
          status=no,
          menubar=no,
          scrollbars=yes,
          resizable=yes,
          width=${options.width},
          height=${options.height},
          top=${y},
          left=${x}`,
        );
      };
      return <a onClick={onClick}>{clickableElement}</a>;
    }

    case PaperCheckoutDisplay.NEW_TAB: {
      return (
        <a onClick={() => window.open(checkoutUrl, '_blank')}>
          {clickableElement}
        </a>
      );
    }

    case PaperCheckoutDisplay.MODAL: {
      return (
        <PaperCheckoutModal
          clickableElement={clickableElement}
          checkoutUrl={checkoutUrl.href}
          width={options.width}
          height={options.height}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      );
    }

    case PaperCheckoutDisplay.DRAWER: {
      return (
        <PaperCheckoutDrawer
          clickableElement={clickableElement}
          checkoutUrl={checkoutUrl.href}
          width={options.width}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      );
    }

    case PaperCheckoutDisplay.EMBED: {
      return (
        <iframe
          src={checkoutUrl.href}
          width={options.width}
          height={options.height}
        />
      );
    }

    default:
      console.error(`Invalid or unimplemented display type: ${display}`);
      return <></>;
  }
};

const inlineStyles: { [name: string]: any } = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 0,
    zIndex: 1,
    overflow: 'hidden',
    display: 'flex',
    visibility: 'hidden',
    opacity: 0,
    transition: 'all 0.2s ease',
  },
  overlayIsVisible: {
    visibility: 'visible',
    opacity: 1,
    backdropFilter: 'blur(2px)',
    background: '#0008',
  },
  modalOverlay: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerOverlay: {
    justifyContent: 'flex-end',
  },
  modalDialog: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '8px',
    visibility: 'hidden',
    opacity: 0,
    top: '5%',
    transition: 'all 0.2s ease',
  },
  modalDialogIsVisible: {
    visibility: 'visible',
    opacity: 1,
    top: 0,
  },
  drawerDialog: {
    position: 'relative',
    visibility: 'hidden',
    opacity: 0,
    right: '-10%',
    transition: 'all 0.2s ease',
  },
  drawerDialogIsVisible: {
    visibility: 'visible',
    opacity: 1,
    right: 0,
  },
  modalCloseButton: {
    position: 'absolute',
    top: '0.1em',
    right: '0.2em',
    borderRadius: '8px',
    fontSize: 'x-large',
    padding: '0 0.4em',
    color: '#888',
  },
};

const PaperCheckoutDrawer = ({
  clickableElement,
  checkoutUrl,
  width,
  isOpen,
  setIsOpen,
}: {
  clickableElement: React.ReactNode;
  checkoutUrl: string;
  width: number;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <a onClick={() => setIsOpen(true)}>{clickableElement}</a>

      <div
        className='paper-overlay'
        style={{
          ...inlineStyles.overlay,
          ...(isOpen ? inlineStyles.overlayIsVisible : {}),
          ...inlineStyles.drawerOverlay,
        }}
      >
        <div
          className='paper-drawer'
          style={{
            ...inlineStyles.drawerDialog,
            ...(isOpen ? inlineStyles.drawerDialogIsVisible : {}),
          }}
        >
          <button
            onClick={() => setIsOpen(false)}
            style={inlineStyles.modalCloseButton}
          >
            &times;
          </button>
          <iframe src={checkoutUrl} width={width} height='100%' />
        </div>
      </div>
    </>
  );
};

const PaperCheckoutModal = ({
  clickableElement,
  checkoutUrl,
  width,
  height,
  isOpen,
  setIsOpen,
}: {
  clickableElement: React.ReactNode;
  checkoutUrl: string;
  width: number;
  height: number;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <a onClick={() => setIsOpen(true)}>{clickableElement}</a>

      <div
        className='paper-overlay'
        style={{
          ...inlineStyles.overlay,
          ...(isOpen ? inlineStyles.overlayIsVisible : {}),
          ...inlineStyles.modalOverlay,
        }}
      >
        <div
          className='paper-modal'
          style={{
            ...inlineStyles.modalDialog,
            ...(isOpen ? inlineStyles.modalDialogIsVisible : {}),
          }}
        >
          <button
            onClick={() => setIsOpen(false)}
            style={inlineStyles.modalCloseButton}
          >
            &times;
          </button>
          <iframe src={checkoutUrl} width={width} height={height} />
        </div>
      </div>
    </>
  );
};
