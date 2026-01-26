/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSalesInvoicePositionHandler,
  BusinessPartnerPortalFindSalesInvoicePositionResolver,
} from '@api/business-partner-portal/sales-invoice-position';
import { businessPartnerPortalMockSalesInvoicePositionData } from '@app/business-partner-portal/sales-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSalesInvoicePositionResolver', () => {
  let resolver: BusinessPartnerPortalFindSalesInvoicePositionResolver;
  let handler: BusinessPartnerPortalFindSalesInvoicePositionHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindSalesInvoicePositionResolver,
        {
          provide: BusinessPartnerPortalFindSalesInvoicePositionHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalFindSalesInvoicePositionResolver>(
        BusinessPartnerPortalFindSalesInvoicePositionResolver,
      );
    handler = module.get<BusinessPartnerPortalFindSalesInvoicePositionHandler>(
      BusinessPartnerPortalFindSalesInvoicePositionHandler,
    );
  });

  test('BusinessPartnerPortalFindSalesInvoicePositionResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindSalesInvoicePositionResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a salesInvoicePosition', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockSalesInvoicePositionData[0]),
            ),
        );
      expect(await resolver.main()).toBe(
        businessPartnerPortalMockSalesInvoicePositionData[0],
      );
    });
  });
});
