import { defineType } from 'sanity';

import { contact } from './contact';

export default defineType({
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        {
            name: 'facebook',
            title: 'Facebook',
            type: 'url',
        },
        {
            name: 'linkedin',
            title: 'LinkedIn',
            type: 'url',
        },
        {
            name: 'instagram',
            title: 'Instagram',
            type: 'url',
        },
        { ...contact },
        {
            name: 'btw',
            title: 'BTW nummer',
            type: 'string',
            options: {
                stringfy: (btw: string) => {
                    if (btw.includes('BTW BE')) {
                        return btw;
                    }

                    if (btw.includes('BE')) {
                        return `BTW ${btw}`;
                    }

                    return `BTW BE ${btw}`;
                },
            },
        },
    ],

    preview: {
        select: {
            title: 'title',
        },
        prepare() {
            return {
                title: 'Footer',
            };
        },
    },
});
