import { PaperSDKError, PaperUser } from '@paperxyz/js-client-sdk';
import type { Locale } from '@paperxyz/js-client-sdk';
import React from 'react';
interface CreateWalletProps {
    emailAddress: string;
    onSuccess: (user: PaperUser) => void;
    onEmailVerificationInitiated?: () => void;
    onError?: (error: PaperSDKError) => void;
    redirectUrl?: string;
    clientId?: string;
    locale?: Locale;
    children?: ({ createWallet, }: {
        createWallet: (email: string) => void;
    }) => React.ReactNode | React.ReactNode;
}
export declare const CreateWallet: React.FC<CreateWalletProps>;
export {};
