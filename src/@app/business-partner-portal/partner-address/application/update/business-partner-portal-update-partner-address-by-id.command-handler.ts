/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalUpdatePartnerAddressByIdCommand } from '@app/business-partner-portal/partner-address';
import { BusinessPartnerPortalUpdatePartnerAddressByIdService } from '@app/business-partner-portal/partner-address/application/update/business-partner-portal-update-partner-address-by-id.service';
import {
  BusinessPartnerPortalPartnerAddressAddressLine1,
  BusinessPartnerPortalPartnerAddressAddressLine2,
  BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel1Id,
  BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel2Id,
  BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel3Id,
  BusinessPartnerPortalPartnerAddressBusinessPartnerId,
  BusinessPartnerPortalPartnerAddressCity,
  BusinessPartnerPortalPartnerAddressCountryId,
  BusinessPartnerPortalPartnerAddressId,
  BusinessPartnerPortalPartnerAddressIsActive,
  BusinessPartnerPortalPartnerAddressIsPrimary,
  BusinessPartnerPortalPartnerAddressLabel,
  BusinessPartnerPortalPartnerAddressLatitude,
  BusinessPartnerPortalPartnerAddressLongitude,
  BusinessPartnerPortalPartnerAddressNotes,
  BusinessPartnerPortalPartnerAddressPostalCode,
  BusinessPartnerPortalPartnerAddressType,
} from '@app/business-partner-portal/partner-address/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(BusinessPartnerPortalUpdatePartnerAddressByIdCommand)
export class BusinessPartnerPortalUpdatePartnerAddressByIdCommandHandler
  implements
    ICommandHandler<BusinessPartnerPortalUpdatePartnerAddressByIdCommand>
{
  constructor(
    private readonly updatePartnerAddressByIdService: BusinessPartnerPortalUpdatePartnerAddressByIdService,
  ) {}

  async execute(
    command: BusinessPartnerPortalUpdatePartnerAddressByIdCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.updatePartnerAddressByIdService.main(
      {
        id: new BusinessPartnerPortalPartnerAddressId(command.payload.id),
        businessPartnerId:
          new BusinessPartnerPortalPartnerAddressBusinessPartnerId(
            command.payload.businessPartnerId,
            { undefinable: true },
          ),
        type: new BusinessPartnerPortalPartnerAddressType(
          command.payload.type,
          { undefinable: true },
        ),
        label: new BusinessPartnerPortalPartnerAddressLabel(
          command.payload.label,
        ),
        addressLine1: new BusinessPartnerPortalPartnerAddressAddressLine1(
          command.payload.addressLine1,
          { undefinable: true },
        ),
        addressLine2: new BusinessPartnerPortalPartnerAddressAddressLine2(
          command.payload.addressLine2,
        ),
        city: new BusinessPartnerPortalPartnerAddressCity(
          command.payload.city,
          { undefinable: true },
        ),
        postalCode: new BusinessPartnerPortalPartnerAddressPostalCode(
          command.payload.postalCode,
        ),
        countryId: new BusinessPartnerPortalPartnerAddressCountryId(
          command.payload.countryId,
          { undefinable: true },
        ),
        administrativeAreaLevel1Id:
          new BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel1Id(
            command.payload.administrativeAreaLevel1Id,
          ),
        administrativeAreaLevel2Id:
          new BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel2Id(
            command.payload.administrativeAreaLevel2Id,
          ),
        administrativeAreaLevel3Id:
          new BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel3Id(
            command.payload.administrativeAreaLevel3Id,
          ),
        latitude: new BusinessPartnerPortalPartnerAddressLatitude(
          command.payload.latitude,
        ),
        longitude: new BusinessPartnerPortalPartnerAddressLongitude(
          command.payload.longitude,
        ),
        isPrimary: new BusinessPartnerPortalPartnerAddressIsPrimary(
          command.payload.isPrimary,
          { undefinable: true },
        ),
        isActive: new BusinessPartnerPortalPartnerAddressIsActive(
          command.payload.isActive,
          { undefinable: true },
        ),
        notes: new BusinessPartnerPortalPartnerAddressNotes(
          command.payload.notes,
        ),
      },
      command.constraint,
      command.cQMetadata,
    );
  }
}
