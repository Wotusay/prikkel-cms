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
            name: 'Logo',
            title: 'Logo',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'ctaNavigationActive',
            title: 'Knop in navigatie',
            type: 'boolean',
            initialValue: true,
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'ctaNavigationText',
            title: 'Knop in navigatie text',
            type: 'string',
            initialValue: 'Boek een sessie',
            hidden: ({ document }: { document?: SanityDocument }) => !document?.ctaNavigationActive,
            validation: (Rule) => Rule.required(),
        },
    ],
});
