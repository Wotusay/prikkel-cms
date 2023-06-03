import { Rule } from 'sanity';

import { backgroundColor } from './backgroundColor';

export const section = {
    type: 'object',
    name: 'section',
    title: 'Sectie met beschrijving, titel en knop (midden)',
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
            validation: (Rule: Rule) =>
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
        backgroundColor,
    ],
};
