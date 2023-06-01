import { Rule } from 'sanity';

export const contact = {
    type: 'object',
    name: 'contact',
    title: 'Contact',
    fields: [
        {
            name: 'company',
            title: 'Bedrijf',
            type: 'string',
            validation: (Rule: Rule) => Rule.required(),
            initialValue: 'Prikkel',
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'mail',
            title: 'E-mail',
            type: 'email',
            validation: (Rule: Rule) => Rule.required().email(),
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
};
