/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoiceHeaderRepository,
  BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
} from '@app/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalPaginateSalesInvoiceHeadersService } from '@app/business-partner-portal/sales-invoice-header/application/paginate/business-partner-portal-paginate-sales-invoice-headers.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginateSalesInvoiceHeadersService', () => {
  let service: BusinessPartnerPortalPaginateSalesInvoiceHeadersService;
  let repository: BusinessPartnerPortalISalesInvoiceHeaderRepository;
  let mockRepository: BusinessPartnerPortalMockSalesInvoiceHeaderRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalPaginateSalesInvoiceHeadersService,
        BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
        {
          provide: BusinessPartnerPortalISalesInvoiceHeaderRepository,
          useValue: {
            paginate: (queryStatement, constraints) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(
      BusinessPartnerPortalPaginateSalesInvoiceHeadersService,
    );
    repository = module.get(BusinessPartnerPortalISalesInvoiceHeaderRepository);
    mockRepository = module.get(
      BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginateSalesInvoiceHeadersService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should paginate salesInvoiceHeaders', async () => {
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
