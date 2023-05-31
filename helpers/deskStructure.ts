// ./deskStructure.js

export const myStructure = (S: any) =>
    S.list()
        .title('Base')
        .items([
            S.listItem().title('Footer').child(S.document().schemaType('footer').documentId('footer')),
            ...S.documentTypeListItems().filter((listItem: any) => !['footer'].includes(listItem.getId())),
        ]);
