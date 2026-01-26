/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalIPurchaseInvoiceHeaderRepository } from '@app/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalPurchaseInvoiceHeaderId } from '@app/business-partner-portal/purchase-invoice-header/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class BusinessPartnerPortalDeletePurchaseInvoiceHeaderByIdService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
  ) {}

  async main(
    id: BusinessPartnerPortalPurchaseInvoiceHeaderId,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<void> {
    // get object to delete
    const purchaseInvoiceHeader = await this.repository.findById(id, {
      constraint,
      cQMetadata,
    });

    // it is not necessary to pass the constraint in the delete, if the object
    // is not found in the findById, an exception will be thrown.
    await this.repository.deleteById(purchaseInvoiceHeader.id, {
      deleteOptions: cQMetadata?.repositoryOptions,
      cQMetadata,
    });

    // insert EventBus in object, to be able to apply and commit events
    const purchaseInvoiceHeaderRegister = this.publisher.mergeObjectContext(
      purchaseInvoiceHeader,
    );

    purchaseInvoiceHeaderRegister.deleted({
      payload: purchaseInvoiceHeader,
      cQMetadata,
    }); // apply event to model events
    purchaseInvoiceHeaderRegister.commit(); // commit all events of model
  }
}
