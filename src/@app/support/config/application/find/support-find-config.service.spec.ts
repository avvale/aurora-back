import {
    SupportIConfigRepository,
    SupportMockConfigRepository,
} from '@app/support/config';
import { SupportFindConfigService } from '@app/support/config/application/find/support-find-config.service';
import {
    CommandBus,
    EventBus,
    EventPublisher,
    UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportFindConfigService', () => {
    let service: SupportFindConfigService;
    let repository: SupportIConfigRepository;
    let mockRepository: SupportMockConfigRepository;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                SupportFindConfigService,
                SupportMockConfigRepository,
                {
                    provide: SupportIConfigRepository,
                    useValue: {
                        find: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        service = module.get(SupportFindConfigService);
        repository = module.get(SupportIConfigRepository);
        mockRepository = module.get(SupportMockConfigRepository);
    });

    describe('main', () => {
        test('SupportFindConfigService should be defined', () => {
            expect(service).toBeDefined();
        });

        test('should find config', async () => {
            jest.spyOn(repository, 'find').mockImplementation(
                () =>
                    new Promise((resolve) =>
                        resolve(mockRepository.collectionSource[0]),
                    ),
            );
            expect(await service.main()).toBe(
                mockRepository.collectionSource[0],
            );
        });
    });
});
