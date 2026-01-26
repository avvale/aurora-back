/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalDeletePurchaseInvoicePositionByIdCommand,
  businessPartnerPortalMockPurchaseInvoicePositionData,
} from '@app/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalDeletePurchaseInvoicePositionByIdCommandHandler } from '@app/business-partner-portal/purchase-invoice-position/application/delete/business-partner-portal-delete-purchase-invoice-position-by-id.command-handler';
import { BusinessPartnerPortalDeletePurchaseInvoicePositionByIdService } from '@app/business-partner-portal/purchase-invoice-position/application/delete/business-partner-portal-delete-purchase-invoice-position-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePurchaseInvoicePositionByIdCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalDeletePurchaseInvoicePositionByIdCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalDeletePurchaseInvoicePositionByIdCommandHandler,
        {
          provide:
            BusinessPartnerPortalDeletePurchaseInvoicePositionByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalDeletePurchaseInvoicePositionByIdCommandHandler>(
        BusinessPartnerPortalDeletePurchaseInvoicePositionByIdCommandHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePurchaseInvoicePositionByIdCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should create the value object id and pass them as parameters to the BusinessPartnerPortalDeletePurchaseInvoicePositionByIdService', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalDeletePurchaseInvoicePositionByIdCommand(
            businessPartnerPortalMockPurchaseInvoicePositionData[0].id,
          ),
        ),
      ).toBe(undefined);
    });
  });
});
