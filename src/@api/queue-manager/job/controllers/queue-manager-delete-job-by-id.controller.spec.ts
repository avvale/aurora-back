/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { QueueManagerDeleteJobByIdController } from './queue-manager-delete-job-by-id.controller';
import { QueueManagerDeleteJobByIdHandler } from '../handlers/queue-manager-delete-job-by-id.handler';

// sources
import { jobs } from '@app/queue-manager/job/infrastructure/mock/mock-job.data';

describe('QueueManagerDeleteJobByIdController', () =>
{
    let controller: QueueManagerDeleteJobByIdController;
    let handler: QueueManagerDeleteJobByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                QueueManagerDeleteJobByIdController,
            ],
            providers: [
                {
                    provide : QueueManagerDeleteJobByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<QueueManagerDeleteJobByIdController>(QueueManagerDeleteJobByIdController);
        handler = module.get<QueueManagerDeleteJobByIdHandler>(QueueManagerDeleteJobByIdHandler);
    });

    describe('main', () =>
    {
        test('QueueManagerDeleteJobByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an job deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(jobs[0])));
            expect(await controller.main(jobs[0].id)).toBe(jobs[0]);
        });
    });
});