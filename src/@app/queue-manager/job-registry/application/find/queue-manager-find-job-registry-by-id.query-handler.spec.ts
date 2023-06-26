import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { FindJobRegistryByIdQueryHandler } from './queue-manager-find-job-registry-by-id.query-handler';
import { MockJobRegistryRepository } from '@app/queue-manager/job-registry/infrastructure/mock/mock-job-registry.repository';
import { jobsRegistry } from '@app/queue-manager/job-registry/infrastructure/mock/mock-job-registry.data';
import { QueueManagerIJobRegistryRepository } from '@app/queue-manager/job-registry/domain/queue-manager-job-registry.repository';
import { QueueManagerJobRegistryMapper } from '@app/queue-manager/job-registry/domain/queue-manager-job-registry.mapper';
import { QueueManagerFindJobRegistryByIdQuery } from './queue-manager-find-job-registry-by-id.query';
import { QueueManagerFindJobRegistryByIdService } from './queue-manager-find-job-registry-by-id.service';

describe('FindJobRegistryByIdQueryHandler', () =>
{
    let queryHandler: QueueManagerFindJobRegistryByIdQueryHandler;
    let service: QueueManagerFindJobRegistryByIdService;
    let repository: MockJobRegistryRepository;
    let mapper: JobRegistryMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                FindJobRegistryByIdQueryHandler,
                {
                    provide : QueueManagerIJobRegistryRepository,
                    useClass: MockJobRegistryRepository,
                },
                {
                    provide : FindJobRegistryByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<FindJobRegistryByIdQueryHandler>(FindJobRegistryByIdQueryHandler);
        service = module.get<FindJobRegistryByIdService>(FindJobRegistryByIdService);
        repository = <MockJobRegistryRepository>module.get<QueueManagerIJobRegistryRepository>(QueueManagerIJobRegistryRepository);
        mapper = new JobRegistryMapper();
    });

    describe('main', () =>
    {
        test('FindJobRegistryByIdQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an jobRegistry founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new FindJobRegistryByIdQuery(
                    jobsRegistry[0].id,

                ),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});