/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalDeleteSupplierDocumentByIdCommand } from '@app/business-partner-portal/supplier-document';
import { BusinessPartnerPortalDeleteSupplierDocumentByIdService } from '@app/business-partner-portal/supplier-document/application/delete/business-partner-portal-delete-supplier-document-by-id.service';
import { BusinessPartnerPortalSupplierDocumentId } from '@app/business-partner-portal/supplier-document/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(BusinessPartnerPortalDeleteSupplierDocumentByIdCommand)
export class BusinessPartnerPortalDeleteSupplierDocumentByIdCommandHandler
  implements
    ICommandHandler<BusinessPartnerPortalDeleteSupplierDocumentByIdCommand>
{
  constructor(
    private readonly deleteSupplierDocumentByIdService: BusinessPartnerPortalDeleteSupplierDocumentByIdService,
  ) {}

  async execute(
    command: BusinessPartnerPortalDeleteSupplierDocumentByIdCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.deleteSupplierDocumentByIdService.main(
      new BusinessPartnerPortalSupplierDocumentId(command.id),
      command.constraint,
      command.cQMetadata,
    );
  }
}
