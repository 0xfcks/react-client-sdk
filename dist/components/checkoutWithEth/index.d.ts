import React from 'react';
import { onWalletConnectedType } from '../../interfaces/WalletTypes';
import { ViewPricingDetailsProps } from './ViewPricingDetails';
export declare enum CheckoutWithEthPage {
    ConnectWallet = 0,
    PaymentDetails = 1
}
declare type CheckoutWithEthProps = {
    onWalletConnected?: onWalletConnectedType;
    onPageChange?: (currentPage: CheckoutWithEthPage) => void;
} & Omit<ViewPricingDetailsProps, 'setIsTryingToChangeWallet'>;
export declare const CheckoutWithEth: ({ sdkClientSecret, payingWalletSigner, setUpUserPayingWalletSigner, receivingWalletType, suppressErrorToast, showConnectWalletOptions, options, onError, onSuccess, onWalletConnected, onPageChange, locale, }: CheckoutWithEthProps) => React.ReactElement;
export {};
