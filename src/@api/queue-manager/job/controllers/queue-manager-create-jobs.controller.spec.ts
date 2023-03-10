import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { QueueManagerCreateJobsController } from './queue-manager-create-jobs.controller';
import { QueueManagerCreateJobsHandler } from '../handlers/queue-manager-create-jobs.handler';

// sources
import { jobs } from '@app/queue-manager/job/infrastructure/mock/mock-job.data';

describe('QueueManagerCreateJobsController', () =>
{
    let controller: QueueManagerCreateJobsController;
    let handler: QueueManagerCreateJobsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [
                QueueManagerCreateJobsController,
            ],
            providers: [
                {
                    provide : QueueManagerCreateJobsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<QueueManagerCreateJobsController>(QueueManagerCreateJobsController);
        handler = module.get<QueueManagerCreateJobsHandler>(QueueManagerCreateJobsHandler);
    });

    describe('main', () =>
    {
        test('QueueManagerCreateJobsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an jobs created', async () =>
        {
            expect(await controller.main(jobs)).toBe(undefined);
        });
    });
});