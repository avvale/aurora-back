/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonIAttachmentFamilyResourceRepository, commonMockAttachmentFamilyResourceData, CommonMockAttachmentFamilyResourceRepository } from '@app/common/attachment-family-resource';
import { CommonCreateAttachmentFamilyResourceService } from '@app/common/attachment-family-resource/application/create/common-create-attachment-family-resource.service';
import {
    CommonAttachmentFamilyResourceAttachmentFamilyId,
    CommonAttachmentFamilyResourceResourceId,
} from '@app/common/attachment-family-resource/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonCreateAttachmentFamilyResourceService', () =>

{
    let service: CommonCreateAttachmentFamilyResourceService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                CommonCreateAttachmentFamilyResourceService,
                CommonMockAttachmentFamilyResourceRepository,
                {
                    provide : CommonIAttachmentFamilyResourceRepository,
                    useValue: {
                        create: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(CommonCreateAttachmentFamilyResourceService);
    });

    describe('main', () =>
    {
        test('CommonCreateAttachmentFamilyResourceService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create a attachmentFamilyResource and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        attachmentFamilyId: new CommonAttachmentFamilyResourceAttachmentFamilyId(commonMockAttachmentFamilyResourceData[0].attachmentFamilyId),
                        resourceId: new CommonAttachmentFamilyResourceResourceId(commonMockAttachmentFamilyResourceData[0].resourceId),
                    },
                ),
            )
                .toBe(undefined);
        });
    });
});
