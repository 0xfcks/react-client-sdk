import { ethers } from 'ethers';
export declare const useSwitchNetwork: ({ signer }: {
    signer?: ethers.Signer | undefined;
}) => {
    switchNetworkAsync: (chainId?: number) => Promise<import("wagmi").Chain>;
};
