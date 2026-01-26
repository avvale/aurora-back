/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentCollectionModeRepository,
  businessPartnerPortalMockPaymentCollectionModeData,
  BusinessPartnerPortalMockPaymentCollectionModeRepository,
} from '@app/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalCreatePaymentCollectionModeService } from '@app/business-partner-portal/payment-collection-mode/application/create/business-partner-portal-create-payment-collection-mode.service';
import {
  BusinessPartnerPortalPaymentCollectionModeAccountHolderName,
  BusinessPartnerPortalPaymentCollectionModeAccountNumber,
  BusinessPartnerPortalPaymentCollectionModeBankName,
  BusinessPartnerPortalPaymentCollectionModeBusinessPartnerId,
  BusinessPartnerPortalPaymentCollectionModeCurrencyCode,
  BusinessPartnerPortalPaymentCollectionModeExpirationDate,
  BusinessPartnerPortalPaymentCollectionModeIban,
  BusinessPartnerPortalPaymentCollectionModeId,
  BusinessPartnerPortalPaymentCollectionModeIsActive,
  BusinessPartnerPortalPaymentCollectionModeIsPrimary,
  BusinessPartnerPortalPaymentCollectionModeLabel,
  BusinessPartnerPortalPaymentCollectionModeLastUsedAt,
  BusinessPartnerPortalPaymentCollectionModeNotes,
  BusinessPartnerPortalPaymentCollectionModePaymentModeId,
  BusinessPartnerPortalPaymentCollectionModeRoutingNumber,
  BusinessPartnerPortalPaymentCollectionModeRowId,
  BusinessPartnerPortalPaymentCollectionModeSwiftCode,
} from '@app/business-partner-portal/payment-collection-mode/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreatePaymentCollectionModeService', () => {
  let service: BusinessPartnerPortalCreatePaymentCollectionModeService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalCreatePaymentCollectionModeService,
        BusinessPartnerPortalMockPaymentCollectionModeRepository,
        {
          provide: BusinessPartnerPortalIPaymentCollectionModeRepository,
          useValue: {
            create: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(
      BusinessPartnerPortalCreatePaymentCollectionModeService,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreatePaymentCollectionModeService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should create a paymentCollectionMode and emit event', async () => {
      expect(
        await service.main({
          id: new BusinessPartnerPortalPaymentCollectionModeId(
            businessPartnerPortalMockPaymentCollectionModeData[0].id,
          ),
          rowId: new BusinessPartnerPortalPaymentCollectionModeRowId(
            businessPartnerPortalMockPaymentCollectionModeData[0].rowId,
          ),
          businessPartnerId:
            new BusinessPartnerPortalPaymentCollectionModeBusinessPartnerId(
              businessPartnerPortalMockPaymentCollectionModeData[0].businessPartnerId,
            ),
          paymentModeId:
            new BusinessPartnerPortalPaymentCollectionModePaymentModeId(
              businessPartnerPortalMockPaymentCollectionModeData[0].paymentModeId,
            ),
          label: new BusinessPartnerPortalPaymentCollectionModeLabel(
            businessPartnerPortalMockPaymentCollectionModeData[0].label,
          ),
          accountNumber:
            new BusinessPartnerPortalPaymentCollectionModeAccountNumber(
              businessPartnerPortalMockPaymentCollectionModeData[0].accountNumber,
            ),
          accountHolderName:
            new BusinessPartnerPortalPaymentCollectionModeAccountHolderName(
              businessPartnerPortalMockPaymentCollectionModeData[0].accountHolderName,
            ),
          bankName: new BusinessPartnerPortalPaymentCollectionModeBankName(
            businessPartnerPortalMockPaymentCollectionModeData[0].bankName,
          ),
          routingNumber:
            new BusinessPartnerPortalPaymentCollectionModeRoutingNumber(
              businessPartnerPortalMockPaymentCollectionModeData[0].routingNumber,
            ),
          iban: new BusinessPartnerPortalPaymentCollectionModeIban(
            businessPartnerPortalMockPaymentCollectionModeData[0].iban,
          ),
          swiftCode: new BusinessPartnerPortalPaymentCollectionModeSwiftCode(
            businessPartnerPortalMockPaymentCollectionModeData[0].swiftCode,
          ),
          currencyCode:
            new BusinessPartnerPortalPaymentCollectionModeCurrencyCode(
              businessPartnerPortalMockPaymentCollectionModeData[0].currencyCode,
            ),
          expirationDate:
            new BusinessPartnerPortalPaymentCollectionModeExpirationDate(
              businessPartnerPortalMockPaymentCollectionModeData[0].expirationDate,
            ),
          isPrimary: new BusinessPartnerPortalPaymentCollectionModeIsPrimary(
            businessPartnerPortalMockPaymentCollectionModeData[0].isPrimary,
          ),
          isActive: new BusinessPartnerPortalPaymentCollectionModeIsActive(
            businessPartnerPortalMockPaymentCollectionModeData[0].isActive,
          ),
          notes: new BusinessPartnerPortalPaymentCollectionModeNotes(
            businessPartnerPortalMockPaymentCollectionModeData[0].notes,
          ),
          lastUsedAt: new BusinessPartnerPortalPaymentCollectionModeLastUsedAt(
            businessPartnerPortalMockPaymentCollectionModeData[0].lastUsedAt,
          ),
        }),
      ).toBe(undefined);
    });
  });
});
