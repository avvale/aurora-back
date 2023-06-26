export const boundedContexts = [
    {
        id      : '57c76503-15a9-4bed-a39e-bda1161721f6',
        name    : 'SearchEngine',
        root    : 'search-engine',
        sort    : 60,
        isActive: true,
    },
];

export const permissions = [
    { id: '87018d43-bdb5-4048-b346-ec4d4dfd1889',  name: 'searchEngine.access',                 boundedContextId: '57c76503-15a9-4bed-a39e-bda1161721f6', roleIds: []},

    { id: 'e67e5fd6-649d-4dbd-bc39-6cf696d22af1',  name: 'searchEngine.collection.access',      boundedContextId: '57c76503-15a9-4bed-a39e-bda1161721f6', roleIds: []},
    { id: '4aa86a40-3cb9-4792-891e-e9c143452bf8',  name: 'searchEngine.collection.get',         boundedContextId: '57c76503-15a9-4bed-a39e-bda1161721f6', roleIds: []},
    { id: '755be7a5-9ee3-4fe2-825f-7ac5a4ab8127',  name: 'searchEngine.collection.create',      boundedContextId: '57c76503-15a9-4bed-a39e-bda1161721f6', roleIds: []},
    { id: '28f1ebdd-033d-45be-aef6-beb77b9fff25',  name: 'searchEngine.collection.update',      boundedContextId: '57c76503-15a9-4bed-a39e-bda1161721f6', roleIds: []},
    { id: '627e950d-4ae9-4471-a9bc-d1878bd4d159',  name: 'searchEngine.collection.upsert',      boundedContextId: '57c76503-15a9-4bed-a39e-bda1161721f6', roleIds: []},
    { id: 'd4625845-c897-4c40-81d7-77e251608b09',  name: 'searchEngine.collection.delete',      boundedContextId: '57c76503-15a9-4bed-a39e-bda1161721f6', roleIds: []},

    { id: '4464702e-0925-4dde-8b4c-9d986528bce4',  name: 'searchEngine.field.access',           boundedContextId: '57c76503-15a9-4bed-a39e-bda1161721f6', roleIds: []},
    { id: 'ecd2228e-efc7-4c26-8e05-e55b4a5745a5',  name: 'searchEngine.field.get',              boundedContextId: '57c76503-15a9-4bed-a39e-bda1161721f6', roleIds: []},
    { id: '1d3e50c9-375f-4949-8612-f646db7a80b5',  name: 'searchEngine.field.create',           boundedContextId: '57c76503-15a9-4bed-a39e-bda1161721f6', roleIds: []},
    { id: 'ee2b9f91-e19c-4406-873d-4b1945d92107',  name: 'searchEngine.field.update',           boundedContextId: '57c76503-15a9-4bed-a39e-bda1161721f6', roleIds: []},
    { id: 'af9fddd7-0c38-4363-adc2-71a3736de1f7',  name: 'searchEngine.field.upsert',           boundedContextId: '57c76503-15a9-4bed-a39e-bda1161721f6', roleIds: []},
    { id: '5f51a6f9-e0c0-49c0-8eda-13a88aca1be0',  name: 'searchEngine.field.delete',           boundedContextId: '57c76503-15a9-4bed-a39e-bda1161721f6', roleIds: []},
];