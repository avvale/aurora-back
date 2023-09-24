import { CommonIAttachmentFamilyResourceRepository, CommonMockAttachmentFamilyResourceRepository, CommonPaginateAttachmentFamiliesResourcesQuery } from '@app/common/attachment-family-resource';
import { CommonPaginateAttachmentFamiliesResourcesQueryHandler } from '@app/common/attachment-family-resource/application/paginate/common-paginate-attachment-families-resources.query-handler';
import { CommonPaginateAttachmentFamiliesResourcesService } from '@app/common/attachment-family-resource/application/paginate/common-paginate-attachment-families-resources.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonPaginateAttachmentFamiliesResourcesQueryHandler', () =>
{
    let queryHandler: CommonPaginateAttachmentFamiliesResourcesQueryHandler;
    let service: CommonPaginateAttachmentFamiliesResourcesService;
    let repository: CommonMockAttachmentFamilyResourceRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommonPaginateAttachmentFamiliesResourcesQueryHandler,
                {
                    provide : CommonIAttachmentFamilyResourceRepository,
                    useClass: CommonMockAttachmentFamilyResourceRepository,
                },
                {
                    provide : CommonPaginateAttachmentFamiliesResourcesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<CommonPaginateAttachmentFamiliesResourcesQueryHandler>(CommonPaginateAttachmentFamiliesResourcesQueryHandler);
        service = module.get<CommonPaginateAttachmentFamiliesResourcesService>(CommonPaginateAttachmentFamiliesResourcesService);
        repository = <CommonMockAttachmentFamilyResourceRepository>module.get<CommonIAttachmentFamilyResourceRepository>(CommonIAttachmentFamilyResourceRepository);
    });

    describe('main', () =>
    {
        test('CommonPaginateAttachmentFamiliesResourcesQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an attachmentFamiliesResources paginated', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(
                {
                    count: 10,
                    total: 100,
                    rows : repository.collectionSource.slice(0,10),
                },
            )));
            expect(await queryHandler.execute(
                new CommonPaginateAttachmentFamiliesResourcesQuery(
                    {
                        offset: 0,
                        limit : 10,
                    },
                ),
            )).toStrictEqual(
                new PaginationResponse(
                    100,
                    10,
                    repository.collectionSource.slice(0,10).map(item => item.toDTO()),
                ),
            );
        });
    });
});
