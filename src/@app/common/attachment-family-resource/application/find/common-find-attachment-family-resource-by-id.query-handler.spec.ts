import { CommonAttachmentFamilyResourceMapper, CommonFindAttachmentFamilyResourceByIdQuery, CommonIAttachmentFamilyResourceRepository, commonMockAttachmentFamilyResourceData, CommonMockAttachmentFamilyResourceRepository } from '@app/common/attachment-family-resource';
import { CommonFindAttachmentFamilyResourceByIdQueryHandler } from '@app/common/attachment-family-resource/application/find/common-find-attachment-family-resource-by-id.query-handler';
import { CommonFindAttachmentFamilyResourceByIdService } from '@app/common/attachment-family-resource/application/find/common-find-attachment-family-resource-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonFindAttachmentFamilyResourceByIdQueryHandler', () =>
{
    let queryHandler: CommonFindAttachmentFamilyResourceByIdQueryHandler;
    let service: CommonFindAttachmentFamilyResourceByIdService;
    let repository: CommonMockAttachmentFamilyResourceRepository;
    let mapper: CommonAttachmentFamilyResourceMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommonFindAttachmentFamilyResourceByIdQueryHandler,
                {
                    provide : CommonIAttachmentFamilyResourceRepository,
                    useClass: CommonMockAttachmentFamilyResourceRepository,
                },
                {
                    provide : CommonFindAttachmentFamilyResourceByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<CommonFindAttachmentFamilyResourceByIdQueryHandler>(CommonFindAttachmentFamilyResourceByIdQueryHandler);
        service = module.get<CommonFindAttachmentFamilyResourceByIdService>(CommonFindAttachmentFamilyResourceByIdService);
        repository = <CommonMockAttachmentFamilyResourceRepository>module.get<CommonIAttachmentFamilyResourceRepository>(CommonIAttachmentFamilyResourceRepository);
        mapper = new CommonAttachmentFamilyResourceMapper();
    });

    describe('main', () =>
    {
        test('FindAttachmentFamilyResourceByIdQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an attachmentFamilyResource founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new CommonFindAttachmentFamilyResourceByIdQuery(
                    commonMockAttachmentFamilyResourceData[0].id,

                ),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
