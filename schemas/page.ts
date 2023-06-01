import { defineField, defineType } from 'sanity';

import { contentBlocks } from './content-blocks';

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
        contentBlocks,
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
