/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentCollectionModeRepository,
  BusinessPartnerPortalMockPaymentCollectionModeRepository,
} from '@app/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalGetPaymentCollectionModesService } from '@app/business-partner-portal/payment-collection-mode/application/get/business-partner-portal-get-payment-collection-modes.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetPaymentCollectionModesService', () => {
  let service: BusinessPartnerPortalGetPaymentCollectionModesService;
  let repository: BusinessPartnerPortalIPaymentCollectionModeRepository;
  let mockRepository: BusinessPartnerPortalMockPaymentCollectionModeRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalGetPaymentCollectionModesService,
        BusinessPartnerPortalMockPaymentCollectionModeRepository,
        {
          provide: BusinessPartnerPortalIPaymentCollectionModeRepository,
          useValue: {
            get: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalGetPaymentCollectionModesService);
    repository = module.get(
      BusinessPartnerPortalIPaymentCollectionModeRepository,
    );
    mockRepository = module.get(
      BusinessPartnerPortalMockPaymentCollectionModeRepository,
    );
  });

  describe('main', () => {
    test('GetPaymentCollectionModesService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should get paymentCollectionModes', async () => {
      jest
        .spyOn(repository, 'get')
        .mockImplementation(
          () =>
            new Promise((resolve) => resolve(mockRepository.collectionSource)),
        );
      expect(await service.main()).toBe(mockRepository.collectionSource);
    });
  });
});
