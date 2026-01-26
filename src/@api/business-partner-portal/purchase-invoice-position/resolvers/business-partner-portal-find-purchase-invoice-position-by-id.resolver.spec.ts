/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPurchaseInvoicePositionByIdHandler,
  BusinessPartnerPortalFindPurchaseInvoicePositionByIdResolver,
} from '@api/business-partner-portal/purchase-invoice-position';
import { businessPartnerPortalMockPurchaseInvoicePositionData } from '@app/business-partner-portal/purchase-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPurchaseInvoicePositionByIdResolver', () => {
  let resolver: BusinessPartnerPortalFindPurchaseInvoicePositionByIdResolver;
  let handler: BusinessPartnerPortalFindPurchaseInvoicePositionByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindPurchaseInvoicePositionByIdResolver,
        {
          provide: BusinessPartnerPortalFindPurchaseInvoicePositionByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalFindPurchaseInvoicePositionByIdResolver>(
        BusinessPartnerPortalFindPurchaseInvoicePositionByIdResolver,
      );
    handler =
      module.get<BusinessPartnerPortalFindPurchaseInvoicePositionByIdHandler>(
        BusinessPartnerPortalFindPurchaseInvoicePositionByIdHandler,
      );
  });

  test('BusinessPartnerPortalFindPurchaseInvoicePositionByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPurchaseInvoicePositionByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an purchaseInvoicePosition by id', async () => {
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
          businessPartnerPortalMockPurchaseInvoicePositionData[0].id,
        ),
      ).toBe(businessPartnerPortalMockPurchaseInvoicePositionData[0]);
    });
  });
});
