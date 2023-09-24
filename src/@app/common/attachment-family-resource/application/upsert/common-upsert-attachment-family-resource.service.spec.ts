/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonIAttachmentFamilyResourceRepository, commonMockAttachmentFamilyResourceData, CommonMockAttachmentFamilyResourceRepository } from '@app/common/attachment-family-resource';
import { CommonUpsertAttachmentFamilyResourceService } from '@app/common/attachment-family-resource/application/upsert/common-upsert-attachment-family-resource.service';
import {
    CommonAttachmentFamilyResourceAttachmentFamilyId,
    CommonAttachmentFamilyResourceResourceId,
} from '@app/common/attachment-family-resource/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonUpsertAttachmentFamilyResourceService', () =>

{
    let service: CommonUpsertAttachmentFamilyResourceService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                CommonUpsertAttachmentFamilyResourceService,
                CommonMockAttachmentFamilyResourceRepository,
                {
                    provide : CommonIAttachmentFamilyResourceRepository,
                    useValue: {
                        upsert: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(CommonUpsertAttachmentFamilyResourceService);
    });

    describe('main', () =>
    {
        test('CommonUpsertAttachmentFamilyResourceService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should upsert a attachmentFamilyResource and emit event', async () =>
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
