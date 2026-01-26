/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdCommand } from '@app/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdService } from '@app/business-partner-portal/sales-invoice-header/application/delete/business-partner-portal-delete-sales-invoice-header-by-id.service';
import { BusinessPartnerPortalSalesInvoiceHeaderId } from '@app/business-partner-portal/sales-invoice-header/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdCommand)
export class BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdCommandHandler
  implements
    ICommandHandler<BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdCommand>
{
  constructor(
    private readonly deleteSalesInvoiceHeaderByIdService: BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdService,
  ) {}

  async execute(
    command: BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.deleteSalesInvoiceHeaderByIdService.main(
      new BusinessPartnerPortalSalesInvoiceHeaderId(command.id),
      command.constraint,
      command.cQMetadata,
    );
  }
}
