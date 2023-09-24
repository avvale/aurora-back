import { CommonAttachmentFamilyResourceMapper, CommonFindAttachmentFamilyResourceQuery, CommonIAttachmentFamilyResourceRepository, CommonMockAttachmentFamilyResourceRepository } from '@app/common/attachment-family-resource';
import { CommonFindAttachmentFamilyResourceQueryHandler } from '@app/common/attachment-family-resource/application/find/common-find-attachment-family-resource.query-handler';
import { CommonFindAttachmentFamilyResourceService } from '@app/common/attachment-family-resource/application/find/common-find-attachment-family-resource.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonFindAttachmentFamilyResourceQueryHandler', () =>
{
    let queryHandler: CommonFindAttachmentFamilyResourceQueryHandler;
    let service: CommonFindAttachmentFamilyResourceService;
    let repository: CommonMockAttachmentFamilyResourceRepository;
    let mapper: CommonAttachmentFamilyResourceMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommonFindAttachmentFamilyResourceQueryHandler,
                {
                    provide : CommonIAttachmentFamilyResourceRepository,
                    useClass: CommonMockAttachmentFamilyResourceRepository,
                },
                {
                    provide : CommonFindAttachmentFamilyResourceService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<CommonFindAttachmentFamilyResourceQueryHandler>(CommonFindAttachmentFamilyResourceQueryHandler);
        service = module.get<CommonFindAttachmentFamilyResourceService>(CommonFindAttachmentFamilyResourceService);
        repository = <CommonMockAttachmentFamilyResourceRepository>module.get<CommonIAttachmentFamilyResourceRepository>(CommonIAttachmentFamilyResourceRepository);
        mapper = new CommonAttachmentFamilyResourceMapper();
    });

    describe('main', () =>
    {
        test('CommonFindAttachmentFamilyResourceQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an attachmentFamilyResource founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new CommonFindAttachmentFamilyResourceQuery(),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
