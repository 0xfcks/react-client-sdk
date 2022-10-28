import { Connector } from 'wagmi';
import { onWalletConnectedType, onWalletConnectFailType, WalletType } from '../../interfaces/WalletTypes';
export declare function useConnectWallet(): {
    connectWallet: (connector: Connector, onWalletConnected: onWalletConnectedType, onWalletConnectFail: onWalletConnectFailType) => () => Promise<void>;
    connectors: Connector<any, any>[];
    error: Error | null;
    isConnecting: boolean;
    pendingConnector: Connector<any, any> | {
        id: WalletType;
    } | undefined;
};
