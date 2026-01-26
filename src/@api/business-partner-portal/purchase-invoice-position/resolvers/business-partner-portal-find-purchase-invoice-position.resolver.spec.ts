/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPurchaseInvoicePositionHandler,
  BusinessPartnerPortalFindPurchaseInvoicePositionResolver,
} from '@api/business-partner-portal/purchase-invoice-position';
import { businessPartnerPortalMockPurchaseInvoicePositionData } from '@app/business-partner-portal/purchase-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPurchaseInvoicePositionResolver', () => {
  let resolver: BusinessPartnerPortalFindPurchaseInvoicePositionResolver;
  let handler: BusinessPartnerPortalFindPurchaseInvoicePositionHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindPurchaseInvoicePositionResolver,
        {
          provide: BusinessPartnerPortalFindPurchaseInvoicePositionHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalFindPurchaseInvoicePositionResolver>(
        BusinessPartnerPortalFindPurchaseInvoicePositionResolver,
      );
    handler =
      module.get<BusinessPartnerPortalFindPurchaseInvoicePositionHandler>(
        BusinessPartnerPortalFindPurchaseInvoicePositionHandler,
      );
  });

  test('BusinessPartnerPortalFindPurchaseInvoicePositionResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPurchaseInvoicePositionResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a purchaseInvoicePosition', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPurchaseInvoicePositionData[0]),
            ),
        );
      expect(await resolver.main()).toBe(
        businessPartnerPortalMockPurchaseInvoicePositionData[0],
      );
    });
  });
});
