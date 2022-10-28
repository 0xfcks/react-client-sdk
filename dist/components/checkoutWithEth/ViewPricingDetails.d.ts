import type { CheckoutWithEthLinkArgs, CheckoutWithEthMessageHandlerArgs } from '@paperxyz/js-client-sdk';
import type { ethers } from 'ethers';
import React from 'react';
export interface PayWithCryptoChildrenProps {
    openModal: () => void;
}
export declare type ViewPricingDetailsProps = Omit<Omit<CheckoutWithEthLinkArgs, 'appName'>, 'payingWalletSigner'> & Omit<Omit<CheckoutWithEthMessageHandlerArgs, 'iframe'>, 'payingWalletSigner'> & {
    setIsTryingToChangeWallet: React.Dispatch<React.SetStateAction<boolean>>;
    payingWalletSigner?: ethers.Signer;
};
export declare const ViewPricingDetails: ({ setIsTryingToChangeWallet, onSuccess, onError, suppressErrorToast, showConnectWalletOptions, payingWalletSigner, receivingWalletType, setUpUserPayingWalletSigner, locale, sdkClientSecret, options, }: ViewPricingDetailsProps) => JSX.Element;
