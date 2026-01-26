/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatedPartnerAddressesEvent,
  BusinessPartnerPortalCreatedPartnerAddressEvent,
  BusinessPartnerPortalPartnerAddress,
} from '@app/business-partner-portal/partner-address';
import { CQMetadata } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class BusinessPartnerPortalAddPartnerAddressesContextEvent extends AggregateRoot {
  constructor(
    public readonly aggregateRoots: BusinessPartnerPortalPartnerAddress[] = [],
    public readonly cQMetadata?: CQMetadata,
  ) {
    super();
  }

  *[Symbol.iterator]() {
    for (const aggregateRoot of this.aggregateRoots) yield aggregateRoot;
  }

  created(): void {
    this.apply(
      new BusinessPartnerPortalCreatedPartnerAddressesEvent({
        payload: this.aggregateRoots.map(
          (partnerAddress) =>
            new BusinessPartnerPortalCreatedPartnerAddressEvent({
              payload: {
                id: partnerAddress.id.value,
                businessPartnerId: partnerAddress.businessPartnerId.value,
                type: partnerAddress.type.value,
                label: partnerAddress.label?.value,
                addressLine1: partnerAddress.addressLine1.value,
                addressLine2: partnerAddress.addressLine2?.value,
                city: partnerAddress.city.value,
                postalCode: partnerAddress.postalCode?.value,
                countryId: partnerAddress.countryId.value,
                administrativeAreaLevel1Id:
                  partnerAddress.administrativeAreaLevel1Id?.value,
                administrativeAreaLevel2Id:
                  partnerAddress.administrativeAreaLevel2Id?.value,
                administrativeAreaLevel3Id:
                  partnerAddress.administrativeAreaLevel3Id?.value,
                latitude: partnerAddress.latitude?.value,
                longitude: partnerAddress.longitude?.value,
                isPrimary: partnerAddress.isPrimary.value,
                isActive: partnerAddress.isActive.value,
                notes: partnerAddress.notes?.value,
                createdAt: partnerAddress.createdAt?.value,
                updatedAt: partnerAddress.updatedAt?.value,
                deletedAt: partnerAddress.deletedAt?.value,
              },
            }),
        ),
        cQMetadata: this.cQMetadata,
      }),
    );
  }
}
