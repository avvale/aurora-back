/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentCollectionModeRepository,
  businessPartnerPortalMockPaymentCollectionModeData,
  BusinessPartnerPortalMockPaymentCollectionModeRepository,
} from '@app/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalDeletePaymentCollectionModeByIdService } from '@app/business-partner-portal/payment-collection-mode/application/delete/business-partner-portal-delete-payment-collection-mode-by-id.service';
import { BusinessPartnerPortalPaymentCollectionModeId } from '@app/business-partner-portal/payment-collection-mode/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePaymentCollectionModeByIdService', () => {
  let service: BusinessPartnerPortalDeletePaymentCollectionModeByIdService;
  let repository: BusinessPartnerPortalIPaymentCollectionModeRepository;
  let mockRepository: BusinessPartnerPortalMockPaymentCollectionModeRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalDeletePaymentCollectionModeByIdService,
        BusinessPartnerPortalMockPaymentCollectionModeRepository,
        {
          provide: BusinessPartnerPortalIPaymentCollectionModeRepository,
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

    service = module.get(
      BusinessPartnerPortalDeletePaymentCollectionModeByIdService,
    );
    repository = module.get(
      BusinessPartnerPortalIPaymentCollectionModeRepository,
    );
    mockRepository = module.get(
      BusinessPartnerPortalMockPaymentCollectionModeRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePaymentCollectionModeByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should delete paymentCollectionMode and emit event', async () => {
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
          new BusinessPartnerPortalPaymentCollectionModeId(
            businessPartnerPortalMockPaymentCollectionModeData[0].id,
          ),
          {},
        ),
      ).toBe(undefined);
    });
  });
});
