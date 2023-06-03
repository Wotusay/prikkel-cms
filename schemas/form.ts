import { defineType } from 'sanity';

export default defineType({
    name: 'form',
    title: 'Formulier instellingen',
    type: 'document',
    fields: [
        {
            name: 'daysAvailable',
            title: 'Dagen beschikbaar',
            type: 'array',
            of: [
                {
                    name: 'day',
                    title: 'Dag',
                    type: 'object',
                    fields: [
                        {
                            name: 'day',
                            title: 'Dag',
                            options: {
                                list: [
                                    'Maandag',
                                    'Dinsdag',
                                    'Woensdag',
                                    'Donderdag',
                                    'Vrijdag',
                                    'Zaterdag',
                                    'Zondag',
                                ],
                            },
                            initialValue: 'Maandag',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'startTime',
                            title: 'Start tijd',
                            type: 'string',
                            initialValue: '9u00',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'endTime',
                            title: 'Eind tijd',
                            type: 'string',
                            initialValue: '17u00',
                            validation: (Rule) => Rule.required(),
                        },

                        {
                            name: 'notWorkingHours',
                            title: 'Niet werkende uren',
                            type: 'array',
                            of: [
                                {
                                    name: 'hour',
                                    title: 'Uur',
                                    type: 'string',
                                },
                            ],
                            initialValue: ['12u00'],
                            validation: (Rule) => Rule.required(),
                        },
                    ],
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare() {
            return {
                title: 'Formulier instellingen',
            };
        },
    },
});
