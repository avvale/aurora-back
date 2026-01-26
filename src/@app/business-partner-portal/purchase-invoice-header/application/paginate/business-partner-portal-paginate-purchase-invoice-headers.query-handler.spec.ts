/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
  BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
  BusinessPartnerPortalPaginatePurchaseInvoiceHeadersQuery,
} from '@app/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalPaginatePurchaseInvoiceHeadersQueryHandler } from '@app/business-partner-portal/purchase-invoice-header/application/paginate/business-partner-portal-paginate-purchase-invoice-headers.query-handler';
import { BusinessPartnerPortalPaginatePurchaseInvoiceHeadersService } from '@app/business-partner-portal/purchase-invoice-header/application/paginate/business-partner-portal-paginate-purchase-invoice-headers.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePurchaseInvoiceHeadersQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalPaginatePurchaseInvoiceHeadersQueryHandler;
  let service: BusinessPartnerPortalPaginatePurchaseInvoiceHeadersService;
  let repository: BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalPaginatePurchaseInvoiceHeadersQueryHandler,
        {
          provide: BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
          useClass: BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
        },
        {
          provide: BusinessPartnerPortalPaginatePurchaseInvoiceHeadersService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalPaginatePurchaseInvoiceHeadersQueryHandler>(
        BusinessPartnerPortalPaginatePurchaseInvoiceHeadersQueryHandler,
      );
    service =
      module.get<BusinessPartnerPortalPaginatePurchaseInvoiceHeadersService>(
        BusinessPartnerPortalPaginatePurchaseInvoiceHeadersService,
      );
    repository = <BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository>(
      module.get<BusinessPartnerPortalIPurchaseInvoiceHeaderRepository>(
        BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
      )
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePurchaseInvoiceHeadersQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an purchaseInvoiceHeaders paginated', async () => {
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
          new BusinessPartnerPortalPaginatePurchaseInvoiceHeadersQuery({
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
