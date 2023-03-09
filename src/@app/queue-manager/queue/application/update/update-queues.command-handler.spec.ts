import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { queues } from '@app/queue-manager/queue/infrastructure/mock/mock-queue.data';
import { UpdateQueuesCommandHandler } from './update-queues.command-handler';
import { UpdateQueuesCommand } from './update-queues.command';
import { UpdateQueuesService } from './update-queues.service';

describe('UpdateQueuesCommandHandler', () =>
{
    let commandHandler: UpdateQueuesCommandHandler;
    let service: UpdateQueuesService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UpdateQueuesCommandHandler,
                {
                    provide : UpdateQueuesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler  = module.get<UpdateQueuesCommandHandler>(UpdateQueuesCommandHandler);
        service         = module.get<UpdateQueuesService>(UpdateQueuesService);
    });

    describe('main', () =>
    {
        test('UpdateQueuesCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an queues updated', async () =>
        {
            expect(await commandHandler.execute(
                new UpdateQueuesCommand(
                    {
                        id: queues[0].id,
                        prefix: queues[0].prefix,
                        name: queues[0].name,
                        waitingJobs: queues[0].waitingJobs,
                        activeJobs: queues[0].activeJobs,
                        completedJobs: queues[0].completedJobs,
                        failedJobs: queues[0].failedJobs,
                        delayedJobs: queues[0].delayedJobs,
                        pausedJobs: queues[0].pausedJobs,
                    },
                    {},
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});