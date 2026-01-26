/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePaymentModeCommand,
  businessPartnerPortalMockPaymentModeData,
} from '@app/business-partner-portal/payment-mode';
import { Test, TestingModule } from '@nestjs/testing';
import { BusinessPartnerPortalCreatePaymentModeCommandHandler } from './business-partner-portal-create-payment-mode.command-handler';
import { BusinessPartnerPortalCreatePaymentModeService } from './business-partner-portal-create-payment-mode.service';

describe('BusinessPartnerPortalCreatePaymentModeCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalCreatePaymentModeCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalCreatePaymentModeCommandHandler,
        {
          provide: BusinessPartnerPortalCreatePaymentModeService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalCreatePaymentModeCommandHandler>(
        BusinessPartnerPortalCreatePaymentModeCommandHandler,
      );
  });

  describe('main', () => {
    test('CreatePaymentModeCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should create the values objects and pass them as parameters to the BusinessPartnerPortalCreatePaymentModeService', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalCreatePaymentModeCommand(
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
            { timezone: process.env.TZ },
          ),
        ),
      ).toBe(undefined);
    });
  });
});
