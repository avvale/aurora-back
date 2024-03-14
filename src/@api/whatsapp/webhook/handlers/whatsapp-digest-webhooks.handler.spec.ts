/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappDigestWebhooksHandler } from './whatsapp-digest-webhooks.handler';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappDigestWebhooksHandler', () =>
{
    let handler: WhatsappDigestWebhooksHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                WhatsappDigestWebhooksHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler     = module.get<WhatsappDigestWebhooksHandler>(WhatsappDigestWebhooksHandler);
        queryBus    = module.get<IQueryBus>(IQueryBus);
        commandBus  = module.get<ICommandBus>(ICommandBus);
    });

    describe('main', () =>
    {
        test('WhatsappDigestWebhooksHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });
    });
});