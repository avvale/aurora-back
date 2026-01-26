/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalUpdatePaymentCollectionModeByIdCommand } from '@app/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalUpdatePaymentCollectionModeByIdService } from '@app/business-partner-portal/payment-collection-mode/application/update/business-partner-portal-update-payment-collection-mode-by-id.service';
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

@CommandHandler(BusinessPartnerPortalUpdatePaymentCollectionModeByIdCommand)
export class BusinessPartnerPortalUpdatePaymentCollectionModeByIdCommandHandler
  implements
    ICommandHandler<BusinessPartnerPortalUpdatePaymentCollectionModeByIdCommand>
{
  constructor(
    private readonly updatePaymentCollectionModeByIdService: BusinessPartnerPortalUpdatePaymentCollectionModeByIdService,
  ) {}

  async execute(
    command: BusinessPartnerPortalUpdatePaymentCollectionModeByIdCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.updatePaymentCollectionModeByIdService.main(
      {
        id: new BusinessPartnerPortalPaymentCollectionModeId(
          command.payload.id,
        ),
        businessPartnerId:
          new BusinessPartnerPortalPaymentCollectionModeBusinessPartnerId(
            command.payload.businessPartnerId,
            { undefinable: true },
          ),
        paymentModeId:
          new BusinessPartnerPortalPaymentCollectionModePaymentModeId(
            command.payload.paymentModeId,
            { undefinable: true },
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
          { undefinable: true },
        ),
        isActive: new BusinessPartnerPortalPaymentCollectionModeIsActive(
          command.payload.isActive,
          { undefinable: true },
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
      command.constraint,
      command.cQMetadata,
    );
  }
}
