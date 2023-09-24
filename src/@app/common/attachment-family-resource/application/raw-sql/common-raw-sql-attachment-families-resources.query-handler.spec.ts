import { CommonAttachmentFamilyResourceMapper, CommonIAttachmentFamilyResourceRepository, CommonMockAttachmentFamilyResourceRepository, CommonRawSQLAttachmentFamiliesResourcesQuery } from '@app/common/attachment-family-resource';
import { CommonRawSQLAttachmentFamiliesResourcesQueryHandler } from '@app/common/attachment-family-resource/application/raw-sql/common-raw-sql-attachment-families-resources.query-handler';
import { CommonRawSQLAttachmentFamiliesResourcesService } from '@app/common/attachment-family-resource/application/raw-sql/common-raw-sql-attachment-families-resources.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('RawSQLAttachmentFamiliesResourcesQueryHandler', () =>
{
    let queryHandler: CommonRawSQLAttachmentFamiliesResourcesQueryHandler;
    let service: CommonRawSQLAttachmentFamiliesResourcesService;
    let repository: CommonMockAttachmentFamilyResourceRepository;
    let mapper: CommonAttachmentFamilyResourceMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommonRawSQLAttachmentFamiliesResourcesQueryHandler,
                {
                    provide : CommonIAttachmentFamilyResourceRepository,
                    useClass: CommonMockAttachmentFamilyResourceRepository,
                },
                {
                    provide : CommonRawSQLAttachmentFamiliesResourcesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<CommonRawSQLAttachmentFamiliesResourcesQueryHandler>(CommonRawSQLAttachmentFamiliesResourcesQueryHandler);
        service = module.get<CommonRawSQLAttachmentFamiliesResourcesService>(CommonRawSQLAttachmentFamiliesResourcesService);
        repository = <CommonMockAttachmentFamilyResourceRepository>module.get<CommonIAttachmentFamilyResourceRepository>(CommonIAttachmentFamilyResourceRepository);
        mapper = new CommonAttachmentFamilyResourceMapper();
    });

    describe('main', () =>
    {
        test('CommonRawSQLAttachmentFamiliesResourcesQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an attachmentFamiliesResources founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new CommonRawSQLAttachmentFamiliesResourcesQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
