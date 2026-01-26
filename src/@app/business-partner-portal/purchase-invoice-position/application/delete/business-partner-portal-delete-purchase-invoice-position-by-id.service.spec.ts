/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalIPurchaseInvoicePositionRepository,
  businessPartnerPortalMockPurchaseInvoicePositionData,
  BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
} from '@app/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalDeletePurchaseInvoicePositionByIdService } from '@app/business-partner-portal/purchase-invoice-position/application/delete/business-partner-portal-delete-purchase-invoice-position-by-id.service';
import { BusinessPartnerPortalPurchaseInvoicePositionId } from '@app/business-partner-portal/purchase-invoice-position/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePurchaseInvoicePositionByIdService', () => {
  let service: BusinessPartnerPortalDeletePurchaseInvoicePositionByIdService;
  let repository: BusinessPartnerPortalIPurchaseInvoicePositionRepository;
  let mockRepository: BusinessPartnerPortalMockPurchaseInvoicePositionRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalDeletePurchaseInvoicePositionByIdService,
        BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
        {
          provide: BusinessPartnerPortalIPurchaseInvoicePositionRepository,
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
      BusinessPartnerPortalDeletePurchaseInvoicePositionByIdService,
    );
    repository = module.get(
      BusinessPartnerPortalIPurchaseInvoicePositionRepository,
    );
    mockRepository = module.get(
      BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePurchaseInvoicePositionByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should delete purchaseInvoicePosition and emit event', async () => {
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
          {},
        ),
      ).toBe(undefined);
    });
  });
});
