/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdHandler,
  BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdResolver,
} from '@api/business-partner-portal/sales-invoice-header';
import { businessPartnerPortalMockSalesInvoiceHeaderData } from '@app/business-partner-portal/sales-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdResolver', () => {
  let resolver: BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdResolver;
  let handler: BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdResolver,
        {
          provide: BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdResolver>(
        BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdResolver,
      );
    handler =
      module.get<BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdHandler>(
        BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdHandler,
      );
  });

  test('BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an salesInvoiceHeader deleted', async () => {
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
