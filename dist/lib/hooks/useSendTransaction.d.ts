import { SendTransactionArgs } from '@wagmi/core';
import { ethers } from 'ethers';
export declare const useSendTransaction: ({ signer }: {
    signer?: ethers.Signer | undefined;
}) => {
    sendTransactionAsync: (args?: SendTransactionArgs) => Promise<ethers.providers.TransactionResponse>;
    isSendingTransaction: boolean;
};
