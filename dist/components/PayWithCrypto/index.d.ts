import React from 'react';
import { ContractType, CustomContractArgWrapper } from '../../interfaces/CustomContract';
import { onWalletConnectedType } from '../../interfaces/WalletTypes';
import { ViewPricingDetailsProps } from './ViewPricingDetails';
export declare enum PayWithCryptoPage {
    ConnectWallet = 0,
    PaymentDetails = 1
}
declare type PayWithCryptoProps<T extends ContractType> = CustomContractArgWrapper<{
    onWalletConnected?: onWalletConnectedType;
    onPageChange?: (currentPage: PayWithCryptoPage) => void;
} & Omit<ViewPricingDetailsProps, 'setIsTryingToChangeWallet'>, T>;
export declare const PayWithCrypto: <T extends ContractType>({ checkoutId, recipientWalletAddress, emailAddress, quantity, metadata, eligibilityMethod, mintMethod, suppressErrorToast, signer, setUpSigner, walletType, showConnectWalletOptions, options, onError, onSuccess, onWalletConnected, onPageChange, locale, ...contractSpecificArgs }: PayWithCryptoProps<T>) => React.ReactElement;
export {};
