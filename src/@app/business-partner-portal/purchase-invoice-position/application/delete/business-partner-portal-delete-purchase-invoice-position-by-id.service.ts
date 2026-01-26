/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalIPurchaseInvoicePositionRepository } from '@app/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalPurchaseInvoicePositionId } from '@app/business-partner-portal/purchase-invoice-position/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class BusinessPartnerPortalDeletePurchaseInvoicePositionByIdService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: BusinessPartnerPortalIPurchaseInvoicePositionRepository,
  ) {}

  async main(
    id: BusinessPartnerPortalPurchaseInvoicePositionId,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<void> {
    // get object to delete
    const purchaseInvoicePosition = await this.repository.findById(id, {
      constraint,
      cQMetadata,
    });

    // it is not necessary to pass the constraint in the delete, if the object
    // is not found in the findById, an exception will be thrown.
    await this.repository.deleteById(purchaseInvoicePosition.id, {
      deleteOptions: cQMetadata?.repositoryOptions,
      cQMetadata,
    });

    // insert EventBus in object, to be able to apply and commit events
    const purchaseInvoicePositionRegister = this.publisher.mergeObjectContext(
      purchaseInvoicePosition,
    );

    purchaseInvoicePositionRegister.deleted({
      payload: purchaseInvoicePosition,
      cQMetadata,
    }); // apply event to model events
    purchaseInvoicePositionRegister.commit(); // commit all events of model
  }
}
