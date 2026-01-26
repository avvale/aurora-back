/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoiceHeaderRepository,
  BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
  BusinessPartnerPortalPaginateSalesInvoiceHeadersQuery,
} from '@app/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalPaginateSalesInvoiceHeadersQueryHandler } from '@app/business-partner-portal/sales-invoice-header/application/paginate/business-partner-portal-paginate-sales-invoice-headers.query-handler';
import { BusinessPartnerPortalPaginateSalesInvoiceHeadersService } from '@app/business-partner-portal/sales-invoice-header/application/paginate/business-partner-portal-paginate-sales-invoice-headers.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginateSalesInvoiceHeadersQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalPaginateSalesInvoiceHeadersQueryHandler;
  let service: BusinessPartnerPortalPaginateSalesInvoiceHeadersService;
  let repository: BusinessPartnerPortalMockSalesInvoiceHeaderRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalPaginateSalesInvoiceHeadersQueryHandler,
        {
          provide: BusinessPartnerPortalISalesInvoiceHeaderRepository,
          useClass: BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
        },
        {
          provide: BusinessPartnerPortalPaginateSalesInvoiceHeadersService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalPaginateSalesInvoiceHeadersQueryHandler>(
        BusinessPartnerPortalPaginateSalesInvoiceHeadersQueryHandler,
      );
    service =
      module.get<BusinessPartnerPortalPaginateSalesInvoiceHeadersService>(
        BusinessPartnerPortalPaginateSalesInvoiceHeadersService,
      );
    repository = <BusinessPartnerPortalMockSalesInvoiceHeaderRepository>(
      module.get<BusinessPartnerPortalISalesInvoiceHeaderRepository>(
        BusinessPartnerPortalISalesInvoiceHeaderRepository,
      )
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginateSalesInvoiceHeadersQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an salesInvoiceHeaders paginated', async () => {
      jest.spyOn(service, 'main').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              count: 10,
              total: 100,
              rows: repository.collectionSource.slice(0, 10),
            }),
          ),
      );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalPaginateSalesInvoiceHeadersQuery({
            offset: 0,
            limit: 10,
          }),
        ),
      ).toStrictEqual(
        new PaginationResponse(
          100,
          10,
          repository.collectionSource.slice(0, 10).map((item) => item.toDTO()),
        ),
      );
    });
  });
});
