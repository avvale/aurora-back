/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSalesInvoicePositionByIdHandler,
  BusinessPartnerPortalFindSalesInvoicePositionByIdResolver,
} from '@api/business-partner-portal/sales-invoice-position';
import { businessPartnerPortalMockSalesInvoicePositionData } from '@app/business-partner-portal/sales-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSalesInvoicePositionByIdResolver', () => {
  let resolver: BusinessPartnerPortalFindSalesInvoicePositionByIdResolver;
  let handler: BusinessPartnerPortalFindSalesInvoicePositionByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindSalesInvoicePositionByIdResolver,
        {
          provide: BusinessPartnerPortalFindSalesInvoicePositionByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalFindSalesInvoicePositionByIdResolver>(
        BusinessPartnerPortalFindSalesInvoicePositionByIdResolver,
      );
    handler =
      module.get<BusinessPartnerPortalFindSalesInvoicePositionByIdHandler>(
        BusinessPartnerPortalFindSalesInvoicePositionByIdHandler,
      );
  });

  test('BusinessPartnerPortalFindSalesInvoicePositionByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindSalesInvoicePositionByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an salesInvoicePosition by id', async () => {
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
