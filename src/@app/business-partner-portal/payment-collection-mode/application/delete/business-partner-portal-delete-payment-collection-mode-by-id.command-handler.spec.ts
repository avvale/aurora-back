/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalDeletePaymentCollectionModeByIdCommand,
  businessPartnerPortalMockPaymentCollectionModeData,
} from '@app/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalDeletePaymentCollectionModeByIdCommandHandler } from '@app/business-partner-portal/payment-collection-mode/application/delete/business-partner-portal-delete-payment-collection-mode-by-id.command-handler';
import { BusinessPartnerPortalDeletePaymentCollectionModeByIdService } from '@app/business-partner-portal/payment-collection-mode/application/delete/business-partner-portal-delete-payment-collection-mode-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePaymentCollectionModeByIdCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalDeletePaymentCollectionModeByIdCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalDeletePaymentCollectionModeByIdCommandHandler,
        {
          provide: BusinessPartnerPortalDeletePaymentCollectionModeByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalDeletePaymentCollectionModeByIdCommandHandler>(
        BusinessPartnerPortalDeletePaymentCollectionModeByIdCommandHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePaymentCollectionModeByIdCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should create the value object id and pass them as parameters to the BusinessPartnerPortalDeletePaymentCollectionModeByIdService', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalDeletePaymentCollectionModeByIdCommand(
            businessPartnerPortalMockPaymentCollectionModeData[0].id,
          ),
        ),
      ).toBe(undefined);
    });
  });
});
