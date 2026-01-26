/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
  businessPartnerPortalMockPurchaseInvoiceHeaderData,
  BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
} from '@app/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdService } from '@app/business-partner-portal/purchase-invoice-header/application/delete/business-partner-portal-delete-purchase-invoice-header-by-id.service';
import { BusinessPartnerPortalPurchaseInvoiceHeaderId } from '@app/business-partner-portal/purchase-invoice-header/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdService', () => {
  let service: BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdService;
  let repository: BusinessPartnerPortalIPurchaseInvoiceHeaderRepository;
  let mockRepository: BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdService,
        BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
        {
          provide: BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
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
      BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdService,
    );
    repository = module.get(
      BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
    );
    mockRepository = module.get(
      BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should delete purchaseInvoiceHeader and emit event', async () => {
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
          new BusinessPartnerPortalPurchaseInvoiceHeaderId(
            businessPartnerPortalMockPurchaseInvoiceHeaderData[0].id,
          ),
          {},
        ),
      ).toBe(undefined);
    });
  });
});
