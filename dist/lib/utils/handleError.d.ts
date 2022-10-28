import type { PaperSDKError } from '@paperxyz/js-client-sdk';
import { PayWithCryptoErrorCode } from '@paperxyz/js-client-sdk';
export interface IErrorObject {
    isErrorObject: boolean;
    title: PayWithCryptoErrorCode;
    description: string;
}
export declare function handlePayWithCryptoError(error: Error | IErrorObject, onError?: (code: PaperSDKError) => void, postToParent?: (errorObject: Omit<IErrorObject, 'isErrorObject'>) => void): void;
