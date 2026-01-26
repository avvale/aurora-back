/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalDeleteSalesInvoicePositionByIdController,
  BusinessPartnerPortalDeleteSalesInvoicePositionByIdHandler,
} from '@api/business-partner-portal/sales-invoice-position';
import { businessPartnerPortalMockSalesInvoicePositionData } from '@app/business-partner-portal/sales-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeleteSalesInvoicePositionByIdController', () => {
  let controller: BusinessPartnerPortalDeleteSalesInvoicePositionByIdController;
  let handler: BusinessPartnerPortalDeleteSalesInvoicePositionByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [
        BusinessPartnerPortalDeleteSalesInvoicePositionByIdController,
      ],
      providers: [
        {
          provide: BusinessPartnerPortalDeleteSalesInvoicePositionByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalDeleteSalesInvoicePositionByIdController>(
        BusinessPartnerPortalDeleteSalesInvoicePositionByIdController,
      );
    handler =
      module.get<BusinessPartnerPortalDeleteSalesInvoicePositionByIdHandler>(
        BusinessPartnerPortalDeleteSalesInvoicePositionByIdHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeleteSalesInvoicePositionByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an salesInvoicePosition deleted', async () => {
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
