/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalGetSalesInvoicePositionsController,
  BusinessPartnerPortalGetSalesInvoicePositionsHandler,
} from '@api/business-partner-portal/sales-invoice-position';
import { businessPartnerPortalMockSalesInvoicePositionData } from '@app/business-partner-portal/sales-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetSalesInvoicePositionsController', () => {
  let controller: BusinessPartnerPortalGetSalesInvoicePositionsController;
  let handler: BusinessPartnerPortalGetSalesInvoicePositionsHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalGetSalesInvoicePositionsController],
      providers: [
        {
          provide: BusinessPartnerPortalGetSalesInvoicePositionsHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalGetSalesInvoicePositionsController>(
        BusinessPartnerPortalGetSalesInvoicePositionsController,
      );
    handler = module.get<BusinessPartnerPortalGetSalesInvoicePositionsHandler>(
      BusinessPartnerPortalGetSalesInvoicePositionsHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetSalesInvoicePositionsController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a businessPartnerPortalMockSalesInvoicePositionData', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockSalesInvoicePositionData),
            ),
        );
      expect(await controller.main()).toBe(
        businessPartnerPortalMockSalesInvoicePositionData,
      );
    });
  });
});
