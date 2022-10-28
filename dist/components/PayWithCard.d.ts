import { ICustomizationOptions, ReviewResult, PaperSDKError, Locale } from '@paperxyz/js-client-sdk';
import React from 'react';
import { ContractType, CustomContractArgWrapper, ReadMethodCallType, WriteMethodCallType } from '../interfaces/CustomContract';
import { PaymentSuccessResult } from '../interfaces/PaymentSuccessResult';
interface PayWithCardProps {
    checkoutId: string;
    recipientWalletAddress: string;
    emailAddress: string;
    onPaymentSuccess: (result: PaymentSuccessResult) => void;
    mintMethod?: WriteMethodCallType;
    eligibilityMethod?: ReadMethodCallType;
    quantity?: number;
    metadata?: Record<string, any>;
    options?: ICustomizationOptions;
    onReview?: (result: ReviewResult) => void;
    onError?: (error: PaperSDKError) => void;
    /**
     * If true, uses the papercheckout.com instead of paper.xyz domain.
     * This setting is useful if your users are unable to access the paper.xyz domain.
     *
     * Note: This setting is not meant for long term use. It may be removed at a future time in a minor version update.
     */
    experimentalUseAltDomain?: boolean;
    locale?: Locale;
}
export declare const PayWithCard: <T extends ContractType>({ checkoutId, recipientWalletAddress, emailAddress, quantity, metadata, eligibilityMethod, mintMethod, options, onPaymentSuccess, onReview, onError, experimentalUseAltDomain, locale, ...props }: CustomContractArgWrapper<PayWithCardProps, T>) => React.ReactElement;
export {};
