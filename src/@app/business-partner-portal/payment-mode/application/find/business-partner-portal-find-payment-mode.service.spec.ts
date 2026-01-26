/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentModeRepository,
  BusinessPartnerPortalMockPaymentModeRepository,
} from '@app/business-partner-portal/payment-mode';
import { BusinessPartnerPortalFindPaymentModeService } from '@app/business-partner-portal/payment-mode/application/find/business-partner-portal-find-payment-mode.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPaymentModeService', () => {
  let service: BusinessPartnerPortalFindPaymentModeService;
  let repository: BusinessPartnerPortalIPaymentModeRepository;
  let mockRepository: BusinessPartnerPortalMockPaymentModeRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalFindPaymentModeService,
        BusinessPartnerPortalMockPaymentModeRepository,
        {
          provide: BusinessPartnerPortalIPaymentModeRepository,
          useValue: {
            find: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalFindPaymentModeService);
    repository = module.get(BusinessPartnerPortalIPaymentModeRepository);
    mockRepository = module.get(BusinessPartnerPortalMockPaymentModeRepository);
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPaymentModeService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should find paymentMode', async () => {
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
