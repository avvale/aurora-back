/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentModeRepository,
  BusinessPartnerPortalMockPaymentModeRepository,
} from '@app/business-partner-portal/payment-mode';
import { BusinessPartnerPortalGetPaymentModesService } from '@app/business-partner-portal/payment-mode/application/get/business-partner-portal-get-payment-modes.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetPaymentModesService', () => {
  let service: BusinessPartnerPortalGetPaymentModesService;
  let repository: BusinessPartnerPortalIPaymentModeRepository;
  let mockRepository: BusinessPartnerPortalMockPaymentModeRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalGetPaymentModesService,
        BusinessPartnerPortalMockPaymentModeRepository,
        {
          provide: BusinessPartnerPortalIPaymentModeRepository,
          useValue: {
            get: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalGetPaymentModesService);
    repository = module.get(BusinessPartnerPortalIPaymentModeRepository);
    mockRepository = module.get(BusinessPartnerPortalMockPaymentModeRepository);
  });

  describe('main', () => {
    test('GetPaymentModesService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should get paymentModes', async () => {
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
