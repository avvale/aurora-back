/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalGetSalesInvoiceHeadersHandler,
  BusinessPartnerPortalGetSalesInvoiceHeadersResolver,
} from '@api/business-partner-portal/sales-invoice-header';
import { businessPartnerPortalMockSalesInvoiceHeaderData } from '@app/business-partner-portal/sales-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetSalesInvoiceHeadersResolver', () => {
  let resolver: BusinessPartnerPortalGetSalesInvoiceHeadersResolver;
  let handler: BusinessPartnerPortalGetSalesInvoiceHeadersHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalGetSalesInvoiceHeadersResolver,
        {
          provide: BusinessPartnerPortalGetSalesInvoiceHeadersHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<BusinessPartnerPortalGetSalesInvoiceHeadersResolver>(
      BusinessPartnerPortalGetSalesInvoiceHeadersResolver,
    );
    handler = module.get<BusinessPartnerPortalGetSalesInvoiceHeadersHandler>(
      BusinessPartnerPortalGetSalesInvoiceHeadersHandler,
    );
  });

  test('BusinessPartnerPortalGetSalesInvoiceHeadersResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetSalesInvoiceHeadersResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a businessPartnerPortalMockSalesInvoiceHeaderData', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockSalesInvoiceHeaderData),
            ),
        );
      expect(await resolver.main()).toBe(
        businessPartnerPortalMockSalesInvoiceHeaderData,
      );
    });
  });
});
