import { CommonIAttachmentFamilyResourceRepository, CommonMockAttachmentFamilyResourceRepository } from '@app/common/attachment-family-resource';
import { CommonRawSQLAttachmentFamiliesResourcesService } from '@app/common/attachment-family-resource/application/raw-sql/common-raw-sql-attachment-families-resources.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonRawSQLAttachmentFamiliesResourcesService ', () =>
{
    let service: CommonRawSQLAttachmentFamiliesResourcesService ;
    let repository: CommonIAttachmentFamilyResourceRepository;
    let mockRepository: CommonMockAttachmentFamilyResourceRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                CommonRawSQLAttachmentFamiliesResourcesService ,
                CommonMockAttachmentFamilyResourceRepository,
                {
                    provide : CommonIAttachmentFamilyResourceRepository,
                    useValue: {
                        rawSQL: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service         = module.get(CommonRawSQLAttachmentFamiliesResourcesService );
        repository      = module.get(CommonIAttachmentFamilyResourceRepository);
        mockRepository  = module.get(CommonMockAttachmentFamilyResourceRepository);
    });

    describe('main', () =>
    {
        test('RawSQLAttachmentFamiliesResourcesService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get attachmentFamiliesResources', async () =>
        {
            jest.spyOn(repository, 'rawSQL').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});
