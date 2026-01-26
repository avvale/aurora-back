/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalUpdateSalesInvoicePositionByIdController,
  BusinessPartnerPortalUpdateSalesInvoicePositionByIdHandler,
} from '@api/business-partner-portal/sales-invoice-position';
import { businessPartnerPortalMockSalesInvoicePositionData } from '@app/business-partner-portal/sales-invoice-position';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdateSalesInvoicePositionByIdController', () => {
  let controller: BusinessPartnerPortalUpdateSalesInvoicePositionByIdController;
  let handler: BusinessPartnerPortalUpdateSalesInvoicePositionByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [
        BusinessPartnerPortalUpdateSalesInvoicePositionByIdController,
      ],
      providers: [
        {
          provide: BusinessPartnerPortalUpdateSalesInvoicePositionByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalUpdateSalesInvoicePositionByIdController>(
        BusinessPartnerPortalUpdateSalesInvoicePositionByIdController,
      );
    handler =
      module.get<BusinessPartnerPortalUpdateSalesInvoicePositionByIdHandler>(
        BusinessPartnerPortalUpdateSalesInvoicePositionByIdHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdateSalesInvoicePositionByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a salesInvoicePosition updated', async () => {
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
