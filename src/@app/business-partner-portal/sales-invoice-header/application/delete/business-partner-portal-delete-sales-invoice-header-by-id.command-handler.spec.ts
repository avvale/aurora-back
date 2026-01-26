/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdCommand,
  businessPartnerPortalMockSalesInvoiceHeaderData,
} from '@app/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdCommandHandler } from '@app/business-partner-portal/sales-invoice-header/application/delete/business-partner-portal-delete-sales-invoice-header-by-id.command-handler';
import { BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdService } from '@app/business-partner-portal/sales-invoice-header/application/delete/business-partner-portal-delete-sales-invoice-header-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdCommandHandler,
        {
          provide: BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdCommandHandler>(
        BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdCommandHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should create the value object id and pass them as parameters to the BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdService', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdCommand(
            businessPartnerPortalMockSalesInvoiceHeaderData[0].id,
          ),
        ),
      ).toBe(undefined);
    });
  });
});
