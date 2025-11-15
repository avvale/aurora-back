import {
    SupportIConfigRepository,
    SupportMockConfigRepository,
    SupportPaginateConfigsQuery,
} from '@app/support/config';
import { SupportPaginateConfigsQueryHandler } from '@app/support/config/application/paginate/support-paginate-configs.query-handler';
import { SupportPaginateConfigsService } from '@app/support/config/application/paginate/support-paginate-configs.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportPaginateConfigsQueryHandler', () => {
    let queryHandler: SupportPaginateConfigsQueryHandler;
    let service: SupportPaginateConfigsService;
    let repository: SupportMockConfigRepository;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SupportPaginateConfigsQueryHandler,
                {
                    provide: SupportIConfigRepository,
                    useClass: SupportMockConfigRepository,
                },
                {
                    provide: SupportPaginateConfigsService,
                    useValue: {
                        main: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        queryHandler = module.get<SupportPaginateConfigsQueryHandler>(
            SupportPaginateConfigsQueryHandler,
        );
        service = module.get<SupportPaginateConfigsService>(
            SupportPaginateConfigsService,
        );
        repository = <SupportMockConfigRepository>(
            module.get<SupportIConfigRepository>(SupportIConfigRepository)
        );
    });

    describe('main', () => {
        test('SupportPaginateConfigsQueryHandler should be defined', () => {
            expect(queryHandler).toBeDefined();
        });

        test('should return an configs paginated', async () => {
            jest.spyOn(service, 'main').mockImplementation(
                () =>
                    new Promise((resolve) =>
                        resolve({
                            count: 10,
                            total: 100,
                            rows: repository.collectionSource.slice(0, 10),
                        }),
                    ),
            );
            expect(
                await queryHandler.execute(
                    new SupportPaginateConfigsQuery({
                        offset: 0,
                        limit: 10,
                    }),
                ),
            ).toStrictEqual(
                new PaginationResponse(
                    100,
                    10,
                    repository.collectionSource
                        .slice(0, 10)
                        .map((item) => item.toDTO()),
                ),
            );
        });
    });
});
