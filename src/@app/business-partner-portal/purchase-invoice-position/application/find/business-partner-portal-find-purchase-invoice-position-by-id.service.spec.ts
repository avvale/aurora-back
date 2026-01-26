/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalIPurchaseInvoicePositionRepository,
  businessPartnerPortalMockPurchaseInvoicePositionData,
  BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
} from '@app/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalFindPurchaseInvoicePositionByIdService } from '@app/business-partner-portal/purchase-invoice-position/application/find/business-partner-portal-find-purchase-invoice-position-by-id.service';
import { BusinessPartnerPortalPurchaseInvoicePositionId } from '@app/business-partner-portal/purchase-invoice-position/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPurchaseInvoicePositionByIdService', () => {
  let service: BusinessPartnerPortalFindPurchaseInvoicePositionByIdService;
  let repository: BusinessPartnerPortalIPurchaseInvoicePositionRepository;
  let mockRepository: BusinessPartnerPortalMockPurchaseInvoicePositionRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalFindPurchaseInvoicePositionByIdService,
        BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
        {
          provide: BusinessPartnerPortalIPurchaseInvoicePositionRepository,
          useValue: {
            findById: (id) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(
      BusinessPartnerPortalFindPurchaseInvoicePositionByIdService,
    );
    repository = module.get(
      BusinessPartnerPortalIPurchaseInvoicePositionRepository,
    );
    mockRepository = module.get(
      BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
    );
  });

  describe('main', () => {
    test('FindPurchaseInvoicePositionByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should find purchaseInvoicePosition by id', async () => {
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
          new BusinessPartnerPortalPurchaseInvoicePositionId(
            businessPartnerPortalMockPurchaseInvoicePositionData[0].id,
          ),
        ),
      ).toBe(mockRepository.collectionSource[0]);
    });
  });
});
