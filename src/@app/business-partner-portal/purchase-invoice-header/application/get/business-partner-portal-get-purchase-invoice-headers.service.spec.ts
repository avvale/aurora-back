/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
  BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
} from '@app/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalGetPurchaseInvoiceHeadersService } from '@app/business-partner-portal/purchase-invoice-header/application/get/business-partner-portal-get-purchase-invoice-headers.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetPurchaseInvoiceHeadersService', () => {
  let service: BusinessPartnerPortalGetPurchaseInvoiceHeadersService;
  let repository: BusinessPartnerPortalIPurchaseInvoiceHeaderRepository;
  let mockRepository: BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalGetPurchaseInvoiceHeadersService,
        BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
        {
          provide: BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
          useValue: {
            get: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalGetPurchaseInvoiceHeadersService);
    repository = module.get(
      BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
    );
    mockRepository = module.get(
      BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
    );
  });

  describe('main', () => {
    test('GetPurchaseInvoiceHeadersService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should get purchaseInvoiceHeaders', async () => {
      jest
        .spyOn(repository, 'get')
        .mockImplementation(
          () =>
            new Promise((resolve) => resolve(mockRepository.collectionSource)),
        );
      expect(await service.main()).toBe(mockRepository.collectionSource);
    });
  });
});
