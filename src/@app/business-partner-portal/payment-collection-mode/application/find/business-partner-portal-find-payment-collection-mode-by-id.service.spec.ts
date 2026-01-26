/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentCollectionModeRepository,
  businessPartnerPortalMockPaymentCollectionModeData,
  BusinessPartnerPortalMockPaymentCollectionModeRepository,
} from '@app/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalFindPaymentCollectionModeByIdService } from '@app/business-partner-portal/payment-collection-mode/application/find/business-partner-portal-find-payment-collection-mode-by-id.service';
import { BusinessPartnerPortalPaymentCollectionModeId } from '@app/business-partner-portal/payment-collection-mode/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPaymentCollectionModeByIdService', () => {
  let service: BusinessPartnerPortalFindPaymentCollectionModeByIdService;
  let repository: BusinessPartnerPortalIPaymentCollectionModeRepository;
  let mockRepository: BusinessPartnerPortalMockPaymentCollectionModeRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalFindPaymentCollectionModeByIdService,
        BusinessPartnerPortalMockPaymentCollectionModeRepository,
        {
          provide: BusinessPartnerPortalIPaymentCollectionModeRepository,
          useValue: {
            findById: (id) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(
      BusinessPartnerPortalFindPaymentCollectionModeByIdService,
    );
    repository = module.get(
      BusinessPartnerPortalIPaymentCollectionModeRepository,
    );
    mockRepository = module.get(
      BusinessPartnerPortalMockPaymentCollectionModeRepository,
    );
  });

  describe('main', () => {
    test('FindPaymentCollectionModeByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should find paymentCollectionMode by id', async () => {
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
        ),
      ).toBe(mockRepository.collectionSource[0]);
    });
  });
});
