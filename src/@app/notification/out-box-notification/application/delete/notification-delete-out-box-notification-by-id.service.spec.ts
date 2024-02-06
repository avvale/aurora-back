/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationIOutBoxNotificationRepository, notificationMockOutBoxNotificationData, NotificationMockOutBoxNotificationRepository } from '@app/notification/out-box-notification';
import { NotificationDeleteOutBoxNotificationByIdService } from '@app/notification/out-box-notification/application/delete/notification-delete-out-box-notification-by-id.service';
import { NotificationOutBoxNotificationId } from '@app/notification/out-box-notification/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteOutBoxNotificationByIdService', () =>
{
    let service: NotificationDeleteOutBoxNotificationByIdService;
    let repository: NotificationIOutBoxNotificationRepository;
    let mockRepository: NotificationMockOutBoxNotificationRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationDeleteOutBoxNotificationByIdService,
                NotificationMockOutBoxNotificationRepository,
                {
                    provide : NotificationIOutBoxNotificationRepository,
                    useValue: {
                        deleteById: id => { /**/ },
                        findById  : id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationDeleteOutBoxNotificationByIdService);
        repository = module.get(NotificationIOutBoxNotificationRepository);
        mockRepository = module.get(NotificationMockOutBoxNotificationRepository);
    });

    describe('main', () =>
    {
        test('NotificationDeleteOutBoxNotificationByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete outBoxNotification and emit event', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(
                await service.main(
                    new NotificationOutBoxNotificationId(notificationMockOutBoxNotificationData[0].id),
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
