/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalCreateSalesInvoiceHeaderHandler,
  BusinessPartnerPortalCreateSalesInvoiceHeaderResolver,
} from '@api/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalCreateSalesInvoiceHeaderInput } from '@api/graphql';
import { businessPartnerPortalMockSalesInvoiceHeaderData } from '@app/business-partner-portal/sales-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreateSalesInvoiceHeaderResolver', () => {
  let resolver: BusinessPartnerPortalCreateSalesInvoiceHeaderResolver;
  let handler: BusinessPartnerPortalCreateSalesInvoiceHeaderHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalCreateSalesInvoiceHeaderResolver,
        {
          provide: BusinessPartnerPortalCreateSalesInvoiceHeaderHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalCreateSalesInvoiceHeaderResolver>(
        BusinessPartnerPortalCreateSalesInvoiceHeaderResolver,
      );
    handler = module.get<BusinessPartnerPortalCreateSalesInvoiceHeaderHandler>(
      BusinessPartnerPortalCreateSalesInvoiceHeaderHandler,
    );
  });

  test('BusinessPartnerPortalCreateSalesInvoiceHeaderResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreateSalesInvoiceHeaderResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an salesInvoiceHeader created', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockSalesInvoiceHeaderData[0]),
            ),
        );
      expect(
        await resolver.main(
          <BusinessPartnerPortalCreateSalesInvoiceHeaderInput>(
            businessPartnerPortalMockSalesInvoiceHeaderData[0]
          ),
        ),
      ).toBe(businessPartnerPortalMockSalesInvoiceHeaderData[0]);
    });
  });
});
