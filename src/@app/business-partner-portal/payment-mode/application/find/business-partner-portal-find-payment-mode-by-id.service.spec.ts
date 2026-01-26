/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentModeRepository,
  businessPartnerPortalMockPaymentModeData,
  BusinessPartnerPortalMockPaymentModeRepository,
} from '@app/business-partner-portal/payment-mode';
import { BusinessPartnerPortalFindPaymentModeByIdService } from '@app/business-partner-portal/payment-mode/application/find/business-partner-portal-find-payment-mode-by-id.service';
import { BusinessPartnerPortalPaymentModeId } from '@app/business-partner-portal/payment-mode/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPaymentModeByIdService', () => {
  let service: BusinessPartnerPortalFindPaymentModeByIdService;
  let repository: BusinessPartnerPortalIPaymentModeRepository;
  let mockRepository: BusinessPartnerPortalMockPaymentModeRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalFindPaymentModeByIdService,
        BusinessPartnerPortalMockPaymentModeRepository,
        {
          provide: BusinessPartnerPortalIPaymentModeRepository,
          useValue: {
            findById: (id) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalFindPaymentModeByIdService);
    repository = module.get(BusinessPartnerPortalIPaymentModeRepository);
    mockRepository = module.get(BusinessPartnerPortalMockPaymentModeRepository);
  });

  describe('main', () => {
    test('FindPaymentModeByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should find paymentMode by id', async () => {
      jest
        .spyOn(repository, 'findById')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(mockRepository.collectionSource[0]),
            ),
        );
      expect(
        await service.main(
          new BusinessPartnerPortalPaymentModeId(
            businessPartnerPortalMockPaymentModeData[0].id,
          ),
        ),
      ).toBe(mockRepository.collectionSource[0]);
    });
  });
});
