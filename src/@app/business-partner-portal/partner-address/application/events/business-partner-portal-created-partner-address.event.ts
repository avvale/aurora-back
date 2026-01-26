/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { CQMetadata } from '@aurorajs.dev/core';

export class BusinessPartnerPortalCreatedPartnerAddressEvent {
  constructor(
    public readonly event: {
      payload: {
        id: string;
        businessPartnerId: string;
        type:
          | 'BILLING'
          | 'SHIPPING'
          | 'OFFICE'
          | 'WAREHOUSE'
          | 'HEADQUARTERS'
          | 'OTHER';
        label: string;
        addressLine1: string;
        addressLine2: string;
        city: string;
        postalCode: string;
        countryId: string;
        administrativeAreaLevel1Id: string;
        administrativeAreaLevel2Id: string;
        administrativeAreaLevel3Id: string;
        latitude: number;
        longitude: number;
        isPrimary: boolean;
        isActive: boolean;
        notes: string;
        createdAt: string;
        updatedAt: string;
        deletedAt: string;
      };
      cQMetadata?: CQMetadata;
    },
  ) {}
}
