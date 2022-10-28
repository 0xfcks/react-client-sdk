import { ethers } from 'ethers';
export declare function useResolvedSigner({ signer }: {
    signer?: ethers.Signer;
}): {
    signer: import("@wagmi/core").FetchSignerResult | undefined;
};
