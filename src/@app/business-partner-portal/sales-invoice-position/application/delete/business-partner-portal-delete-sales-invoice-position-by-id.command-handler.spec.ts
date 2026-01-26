/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalDeleteSalesInvoicePositionByIdCommand,
  businessPartnerPortalMockSalesInvoicePositionData,
} from '@app/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalDeleteSalesInvoicePositionByIdCommandHandler } from '@app/business-partner-portal/sales-invoice-position/application/delete/business-partner-portal-delete-sales-invoice-position-by-id.command-handler';
import { BusinessPartnerPortalDeleteSalesInvoicePositionByIdService } from '@app/business-partner-portal/sales-invoice-position/application/delete/business-partner-portal-delete-sales-invoice-position-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeleteSalesInvoicePositionByIdCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalDeleteSalesInvoicePositionByIdCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalDeleteSalesInvoicePositionByIdCommandHandler,
        {
          provide: BusinessPartnerPortalDeleteSalesInvoicePositionByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalDeleteSalesInvoicePositionByIdCommandHandler>(
        BusinessPartnerPortalDeleteSalesInvoicePositionByIdCommandHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeleteSalesInvoicePositionByIdCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should create the value object id and pass them as parameters to the BusinessPartnerPortalDeleteSalesInvoicePositionByIdService', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalDeleteSalesInvoicePositionByIdCommand(
            businessPartnerPortalMockSalesInvoicePositionData[0].id,
          ),
        ),
      ).toBe(undefined);
    });
  });
});
