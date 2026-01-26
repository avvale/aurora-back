/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSalesInvoicePositionController,
  BusinessPartnerPortalFindSalesInvoicePositionHandler,
} from '@api/business-partner-portal/sales-invoice-position';
import { businessPartnerPortalMockSalesInvoicePositionData } from '@app/business-partner-portal/sales-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSalesInvoicePositionController', () => {
  let controller: BusinessPartnerPortalFindSalesInvoicePositionController;
  let handler: BusinessPartnerPortalFindSalesInvoicePositionHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalFindSalesInvoicePositionController],
      providers: [
        {
          provide: BusinessPartnerPortalFindSalesInvoicePositionHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalFindSalesInvoicePositionController>(
        BusinessPartnerPortalFindSalesInvoicePositionController,
      );
    handler = module.get<BusinessPartnerPortalFindSalesInvoicePositionHandler>(
      BusinessPartnerPortalFindSalesInvoicePositionHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindSalesInvoicePositionController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a salesInvoicePosition', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockSalesInvoicePositionData[0]),
            ),
        );
      expect(await controller.main()).toBe(
        businessPartnerPortalMockSalesInvoicePositionData[0],
      );
    });
  });
});
