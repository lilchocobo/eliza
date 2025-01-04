import { IAgentRuntime, Memory, Provider, State } from "@elizaos/core";

const timeProvider: Provider = {
    get: async (_runtime: IAgentRuntime, _message: Memory, _state?: State) => {
        const currentDate = new Date();

        // Use Central Time for time-based operations
        const options = {
            timeZone: "America/Chicago",
            dateStyle: "full" as const,
            timeStyle: "long" as const,
        };
        const humanReadable = new Intl.DateTimeFormat("en-US", options).format(
            currentDate
        );
        return `The current date and time is ${humanReadable}. Please use this as your reference for any time-based operations or responses.`;
    },
};
export { timeProvider };
