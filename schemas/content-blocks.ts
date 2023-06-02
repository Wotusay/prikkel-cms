import { defineField } from 'sanity';

import { imageWithDescriptionTitle } from './imageWithDescriptionTitle';
import { pricingSection } from './pricingSection';
import { section } from './section';
import { slogan } from './slogan';

export const contentBlocks = defineField({
    name: 'contentBlocks',
    title: 'Content blokken',
    type: 'array',
    of: [imageWithDescriptionTitle, section, pricingSection, slogan],
});
