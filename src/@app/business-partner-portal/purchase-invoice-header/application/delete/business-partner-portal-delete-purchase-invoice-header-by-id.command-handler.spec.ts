/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdCommand,
  businessPartnerPortalMockPurchaseInvoiceHeaderData,
} from '@app/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdCommandHandler } from '@app/business-partner-portal/purchase-invoice-header/application/delete/business-partner-portal-delete-purchase-invoice-header-by-id.command-handler';
import { BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdService } from '@app/business-partner-portal/purchase-invoice-header/application/delete/business-partner-portal-delete-purchase-invoice-header-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdCommandHandler,
        {
          provide: BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdCommandHandler>(
        BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdCommandHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should create the value object id and pass them as parameters to the BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdService', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdCommand(
            businessPartnerPortalMockPurchaseInvoiceHeaderData[0].id,
          ),
        ),
      ).toBe(undefined);
    });
  });
});
