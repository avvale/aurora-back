/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
  businessPartnerPortalMockPurchaseInvoiceHeaderData,
  BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
} from '@app/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdService } from '@app/business-partner-portal/purchase-invoice-header/application/find/business-partner-portal-find-purchase-invoice-header-by-id.service';
import { BusinessPartnerPortalPurchaseInvoiceHeaderId } from '@app/business-partner-portal/purchase-invoice-header/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdService', () => {
  let service: BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdService;
  let repository: BusinessPartnerPortalIPurchaseInvoiceHeaderRepository;
  let mockRepository: BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdService,
        BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
        {
          provide: BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
          useValue: {
            findById: (id) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(
      BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdService,
    );
    repository = module.get(
      BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
    );
    mockRepository = module.get(
      BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
    );
  });

  describe('main', () => {
    test('FindPurchaseInvoiceHeaderByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should find purchaseInvoiceHeader by id', async () => {
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
        ),
      ).toBe(mockRepository.collectionSource[0]);
    });
  });
});
