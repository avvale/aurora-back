/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  businessPartnerPortalMockPaymentCollectionModeData,
  BusinessPartnerPortalUpdatePaymentCollectionModeByIdCommand,
} from '@app/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalUpdatePaymentCollectionModeByIdCommandHandler } from '@app/business-partner-portal/payment-collection-mode/application/update/business-partner-portal-update-payment-collection-mode-by-id.command-handler';
import { BusinessPartnerPortalUpdatePaymentCollectionModeByIdService } from '@app/business-partner-portal/payment-collection-mode/application/update/business-partner-portal-update-payment-collection-mode-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePaymentCollectionModeByIdCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalUpdatePaymentCollectionModeByIdCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalUpdatePaymentCollectionModeByIdCommandHandler,
        {
          provide: BusinessPartnerPortalUpdatePaymentCollectionModeByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalUpdatePaymentCollectionModeByIdCommandHandler>(
        BusinessPartnerPortalUpdatePaymentCollectionModeByIdCommandHandler,
      );
  });

  describe('main', () => {
    test('UpdatePaymentCollectionModeByIdCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should return an paymentCollectionMode created', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalUpdatePaymentCollectionModeByIdCommand(
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
            {},
            { timezone: process.env.TZ },
          ),
        ),
      ).toBe(undefined);
    });
  });
});
