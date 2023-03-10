import { Test, TestingModule } from '@nestjs/testing';
import { ICommandBus, IQueryBus } from '@aurora-ts/core';

// custom items
import { QueueManagerCreateJobsHandler } from './queue-manager-create-jobs.handler';
import { jobs } from '@app/queue-manager/job/infrastructure/mock/mock-job.data';

describe('QueueManagerCreateJobsHandler', () =>
{
    let handler: QueueManagerCreateJobsHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                QueueManagerCreateJobsHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler     = module.get<QueueManagerCreateJobsHandler>(QueueManagerCreateJobsHandler);
        queryBus    = module.get<IQueryBus>(IQueryBus);
        commandBus  = module.get<ICommandBus>(ICommandBus);
    });

    describe('main', () =>
    {
        test('QueueManagerCreateJobsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an jobs created', async () =>
        {
            expect(await handler.main(jobs)).toBe(true);
        });
    });
});