/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { QueueManagerCreateJobResolver } from './queue-manager-create-job.resolver';
import { QueueManagerCreateJobHandler } from '../handlers/queue-manager-create-job.handler';
import { QueueManagerCreateJobInput } from '@api/graphql';

// sources
import { jobs } from '@app/queue-manager/job/infrastructure/mock/mock-job.data';

describe('QueueManagerCreateJobResolver', () =>
{
    let resolver: QueueManagerCreateJobResolver;
    let handler: QueueManagerCreateJobHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                QueueManagerCreateJobResolver,
                {
                    provide : QueueManagerCreateJobHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<QueueManagerCreateJobResolver>(QueueManagerCreateJobResolver);
        handler = module.get<QueueManagerCreateJobHandler>(QueueManagerCreateJobHandler);
    });

    test('QueueManagerCreateJobResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('QueueManagerCreateJobResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an job created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(jobs[0])));
            expect(await resolver.main(<QueueManagerCreateJobInput>jobs[0])).toBe(jobs[0]);
        });
    });
});