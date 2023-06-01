import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'WebPage',
    title: 'Web Pagina',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titel pagina',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'contentBlocks',
            title: 'Content blokken',
            type: 'array',
            of: [
                {
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
                        },
                    ],
                },

                {
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
                },
                {
                    type: 'object',
                    name: 'section',
                    title: 'Foto met beschrijving, titel en knop',
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                        },
                        {
                            name: 'cta',
                            title: 'Knop text',
                            type: 'string',
                        },
                        {
                            name: 'link',
                            title: 'Knop link',
                            type: 'string',
                            validation: (Rule) =>
                                Rule.custom((string?: string) => {
                                    if (!string?.startsWith('/')) {
                                        return 'De link moet met / starten.';
                                    }
                                    if (string?.includes(' ')) {
                                        return 'De link moet zonder spacies.';
                                    }
                                    return true;
                                }),
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
                },

                {
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
                },
            ],
        }),
    ],

    preview: {
        select: {
            title: 'title',
        },
        prepare(selection) {
            const { title } = selection;
            return {
                title: `${title} pagina`,
            };
        },
    },
});
