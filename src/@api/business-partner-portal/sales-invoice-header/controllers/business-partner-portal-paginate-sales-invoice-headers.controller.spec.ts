/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginateSalesInvoiceHeadersController,
  BusinessPartnerPortalPaginateSalesInvoiceHeadersHandler,
} from '@api/business-partner-portal/sales-invoice-header';
import { businessPartnerPortalMockSalesInvoiceHeaderData } from '@app/business-partner-portal/sales-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginateSalesInvoiceHeadersController', () => {
  let controller: BusinessPartnerPortalPaginateSalesInvoiceHeadersController;
  let handler: BusinessPartnerPortalPaginateSalesInvoiceHeadersHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalPaginateSalesInvoiceHeadersController],
      providers: [
        {
          provide: BusinessPartnerPortalPaginateSalesInvoiceHeadersHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalPaginateSalesInvoiceHeadersController>(
        BusinessPartnerPortalPaginateSalesInvoiceHeadersController,
      );
    handler =
      module.get<BusinessPartnerPortalPaginateSalesInvoiceHeadersHandler>(
        BusinessPartnerPortalPaginateSalesInvoiceHeadersHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginateSalesInvoiceHeadersController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a businessPartnerPortalMockSalesInvoiceHeaderData', async () => {
      jest.spyOn(handler, 'main').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: 5,
              count: 5,
              rows: businessPartnerPortalMockSalesInvoiceHeaderData,
            }),
          ),
      );
      expect(await controller.main()).toStrictEqual({
        total: 5,
        count: 5,
        rows: businessPartnerPortalMockSalesInvoiceHeaderData,
      });
    });
  });
});
