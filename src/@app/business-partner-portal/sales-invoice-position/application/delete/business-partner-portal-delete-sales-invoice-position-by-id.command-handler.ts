/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalDeleteSalesInvoicePositionByIdCommand } from '@app/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalDeleteSalesInvoicePositionByIdService } from '@app/business-partner-portal/sales-invoice-position/application/delete/business-partner-portal-delete-sales-invoice-position-by-id.service';
import { BusinessPartnerPortalSalesInvoicePositionId } from '@app/business-partner-portal/sales-invoice-position/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(BusinessPartnerPortalDeleteSalesInvoicePositionByIdCommand)
export class BusinessPartnerPortalDeleteSalesInvoicePositionByIdCommandHandler
  implements
    ICommandHandler<BusinessPartnerPortalDeleteSalesInvoicePositionByIdCommand>
{
  constructor(
    private readonly deleteSalesInvoicePositionByIdService: BusinessPartnerPortalDeleteSalesInvoicePositionByIdService,
  ) {}

  async execute(
    command: BusinessPartnerPortalDeleteSalesInvoicePositionByIdCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.deleteSalesInvoicePositionByIdService.main(
      new BusinessPartnerPortalSalesInvoicePositionId(command.id),
      command.constraint,
      command.cQMetadata,
    );
  }
}
