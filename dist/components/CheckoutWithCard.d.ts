import type { ICustomizationOptions, Locale, ReviewResult, PaperSDKError } from '@paperxyz/js-client-sdk';
import React from 'react';
import { PaymentSuccessResult } from '../interfaces/PaymentSuccessResult';
interface CheckoutWithCardProps {
    sdkClientSecret: string;
    onPaymentSuccess: (result: PaymentSuccessResult) => void;
    options?: ICustomizationOptions;
    onReview?: (result: ReviewResult) => void;
    onError?: (error: PaperSDKError) => void;
    /**
     * If true, uses the papercheckout.com instead of paper.xyz domain.
     * This setting is useful if your users are unable to access the paper.xyz domain.
     *
     * Defaults to true.
     */
    experimentalUseAltDomain?: boolean;
    /**
     * Sets the locale to a supported language.
     * NOTE: Localization is in early alpha and many languages are not yet supported.
     *
     * Defaults to English.
     */
    locale?: Locale;
}
export declare const CheckoutWithCard: ({ sdkClientSecret, options, onPaymentSuccess, onReview, onError, experimentalUseAltDomain, locale, }: CheckoutWithCardProps) => React.ReactElement;
export {};
