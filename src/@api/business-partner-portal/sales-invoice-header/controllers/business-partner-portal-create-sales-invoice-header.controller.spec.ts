/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalCreateSalesInvoiceHeaderController,
  BusinessPartnerPortalCreateSalesInvoiceHeaderHandler,
} from '@api/business-partner-portal/sales-invoice-header';
import { businessPartnerPortalMockSalesInvoiceHeaderData } from '@app/business-partner-portal/sales-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreateSalesInvoiceHeaderController', () => {
  let controller: BusinessPartnerPortalCreateSalesInvoiceHeaderController;
  let handler: BusinessPartnerPortalCreateSalesInvoiceHeaderHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalCreateSalesInvoiceHeaderController],
      providers: [
        {
          provide: BusinessPartnerPortalCreateSalesInvoiceHeaderHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalCreateSalesInvoiceHeaderController>(
        BusinessPartnerPortalCreateSalesInvoiceHeaderController,
      );
    handler = module.get<BusinessPartnerPortalCreateSalesInvoiceHeaderHandler>(
      BusinessPartnerPortalCreateSalesInvoiceHeaderHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreateSalesInvoiceHeaderController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an salesInvoiceHeader created', async () => {
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
          businessPartnerPortalMockSalesInvoiceHeaderData[0],
        ),
      ).toBe(businessPartnerPortalMockSalesInvoiceHeaderData[0]);
    });
  });
});
