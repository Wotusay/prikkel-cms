import { Rule } from 'sanity';

import { backgroundColor } from './backgroundColor';

export const slogan = {
    name: 'slogan',
    title: 'Slogan',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Slogan',
            type: 'string',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'picture',
            title: 'Achtergrond afbeelding',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'positionSlogan',
            title: 'Positie van de slogan',
            type: 'string',
            options: {
                list: [
                    { title: 'Links', value: 'left' },
                    { title: 'Midden', value: 'middle' },
                    { title: 'Rechts', value: 'right' },
                ],
            },
            initialValue: 'middle',
        },
        backgroundColor,
    ],
    preview: {
        prepare() {
            return {
                title: `Slogan`,
            };
        },
    },
};
