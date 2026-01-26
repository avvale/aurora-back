/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentModeRepository,
  businessPartnerPortalMockPaymentModeData,
  BusinessPartnerPortalMockPaymentModeRepository,
} from '@app/business-partner-portal/payment-mode';
import { BusinessPartnerPortalDeletePaymentModeByIdService } from '@app/business-partner-portal/payment-mode/application/delete/business-partner-portal-delete-payment-mode-by-id.service';
import { BusinessPartnerPortalPaymentModeId } from '@app/business-partner-portal/payment-mode/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePaymentModeByIdService', () => {
  let service: BusinessPartnerPortalDeletePaymentModeByIdService;
  let repository: BusinessPartnerPortalIPaymentModeRepository;
  let mockRepository: BusinessPartnerPortalMockPaymentModeRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalDeletePaymentModeByIdService,
        BusinessPartnerPortalMockPaymentModeRepository,
        {
          provide: BusinessPartnerPortalIPaymentModeRepository,
          useValue: {
            deleteById: (id) => {
              /**/
            },
            findById: (id) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalDeletePaymentModeByIdService);
    repository = module.get(BusinessPartnerPortalIPaymentModeRepository);
    mockRepository = module.get(BusinessPartnerPortalMockPaymentModeRepository);
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePaymentModeByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should delete paymentMode and emit event', async () => {
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
          {},
        ),
      ).toBe(undefined);
    });
  });
});
