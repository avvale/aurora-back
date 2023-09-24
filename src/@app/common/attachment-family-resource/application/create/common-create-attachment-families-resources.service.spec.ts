/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonIAttachmentFamilyResourceRepository, CommonMockAttachmentFamilyResourceRepository } from '@app/common/attachment-family-resource';
import { CommonCreateAttachmentFamiliesResourcesService } from '@app/common/attachment-family-resource/application/create/common-create-attachment-families-resources.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonCreateAttachmentFamiliesResourcesService', () =>
{
    let service: CommonCreateAttachmentFamiliesResourcesService;
    let mockRepository: CommonMockAttachmentFamilyResourceRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                CommonCreateAttachmentFamiliesResourcesService,
                CommonMockAttachmentFamilyResourceRepository,
                {
                    provide : CommonIAttachmentFamilyResourceRepository,
                    useValue: {
                        insert: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(CommonCreateAttachmentFamiliesResourcesService);
        mockRepository = module.get(CommonMockAttachmentFamilyResourceRepository);
    });

    describe('main', () =>
    {
        test('CreateAttachmentFamiliesResourcesService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create attachmentFamiliesResources and emit event', async () =>
        {
            expect(
                await service.main(
                    mockRepository.collectionSource,
                ),
            )
                .toBe(undefined);
        });
    });
});
