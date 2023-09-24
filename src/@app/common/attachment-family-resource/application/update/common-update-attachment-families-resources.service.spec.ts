/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonIAttachmentFamilyResourceRepository, commonMockAttachmentFamilyResourceData, CommonMockAttachmentFamilyResourceRepository } from '@app/common/attachment-family-resource';
import { CommonUpdateAttachmentFamiliesResourcesService } from '@app/common/attachment-family-resource/application/update/common-update-attachment-families-resources.service';
import {
    CommonAttachmentFamilyResourceAttachmentFamilyId,
    CommonAttachmentFamilyResourceResourceId,
} from '@app/common/attachment-family-resource/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonUpdateAttachmentFamiliesResourcesService', () =>
{
    let service: CommonUpdateAttachmentFamiliesResourcesService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                CommonUpdateAttachmentFamiliesResourcesService,
                CommonMockAttachmentFamilyResourceRepository,
                {
                    provide : CommonIAttachmentFamilyResourceRepository,
                    useValue: {
                        update: () => { /**/ },
                        get   : () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(CommonUpdateAttachmentFamiliesResourcesService);
    });

    describe('main', () =>
    {
        test('UpdateAttachmentFamiliesResourcesService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a attachmentFamiliesResources and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        attachmentFamilyId: new CommonAttachmentFamilyResourceAttachmentFamilyId(commonMockAttachmentFamilyResourceData[0].attachmentFamilyId),
                        resourceId: new CommonAttachmentFamilyResourceResourceId(commonMockAttachmentFamilyResourceData[0].resourceId),
                    },
                    {},
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
