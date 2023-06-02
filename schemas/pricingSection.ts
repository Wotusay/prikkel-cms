import { Rule } from 'sanity';

import { backgroundColor } from './backgroundColor';

export const pricingSection = {
    type: 'object',
    name: 'pricingSection',
    title: 'Prijs sectie',
    fields: [
        {
            name: 'title',
            title: 'Titel',
            type: 'string',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Beschrijving',
            type: 'text',
        },
        {
            name: 'pricing',
            title: 'Prijzen',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'price',
                            title: 'Prijs',
                            type: 'number',
                            options: {
                                format: '€0,0.00',
                            },
                            validation: (Rule: Rule) => Rule.required(),
                        },
                        {
                            name: 'label',
                            title: 'Achter het euro teken',
                            type: 'string',
                            validation: (Rule: Rule) => Rule.required(),
                        },
                        {
                            name: 'description',
                            title: 'Beschrijving',
                            type: 'text',
                            validation: (Rule: Rule) => Rule.required(),
                        },
                    ],
                },
            ],
        },
        backgroundColor,
    ],
};
