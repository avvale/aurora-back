/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalBusinessPartner,
  BusinessPartnerPortalCreatedBusinessPartnerEvent,
  BusinessPartnerPortalCreatedBusinessPartnersEvent,
} from '@app/business-partner-portal/business-partner';
import { CQMetadata } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class BusinessPartnerPortalAddBusinessPartnersContextEvent extends AggregateRoot {
  constructor(
    public readonly aggregateRoots: BusinessPartnerPortalBusinessPartner[] = [],
    public readonly cQMetadata?: CQMetadata,
  ) {
    super();
  }

  *[Symbol.iterator]() {
    for (const aggregateRoot of this.aggregateRoots) yield aggregateRoot;
  }

  created(): void {
    this.apply(
      new BusinessPartnerPortalCreatedBusinessPartnersEvent({
        payload: this.aggregateRoots.map(
          (businessPartner) =>
            new BusinessPartnerPortalCreatedBusinessPartnerEvent({
              payload: {
                id: businessPartner.id.value,
                externalId: businessPartner.externalId?.value,
                code: businessPartner.code?.value,
                type: businessPartner.type.value,
                name: businessPartner.name.value,
                tin: businessPartner.tin?.value,
                email: businessPartner.email?.value,
                website: businessPartner.website?.value,
                phone: businessPartner.phone?.value,
                phoneCountryPrefix: businessPartner.phoneCountryPrefix?.value,
                phoneSanitized: businessPartner.phoneSanitized?.value,
                isActive: businessPartner.isActive.value,
                meta: businessPartner.meta?.value,
                createdAt: businessPartner.createdAt?.value,
                updatedAt: businessPartner.updatedAt?.value,
                deletedAt: businessPartner.deletedAt?.value,
              },
            }),
        ),
        cQMetadata: this.cQMetadata,
      }),
    );
  }
}
