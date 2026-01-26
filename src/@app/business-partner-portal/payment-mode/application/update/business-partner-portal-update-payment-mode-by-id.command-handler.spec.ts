/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  businessPartnerPortalMockPaymentModeData,
  BusinessPartnerPortalUpdatePaymentModeByIdCommand,
} from '@app/business-partner-portal/payment-mode';
import { BusinessPartnerPortalUpdatePaymentModeByIdCommandHandler } from '@app/business-partner-portal/payment-mode/application/update/business-partner-portal-update-payment-mode-by-id.command-handler';
import { BusinessPartnerPortalUpdatePaymentModeByIdService } from '@app/business-partner-portal/payment-mode/application/update/business-partner-portal-update-payment-mode-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePaymentModeByIdCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalUpdatePaymentModeByIdCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalUpdatePaymentModeByIdCommandHandler,
        {
          provide: BusinessPartnerPortalUpdatePaymentModeByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalUpdatePaymentModeByIdCommandHandler>(
        BusinessPartnerPortalUpdatePaymentModeByIdCommandHandler,
      );
  });

  describe('main', () => {
    test('UpdatePaymentModeByIdCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should return an paymentMode created', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalUpdatePaymentModeByIdCommand(
            {
              id: businessPartnerPortalMockPaymentModeData[0].id,
              rowId: businessPartnerPortalMockPaymentModeData[0].rowId,
              externalId:
                businessPartnerPortalMockPaymentModeData[0].externalId,
              code: businessPartnerPortalMockPaymentModeData[0].code,
              name: businessPartnerPortalMockPaymentModeData[0].name,
              description:
                businessPartnerPortalMockPaymentModeData[0].description,
              type: businessPartnerPortalMockPaymentModeData[0].type,
              isAccountNumberRequired:
                businessPartnerPortalMockPaymentModeData[0]
                  .isAccountNumberRequired,
              isRoutingInfoRequired:
                businessPartnerPortalMockPaymentModeData[0]
                  .isRoutingInfoRequired,
              isRecurringSupported:
                businessPartnerPortalMockPaymentModeData[0]
                  .isRecurringSupported,
              sort: businessPartnerPortalMockPaymentModeData[0].sort,
              isActive: businessPartnerPortalMockPaymentModeData[0].isActive,
              meta: businessPartnerPortalMockPaymentModeData[0].meta,
            },
            {},
            { timezone: process.env.TZ },
          ),
        ),
      ).toBe(undefined);
    });
  });
});
