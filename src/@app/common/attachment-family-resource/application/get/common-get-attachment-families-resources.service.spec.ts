import { CommonIAttachmentFamilyResourceRepository, CommonMockAttachmentFamilyResourceRepository } from '@app/common/attachment-family-resource';
import { CommonGetAttachmentFamiliesResourcesService } from '@app/common/attachment-family-resource/application/get/common-get-attachment-families-resources.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonGetAttachmentFamiliesResourcesService', () =>
{
    let service: CommonGetAttachmentFamiliesResourcesService;
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
                CommonGetAttachmentFamiliesResourcesService,
                CommonMockAttachmentFamilyResourceRepository,
                {
                    provide : CommonIAttachmentFamilyResourceRepository,
                    useValue: {
                        get: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(CommonGetAttachmentFamiliesResourcesService);
        repository = module.get(CommonIAttachmentFamilyResourceRepository);
        mockRepository = module.get(CommonMockAttachmentFamilyResourceRepository);
    });

    describe('main', () =>
    {
        test('GetAttachmentFamiliesResourcesService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get attachmentFamiliesResources', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});
