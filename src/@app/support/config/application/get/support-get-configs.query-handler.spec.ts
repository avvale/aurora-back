import {
    SupportConfigMapper,
    SupportGetConfigsQuery,
    SupportIConfigRepository,
    SupportMockConfigRepository,
} from '@app/support/config';
import { SupportGetConfigsQueryHandler } from '@app/support/config/application/get/support-get-configs.query-handler';
import { SupportGetConfigsService } from '@app/support/config/application/get/support-get-configs.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GetConfigsQueryHandler', () => {
    let queryHandler: SupportGetConfigsQueryHandler;
    let service: SupportGetConfigsService;
    let repository: SupportMockConfigRepository;
    let mapper: SupportConfigMapper;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SupportGetConfigsQueryHandler,
                {
                    provide: SupportIConfigRepository,
                    useClass: SupportMockConfigRepository,
                },
                {
                    provide: SupportGetConfigsService,
                    useValue: {
                        main: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        queryHandler = module.get<SupportGetConfigsQueryHandler>(
            SupportGetConfigsQueryHandler,
        );
        service = module.get<SupportGetConfigsService>(
            SupportGetConfigsService,
        );
        repository = <SupportMockConfigRepository>(
            module.get<SupportIConfigRepository>(SupportIConfigRepository)
        );
        mapper = new SupportConfigMapper();
    });

    describe('main', () => {
        test('SupportGetConfigsQueryHandler should be defined', () => {
            expect(queryHandler).toBeDefined();
        });

        test('should return an configs founded', async () => {
            jest.spyOn(service, 'main').mockImplementation(
                () =>
                    new Promise((resolve) =>
                        resolve(repository.collectionSource),
                    ),
            );
            expect(
                await queryHandler.execute(new SupportGetConfigsQuery()),
            ).toStrictEqual(
                mapper.mapAggregatesToResponses(repository.collectionSource),
            );
        });
    });
});
