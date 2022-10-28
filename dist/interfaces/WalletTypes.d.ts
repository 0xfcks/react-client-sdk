export declare const enum WalletType {
    Preset = "Preset",
    MetaMask = "metaMask",
    CoinbaseWallet = "coinbaseWallet",
    WalletConnect = "walletConnect",
    Phantom = "Phantom"
}
export interface ConnectWalletProps {
    onWalletConnected: onWalletConnectedType;
    onWalletConnectFail: onWalletConnectFailType;
}
export declare type onWalletConnectFailType = (props: {
    walletType: WalletType;
    currentUserWalletType: WalletType;
    error: Error;
}) => void;
export declare type onWalletConnectedType = (props: {
    userAddress: string;
    chainId: number;
}) => void;
