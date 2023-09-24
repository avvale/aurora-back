import { CommonIAttachmentFamilyResourceRepository, CommonMockAttachmentFamilyResourceRepository } from '@app/common/attachment-family-resource';
import { CommonPaginateAttachmentFamiliesResourcesService } from '@app/common/attachment-family-resource/application/paginate/common-paginate-attachment-families-resources.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonPaginateAttachmentFamiliesResourcesService', () =>
{
    let service: CommonPaginateAttachmentFamiliesResourcesService;
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
                CommonPaginateAttachmentFamiliesResourcesService,
                CommonMockAttachmentFamilyResourceRepository,
                {
                    provide : CommonIAttachmentFamilyResourceRepository,
                    useValue: {
                        paginate: (queryStatement, constraints) => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(CommonPaginateAttachmentFamiliesResourcesService);
        repository = module.get(CommonIAttachmentFamilyResourceRepository);
        mockRepository = module.get(CommonMockAttachmentFamilyResourceRepository);
    });

    describe('main', () =>
    {
        test('CommonPaginateAttachmentFamiliesResourcesService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should paginate attachmentFamiliesResources', async () =>
        {
            jest.spyOn(repository, 'paginate').mockImplementation(() => new Promise(resolve => resolve({
                total: mockRepository.collectionSource.slice(0,10).length,
                count: mockRepository.collectionSource.slice(0,10).length,
                rows : mockRepository.collectionSource.slice(0,10),
            })));
            expect(await service.main({
                offset: 0,
                limit : 10
            })).toStrictEqual({
                total: mockRepository.collectionSource.slice(0,10).length,
                count: mockRepository.collectionSource.slice(0,10).length,
                rows : mockRepository.collectionSource.slice(0,10),
            });
        });
    });
});
