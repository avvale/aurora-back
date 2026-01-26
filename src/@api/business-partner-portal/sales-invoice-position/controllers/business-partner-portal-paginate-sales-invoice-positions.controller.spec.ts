/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalPaginateSalesInvoicePositionsController,
  BusinessPartnerPortalPaginateSalesInvoicePositionsHandler,
} from '@api/business-partner-portal/sales-invoice-position';
import { businessPartnerPortalMockSalesInvoicePositionData } from '@app/business-partner-portal/sales-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginateSalesInvoicePositionsController', () => {
  let controller: BusinessPartnerPortalPaginateSalesInvoicePositionsController;
  let handler: BusinessPartnerPortalPaginateSalesInvoicePositionsHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [
        BusinessPartnerPortalPaginateSalesInvoicePositionsController,
      ],
      providers: [
        {
          provide: BusinessPartnerPortalPaginateSalesInvoicePositionsHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalPaginateSalesInvoicePositionsController>(
        BusinessPartnerPortalPaginateSalesInvoicePositionsController,
      );
    handler =
      module.get<BusinessPartnerPortalPaginateSalesInvoicePositionsHandler>(
        BusinessPartnerPortalPaginateSalesInvoicePositionsHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginateSalesInvoicePositionsController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a businessPartnerPortalMockSalesInvoicePositionData', async () => {
      jest.spyOn(handler, 'main').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: 5,
              count: 5,
              rows: businessPartnerPortalMockSalesInvoicePositionData,
            }),
          ),
      );
      expect(await controller.main()).toStrictEqual({
        total: 5,
        count: 5,
        rows: businessPartnerPortalMockSalesInvoicePositionData,
      });
    });
  });
});
