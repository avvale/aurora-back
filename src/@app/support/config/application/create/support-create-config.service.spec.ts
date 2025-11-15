/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    SupportIConfigRepository,
    supportMockConfigData,
    SupportMockConfigRepository,
} from '@app/support/config';
import { SupportCreateConfigService } from '@app/support/config/application/create/support-create-config.service';
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

describe('SupportCreateConfigService', () => {
    let service: SupportCreateConfigService;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                SupportCreateConfigService,
                SupportMockConfigRepository,
                {
                    provide: SupportIConfigRepository,
                    useValue: {
                        create: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        service = module.get(SupportCreateConfigService);
    });

    describe('main', () => {
        test('SupportCreateConfigService should be defined', () => {
            expect(service).toBeDefined();
        });

        test('should create a config and emit event', async () => {
            expect(
                await service.main({
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
                }),
            ).toBe(undefined);
        });
    });
});
