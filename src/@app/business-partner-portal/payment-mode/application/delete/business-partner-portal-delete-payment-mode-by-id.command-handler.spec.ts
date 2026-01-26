/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalDeletePaymentModeByIdCommand,
  businessPartnerPortalMockPaymentModeData,
} from '@app/business-partner-portal/payment-mode';
import { BusinessPartnerPortalDeletePaymentModeByIdCommandHandler } from '@app/business-partner-portal/payment-mode/application/delete/business-partner-portal-delete-payment-mode-by-id.command-handler';
import { BusinessPartnerPortalDeletePaymentModeByIdService } from '@app/business-partner-portal/payment-mode/application/delete/business-partner-portal-delete-payment-mode-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePaymentModeByIdCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalDeletePaymentModeByIdCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalDeletePaymentModeByIdCommandHandler,
        {
          provide: BusinessPartnerPortalDeletePaymentModeByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalDeletePaymentModeByIdCommandHandler>(
        BusinessPartnerPortalDeletePaymentModeByIdCommandHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePaymentModeByIdCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should create the value object id and pass them as parameters to the BusinessPartnerPortalDeletePaymentModeByIdService', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalDeletePaymentModeByIdCommand(
            businessPartnerPortalMockPaymentModeData[0].id,
          ),
        ),
      ).toBe(undefined);
    });
  });
});
