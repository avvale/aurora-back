/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalUpdateSalesInvoicePositionByIdHandler,
  BusinessPartnerPortalUpdateSalesInvoicePositionByIdResolver,
} from '@api/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalUpdateSalesInvoicePositionByIdInput } from '@api/graphql';
import { businessPartnerPortalMockSalesInvoicePositionData } from '@app/business-partner-portal/sales-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdateSalesInvoicePositionByIdResolver', () => {
  let resolver: BusinessPartnerPortalUpdateSalesInvoicePositionByIdResolver;
  let handler: BusinessPartnerPortalUpdateSalesInvoicePositionByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalUpdateSalesInvoicePositionByIdResolver,
        {
          provide: BusinessPartnerPortalUpdateSalesInvoicePositionByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver =
      module.get<BusinessPartnerPortalUpdateSalesInvoicePositionByIdResolver>(
        BusinessPartnerPortalUpdateSalesInvoicePositionByIdResolver,
      );
    handler =
      module.get<BusinessPartnerPortalUpdateSalesInvoicePositionByIdHandler>(
        BusinessPartnerPortalUpdateSalesInvoicePositionByIdHandler,
      );
  });

  test('BusinessPartnerPortalUpdateSalesInvoicePositionByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdateSalesInvoicePositionByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a salesInvoicePosition by id updated', async () => {
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
          <BusinessPartnerPortalUpdateSalesInvoicePositionByIdInput>(
            businessPartnerPortalMockSalesInvoicePositionData[0]
          ),
        ),
      ).toBe(businessPartnerPortalMockSalesInvoicePositionData[0]);
    });
  });
});
