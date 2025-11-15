import {
    SupportConfigMapper,
    SupportFindConfigQuery,
    SupportIConfigRepository,
    SupportMockConfigRepository,
} from '@app/support/config';
import { SupportFindConfigQueryHandler } from '@app/support/config/application/find/support-find-config.query-handler';
import { SupportFindConfigService } from '@app/support/config/application/find/support-find-config.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportFindConfigQueryHandler', () => {
    let queryHandler: SupportFindConfigQueryHandler;
    let service: SupportFindConfigService;
    let repository: SupportMockConfigRepository;
    let mapper: SupportConfigMapper;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SupportFindConfigQueryHandler,
                {
                    provide: SupportIConfigRepository,
                    useClass: SupportMockConfigRepository,
                },
                {
                    provide: SupportFindConfigService,
                    useValue: {
                        main: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        queryHandler = module.get<SupportFindConfigQueryHandler>(
            SupportFindConfigQueryHandler,
        );
        service = module.get<SupportFindConfigService>(
            SupportFindConfigService,
        );
        repository = <SupportMockConfigRepository>(
            module.get<SupportIConfigRepository>(SupportIConfigRepository)
        );
        mapper = new SupportConfigMapper();
    });

    describe('main', () => {
        test('SupportFindConfigQueryHandler should be defined', () => {
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
                await queryHandler.execute(new SupportFindConfigQuery()),
            ).toStrictEqual(
                mapper.mapAggregateToResponse(repository.collectionSource[0]),
            );
        });
    });
});
