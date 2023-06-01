import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';

import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';

import { myStructure } from './helpers/deskStructure';
import { schemaTypes } from './schemas';

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
    ],

    schema: {
        types: schemaTypes,
    },
});
