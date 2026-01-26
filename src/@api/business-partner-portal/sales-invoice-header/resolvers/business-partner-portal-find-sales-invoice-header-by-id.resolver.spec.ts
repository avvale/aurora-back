/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSalesInvoiceHeaderByIdHandler,
  BusinessPartnerPortalFindSalesInvoiceHeaderByIdResolver,
} from '@api/business-partner-portal/sales-invoice-header';
import { businessPartnerPortalMockSalesInvoiceHeaderData } from '@app/business-partner-portal/sales-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSalesInvoiceHeaderByIdResolver', () => {
  let resolver: BusinessPartnerPortalFindSalesInvoiceHeaderByIdResolver;
  let handler: BusinessPartnerPortalFindSalesInvoiceHeaderByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalFindSalesInvoiceHeaderByIdResolver,
        {
          provide: BusinessPartnerPortalFindSalesInvoiceHeaderByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalFindSalesInvoiceHeaderByIdResolver>(
        BusinessPartnerPortalFindSalesInvoiceHeaderByIdResolver,
      );
    handler =
      module.get<BusinessPartnerPortalFindSalesInvoiceHeaderByIdHandler>(
        BusinessPartnerPortalFindSalesInvoiceHeaderByIdHandler,
      );
  });

  test('BusinessPartnerPortalFindSalesInvoiceHeaderByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindSalesInvoiceHeaderByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an salesInvoiceHeader by id', async () => {
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
          businessPartnerPortalMockSalesInvoiceHeaderData[0].id,
        ),
      ).toBe(businessPartnerPortalMockSalesInvoiceHeaderData[0]);
    });
  });
});
