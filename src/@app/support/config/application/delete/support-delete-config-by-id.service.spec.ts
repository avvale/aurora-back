/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    SupportIConfigRepository,
    supportMockConfigData,
    SupportMockConfigRepository,
} from '@app/support/config';
import { SupportDeleteConfigByIdService } from '@app/support/config/application/delete/support-delete-config-by-id.service';
import { SupportConfigId } from '@app/support/config/domain/value-objects';
import {
    CommandBus,
    EventBus,
    EventPublisher,
    UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportDeleteConfigByIdService', () => {
    let service: SupportDeleteConfigByIdService;
    let repository: SupportIConfigRepository;
    let mockRepository: SupportMockConfigRepository;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                SupportDeleteConfigByIdService,
                SupportMockConfigRepository,
                {
                    provide: SupportIConfigRepository,
                    useValue: {
                        deleteById: (id) => {
                            /**/
                        },
                        findById: (id) => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        service = module.get(SupportDeleteConfigByIdService);
        repository = module.get(SupportIConfigRepository);
        mockRepository = module.get(SupportMockConfigRepository);
    });

    describe('main', () => {
        test('SupportDeleteConfigByIdService should be defined', () => {
            expect(service).toBeDefined();
        });

        test('should delete config and emit event', async () => {
            jest.spyOn(repository, 'findById').mockImplementation(
                () =>
                    new Promise((resolve) =>
                        resolve(mockRepository.collectionSource[0]),
                    ),
            );
            expect(
                await service.main(
                    new SupportConfigId(supportMockConfigData[0].id),
                    {},
                ),
            ).toBe(undefined);
        });
    });
});
