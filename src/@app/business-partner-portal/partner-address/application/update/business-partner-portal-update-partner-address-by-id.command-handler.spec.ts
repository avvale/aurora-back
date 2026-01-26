/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  businessPartnerPortalMockPartnerAddressData,
  BusinessPartnerPortalUpdatePartnerAddressByIdCommand,
} from '@app/business-partner-portal/partner-address';
import { BusinessPartnerPortalUpdatePartnerAddressByIdCommandHandler } from '@app/business-partner-portal/partner-address/application/update/business-partner-portal-update-partner-address-by-id.command-handler';
import { BusinessPartnerPortalUpdatePartnerAddressByIdService } from '@app/business-partner-portal/partner-address/application/update/business-partner-portal-update-partner-address-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePartnerAddressByIdCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalUpdatePartnerAddressByIdCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalUpdatePartnerAddressByIdCommandHandler,
        {
          provide: BusinessPartnerPortalUpdatePartnerAddressByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalUpdatePartnerAddressByIdCommandHandler>(
        BusinessPartnerPortalUpdatePartnerAddressByIdCommandHandler,
      );
  });

  describe('main', () => {
    test('UpdatePartnerAddressByIdCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should return an partnerAddress created', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalUpdatePartnerAddressByIdCommand(
            {
              id: businessPartnerPortalMockPartnerAddressData[0].id,
              rowId: businessPartnerPortalMockPartnerAddressData[0].rowId,
              businessPartnerId:
                businessPartnerPortalMockPartnerAddressData[0]
                  .businessPartnerId,
              type: businessPartnerPortalMockPartnerAddressData[0].type,
              label: businessPartnerPortalMockPartnerAddressData[0].label,
              addressLine1:
                businessPartnerPortalMockPartnerAddressData[0].addressLine1,
              addressLine2:
                businessPartnerPortalMockPartnerAddressData[0].addressLine2,
              city: businessPartnerPortalMockPartnerAddressData[0].city,
              postalCode:
                businessPartnerPortalMockPartnerAddressData[0].postalCode,
              countryId:
                businessPartnerPortalMockPartnerAddressData[0].countryId,
              administrativeAreaLevel1Id:
                businessPartnerPortalMockPartnerAddressData[0]
                  .administrativeAreaLevel1Id,
              administrativeAreaLevel2Id:
                businessPartnerPortalMockPartnerAddressData[0]
                  .administrativeAreaLevel2Id,
              administrativeAreaLevel3Id:
                businessPartnerPortalMockPartnerAddressData[0]
                  .administrativeAreaLevel3Id,
              latitude: businessPartnerPortalMockPartnerAddressData[0].latitude,
              longitude:
                businessPartnerPortalMockPartnerAddressData[0].longitude,
              isPrimary:
                businessPartnerPortalMockPartnerAddressData[0].isPrimary,
              isActive: businessPartnerPortalMockPartnerAddressData[0].isActive,
              notes: businessPartnerPortalMockPartnerAddressData[0].notes,
            },
            {},
            { timezone: process.env.TZ },
          ),
        ),
      ).toBe(undefined);
    });
  });
});
