export const pricingSection = {
    type: 'object',
    name: 'pricingSection',
    title: 'Prijs sectie',
    fields: [
        {
            name: 'title',
            title: 'Titel',
            type: 'string',
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
                        },
                        {
                            name: 'label',
                            title: 'Achter het euro teken',
                            type: 'string',
                        },
                        {
                            name: 'description',
                            title: 'Beschrijving',
                            type: 'text',
                        },
                    ],
                },
            ],
        },
        {
            name: 'backgroundColor',
            title: 'Achtergrond kleur',
            type: 'number',
            options: {
                list: [
                    {
                        title: 'Wit',
                        value: 0,
                    },
                    {
                        title: 'Zwart',
                        value: 1,
                    },
                    {
                        title: 'Lila',
                        value: 3,
                    },
                ],
            },
            initialValue: 0,
        },
    ],
};