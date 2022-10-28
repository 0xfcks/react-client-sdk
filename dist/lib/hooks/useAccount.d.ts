import { ethers } from 'ethers';
export declare const useAccount: ({ signer }: {
    signer?: ethers.Signer | undefined;
}) => {
    address: string | undefined;
    connector: import("wagmi").Connector<any, any> | undefined;
    chainId: number | undefined;
};
