/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalCreateSalesInvoicePositionHandler,
  BusinessPartnerPortalCreateSalesInvoicePositionResolver,
} from '@api/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalCreateSalesInvoicePositionInput } from '@api/graphql';
import { businessPartnerPortalMockSalesInvoicePositionData } from '@app/business-partner-portal/sales-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreateSalesInvoicePositionResolver', () => {
  let resolver: BusinessPartnerPortalCreateSalesInvoicePositionResolver;
  let handler: BusinessPartnerPortalCreateSalesInvoicePositionHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalCreateSalesInvoicePositionResolver,
        {
          provide: BusinessPartnerPortalCreateSalesInvoicePositionHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalCreateSalesInvoicePositionResolver>(
        BusinessPartnerPortalCreateSalesInvoicePositionResolver,
      );
    handler =
      module.get<BusinessPartnerPortalCreateSalesInvoicePositionHandler>(
        BusinessPartnerPortalCreateSalesInvoicePositionHandler,
      );
  });

  test('BusinessPartnerPortalCreateSalesInvoicePositionResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreateSalesInvoicePositionResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an salesInvoicePosition created', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockSalesInvoicePositionData[0]),
            ),
        );
      expect(
        await resolver.main(
          <BusinessPartnerPortalCreateSalesInvoicePositionInput>(
            businessPartnerPortalMockSalesInvoicePositionData[0]
          ),
        ),
      ).toBe(businessPartnerPortalMockSalesInvoicePositionData[0]);
    });
  });
});
