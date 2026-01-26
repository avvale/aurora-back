/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalDeleteSalesInvoicePositionByIdHandler,
  BusinessPartnerPortalDeleteSalesInvoicePositionByIdResolver,
} from '@api/business-partner-portal/sales-invoice-position';
import { businessPartnerPortalMockSalesInvoicePositionData } from '@app/business-partner-portal/sales-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeleteSalesInvoicePositionByIdResolver', () => {
  let resolver: BusinessPartnerPortalDeleteSalesInvoicePositionByIdResolver;
  let handler: BusinessPartnerPortalDeleteSalesInvoicePositionByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalDeleteSalesInvoicePositionByIdResolver,
        {
          provide: BusinessPartnerPortalDeleteSalesInvoicePositionByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalDeleteSalesInvoicePositionByIdResolver>(
        BusinessPartnerPortalDeleteSalesInvoicePositionByIdResolver,
      );
    handler =
      module.get<BusinessPartnerPortalDeleteSalesInvoicePositionByIdHandler>(
        BusinessPartnerPortalDeleteSalesInvoicePositionByIdHandler,
      );
  });

  test('BusinessPartnerPortalDeleteSalesInvoicePositionByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeleteSalesInvoicePositionByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an salesInvoicePosition deleted', async () => {
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
          businessPartnerPortalMockSalesInvoicePositionData[0].id,
        ),
      ).toBe(businessPartnerPortalMockSalesInvoicePositionData[0]);
    });
  });
});
