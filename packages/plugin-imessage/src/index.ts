export * from "./actions/bridge";
export * from "./actions/swap";
export * from "./actions/transfer";
export * from "./providers/wallet";
export * from "./types";

import type { Plugin } from "@elizaos/core";
import { bridgeAction } from "./actions/bridge";
import { swapAction } from "./actions/swap";
import { transferAction } from "./actions/transfer";
import { evmWalletProvider } from "./providers/wallet";

export const imessagePlugin: Plugin = {
    name: "iMessage",
    description: "IMessage integration plugin",
    providers: [],
    evaluators: [],
    services: [],
    actions: [],
};

export default imessagePlugin;
