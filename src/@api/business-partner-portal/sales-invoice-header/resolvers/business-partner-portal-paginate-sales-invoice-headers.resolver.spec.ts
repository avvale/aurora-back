/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginateSalesInvoiceHeadersHandler,
  BusinessPartnerPortalPaginateSalesInvoiceHeadersResolver,
} from '@api/business-partner-portal/sales-invoice-header';
import { businessPartnerPortalMockSalesInvoiceHeaderData } from '@app/business-partner-portal/sales-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginateSalesInvoiceHeadersResolver', () => {
  let resolver: BusinessPartnerPortalPaginateSalesInvoiceHeadersResolver;
  let handler: BusinessPartnerPortalPaginateSalesInvoiceHeadersHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalPaginateSalesInvoiceHeadersResolver,
        {
          provide: BusinessPartnerPortalPaginateSalesInvoiceHeadersHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalPaginateSalesInvoiceHeadersResolver>(
        BusinessPartnerPortalPaginateSalesInvoiceHeadersResolver,
      );
    handler =
      module.get<BusinessPartnerPortalPaginateSalesInvoiceHeadersHandler>(
        BusinessPartnerPortalPaginateSalesInvoiceHeadersHandler,
      );
  });

  test('BusinessPartnerPortalPaginateSalesInvoiceHeadersResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginateSalesInvoiceHeadersResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a businessPartnerPortalMockSalesInvoiceHeaderData', async () => {
      jest.spyOn(handler, 'main').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: 5,
              count: 5,
              rows: businessPartnerPortalMockSalesInvoiceHeaderData,
            }),
          ),
      );
      expect(await resolver.main()).toStrictEqual({
        total: 5,
        count: 5,
        rows: businessPartnerPortalMockSalesInvoiceHeaderData,
      });
    });
  });
});
