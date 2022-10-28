import type { CheckoutWithEthLinkArgs } from '@paperxyz/js-client-sdk';
import type { ethers } from 'ethers';
export declare function useCheckoutWithEthLink({ payingWalletSigner, sdkClientSecret, appName, locale, options, receivingWalletType, showConnectWalletOptions, }: Omit<CheckoutWithEthLinkArgs, 'payingWalletSigner'> & {
    payingWalletSigner: ethers.Signer | undefined | null;
}): {
    checkoutWithEthUrl: URL | null;
};
