/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentCollectionModeRepository,
  BusinessPartnerPortalMockPaymentCollectionModeRepository,
} from '@app/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalFindPaymentCollectionModeService } from '@app/business-partner-portal/payment-collection-mode/application/find/business-partner-portal-find-payment-collection-mode.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPaymentCollectionModeService', () => {
  let service: BusinessPartnerPortalFindPaymentCollectionModeService;
  let repository: BusinessPartnerPortalIPaymentCollectionModeRepository;
  let mockRepository: BusinessPartnerPortalMockPaymentCollectionModeRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalFindPaymentCollectionModeService,
        BusinessPartnerPortalMockPaymentCollectionModeRepository,
        {
          provide: BusinessPartnerPortalIPaymentCollectionModeRepository,
          useValue: {
            find: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalFindPaymentCollectionModeService);
    repository = module.get(
      BusinessPartnerPortalIPaymentCollectionModeRepository,
    );
    mockRepository = module.get(
      BusinessPartnerPortalMockPaymentCollectionModeRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPaymentCollectionModeService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should find paymentCollectionMode', async () => {
      jest
        .spyOn(repository, 'find')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(mockRepository.collectionSource[0]),
            ),
        );
      expect(await service.main()).toBe(mockRepository.collectionSource[0]);
    });
  });
});
