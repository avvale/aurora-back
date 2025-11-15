import {
    SupportIConfigRepository,
    SupportMockConfigRepository,
} from '@app/support/config';
import { SupportGetConfigsService } from '@app/support/config/application/get/support-get-configs.service';
import {
    CommandBus,
    EventBus,
    EventPublisher,
    UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportGetConfigsService', () => {
    let service: SupportGetConfigsService;
    let repository: SupportIConfigRepository;
    let mockRepository: SupportMockConfigRepository;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                SupportGetConfigsService,
                SupportMockConfigRepository,
                {
                    provide: SupportIConfigRepository,
                    useValue: {
                        get: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        service = module.get(SupportGetConfigsService);
        repository = module.get(SupportIConfigRepository);
        mockRepository = module.get(SupportMockConfigRepository);
    });

    describe('main', () => {
        test('GetConfigsService should be defined', () => {
            expect(service).toBeDefined();
        });

        test('should get configs', async () => {
            jest.spyOn(repository, 'get').mockImplementation(
                () =>
                    new Promise((resolve) =>
                        resolve(mockRepository.collectionSource),
                    ),
            );
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});
