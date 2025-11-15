import {
    SupportConfigMapper,
    SupportFindConfigByIdQuery,
    SupportIConfigRepository,
    supportMockConfigData,
    SupportMockConfigRepository,
} from '@app/support/config';
import { SupportFindConfigByIdQueryHandler } from '@app/support/config/application/find/support-find-config-by-id.query-handler';
import { SupportFindConfigByIdService } from '@app/support/config/application/find/support-find-config-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportFindConfigByIdQueryHandler', () => {
    let queryHandler: SupportFindConfigByIdQueryHandler;
    let service: SupportFindConfigByIdService;
    let repository: SupportMockConfigRepository;
    let mapper: SupportConfigMapper;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SupportFindConfigByIdQueryHandler,
                {
                    provide: SupportIConfigRepository,
                    useClass: SupportMockConfigRepository,
                },
                {
                    provide: SupportFindConfigByIdService,
                    useValue: {
                        main: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        queryHandler = module.get<SupportFindConfigByIdQueryHandler>(
            SupportFindConfigByIdQueryHandler,
        );
        service = module.get<SupportFindConfigByIdService>(
            SupportFindConfigByIdService,
        );
        repository = <SupportMockConfigRepository>(
            module.get<SupportIConfigRepository>(SupportIConfigRepository)
        );
        mapper = new SupportConfigMapper();
    });

    describe('main', () => {
        test('FindConfigByIdQueryHandler should be defined', () => {
            expect(queryHandler).toBeDefined();
        });

        test('should return an config founded', async () => {
            jest.spyOn(service, 'main').mockImplementation(
                () =>
                    new Promise((resolve) =>
                        resolve(repository.collectionSource[0]),
                    ),
            );
            expect(
                await queryHandler.execute(
                    new SupportFindConfigByIdQuery(supportMockConfigData[0].id),
                ),
            ).toStrictEqual(
                mapper.mapAggregateToResponse(repository.collectionSource[0]),
            );
        });
    });
});
