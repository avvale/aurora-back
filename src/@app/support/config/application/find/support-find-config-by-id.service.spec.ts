import {
    SupportIConfigRepository,
    supportMockConfigData,
    SupportMockConfigRepository,
} from '@app/support/config';
import { SupportFindConfigByIdService } from '@app/support/config/application/find/support-find-config-by-id.service';
import { SupportConfigId } from '@app/support/config/domain/value-objects';
import {
    CommandBus,
    EventBus,
    EventPublisher,
    UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportFindConfigByIdService', () => {
    let service: SupportFindConfigByIdService;
    let repository: SupportIConfigRepository;
    let mockRepository: SupportMockConfigRepository;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                SupportFindConfigByIdService,
                SupportMockConfigRepository,
                {
                    provide: SupportIConfigRepository,
                    useValue: {
                        findById: (id) => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        service = module.get(SupportFindConfigByIdService);
        repository = module.get(SupportIConfigRepository);
        mockRepository = module.get(SupportMockConfigRepository);
    });

    describe('main', () => {
        test('FindConfigByIdService should be defined', () => {
            expect(service).toBeDefined();
        });

        test('should find config by id', async () => {
            jest.spyOn(repository, 'findById').mockImplementation(
                () =>
                    new Promise((resolve) =>
                        resolve(mockRepository.collectionSource[0]),
                    ),
            );
            expect(
                await service.main(
                    new SupportConfigId(supportMockConfigData[0].id),
                ),
            ).toBe(mockRepository.collectionSource[0]);
        });
    });
});
