/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalGetSalesInvoicePositionsHandler,
  BusinessPartnerPortalGetSalesInvoicePositionsResolver,
} from '@api/business-partner-portal/sales-invoice-position';
import { businessPartnerPortalMockSalesInvoicePositionData } from '@app/business-partner-portal/sales-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetSalesInvoicePositionsResolver', () => {
  let resolver: BusinessPartnerPortalGetSalesInvoicePositionsResolver;
  let handler: BusinessPartnerPortalGetSalesInvoicePositionsHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalGetSalesInvoicePositionsResolver,
        {
          provide: BusinessPartnerPortalGetSalesInvoicePositionsHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalGetSalesInvoicePositionsResolver>(
        BusinessPartnerPortalGetSalesInvoicePositionsResolver,
      );
    handler = module.get<BusinessPartnerPortalGetSalesInvoicePositionsHandler>(
      BusinessPartnerPortalGetSalesInvoicePositionsHandler,
    );
  });

  test('BusinessPartnerPortalGetSalesInvoicePositionsResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetSalesInvoicePositionsResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a businessPartnerPortalMockSalesInvoicePositionData', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockSalesInvoicePositionData),
            ),
        );
      expect(await resolver.main()).toBe(
        businessPartnerPortalMockSalesInvoicePositionData,
      );
    });
  });
});
