/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalDeletePaymentCollectionModeByIdCommand } from '@app/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalDeletePaymentCollectionModeByIdService } from '@app/business-partner-portal/payment-collection-mode/application/delete/business-partner-portal-delete-payment-collection-mode-by-id.service';
import { BusinessPartnerPortalPaymentCollectionModeId } from '@app/business-partner-portal/payment-collection-mode/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(BusinessPartnerPortalDeletePaymentCollectionModeByIdCommand)
export class BusinessPartnerPortalDeletePaymentCollectionModeByIdCommandHandler
  implements
    ICommandHandler<BusinessPartnerPortalDeletePaymentCollectionModeByIdCommand>
{
  constructor(
    private readonly deletePaymentCollectionModeByIdService: BusinessPartnerPortalDeletePaymentCollectionModeByIdService,
  ) {}

  async execute(
    command: BusinessPartnerPortalDeletePaymentCollectionModeByIdCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.deletePaymentCollectionModeByIdService.main(
      new BusinessPartnerPortalPaymentCollectionModeId(command.id),
      command.constraint,
      command.cQMetadata,
    );
  }
}
