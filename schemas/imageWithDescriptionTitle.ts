import { backgroundColor } from './backgroundColor';

export const imageWithDescriptionTitle = {
    type: 'object',
    name: 'imageWithDescriptionTitle',
    title: 'Foto met beschrijving en titel',
    fields: [
        {
            name: 'title',
            title: 'Titel',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Beschrijving',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Foto',
            type: 'image',
        },
        backgroundColor,
    ],
};
