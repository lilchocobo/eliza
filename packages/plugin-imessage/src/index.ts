export * from "./actions/bridge";
export * from "./actions/swap";
export * from "./actions/transfer";
export * from "./providers/wallet";
export * from "./types";

import type { Plugin } from "@elizaos/core";
import { newsProvider } from "./providers/news";


export const imessagePlugin: Plugin = {
    name: "iMessage",
    description: "IMessage integration plugin",
    providers: [newsProvider],
    evaluators: [],
    services: [],
    actions: [],
};

export default imessagePlugin;
