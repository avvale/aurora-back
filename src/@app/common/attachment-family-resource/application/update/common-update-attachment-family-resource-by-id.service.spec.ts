/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonIAttachmentFamilyResourceRepository, commonMockAttachmentFamilyResourceData, CommonMockAttachmentFamilyResourceRepository } from '@app/common/attachment-family-resource';
import { CommonUpdateAttachmentFamilyResourceByIdService } from '@app/common/attachment-family-resource/application/update/common-update-attachment-family-resource-by-id.service';
import {
    CommonAttachmentFamilyResourceAttachmentFamilyId,
    CommonAttachmentFamilyResourceResourceId,
} from '@app/common/attachment-family-resource/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonUpdateAttachmentFamilyResourceByIdService', () =>
{
    let service: CommonUpdateAttachmentFamilyResourceByIdService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                CommonUpdateAttachmentFamilyResourceByIdService,
                CommonMockAttachmentFamilyResourceRepository,
                {
                    provide : CommonIAttachmentFamilyResourceRepository,
                    useValue: {
                        updateById: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(CommonUpdateAttachmentFamilyResourceByIdService);
    });

    describe('main', () =>
    {
        test('CommonUpdateAttachmentFamilyResourceByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a attachmentFamilyResource and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        attachmentFamilyId: new CommonAttachmentFamilyResourceAttachmentFamilyId(commonMockAttachmentFamilyResourceData[0].attachmentFamilyId),
                        resourceId: new CommonAttachmentFamilyResourceResourceId(commonMockAttachmentFamilyResourceData[0].resourceId),
                    },
                    {},
                ),
            ).toBe(undefined);
        });
    });
});
