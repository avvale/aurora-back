/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalIPartnerAddressRepository,
  businessPartnerPortalMockPartnerAddressData,
  BusinessPartnerPortalMockPartnerAddressRepository,
} from '@app/business-partner-portal/partner-address';
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
  BusinessPartnerPortalPartnerAddressRowId,
  BusinessPartnerPortalPartnerAddressType,
} from '@app/business-partner-portal/partner-address/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreatePartnerAddressService', () => {
  let service: BusinessPartnerPortalCreatePartnerAddressService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalCreatePartnerAddressService,
        BusinessPartnerPortalMockPartnerAddressRepository,
        {
          provide: BusinessPartnerPortalIPartnerAddressRepository,
          useValue: {
            create: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalCreatePartnerAddressService);
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreatePartnerAddressService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should create a partnerAddress and emit event', async () => {
      expect(
        await service.main({
          id: new BusinessPartnerPortalPartnerAddressId(
            businessPartnerPortalMockPartnerAddressData[0].id,
          ),
          rowId: new BusinessPartnerPortalPartnerAddressRowId(
            businessPartnerPortalMockPartnerAddressData[0].rowId,
          ),
          businessPartnerId:
            new BusinessPartnerPortalPartnerAddressBusinessPartnerId(
              businessPartnerPortalMockPartnerAddressData[0].businessPartnerId,
            ),
          type: new BusinessPartnerPortalPartnerAddressType(
            businessPartnerPortalMockPartnerAddressData[0].type,
          ),
          label: new BusinessPartnerPortalPartnerAddressLabel(
            businessPartnerPortalMockPartnerAddressData[0].label,
          ),
          addressLine1: new BusinessPartnerPortalPartnerAddressAddressLine1(
            businessPartnerPortalMockPartnerAddressData[0].addressLine1,
          ),
          addressLine2: new BusinessPartnerPortalPartnerAddressAddressLine2(
            businessPartnerPortalMockPartnerAddressData[0].addressLine2,
          ),
          city: new BusinessPartnerPortalPartnerAddressCity(
            businessPartnerPortalMockPartnerAddressData[0].city,
          ),
          postalCode: new BusinessPartnerPortalPartnerAddressPostalCode(
            businessPartnerPortalMockPartnerAddressData[0].postalCode,
          ),
          countryId: new BusinessPartnerPortalPartnerAddressCountryId(
            businessPartnerPortalMockPartnerAddressData[0].countryId,
          ),
          administrativeAreaLevel1Id:
            new BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel1Id(
              businessPartnerPortalMockPartnerAddressData[0].administrativeAreaLevel1Id,
            ),
          administrativeAreaLevel2Id:
            new BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel2Id(
              businessPartnerPortalMockPartnerAddressData[0].administrativeAreaLevel2Id,
            ),
          administrativeAreaLevel3Id:
            new BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel3Id(
              businessPartnerPortalMockPartnerAddressData[0].administrativeAreaLevel3Id,
            ),
          latitude: new BusinessPartnerPortalPartnerAddressLatitude(
            businessPartnerPortalMockPartnerAddressData[0].latitude,
          ),
          longitude: new BusinessPartnerPortalPartnerAddressLongitude(
            businessPartnerPortalMockPartnerAddressData[0].longitude,
          ),
          isPrimary: new BusinessPartnerPortalPartnerAddressIsPrimary(
            businessPartnerPortalMockPartnerAddressData[0].isPrimary,
          ),
          isActive: new BusinessPartnerPortalPartnerAddressIsActive(
            businessPartnerPortalMockPartnerAddressData[0].isActive,
          ),
          notes: new BusinessPartnerPortalPartnerAddressNotes(
            businessPartnerPortalMockPartnerAddressData[0].notes,
          ),
        }),
      ).toBe(undefined);
    });
  });
});
