import { defineField } from 'sanity';

import { imageCarousel } from './imageCarousel';
import { imageWithDescriptionTitle } from './imageWithDescriptionTitle';
import { pricingSection } from './pricingSection';
import { section } from './section';
import { slogan } from './slogan';

export const contentBlocks = defineField({
    name: 'contentBlocks',
    title: 'Content blokken',
    type: 'array',
    of: [imageCarousel, imageWithDescriptionTitle, section, pricingSection, slogan],
});
