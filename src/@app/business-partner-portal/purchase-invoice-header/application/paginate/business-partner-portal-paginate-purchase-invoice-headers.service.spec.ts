/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
  BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
} from '@app/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalPaginatePurchaseInvoiceHeadersService } from '@app/business-partner-portal/purchase-invoice-header/application/paginate/business-partner-portal-paginate-purchase-invoice-headers.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePurchaseInvoiceHeadersService', () => {
  let service: BusinessPartnerPortalPaginatePurchaseInvoiceHeadersService;
  let repository: BusinessPartnerPortalIPurchaseInvoiceHeaderRepository;
  let mockRepository: BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalPaginatePurchaseInvoiceHeadersService,
        BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
        {
          provide: BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
          useValue: {
            paginate: (queryStatement, constraints) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(
      BusinessPartnerPortalPaginatePurchaseInvoiceHeadersService,
    );
    repository = module.get(
      BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
    );
    mockRepository = module.get(
      BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePurchaseInvoiceHeadersService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should paginate purchaseInvoiceHeaders', async () => {
      jest.spyOn(repository, 'paginate').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: mockRepository.collectionSource.slice(0, 10).length,
              count: mockRepository.collectionSource.slice(0, 10).length,
              rows: mockRepository.collectionSource.slice(0, 10),
            }),
          ),
      );
      expect(
        await service.main({
          offset: 0,
          limit: 10,
        }),
      ).toStrictEqual({
        total: mockRepository.collectionSource.slice(0, 10).length,
        count: mockRepository.collectionSource.slice(0, 10).length,
        rows: mockRepository.collectionSource.slice(0, 10),
      });
    });
  });
});
