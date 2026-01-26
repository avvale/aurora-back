/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalGetSalesInvoiceHeadersController,
  BusinessPartnerPortalGetSalesInvoiceHeadersHandler,
} from '@api/business-partner-portal/sales-invoice-header';
import { businessPartnerPortalMockSalesInvoiceHeaderData } from '@app/business-partner-portal/sales-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetSalesInvoiceHeadersController', () => {
  let controller: BusinessPartnerPortalGetSalesInvoiceHeadersController;
  let handler: BusinessPartnerPortalGetSalesInvoiceHeadersHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalGetSalesInvoiceHeadersController],
      providers: [
        {
          provide: BusinessPartnerPortalGetSalesInvoiceHeadersHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalGetSalesInvoiceHeadersController>(
        BusinessPartnerPortalGetSalesInvoiceHeadersController,
      );
    handler = module.get<BusinessPartnerPortalGetSalesInvoiceHeadersHandler>(
      BusinessPartnerPortalGetSalesInvoiceHeadersHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetSalesInvoiceHeadersController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a businessPartnerPortalMockSalesInvoiceHeaderData', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockSalesInvoiceHeaderData),
            ),
        );
      expect(await controller.main()).toBe(
        businessPartnerPortalMockSalesInvoiceHeaderData,
      );
    });
  });
});
