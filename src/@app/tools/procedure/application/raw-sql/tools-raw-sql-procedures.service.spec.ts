import { ToolsIProcedureRepository, ToolsMockProcedureRepository } from '@app/tools/procedure';
import { ToolsRawSQLProceduresService } from '@app/tools/procedure/application/raw-sql/tools-raw-sql-procedures.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('ToolsRawSQLProceduresService ', () =>
{
    let service: ToolsRawSQLProceduresService ;
    let repository: ToolsIProcedureRepository;
    let mockRepository: ToolsMockProcedureRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                ToolsRawSQLProceduresService ,
                ToolsMockProcedureRepository,
                {
                    provide : ToolsIProcedureRepository,
                    useValue: {
                        rawSQL: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service         = module.get(ToolsRawSQLProceduresService );
        repository      = module.get(ToolsIProcedureRepository);
        mockRepository  = module.get(ToolsMockProcedureRepository);
    });

    describe('main', () =>
    {
        test('RawSQLProceduresService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get procedures', async () =>
        {
            jest.spyOn(repository, 'rawSQL').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});
