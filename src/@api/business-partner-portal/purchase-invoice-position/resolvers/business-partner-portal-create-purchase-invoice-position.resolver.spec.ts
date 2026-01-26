/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePurchaseInvoicePositionHandler,
  BusinessPartnerPortalCreatePurchaseInvoicePositionResolver,
} from '@api/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalCreatePurchaseInvoicePositionInput } from '@api/graphql';
import { businessPartnerPortalMockPurchaseInvoicePositionData } from '@app/business-partner-portal/purchase-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreatePurchaseInvoicePositionResolver', () => {
  let resolver: BusinessPartnerPortalCreatePurchaseInvoicePositionResolver;
  let handler: BusinessPartnerPortalCreatePurchaseInvoicePositionHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalCreatePurchaseInvoicePositionResolver,
        {
          provide: BusinessPartnerPortalCreatePurchaseInvoicePositionHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalCreatePurchaseInvoicePositionResolver>(
        BusinessPartnerPortalCreatePurchaseInvoicePositionResolver,
      );
    handler =
      module.get<BusinessPartnerPortalCreatePurchaseInvoicePositionHandler>(
        BusinessPartnerPortalCreatePurchaseInvoicePositionHandler,
      );
  });

  test('BusinessPartnerPortalCreatePurchaseInvoicePositionResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreatePurchaseInvoicePositionResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an purchaseInvoicePosition created', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPurchaseInvoicePositionData[0]),
            ),
        );
      expect(
        await resolver.main(
          <BusinessPartnerPortalCreatePurchaseInvoicePositionInput>(
            businessPartnerPortalMockPurchaseInvoicePositionData[0]
          ),
        ),
      ).toBe(businessPartnerPortalMockPurchaseInvoicePositionData[0]);
    });
  });
});
