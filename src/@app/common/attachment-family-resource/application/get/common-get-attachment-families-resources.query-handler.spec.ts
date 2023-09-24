import { CommonAttachmentFamilyResourceMapper, CommonGetAttachmentFamiliesResourcesQuery, CommonIAttachmentFamilyResourceRepository, CommonMockAttachmentFamilyResourceRepository } from '@app/common/attachment-family-resource';
import { CommonGetAttachmentFamiliesResourcesQueryHandler } from '@app/common/attachment-family-resource/application/get/common-get-attachment-families-resources.query-handler';
import { CommonGetAttachmentFamiliesResourcesService } from '@app/common/attachment-family-resource/application/get/common-get-attachment-families-resources.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GetAttachmentFamiliesResourcesQueryHandler', () =>
{
    let queryHandler: CommonGetAttachmentFamiliesResourcesQueryHandler;
    let service: CommonGetAttachmentFamiliesResourcesService;
    let repository: CommonMockAttachmentFamilyResourceRepository;
    let mapper: CommonAttachmentFamilyResourceMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommonGetAttachmentFamiliesResourcesQueryHandler,
                {
                    provide : CommonIAttachmentFamilyResourceRepository,
                    useClass: CommonMockAttachmentFamilyResourceRepository,
                },
                {
                    provide : CommonGetAttachmentFamiliesResourcesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<CommonGetAttachmentFamiliesResourcesQueryHandler>(CommonGetAttachmentFamiliesResourcesQueryHandler);
        service = module.get<CommonGetAttachmentFamiliesResourcesService>(CommonGetAttachmentFamiliesResourcesService);
        repository = <CommonMockAttachmentFamilyResourceRepository>module.get<CommonIAttachmentFamilyResourceRepository>(CommonIAttachmentFamilyResourceRepository);
        mapper = new CommonAttachmentFamilyResourceMapper();
    });

    describe('main', () =>
    {
        test('CommonGetAttachmentFamiliesResourcesQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an attachmentFamiliesResources founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new CommonGetAttachmentFamiliesResourcesQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
