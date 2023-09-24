import { CommonIAttachmentFamilyResourceRepository, commonMockAttachmentFamilyResourceData, CommonMockAttachmentFamilyResourceRepository } from '@app/common/attachment-family-resource';
import { CommonFindAttachmentFamilyResourceByIdService } from '@app/common/attachment-family-resource/application/find/common-find-attachment-family-resource-by-id.service';
import { CommonAttachmentFamilyResourceId } from '@app/common/attachment-family-resource/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonFindAttachmentFamilyResourceByIdService', () =>
{
    let service: CommonFindAttachmentFamilyResourceByIdService;
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
                CommonFindAttachmentFamilyResourceByIdService,
                CommonMockAttachmentFamilyResourceRepository,
                {
                    provide : CommonIAttachmentFamilyResourceRepository,
                    useValue: {
                        findById: id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(CommonFindAttachmentFamilyResourceByIdService);
        repository = module.get(CommonIAttachmentFamilyResourceRepository);
        mockRepository = module.get(CommonMockAttachmentFamilyResourceRepository);
    });

    describe('main', () =>
    {
        test('FindAttachmentFamilyResourceByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should find attachmentFamilyResource by id', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main(
                new CommonAttachmentFamilyResourceId(commonMockAttachmentFamilyResourceData[0].id),
            )).toBe(mockRepository.collectionSource[0]);
        });
    });
});
