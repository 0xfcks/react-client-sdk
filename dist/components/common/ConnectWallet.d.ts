import React from 'react';
import { IconProps } from '../../icons/MetaMaskIcon';
import { ConnectWalletProps } from '../../interfaces/WalletTypes';
export declare function WalletIcon({ walletType, className, onClick, size, }: {
    walletType: string;
} & IconProps): JSX.Element;
export declare const ConnectWallet: ({ onWalletConnected, onWalletConnectFail, }: ConnectWalletProps) => React.ReactElement;
