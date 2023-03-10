// ignored file
export const boundedContexts = [
    {
        id      : 'e13e6d25-99c5-4a9f-b955-b4bca7bd75a1',
        name    : 'QueueManager',
        root    : 'queue-manager',
        sort    : 50,
        isActive: true,
    },
];

export const permissions = [
    { id: 'c3603d8f-699e-4348-8a9a-4368126ac4e7',  name: 'queueManager.access',         boundedContextId: 'e13e6d25-99c5-4a9f-b955-b4bca7bd75a1', roleIds: []},

    { id: '1064207d-1ea9-4e7c-bd1b-8b382ecd33f7',  name: 'queueManager.queue.access',   boundedContextId: '1effdcd9-c1a0-410f-a49d-b2bf6ce34ac7', roleIds: []},
    { id: 'e681e0c2-0747-48e2-a7b9-d532cc45bdfa',  name: 'queueManager.queue.get',      boundedContextId: '1effdcd9-c1a0-410f-a49d-b2bf6ce34ac7', roleIds: []},
    { id: 'b4a1a49b-5d3f-4e10-8680-376e79af39d9',  name: 'queueManager.queue.create',   boundedContextId: '1effdcd9-c1a0-410f-a49d-b2bf6ce34ac7', roleIds: []},
    { id: 'f9df7c0f-2f37-4b13-b4bc-ad5a288e56a1',  name: 'queueManager.queue.update',   boundedContextId: '1effdcd9-c1a0-410f-a49d-b2bf6ce34ac7', roleIds: []},
    { id: '8233cf2d-b212-4f4c-9fc9-bcfb9a18d118',  name: 'queueManager.queue.delete',   boundedContextId: '1effdcd9-c1a0-410f-a49d-b2bf6ce34ac7', roleIds: []},
];