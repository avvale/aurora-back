/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSalesInvoiceHeaderByIdController,
  BusinessPartnerPortalFindSalesInvoiceHeaderByIdHandler,
} from '@api/business-partner-portal/sales-invoice-header';
import { businessPartnerPortalMockSalesInvoiceHeaderData } from '@app/business-partner-portal/sales-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSalesInvoiceHeaderByIdController', () => {
  let controller: BusinessPartnerPortalFindSalesInvoiceHeaderByIdController;
  let handler: BusinessPartnerPortalFindSalesInvoiceHeaderByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalFindSalesInvoiceHeaderByIdController],
      providers: [
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

    controller =
      module.get<BusinessPartnerPortalFindSalesInvoiceHeaderByIdController>(
        BusinessPartnerPortalFindSalesInvoiceHeaderByIdController,
      );
    handler =
      module.get<BusinessPartnerPortalFindSalesInvoiceHeaderByIdHandler>(
        BusinessPartnerPortalFindSalesInvoiceHeaderByIdHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindSalesInvoiceHeaderByIdController should be defined', () => {
      expect(controller).toBeDefined();
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
        await controller.main(
          businessPartnerPortalMockSalesInvoiceHeaderData[0].id,
        ),
      ).toBe(businessPartnerPortalMockSalesInvoiceHeaderData[0]);
    });
  });
});
