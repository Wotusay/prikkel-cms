import { visionTool } from '@sanity/vision';
import { defineConfig, isDev } from 'sanity';
import { deskTool } from 'sanity/desk';

import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';

import { media } from 'sanity-plugin-media';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';

import { myStructure } from './helpers/deskStructure';
import { schemaTypes } from './schemas';

const devOnlyPlugins = [visionTool()];

export default defineConfig({
    name: 'default',
    title: 'prikkel',

    projectId: '6w6knwpa',
    dataset: 'production',

    plugins: [
        deskTool({
            structure: myStructure,
        }),
        media(),
        unsplashImageAsset(),
        vercelDeployTool(),
        ...(isDev ? devOnlyPlugins : []),
    ],

    schema: {
        types: schemaTypes,
    },
});
