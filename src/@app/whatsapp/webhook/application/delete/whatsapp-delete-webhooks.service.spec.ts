/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappIWebhookRepository, WhatsappMockWebhookRepository } from '@app/whatsapp/webhook';
import { WhatsappDeleteWebhooksService } from '@app/whatsapp/webhook/application/delete/whatsapp-delete-webhooks.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappDeleteWebhooksService', () =>
{
    let service: WhatsappDeleteWebhooksService;
    let repository: WhatsappIWebhookRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                WhatsappDeleteWebhooksService,
                WhatsappMockWebhookRepository,
                {
                    provide : WhatsappIWebhookRepository,
                    useValue: {
                        get   : () => { /**/ },
                        delete: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(WhatsappDeleteWebhooksService);
        repository = module.get(WhatsappIWebhookRepository);
    });

    describe('main', () =>
    {
        test('WhatsappDeleteWebhooksService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete webhook and emit event', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve([])));
            expect(
                await service.main(
                    {},
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
