import { defineType } from 'sanity';

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
    ],
});
