/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalISalesInvoicePositionRepository } from '@app/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalSalesInvoicePositionId } from '@app/business-partner-portal/sales-invoice-position/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class BusinessPartnerPortalDeleteSalesInvoicePositionByIdService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: BusinessPartnerPortalISalesInvoicePositionRepository,
  ) {}

  async main(
    id: BusinessPartnerPortalSalesInvoicePositionId,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<void> {
    // get object to delete
    const salesInvoicePosition = await this.repository.findById(id, {
      constraint,
      cQMetadata,
    });

    // it is not necessary to pass the constraint in the delete, if the object
    // is not found in the findById, an exception will be thrown.
    await this.repository.deleteById(salesInvoicePosition.id, {
      deleteOptions: cQMetadata?.repositoryOptions,
      cQMetadata,
    });

    // insert EventBus in object, to be able to apply and commit events
    const salesInvoicePositionRegister =
      this.publisher.mergeObjectContext(salesInvoicePosition);

    salesInvoicePositionRegister.deleted({
      payload: salesInvoicePosition,
      cQMetadata,
    }); // apply event to model events
    salesInvoicePositionRegister.commit(); // commit all events of model
  }
}
