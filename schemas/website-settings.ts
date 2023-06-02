import { SanityDocument, defineType } from 'sanity';

export default defineType({
    name: 'websiteSettings',
    title: 'Website instellingen',
    type: 'document',
    fields: [
        {
            name: 'websiteName',
            title: 'Website naam',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'ctaNavigationActive',
            title: 'Knop in navigatie & voetstuk actief',
            type: 'boolean',
            initialValue: true,
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'ctaNavigationText',
            title: 'Knop in navigatie text & voetstuk text',
            type: 'string',
            initialValue: 'Boek een sessie',
            hidden: ({ document }: { document?: SanityDocument }) => !document?.ctaNavigationActive,
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'ctaFooterDescription',
            title: 'Voetstuk beschrijving voor knop',
            type: 'array',
            of: [
                {
                    name: 'rule',
                    title: 'Regel',
                    type: 'object',
                    fields: [
                        {
                            name: 'text',
                            title: 'Tekst',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'color',
                            title: 'Kleur',
                            type: 'number',
                            validation: (Rule) => Rule.required(),
                            initialValue: 0,
                            options: {
                                list: [
                                    {
                                        title: 'Wit',
                                        value: 0,
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
            ],
            hidden: ({ document }: { document?: SanityDocument }) => !document?.ctaNavigationActive,
            validation: (Rule) => Rule.required(),
        },
    ],
});
