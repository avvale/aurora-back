/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalISalesInvoiceHeaderRepository } from '@app/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalSalesInvoiceHeaderId } from '@app/business-partner-portal/sales-invoice-header/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: BusinessPartnerPortalISalesInvoiceHeaderRepository,
  ) {}

  async main(
    id: BusinessPartnerPortalSalesInvoiceHeaderId,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<void> {
    // get object to delete
    const salesInvoiceHeader = await this.repository.findById(id, {
      constraint,
      cQMetadata,
    });

    // it is not necessary to pass the constraint in the delete, if the object
    // is not found in the findById, an exception will be thrown.
    await this.repository.deleteById(salesInvoiceHeader.id, {
      deleteOptions: cQMetadata?.repositoryOptions,
      cQMetadata,
    });

    // insert EventBus in object, to be able to apply and commit events
    const salesInvoiceHeaderRegister =
      this.publisher.mergeObjectContext(salesInvoiceHeader);

    salesInvoiceHeaderRegister.deleted({
      payload: salesInvoiceHeader,
      cQMetadata,
    }); // apply event to model events
    salesInvoiceHeaderRegister.commit(); // commit all events of model
  }
}
