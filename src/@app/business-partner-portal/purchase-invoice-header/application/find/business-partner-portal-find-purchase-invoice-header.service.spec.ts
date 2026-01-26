/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
  BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
} from '@app/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalFindPurchaseInvoiceHeaderService } from '@app/business-partner-portal/purchase-invoice-header/application/find/business-partner-portal-find-purchase-invoice-header.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPurchaseInvoiceHeaderService', () => {
  let service: BusinessPartnerPortalFindPurchaseInvoiceHeaderService;
  let repository: BusinessPartnerPortalIPurchaseInvoiceHeaderRepository;
  let mockRepository: BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalFindPurchaseInvoiceHeaderService,
        BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
        {
          provide: BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
          useValue: {
            find: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalFindPurchaseInvoiceHeaderService);
    repository = module.get(
      BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
    );
    mockRepository = module.get(
      BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPurchaseInvoiceHeaderService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should find purchaseInvoiceHeader', async () => {
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
