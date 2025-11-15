import {
    SupportIConfigRepository,
    SupportMockConfigRepository,
} from '@app/support/config';
import { SupportPaginateConfigsService } from '@app/support/config/application/paginate/support-paginate-configs.service';
import {
    CommandBus,
    EventBus,
    EventPublisher,
    UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportPaginateConfigsService', () => {
    let service: SupportPaginateConfigsService;
    let repository: SupportIConfigRepository;
    let mockRepository: SupportMockConfigRepository;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                SupportPaginateConfigsService,
                SupportMockConfigRepository,
                {
                    provide: SupportIConfigRepository,
                    useValue: {
                        paginate: (queryStatement, constraints) => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        service = module.get(SupportPaginateConfigsService);
        repository = module.get(SupportIConfigRepository);
        mockRepository = module.get(SupportMockConfigRepository);
    });

    describe('main', () => {
        test('SupportPaginateConfigsService should be defined', () => {
            expect(service).toBeDefined();
        });

        test('should paginate configs', async () => {
            jest.spyOn(repository, 'paginate').mockImplementation(
                () =>
                    new Promise((resolve) =>
                        resolve({
                            total: mockRepository.collectionSource.slice(0, 10)
                                .length,
                            count: mockRepository.collectionSource.slice(0, 10)
                                .length,
                            rows: mockRepository.collectionSource.slice(0, 10),
                        }),
                    ),
            );
            expect(
                await service.main({
                    offset: 0,
                    limit: 10,
                }),
            ).toStrictEqual({
                total: mockRepository.collectionSource.slice(0, 10).length,
                count: mockRepository.collectionSource.slice(0, 10).length,
                rows: mockRepository.collectionSource.slice(0, 10),
            });
        });
    });
});
