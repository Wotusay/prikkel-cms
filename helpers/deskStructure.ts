// ./deskStructure.js

export const myStructure = (S: any) =>
    S.list()
        .title('Base')
        .items([
            S.listItem().title('Footer').child(S.document().schemaType('footer').documentId('footer')),
            S.listItem()
                .title('Website instellingen')
                .child(S.document().schemaType('websiteSettings').documentId('websiteSettings')),
            // S.listItem()
            //     .title('Formulier instellingen')
            //     .child(S.document().schemaType('form').documentId('form')),

            ...S.documentTypeListItems().filter(
                (listItem: any) =>
                    ![
                        'footer',
                        'websiteSettings',
                        'media.tag',
                        // 'form'
                    ].includes(listItem.getId()),
            ),
        ]);
