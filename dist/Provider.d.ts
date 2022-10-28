import type { SupportedChainName } from '@paperxyz/js-client-sdk';
import React, { Dispatch, SetStateAction } from 'react';
interface SDKContext {
    chainName: SupportedChainName;
    setChainName: Dispatch<SetStateAction<SupportedChainName>>;
    clientId: string;
    appName: string;
}
export interface PaperProviderProps {
    chainName?: SupportedChainName;
    appName?: string;
    clientId?: string;
}
/**
 * @typedef PaperProviderProps
 * @type {object}
 * @property {string} appName - The name used to display
 * @property {string}  chainName - deprecated. Not used anymore
 * @property {string} clientId - deprecated. Used by VerifyOwnershipWithPaper which has since been deprecated
 * @param {PaperProviderProps} props
 */
export declare const PaperSDKProvider: ({ appName, chainName, clientId, children, }: React.PropsWithChildren<PaperProviderProps>) => JSX.Element;
export declare const usePaperSDKContext: () => SDKContext;
export {};
