/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalIBusinessPartnerRepository,
  businessPartnerPortalMockBusinessPartnerData,
  BusinessPartnerPortalMockBusinessPartnerRepository,
} from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalUpdateBusinessPartnerByIdService } from '@app/business-partner-portal/business-partner/application/update/business-partner-portal-update-business-partner-by-id.service';
import {
  BusinessPartnerPortalBusinessPartnerCode,
  BusinessPartnerPortalBusinessPartnerEmail,
  BusinessPartnerPortalBusinessPartnerExternalId,
  BusinessPartnerPortalBusinessPartnerId,
  BusinessPartnerPortalBusinessPartnerIsActive,
  BusinessPartnerPortalBusinessPartnerMeta,
  BusinessPartnerPortalBusinessPartnerName,
  BusinessPartnerPortalBusinessPartnerPhone,
  BusinessPartnerPortalBusinessPartnerPhoneCountryPrefix,
  BusinessPartnerPortalBusinessPartnerPhoneSanitized,
  BusinessPartnerPortalBusinessPartnerRowId,
  BusinessPartnerPortalBusinessPartnerTin,
  BusinessPartnerPortalBusinessPartnerType,
  BusinessPartnerPortalBusinessPartnerWebsite,
} from '@app/business-partner-portal/business-partner/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdateBusinessPartnerByIdService', () => {
  let service: BusinessPartnerPortalUpdateBusinessPartnerByIdService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalUpdateBusinessPartnerByIdService,
        BusinessPartnerPortalMockBusinessPartnerRepository,
        {
          provide: BusinessPartnerPortalIBusinessPartnerRepository,
          useValue: {
            updateById: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalUpdateBusinessPartnerByIdService);
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdateBusinessPartnerByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should update a businessPartner and emit event', async () => {
      expect(
        await service.main(
          {
            id: new BusinessPartnerPortalBusinessPartnerId(
              businessPartnerPortalMockBusinessPartnerData[0].id,
            ),
            rowId: new BusinessPartnerPortalBusinessPartnerRowId(
              businessPartnerPortalMockBusinessPartnerData[0].rowId,
            ),
            externalId: new BusinessPartnerPortalBusinessPartnerExternalId(
              businessPartnerPortalMockBusinessPartnerData[0].externalId,
            ),
            code: new BusinessPartnerPortalBusinessPartnerCode(
              businessPartnerPortalMockBusinessPartnerData[0].code,
            ),
            type: new BusinessPartnerPortalBusinessPartnerType(
              businessPartnerPortalMockBusinessPartnerData[0].type,
            ),
            name: new BusinessPartnerPortalBusinessPartnerName(
              businessPartnerPortalMockBusinessPartnerData[0].name,
            ),
            tin: new BusinessPartnerPortalBusinessPartnerTin(
              businessPartnerPortalMockBusinessPartnerData[0].tin,
            ),
            email: new BusinessPartnerPortalBusinessPartnerEmail(
              businessPartnerPortalMockBusinessPartnerData[0].email,
            ),
            website: new BusinessPartnerPortalBusinessPartnerWebsite(
              businessPartnerPortalMockBusinessPartnerData[0].website,
            ),
            phone: new BusinessPartnerPortalBusinessPartnerPhone(
              businessPartnerPortalMockBusinessPartnerData[0].phone,
            ),
            phoneCountryPrefix:
              new BusinessPartnerPortalBusinessPartnerPhoneCountryPrefix(
                businessPartnerPortalMockBusinessPartnerData[0].phoneCountryPrefix,
              ),
            phoneSanitized:
              new BusinessPartnerPortalBusinessPartnerPhoneSanitized(
                businessPartnerPortalMockBusinessPartnerData[0].phoneSanitized,
              ),
            isActive: new BusinessPartnerPortalBusinessPartnerIsActive(
              businessPartnerPortalMockBusinessPartnerData[0].isActive,
            ),
            meta: new BusinessPartnerPortalBusinessPartnerMeta(
              businessPartnerPortalMockBusinessPartnerData[0].meta,
            ),
          },
          {},
        ),
      ).toBe(undefined);
    });
  });
});
