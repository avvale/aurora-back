/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalCreatePartnerAddressCommand } from '@app/business-partner-portal/partner-address';
import { BusinessPartnerPortalCreatePartnerAddressService } from '@app/business-partner-portal/partner-address/application/create/business-partner-portal-create-partner-address.service';
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

@CommandHandler(BusinessPartnerPortalCreatePartnerAddressCommand)
export class BusinessPartnerPortalCreatePartnerAddressCommandHandler
  implements ICommandHandler<BusinessPartnerPortalCreatePartnerAddressCommand>
{
  constructor(
    private readonly createPartnerAddressService: BusinessPartnerPortalCreatePartnerAddressService,
  ) {}

  async execute(
    command: BusinessPartnerPortalCreatePartnerAddressCommand,
  ): Promise<void> {
    // call to use case and implements ValueObjects
    await this.createPartnerAddressService.main(
      {
        id: new BusinessPartnerPortalPartnerAddressId(command.payload.id),
        businessPartnerId:
          new BusinessPartnerPortalPartnerAddressBusinessPartnerId(
            command.payload.businessPartnerId,
          ),
        type: new BusinessPartnerPortalPartnerAddressType(command.payload.type),
        label: new BusinessPartnerPortalPartnerAddressLabel(
          command.payload.label,
        ),
        addressLine1: new BusinessPartnerPortalPartnerAddressAddressLine1(
          command.payload.addressLine1,
        ),
        addressLine2: new BusinessPartnerPortalPartnerAddressAddressLine2(
          command.payload.addressLine2,
        ),
        city: new BusinessPartnerPortalPartnerAddressCity(command.payload.city),
        postalCode: new BusinessPartnerPortalPartnerAddressPostalCode(
          command.payload.postalCode,
        ),
        countryId: new BusinessPartnerPortalPartnerAddressCountryId(
          command.payload.countryId,
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
        ),
        isActive: new BusinessPartnerPortalPartnerAddressIsActive(
          command.payload.isActive,
        ),
        notes: new BusinessPartnerPortalPartnerAddressNotes(
          command.payload.notes,
        ),
      },
      command.cQMetadata,
    );
  }
}
