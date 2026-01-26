/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalCreatePaymentCollectionModeCommand } from '@app/business-partner-portal/payment-collection-mode';
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
  BusinessPartnerPortalPaymentCollectionModeSwiftCode,
} from '@app/business-partner-portal/payment-collection-mode/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(BusinessPartnerPortalCreatePaymentCollectionModeCommand)
export class BusinessPartnerPortalCreatePaymentCollectionModeCommandHandler
  implements
    ICommandHandler<BusinessPartnerPortalCreatePaymentCollectionModeCommand>
{
  constructor(
    private readonly createPaymentCollectionModeService: BusinessPartnerPortalCreatePaymentCollectionModeService,
  ) {}

  async execute(
    command: BusinessPartnerPortalCreatePaymentCollectionModeCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.createPaymentCollectionModeService.main(
      {
        id: new BusinessPartnerPortalPaymentCollectionModeId(
          command.payload.id,
        ),
        businessPartnerId:
          new BusinessPartnerPortalPaymentCollectionModeBusinessPartnerId(
            command.payload.businessPartnerId,
          ),
        paymentModeId:
          new BusinessPartnerPortalPaymentCollectionModePaymentModeId(
            command.payload.paymentModeId,
          ),
        label: new BusinessPartnerPortalPaymentCollectionModeLabel(
          command.payload.label,
        ),
        accountNumber:
          new BusinessPartnerPortalPaymentCollectionModeAccountNumber(
            command.payload.accountNumber,
          ),
        accountHolderName:
          new BusinessPartnerPortalPaymentCollectionModeAccountHolderName(
            command.payload.accountHolderName,
          ),
        bankName: new BusinessPartnerPortalPaymentCollectionModeBankName(
          command.payload.bankName,
        ),
        routingNumber:
          new BusinessPartnerPortalPaymentCollectionModeRoutingNumber(
            command.payload.routingNumber,
          ),
        iban: new BusinessPartnerPortalPaymentCollectionModeIban(
          command.payload.iban,
        ),
        swiftCode: new BusinessPartnerPortalPaymentCollectionModeSwiftCode(
          command.payload.swiftCode,
        ),
        currencyCode:
          new BusinessPartnerPortalPaymentCollectionModeCurrencyCode(
            command.payload.currencyCode,
          ),
        expirationDate:
          new BusinessPartnerPortalPaymentCollectionModeExpirationDate(
            command.payload.expirationDate,
          ),
        isPrimary: new BusinessPartnerPortalPaymentCollectionModeIsPrimary(
          command.payload.isPrimary,
        ),
        isActive: new BusinessPartnerPortalPaymentCollectionModeIsActive(
          command.payload.isActive,
        ),
        notes: new BusinessPartnerPortalPaymentCollectionModeNotes(
          command.payload.notes,
        ),
        lastUsedAt: new BusinessPartnerPortalPaymentCollectionModeLastUsedAt(
          command.payload.lastUsedAt,
          {},
          { addTimezone: command.cQMetadata?.timezone },
        ),
      },
      command.cQMetadata,
    );
  }
}
