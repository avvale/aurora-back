/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePartnerAddressCommand,
  businessPartnerPortalMockPartnerAddressData,
} from '@app/business-partner-portal/partner-address';
import { Test, TestingModule } from '@nestjs/testing';
import { BusinessPartnerPortalCreatePartnerAddressCommandHandler } from './business-partner-portal-create-partner-address.command-handler';
import { BusinessPartnerPortalCreatePartnerAddressService } from './business-partner-portal-create-partner-address.service';

describe('BusinessPartnerPortalCreatePartnerAddressCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalCreatePartnerAddressCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalCreatePartnerAddressCommandHandler,
        {
          provide: BusinessPartnerPortalCreatePartnerAddressService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalCreatePartnerAddressCommandHandler>(
        BusinessPartnerPortalCreatePartnerAddressCommandHandler,
      );
  });

  describe('main', () => {
    test('CreatePartnerAddressCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should create the values objects and pass them as parameters to the BusinessPartnerPortalCreatePartnerAddressService', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalCreatePartnerAddressCommand(
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
            { timezone: process.env.TZ },
          ),
        ),
      ).toBe(undefined);
    });
  });
});
