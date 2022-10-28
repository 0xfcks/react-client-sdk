import { PaperSDKError } from '@paperxyz/js-client-sdk';
import React from 'react';
interface VerifyOwnershipWithPaperProps {
    onSuccess?: (code: string) => void;
    onError?: (error: PaperSDKError) => void;
    onWindowClose?: () => void;
    children?: ({ onClick, }: {
        onClick: () => void;
    }) => React.ReactNode | React.ReactNode;
    redirectUrl?: string;
    className?: string;
}
export declare const VerifyOwnershipWithPaper: React.FC<VerifyOwnershipWithPaperProps>;
export {};
