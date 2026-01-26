/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginateSalesInvoicePositionsHandler,
  BusinessPartnerPortalPaginateSalesInvoicePositionsResolver,
} from '@api/business-partner-portal/sales-invoice-position';
import { businessPartnerPortalMockSalesInvoicePositionData } from '@app/business-partner-portal/sales-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginateSalesInvoicePositionsResolver', () => {
  let resolver: BusinessPartnerPortalPaginateSalesInvoicePositionsResolver;
  let handler: BusinessPartnerPortalPaginateSalesInvoicePositionsHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalPaginateSalesInvoicePositionsResolver,
        {
          provide: BusinessPartnerPortalPaginateSalesInvoicePositionsHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalPaginateSalesInvoicePositionsResolver>(
        BusinessPartnerPortalPaginateSalesInvoicePositionsResolver,
      );
    handler =
      module.get<BusinessPartnerPortalPaginateSalesInvoicePositionsHandler>(
        BusinessPartnerPortalPaginateSalesInvoicePositionsHandler,
      );
  });

  test('BusinessPartnerPortalPaginateSalesInvoicePositionsResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginateSalesInvoicePositionsResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a businessPartnerPortalMockSalesInvoicePositionData', async () => {
      jest.spyOn(handler, 'main').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: 5,
              count: 5,
              rows: businessPartnerPortalMockSalesInvoicePositionData,
            }),
          ),
      );
      expect(await resolver.main()).toStrictEqual({
        total: 5,
        count: 5,
        rows: businessPartnerPortalMockSalesInvoicePositionData,
      });
    });
  });
});
