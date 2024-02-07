/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationINotificationRepository, notificationMockNotificationData, NotificationMockNotificationRepository } from '@app/notification/notification';
import { NotificationDeleteNotificationByIdService } from '@app/notification/notification/application/delete/notification-delete-notification-by-id.service';
import { NotificationNotificationId } from '@app/notification/notification/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteNotificationByIdService', () =>
{
    let service: NotificationDeleteNotificationByIdService;
    let repository: NotificationINotificationRepository;
    let mockRepository: NotificationMockNotificationRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationDeleteNotificationByIdService,
                NotificationMockNotificationRepository,
                {
                    provide : NotificationINotificationRepository,
                    useValue: {
                        deleteById: id => { /**/ },
                        findById  : id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationDeleteNotificationByIdService);
        repository = module.get(NotificationINotificationRepository);
        mockRepository = module.get(NotificationMockNotificationRepository);
    });

    describe('main', () =>
    {
        test('NotificationDeleteNotificationByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete notification and emit event', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(
                await service.main(
                    new NotificationNotificationId(notificationMockNotificationData[0].id),
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
