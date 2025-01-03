import { IAgentRuntime, Memory, Provider, State } from "@elizaos/core";

async function getTopStories() {
    const url = 'https://old.reddit.com/r/news/top.json?limit=10&t=week';

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const stories = data.data.children.map(item => {
            const title = item.data.title;
            const link = item.data.url;
            return `---\n${title}\n${link}`;
        });

        const result = `Here are the top stories of this week:\n${stories.join('\n')}`;
        return result;
    } catch (error) {
        console.error("Error fetching the data:", error);
        return "Failed to fetch the top stories.";
    }
}


const newsProvider: Provider = {
    get: async (_runtime: IAgentRuntime, _message: Memory, _state?: State) => {
        // const topStories = await getTopStories();
        return '';
    },
};
export { newsProvider };
