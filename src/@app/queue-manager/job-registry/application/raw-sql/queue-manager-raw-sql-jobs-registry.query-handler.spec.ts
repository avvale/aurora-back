import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { MockJobRegistryRepository } from '@app/queue-manager/job-registry/infrastructure/mock/mock-job-registry.repository';
import { QueueManagerIJobRegistryRepository } from '@app/queue-manager/job-registry/domain/queue-manager-job-registry.repository';
import { QueueManagerJobRegistryMapper } from '@app/queue-manager/job-registry/domain/queue-manager-job-registry.mapper';
import { RawSQLJobsRegistryQueryHandler } from './raw-sql-jobs-registry.query-handler';
import { RawSQLJobsRegistryQuery } from './raw-sql-jobs-registry.query';
import { RawSQLJobsRegistryService } from './raw-sql-jobs-registry.service';

describe('RawSQLJobsRegistryQueryHandler', () =>
{
    let queryHandler: RawSQLJobsRegistryQueryHandler;
    let service: RawSQLJobsRegistryService;
    let repository: MockJobRegistryRepository;
    let mapper: JobRegistryMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                RawSQLJobsRegistryQueryHandler,
                {
                    provide : QueueManagerIJobRegistryRepository,
                    useClass: MockJobRegistryRepository,
                },
                {
                    provide : RawSQLJobsRegistryService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<RawSQLJobsRegistryQueryHandler>(RawSQLJobsRegistryQueryHandler);
        service = module.get<RawSQLJobsRegistryService>(RawSQLJobsRegistryService);
        repository = <MockJobRegistryRepository>module.get<QueueManagerIJobRegistryRepository>(QueueManagerIJobRegistryRepository);
        mapper = new JobRegistryMapper();
    });

    describe('main', () =>
    {
        test('RawSQLJobsRegistryQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an jobsRegistry founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new RawSQLJobsRegistryQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});