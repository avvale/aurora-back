/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePaymentCollectionModeCommand,
  businessPartnerPortalMockPaymentCollectionModeData,
} from '@app/business-partner-portal/payment-collection-mode';
import { Test, TestingModule } from '@nestjs/testing';
import { BusinessPartnerPortalCreatePaymentCollectionModeCommandHandler } from './business-partner-portal-create-payment-collection-mode.command-handler';
import { BusinessPartnerPortalCreatePaymentCollectionModeService } from './business-partner-portal-create-payment-collection-mode.service';

describe('BusinessPartnerPortalCreatePaymentCollectionModeCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalCreatePaymentCollectionModeCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalCreatePaymentCollectionModeCommandHandler,
        {
          provide: BusinessPartnerPortalCreatePaymentCollectionModeService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalCreatePaymentCollectionModeCommandHandler>(
        BusinessPartnerPortalCreatePaymentCollectionModeCommandHandler,
      );
  });

  describe('main', () => {
    test('CreatePaymentCollectionModeCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should create the values objects and pass them as parameters to the BusinessPartnerPortalCreatePaymentCollectionModeService', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalCreatePaymentCollectionModeCommand(
            {
              id: businessPartnerPortalMockPaymentCollectionModeData[0].id,
              rowId:
                businessPartnerPortalMockPaymentCollectionModeData[0].rowId,
              businessPartnerId:
                businessPartnerPortalMockPaymentCollectionModeData[0]
                  .businessPartnerId,
              paymentModeId:
                businessPartnerPortalMockPaymentCollectionModeData[0]
                  .paymentModeId,
              label:
                businessPartnerPortalMockPaymentCollectionModeData[0].label,
              accountNumber:
                businessPartnerPortalMockPaymentCollectionModeData[0]
                  .accountNumber,
              accountHolderName:
                businessPartnerPortalMockPaymentCollectionModeData[0]
                  .accountHolderName,
              bankName:
                businessPartnerPortalMockPaymentCollectionModeData[0].bankName,
              routingNumber:
                businessPartnerPortalMockPaymentCollectionModeData[0]
                  .routingNumber,
              iban: businessPartnerPortalMockPaymentCollectionModeData[0].iban,
              swiftCode:
                businessPartnerPortalMockPaymentCollectionModeData[0].swiftCode,
              currencyCode:
                businessPartnerPortalMockPaymentCollectionModeData[0]
                  .currencyCode,
              expirationDate:
                businessPartnerPortalMockPaymentCollectionModeData[0]
                  .expirationDate,
              isPrimary:
                businessPartnerPortalMockPaymentCollectionModeData[0].isPrimary,
              isActive:
                businessPartnerPortalMockPaymentCollectionModeData[0].isActive,
              notes:
                businessPartnerPortalMockPaymentCollectionModeData[0].notes,
              lastUsedAt:
                businessPartnerPortalMockPaymentCollectionModeData[0]
                  .lastUsedAt,
            },
            { timezone: process.env.TZ },
          ),
        ),
      ).toBe(undefined);
    });
  });
});
