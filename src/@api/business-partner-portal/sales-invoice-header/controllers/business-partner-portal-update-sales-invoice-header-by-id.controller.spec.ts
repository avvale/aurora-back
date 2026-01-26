/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdController,
  BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdHandler,
} from '@api/business-partner-portal/sales-invoice-header';
import { businessPartnerPortalMockSalesInvoiceHeaderData } from '@app/business-partner-portal/sales-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdController', () => {
  let controller: BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdController;
  let handler: BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [
        BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdController,
      ],
      providers: [
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

    controller =
      module.get<BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdController>(
        BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdController,
      );
    handler =
      module.get<BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdHandler>(
        BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdateSalesInvoiceHeaderByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a salesInvoiceHeader updated', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockSalesInvoiceHeaderData[0]),
            ),
        );
      expect(
        await controller.main(
          businessPartnerPortalMockSalesInvoiceHeaderData[0],
        ),
      ).toBe(businessPartnerPortalMockSalesInvoiceHeaderData[0]);
    });
  });
});
