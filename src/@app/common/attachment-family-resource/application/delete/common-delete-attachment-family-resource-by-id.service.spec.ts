/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonIAttachmentFamilyResourceRepository, commonMockAttachmentFamilyResourceData, CommonMockAttachmentFamilyResourceRepository } from '@app/common/attachment-family-resource';
import { CommonDeleteAttachmentFamilyResourceByIdService } from '@app/common/attachment-family-resource/application/delete/common-delete-attachment-family-resource-by-id.service';
import { CommonAttachmentFamilyResourceId } from '@app/common/attachment-family-resource/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonDeleteAttachmentFamilyResourceByIdService', () =>
{
    let service: CommonDeleteAttachmentFamilyResourceByIdService;
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
                CommonDeleteAttachmentFamilyResourceByIdService,
                CommonMockAttachmentFamilyResourceRepository,
                {
                    provide : CommonIAttachmentFamilyResourceRepository,
                    useValue: {
                        deleteById: id => { /**/ },
                        findById  : id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(CommonDeleteAttachmentFamilyResourceByIdService);
        repository = module.get(CommonIAttachmentFamilyResourceRepository);
        mockRepository = module.get(CommonMockAttachmentFamilyResourceRepository);
    });

    describe('main', () =>
    {
        test('CommonDeleteAttachmentFamilyResourceByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete attachmentFamilyResource and emit event', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(
                await service.main(
                    new CommonAttachmentFamilyResourceId(commonMockAttachmentFamilyResourceData[0].id),
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
