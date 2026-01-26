/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdController,
  BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdHandler,
} from '@api/business-partner-portal/sales-invoice-header';
import { businessPartnerPortalMockSalesInvoiceHeaderData } from '@app/business-partner-portal/sales-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdController', () => {
  let controller: BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdController;
  let handler: BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [
        BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdController,
      ],
      providers: [
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

    controller =
      module.get<BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdController>(
        BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdController,
      );
    handler =
      module.get<BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdHandler>(
        BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdController should be defined', () => {
      expect(controller).toBeDefined();
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
        await controller.main(
          businessPartnerPortalMockSalesInvoiceHeaderData[0].id,
        ),
      ).toBe(businessPartnerPortalMockSalesInvoiceHeaderData[0]);
    });
  });
});
