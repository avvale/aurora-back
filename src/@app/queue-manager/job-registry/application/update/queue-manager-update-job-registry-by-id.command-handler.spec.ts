import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { jobsRegistry } from '@app/queue-manager/job-registry/infrastructure/mock/mock-job-registry.data';
import { QueueManagerUpdateJobRegistryByIdCommandHandler } from './queue-manager-update-job-registry-by-id.command-handler';
import { QueueManagerUpdateJobRegistryByIdCommand } from './queue-manager-update-job-registry-by-id.command';
import { QueueManagerUpdateJobRegistryByIdService } from './queue-manager-update-job-registry-by-id.service';

describe('QueueManagerUpdateJobRegistryByIdCommandHandler', () =>
{
    let commandHandler: QueueManagerUpdateJobRegistryByIdCommandHandler;
    let service: QueueManagerUpdateJobRegistryByIdService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UpdateJobRegistryByIdCommandHandler,
                {
                    provide : UpdateJobRegistryByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<UpdateJobRegistryByIdCommandHandler>(UpdateJobRegistryByIdCommandHandler);
        service = module.get<UpdateJobRegistryByIdService>(UpdateJobRegistryByIdService);
    });

    describe('main', () =>
    {
        test('UpdateJobRegistryByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an jobRegistry created', async () =>
        {
            expect(await commandHandler.execute(
                new UpdateJobRegistryByIdCommand(
                    {
                        id: jobsRegistry[0].id,
                        queueName: jobsRegistry[0].queueName,
                        state: jobsRegistry[0].state,
                        jobId: jobsRegistry[0].jobId,
                        jobName: jobsRegistry[0].jobName,
                        tags: jobsRegistry[0].tags,
                    },
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});