/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { QueueManagerUpsertJobController } from './queue-manager-upsert-job.controller';
import { QueueManagerUpsertJobHandler } from '../handlers/queue-manager-upsert-job.handler';

// sources
import { jobs } from '@app/queue-manager/job/infrastructure/mock/mock-job.data';

describe('QueueManagerUpsertJobController', () =>
{
    let controller: QueueManagerUpsertJobController;
    let handler: QueueManagerUpsertJobHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                QueueManagerUpsertJobController,
            ],
            providers: [
                {
                    provide : QueueManagerUpsertJobHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<QueueManagerUpsertJobController>(QueueManagerUpsertJobController);
        handler = module.get<QueueManagerUpsertJobHandler>(QueueManagerUpsertJobHandler);
    });

    describe('main', () =>
    {
        test('QueueManagerUpsertJobController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an job upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(jobs[0])));
            expect(await controller.main(jobs[0])).toBe(jobs[0]);
        });
    });
});