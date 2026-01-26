/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdCommand } from '@app/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdService } from '@app/business-partner-portal/purchase-invoice-header/application/delete/business-partner-portal-delete-purchase-invoice-header-by-id.service';
import { BusinessPartnerPortalPurchaseInvoiceHeaderId } from '@app/business-partner-portal/purchase-invoice-header/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdCommand)
export class BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdCommandHandler
  implements
    ICommandHandler<BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdCommand>
{
  constructor(
    private readonly deletePurchaseInvoiceHeaderByIdService: BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdService,
  ) {}

  async execute(
    command: BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.deletePurchaseInvoiceHeaderByIdService.main(
      new BusinessPartnerPortalPurchaseInvoiceHeaderId(command.id),
      command.constraint,
      command.cQMetadata,
    );
  }
}
