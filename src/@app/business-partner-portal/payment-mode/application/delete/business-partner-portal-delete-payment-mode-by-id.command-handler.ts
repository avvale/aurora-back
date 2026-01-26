/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { BusinessPartnerPortalDeletePaymentModeByIdCommand } from '@app/business-partner-portal/payment-mode';
import { BusinessPartnerPortalDeletePaymentModeByIdService } from '@app/business-partner-portal/payment-mode/application/delete/business-partner-portal-delete-payment-mode-by-id.service';
import { BusinessPartnerPortalPaymentModeId } from '@app/business-partner-portal/payment-mode/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(BusinessPartnerPortalDeletePaymentModeByIdCommand)
export class BusinessPartnerPortalDeletePaymentModeByIdCommandHandler
  implements ICommandHandler<BusinessPartnerPortalDeletePaymentModeByIdCommand>
{
  constructor(
    private readonly deletePaymentModeByIdService: BusinessPartnerPortalDeletePaymentModeByIdService,
  ) {}

  async execute(
    command: BusinessPartnerPortalDeletePaymentModeByIdCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.deletePaymentModeByIdService.main(
      new BusinessPartnerPortalPaymentModeId(command.id),
      command.constraint,
      command.cQMetadata,
    );
  }
}
