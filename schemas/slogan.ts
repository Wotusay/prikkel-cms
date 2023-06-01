import { Rule, SanityDocument } from 'sanity';

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
            title: 'Picture',
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
        {
            name: 'positionPicture',
            title: 'Positie van de foto',
            type: 'string',
            options: {
                list: [
                    { title: 'Links', value: 'left' },
                    { title: 'Midden', value: 'midden' },
                    { title: 'Rechts', value: 'right' },
                ],
            },
            hidden: ({ document }: { document?: SanityDocument }) => {
                const picture: any | undefined = document?.picture;
                return picture === undefined ? true : false;
            },
        },
        {
            name: 'activateCta',
            title: 'Knop activeren',
            type: 'boolean',
            intialValue: false,
        },
        {
            name: 'cta',
            title: 'Knop instellingen',
            type: 'object',
            fields: [
                {
                    name: 'text',
                    title: 'Knop text',
                    type: 'string',
                    validation: (Rule: Rule) => Rule.required(),
                },
                {
                    name: 'link',
                    title: 'Knop link',
                    type: 'string',
                    validation: (Rule: Rule) => Rule.required(),
                },
            ],
            hidden: ({ document }: { document?: SanityDocument }) => !document?.activateCta,
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
