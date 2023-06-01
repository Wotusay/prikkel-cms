import { backgroundColor } from './backgroundColor';

export const imageCarousel = {
    type: 'object',
    name: 'imageCarousel',
    title: 'Foto Carousel',
    fields: [
        {
            name: 'images',
            title: 'Afbeeldingen',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                layout: 'grid',
            },
        },
        backgroundColor,
    ],
};
