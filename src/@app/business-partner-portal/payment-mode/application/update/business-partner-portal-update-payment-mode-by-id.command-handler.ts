/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { BusinessPartnerPortalUpdatePaymentModeByIdCommand } from '@app/business-partner-portal/payment-mode';
import { BusinessPartnerPortalUpdatePaymentModeByIdService } from '@app/business-partner-portal/payment-mode/application/update/business-partner-portal-update-payment-mode-by-id.service';
import {
  BusinessPartnerPortalPaymentModeCode,
  BusinessPartnerPortalPaymentModeDescription,
  BusinessPartnerPortalPaymentModeExternalId,
  BusinessPartnerPortalPaymentModeId,
  BusinessPartnerPortalPaymentModeIsAccountNumberRequired,
  BusinessPartnerPortalPaymentModeIsActive,
  BusinessPartnerPortalPaymentModeIsRecurringSupported,
  BusinessPartnerPortalPaymentModeIsRoutingInfoRequired,
  BusinessPartnerPortalPaymentModeMeta,
  BusinessPartnerPortalPaymentModeName,
  BusinessPartnerPortalPaymentModeSort,
  BusinessPartnerPortalPaymentModeType,
} from '@app/business-partner-portal/payment-mode/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(BusinessPartnerPortalUpdatePaymentModeByIdCommand)
export class BusinessPartnerPortalUpdatePaymentModeByIdCommandHandler
  implements ICommandHandler<BusinessPartnerPortalUpdatePaymentModeByIdCommand>
{
  constructor(
    private readonly updatePaymentModeByIdService: BusinessPartnerPortalUpdatePaymentModeByIdService,
  ) {}

  async execute(
    command: BusinessPartnerPortalUpdatePaymentModeByIdCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.updatePaymentModeByIdService.main(
      {
        id: new BusinessPartnerPortalPaymentModeId(command.payload.id),
        externalId: new BusinessPartnerPortalPaymentModeExternalId(
          command.payload.externalId,
        ),
        code: new BusinessPartnerPortalPaymentModeCode(command.payload.code),
        name: new BusinessPartnerPortalPaymentModeName(command.payload.name, {
          undefinable: true,
        }),
        description: new BusinessPartnerPortalPaymentModeDescription(
          command.payload.description,
        ),
        type: new BusinessPartnerPortalPaymentModeType(command.payload.type, {
          undefinable: true,
        }),
        isAccountNumberRequired:
          new BusinessPartnerPortalPaymentModeIsAccountNumberRequired(
            command.payload.isAccountNumberRequired,
            { undefinable: true },
          ),
        isRoutingInfoRequired:
          new BusinessPartnerPortalPaymentModeIsRoutingInfoRequired(
            command.payload.isRoutingInfoRequired,
            { undefinable: true },
          ),
        isRecurringSupported:
          new BusinessPartnerPortalPaymentModeIsRecurringSupported(
            command.payload.isRecurringSupported,
            { undefinable: true },
          ),
        sort: new BusinessPartnerPortalPaymentModeSort(command.payload.sort),
        isActive: new BusinessPartnerPortalPaymentModeIsActive(
          command.payload.isActive,
          { undefinable: true },
        ),
        meta: new BusinessPartnerPortalPaymentModeMeta(command.payload.meta),
      },
      command.constraint,
      command.cQMetadata,
    );
  }
}
