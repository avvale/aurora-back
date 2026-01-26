/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { BusinessPartnerPortalCreatePaymentModeCommand } from '@app/business-partner-portal/payment-mode';
import { BusinessPartnerPortalCreatePaymentModeService } from '@app/business-partner-portal/payment-mode/application/create/business-partner-portal-create-payment-mode.service';
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

@CommandHandler(BusinessPartnerPortalCreatePaymentModeCommand)
export class BusinessPartnerPortalCreatePaymentModeCommandHandler
  implements ICommandHandler<BusinessPartnerPortalCreatePaymentModeCommand>
{
  constructor(
    private readonly createPaymentModeService: BusinessPartnerPortalCreatePaymentModeService,
  ) {}

  async execute(
    command: BusinessPartnerPortalCreatePaymentModeCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.createPaymentModeService.main(
      {
        id: new BusinessPartnerPortalPaymentModeId(command.payload.id),
        externalId: new BusinessPartnerPortalPaymentModeExternalId(
          command.payload.externalId,
        ),
        code: new BusinessPartnerPortalPaymentModeCode(command.payload.code),
        name: new BusinessPartnerPortalPaymentModeName(command.payload.name),
        description: new BusinessPartnerPortalPaymentModeDescription(
          command.payload.description,
        ),
        type: new BusinessPartnerPortalPaymentModeType(command.payload.type),
        isAccountNumberRequired:
          new BusinessPartnerPortalPaymentModeIsAccountNumberRequired(
            command.payload.isAccountNumberRequired,
          ),
        isRoutingInfoRequired:
          new BusinessPartnerPortalPaymentModeIsRoutingInfoRequired(
            command.payload.isRoutingInfoRequired,
          ),
        isRecurringSupported:
          new BusinessPartnerPortalPaymentModeIsRecurringSupported(
            command.payload.isRecurringSupported,
          ),
        sort: new BusinessPartnerPortalPaymentModeSort(command.payload.sort),
        isActive: new BusinessPartnerPortalPaymentModeIsActive(
          command.payload.isActive,
        ),
        meta: new BusinessPartnerPortalPaymentModeMeta(command.payload.meta),
      },
      command.cQMetadata,
    );
  }
}
