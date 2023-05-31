import { SlugValue, defineField, defineType } from 'sanity';

import { isUniqueAcrossAllDocuments } from '../helpers/isUnique';

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
            name: 'path',
            title: 'Pagina route',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
                slugify: (input) => {
                    const inputStr = input.toLowerCase();
                    const slug = inputStr.replace(/\s+/g, '-').slice(0, 200);
                    return inputStr === 'home' ? '/' : `/${slug}`;
                },
                isUnique: isUniqueAcrossAllDocuments,
            },
            validation: (Rule) =>
                Rule.required()
                    .error('De pagina route is verplicht.')
                    .custom((slug?: SlugValue) => {
                        const _slug = slug?.current;
                        console.info(_slug);
                        if (!_slug?.startsWith('/')) {
                            return 'De pagina route moet met / starten.';
                        }
                        if (_slug?.includes(' ')) {
                            return 'De pagina route moet zonder spacies.';
                        }
                        return true;
                    })
                    .error(),
        }),
    ],
});
