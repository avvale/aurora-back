/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSalesInvoiceHeaderHandler,
  BusinessPartnerPortalFindSalesInvoiceHeaderResolver,
} from '@api/business-partner-portal/sales-invoice-header';
import { businessPartnerPortalMockSalesInvoiceHeaderData } from '@app/business-partner-portal/sales-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSalesInvoiceHeaderResolver', () => {
  let resolver: BusinessPartnerPortalFindSalesInvoiceHeaderResolver;
  let handler: BusinessPartnerPortalFindSalesInvoiceHeaderHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindSalesInvoiceHeaderResolver,
        {
          provide: BusinessPartnerPortalFindSalesInvoiceHeaderHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<BusinessPartnerPortalFindSalesInvoiceHeaderResolver>(
      BusinessPartnerPortalFindSalesInvoiceHeaderResolver,
    );
    handler = module.get<BusinessPartnerPortalFindSalesInvoiceHeaderHandler>(
      BusinessPartnerPortalFindSalesInvoiceHeaderHandler,
    );
  });

  test('BusinessPartnerPortalFindSalesInvoiceHeaderResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindSalesInvoiceHeaderResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a salesInvoiceHeader', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockSalesInvoiceHeaderData[0]),
            ),
        );
      expect(await resolver.main()).toBe(
        businessPartnerPortalMockSalesInvoiceHeaderData[0],
      );
    });
  });
});
