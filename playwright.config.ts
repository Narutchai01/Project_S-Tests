import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    testDir: "./src/test",
    timeout: 30000,
    reporter: "html",
    use: {
        headless: true,
        screenshot: "only-on-failure",
        browserName: "chromium",
    },
};

export default config;
