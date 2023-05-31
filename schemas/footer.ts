import { defineType } from 'sanity';

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
        {
            type: 'object',
            name: 'contact',
            title: 'Contact',
            fields: [
                {
                    name: 'company',
                    title: 'Bedrijf',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                    initialValue: 'Prikkel',
                },
                {
                    name: 'phone',
                    title: 'Phone',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: 'mail',
                    title: 'E-mail',
                    type: 'email',
                    validation: (Rule) => Rule.required().email(),
                },
                {
                    name: 'address',
                    title: 'Address',
                    type: 'object',
                    fields: [
                        {
                            name: 'street',
                            title: 'Straat en huisnummer',
                            type: 'string',
                        },
                        {
                            name: 'postalCode',
                            title: 'Postcode',
                            type: 'number',
                        },
                        {
                            name: 'city',
                            title: 'Plaats',
                            type: 'string',
                        },
                    ],
                },
            ],
        },
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
