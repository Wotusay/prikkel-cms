import { visionTool } from '@sanity/vision';
import { defineConfig, isDev } from 'sanity';
import { deskTool } from 'sanity/desk';

import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';

import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';

import { myStructure } from './helpers/deskStructure';
import { getStartedPlugin } from './plugins/sanity-plugin-tutorial';
import { schemaTypes } from './schemas';

const devOnlyPlugins = [getStartedPlugin()];

export default defineConfig({
    name: 'default',
    title: 'prikkel',

    projectId: '6w6knwpa',
    dataset: 'production',

    plugins: [
        deskTool({
            structure: myStructure,
        }),
        visionTool(),
        unsplashImageAsset(),
        vercelDeployTool(),
        ...(isDev ? devOnlyPlugins : []),
    ],

    schema: {
        types: schemaTypes,
    },
});
