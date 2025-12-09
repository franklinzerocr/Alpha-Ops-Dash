import { useCallback, useState } from "react";

type WalletState = {
  account: string | null;
  isConnecting: boolean;
  error: string | null;
};

export function useWallet(): WalletState & {
  connect: () => Promise<void>;
  disconnect: () => void;
} {
  const [account, setAccount] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connect = useCallback(async () => {
    setIsConnecting(true);
    setError(null);

    try {
      const ethereum = (window as any).ethereum;
      if (!ethereum) {
        setError("No EVM provider detected in this browser.");
        setIsConnecting(false);
        return;
      }

      const accounts: string[] = await ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts && accounts.length > 0) {
        setAccount(accounts[0]);
      } else {
        setError("No account returned by provider.");
      }
    } catch (err: any) {
      console.error("Wallet connection error:", err);
      setError(err?.message ?? "Failed to connect wallet.");
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const disconnect = useCallback(() => {
    setAccount(null);
    setError(null);
  }, []);

  return {
    account,
    isConnecting,
    error,
    connect,
    disconnect,
  };
}
