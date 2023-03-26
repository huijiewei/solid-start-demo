import solid from "solid-start/vite";
import {defineConfig, UserConfig} from "vite";
import mdx from "solid-start-mdx";

export default defineConfig(async ({ssrBuild}) => {
    const config: UserConfig = {
        plugins: [await mdx(), solid({
            extensions: ['.mdx', '.md']
        })],
    }

    if (ssrBuild) {
        config.build!.rollupOptions!.output = {
            inlineDynamicImports: true
        }
    }

    return config;
});
