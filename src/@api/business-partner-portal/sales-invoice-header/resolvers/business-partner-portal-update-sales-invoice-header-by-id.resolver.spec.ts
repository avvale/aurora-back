/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdHandler,
  BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdResolver,
} from '@api/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdInput } from '@api/graphql';
import { businessPartnerPortalMockSalesInvoiceHeaderData } from '@app/business-partner-portal/sales-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdResolver', () => {
  let resolver: BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdResolver;
  let handler: BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdResolver,
        {
          provide: BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdResolver>(
        BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdResolver,
      );
    handler =
      module.get<BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdHandler>(
        BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdHandler,
      );
  });

  test('BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a salesInvoiceHeader by id updated', async () => {
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
          <BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdInput>(
            businessPartnerPortalMockSalesInvoiceHeaderData[0]
          ),
        ),
      ).toBe(businessPartnerPortalMockSalesInvoiceHeaderData[0]);
    });
  });
});
