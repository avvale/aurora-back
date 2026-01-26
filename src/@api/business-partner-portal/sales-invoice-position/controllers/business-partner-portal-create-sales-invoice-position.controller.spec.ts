/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalCreateSalesInvoicePositionController,
  BusinessPartnerPortalCreateSalesInvoicePositionHandler,
} from '@api/business-partner-portal/sales-invoice-position';
import { businessPartnerPortalMockSalesInvoicePositionData } from '@app/business-partner-portal/sales-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreateSalesInvoicePositionController', () => {
  let controller: BusinessPartnerPortalCreateSalesInvoicePositionController;
  let handler: BusinessPartnerPortalCreateSalesInvoicePositionHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalCreateSalesInvoicePositionController],
      providers: [
        {
          provide: BusinessPartnerPortalCreateSalesInvoicePositionHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalCreateSalesInvoicePositionController>(
        BusinessPartnerPortalCreateSalesInvoicePositionController,
      );
    handler =
      module.get<BusinessPartnerPortalCreateSalesInvoicePositionHandler>(
        BusinessPartnerPortalCreateSalesInvoicePositionHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreateSalesInvoicePositionController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an salesInvoicePosition created', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockSalesInvoicePositionData[0]),
            ),
        );
      expect(
        await controller.main(
          businessPartnerPortalMockSalesInvoicePositionData[0],
        ),
      ).toBe(businessPartnerPortalMockSalesInvoicePositionData[0]);
    });
  });
});
