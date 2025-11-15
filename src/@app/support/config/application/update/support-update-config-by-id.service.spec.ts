/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    SupportIConfigRepository,
    supportMockConfigData,
    SupportMockConfigRepository,
} from '@app/support/config';
import { SupportUpdateConfigByIdService } from '@app/support/config/application/update/support-update-config-by-id.service';
import {
    SupportConfigApiKey,
    SupportConfigId,
    SupportConfigListId,
    SupportConfigRowId,
} from '@app/support/config/domain/value-objects';
import {
    CommandBus,
    EventBus,
    EventPublisher,
    UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportUpdateConfigByIdService', () => {
    let service: SupportUpdateConfigByIdService;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                SupportUpdateConfigByIdService,
                SupportMockConfigRepository,
                {
                    provide: SupportIConfigRepository,
                    useValue: {
                        updateById: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        service = module.get(SupportUpdateConfigByIdService);
    });

    describe('main', () => {
        test('SupportUpdateConfigByIdService should be defined', () => {
            expect(service).toBeDefined();
        });

        test('should update a config and emit event', async () => {
            expect(
                await service.main(
                    {
                        id: new SupportConfigId(supportMockConfigData[0].id),
                        rowId: new SupportConfigRowId(
                            supportMockConfigData[0].rowId,
                        ),
                        apiKey: new SupportConfigApiKey(
                            supportMockConfigData[0].apiKey,
                        ),
                        listId: new SupportConfigListId(
                            supportMockConfigData[0].listId,
                        ),
                    },
                    {},
                ),
            ).toBe(undefined);
        });
    });
});
