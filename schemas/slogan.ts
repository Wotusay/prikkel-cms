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
        {
            name: 'picture',
            title: 'Afbeelding',
            type: 'image',
            options: {
                hotspot: true,
            },
            hidden: ({ parent }: { parent: any }) => parent?.positionSlogan !== 'middle',
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
