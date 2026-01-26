/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalDeletePurchaseInvoicePositionByIdCommand } from '@app/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalDeletePurchaseInvoicePositionByIdService } from '@app/business-partner-portal/purchase-invoice-position/application/delete/business-partner-portal-delete-purchase-invoice-position-by-id.service';
import { BusinessPartnerPortalPurchaseInvoicePositionId } from '@app/business-partner-portal/purchase-invoice-position/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(BusinessPartnerPortalDeletePurchaseInvoicePositionByIdCommand)
export class BusinessPartnerPortalDeletePurchaseInvoicePositionByIdCommandHandler
  implements
    ICommandHandler<BusinessPartnerPortalDeletePurchaseInvoicePositionByIdCommand>
{
  constructor(
    private readonly deletePurchaseInvoicePositionByIdService: BusinessPartnerPortalDeletePurchaseInvoicePositionByIdService,
  ) {}

  async execute(
    command: BusinessPartnerPortalDeletePurchaseInvoicePositionByIdCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.deletePurchaseInvoicePositionByIdService.main(
      new BusinessPartnerPortalPurchaseInvoicePositionId(command.id),
      command.constraint,
      command.cQMetadata,
    );
  }
}
