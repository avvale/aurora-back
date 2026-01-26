/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSalesInvoiceHeaderController,
  BusinessPartnerPortalFindSalesInvoiceHeaderHandler,
} from '@api/business-partner-portal/sales-invoice-header';
import { businessPartnerPortalMockSalesInvoiceHeaderData } from '@app/business-partner-portal/sales-invoice-header';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSalesInvoiceHeaderController', () => {
  let controller: BusinessPartnerPortalFindSalesInvoiceHeaderController;
  let handler: BusinessPartnerPortalFindSalesInvoiceHeaderHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalFindSalesInvoiceHeaderController],
      providers: [
        {
          provide: BusinessPartnerPortalFindSalesInvoiceHeaderHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalFindSalesInvoiceHeaderController>(
        BusinessPartnerPortalFindSalesInvoiceHeaderController,
      );
    handler = module.get<BusinessPartnerPortalFindSalesInvoiceHeaderHandler>(
      BusinessPartnerPortalFindSalesInvoiceHeaderHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindSalesInvoiceHeaderController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a salesInvoiceHeader', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockSalesInvoiceHeaderData[0]),
            ),
        );
      expect(await controller.main()).toBe(
        businessPartnerPortalMockSalesInvoiceHeaderData[0],
      );
    });
  });
});
