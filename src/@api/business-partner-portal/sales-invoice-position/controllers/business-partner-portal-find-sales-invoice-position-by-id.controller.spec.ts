/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSalesInvoicePositionByIdController,
  BusinessPartnerPortalFindSalesInvoicePositionByIdHandler,
} from '@api/business-partner-portal/sales-invoice-position';
import { businessPartnerPortalMockSalesInvoicePositionData } from '@app/business-partner-portal/sales-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSalesInvoicePositionByIdController', () => {
  let controller: BusinessPartnerPortalFindSalesInvoicePositionByIdController;
  let handler: BusinessPartnerPortalFindSalesInvoicePositionByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [
        BusinessPartnerPortalFindSalesInvoicePositionByIdController,
      ],
      providers: [
        {
          provide: BusinessPartnerPortalFindSalesInvoicePositionByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalFindSalesInvoicePositionByIdController>(
        BusinessPartnerPortalFindSalesInvoicePositionByIdController,
      );
    handler =
      module.get<BusinessPartnerPortalFindSalesInvoicePositionByIdHandler>(
        BusinessPartnerPortalFindSalesInvoicePositionByIdHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindSalesInvoicePositionByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an salesInvoicePosition by id', async () => {
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
          businessPartnerPortalMockSalesInvoicePositionData[0].id,
        ),
      ).toBe(businessPartnerPortalMockSalesInvoicePositionData[0]);
    });
  });
});
