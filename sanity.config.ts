import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'prikkel',

  projectId: '6w6knwpa',
  dataset: 'production',

  plugins: [deskTool(), visionTool(),unsplashImageAsset(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})

