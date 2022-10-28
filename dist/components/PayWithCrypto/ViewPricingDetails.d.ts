import { PaperSDKError, Locale } from '@paperxyz/js-client-sdk';
import { ICustomizationOptions } from '@paperxyz/js-client-sdk';
import { ethers } from 'ethers';
import React from 'react';
import { ContractType, CustomContractArgWrapper, ReadMethodCallType, WriteMethodCallType } from '../../interfaces/CustomContract';
export interface PayWithCryptoChildrenProps {
    openModal: () => void;
}
export interface ViewPricingDetailsProps {
    onSuccess?: ({ transactionResponse, transactionId, }: {
        transactionResponse: ethers.providers.TransactionResponse;
        transactionId: string;
    }) => void;
    onError?: (error: PaperSDKError) => void;
    suppressErrorToast?: boolean;
    checkoutId: string;
    recipientWalletAddress?: string;
    emailAddress?: string;
    quantity?: number;
    metadata?: Record<string, any>;
    mintMethod?: WriteMethodCallType;
    eligibilityMethod?: ReadMethodCallType;
    setIsTryingToChangeWallet: React.Dispatch<React.SetStateAction<boolean>>;
    setUpSigner?: (args: {
        chainId: number;
    }) => void | Promise<void>;
    signer?: ethers.Signer;
    walletType?: 'WalletConnect' | 'MetaMask' | 'Coinbase Wallet' | string;
    showConnectWalletOptions?: boolean;
    options?: ICustomizationOptions;
    locale?: Locale;
}
export declare const ViewPricingDetails: <T extends ContractType>({ checkoutId, setIsTryingToChangeWallet, emailAddress, metadata, eligibilityMethod, mintMethod, onError, suppressErrorToast, showConnectWalletOptions, onSuccess, quantity, setUpSigner, signer, recipientWalletAddress, walletType, options, locale, ...props }: CustomContractArgWrapper<ViewPricingDetailsProps, T>) => JSX.Element;
