/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPurchaseInvoicePositionsHandler,
  BusinessPartnerPortalGetPurchaseInvoicePositionsResolver,
} from '@api/business-partner-portal/purchase-invoice-position';
import { businessPartnerPortalMockPurchaseInvoicePositionData } from '@app/business-partner-portal/purchase-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetPurchaseInvoicePositionsResolver', () => {
  let resolver: BusinessPartnerPortalGetPurchaseInvoicePositionsResolver;
  let handler: BusinessPartnerPortalGetPurchaseInvoicePositionsHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalGetPurchaseInvoicePositionsResolver,
        {
          provide: BusinessPartnerPortalGetPurchaseInvoicePositionsHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalGetPurchaseInvoicePositionsResolver>(
        BusinessPartnerPortalGetPurchaseInvoicePositionsResolver,
      );
    handler =
      module.get<BusinessPartnerPortalGetPurchaseInvoicePositionsHandler>(
        BusinessPartnerPortalGetPurchaseInvoicePositionsHandler,
      );
  });

  test('BusinessPartnerPortalGetPurchaseInvoicePositionsResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetPurchaseInvoicePositionsResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a businessPartnerPortalMockPurchaseInvoicePositionData', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockPurchaseInvoicePositionData),
            ),
        );
      expect(await resolver.main()).toBe(
        businessPartnerPortalMockPurchaseInvoicePositionData,
      );
    });
  });
});
