/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalIPartnerContactRepository,
  businessPartnerPortalMockPartnerContactData,
  BusinessPartnerPortalMockPartnerContactRepository,
} from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalUpdatePartnerContactByIdService } from '@app/business-partner-portal/partner-contact/application/update/business-partner-portal-update-partner-contact-by-id.service';
import {
  BusinessPartnerPortalPartnerContactBusinessPartnerId,
  BusinessPartnerPortalPartnerContactDepartment,
  BusinessPartnerPortalPartnerContactEmail,
  BusinessPartnerPortalPartnerContactFirstName,
  BusinessPartnerPortalPartnerContactId,
  BusinessPartnerPortalPartnerContactIsActive,
  BusinessPartnerPortalPartnerContactIsPrincipal,
  BusinessPartnerPortalPartnerContactIsUser,
  BusinessPartnerPortalPartnerContactLangId,
  BusinessPartnerPortalPartnerContactLastName,
  BusinessPartnerPortalPartnerContactMobile,
  BusinessPartnerPortalPartnerContactMobileCountryPrefix,
  BusinessPartnerPortalPartnerContactMobileSanitized,
  BusinessPartnerPortalPartnerContactNotes,
  BusinessPartnerPortalPartnerContactPhone,
  BusinessPartnerPortalPartnerContactPhoneCountryPrefix,
  BusinessPartnerPortalPartnerContactPhoneSanitized,
  BusinessPartnerPortalPartnerContactPosition,
  BusinessPartnerPortalPartnerContactRowId,
  BusinessPartnerPortalPartnerContactUserId,
} from '@app/business-partner-portal/partner-contact/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePartnerContactByIdService', () => {
  let service: BusinessPartnerPortalUpdatePartnerContactByIdService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalUpdatePartnerContactByIdService,
        BusinessPartnerPortalMockPartnerContactRepository,
        {
          provide: BusinessPartnerPortalIPartnerContactRepository,
          useValue: {
            updateById: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalUpdatePartnerContactByIdService);
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdatePartnerContactByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should update a partnerContact and emit event', async () => {
      expect(
        await service.main(
          {
            id: new BusinessPartnerPortalPartnerContactId(
              businessPartnerPortalMockPartnerContactData[0].id,
            ),
            rowId: new BusinessPartnerPortalPartnerContactRowId(
              businessPartnerPortalMockPartnerContactData[0].rowId,
            ),
            businessPartnerId:
              new BusinessPartnerPortalPartnerContactBusinessPartnerId(
                businessPartnerPortalMockPartnerContactData[0].businessPartnerId,
              ),
            firstName: new BusinessPartnerPortalPartnerContactFirstName(
              businessPartnerPortalMockPartnerContactData[0].firstName,
            ),
            lastName: new BusinessPartnerPortalPartnerContactLastName(
              businessPartnerPortalMockPartnerContactData[0].lastName,
            ),
            position: new BusinessPartnerPortalPartnerContactPosition(
              businessPartnerPortalMockPartnerContactData[0].position,
            ),
            department: new BusinessPartnerPortalPartnerContactDepartment(
              businessPartnerPortalMockPartnerContactData[0].department,
            ),
            email: new BusinessPartnerPortalPartnerContactEmail(
              businessPartnerPortalMockPartnerContactData[0].email,
            ),
            phone: new BusinessPartnerPortalPartnerContactPhone(
              businessPartnerPortalMockPartnerContactData[0].phone,
            ),
            phoneCountryPrefix:
              new BusinessPartnerPortalPartnerContactPhoneCountryPrefix(
                businessPartnerPortalMockPartnerContactData[0].phoneCountryPrefix,
              ),
            phoneSanitized:
              new BusinessPartnerPortalPartnerContactPhoneSanitized(
                businessPartnerPortalMockPartnerContactData[0].phoneSanitized,
              ),
            mobile: new BusinessPartnerPortalPartnerContactMobile(
              businessPartnerPortalMockPartnerContactData[0].mobile,
            ),
            mobileCountryPrefix:
              new BusinessPartnerPortalPartnerContactMobileCountryPrefix(
                businessPartnerPortalMockPartnerContactData[0].mobileCountryPrefix,
              ),
            mobileSanitized:
              new BusinessPartnerPortalPartnerContactMobileSanitized(
                businessPartnerPortalMockPartnerContactData[0].mobileSanitized,
              ),
            isPrincipal: new BusinessPartnerPortalPartnerContactIsPrincipal(
              businessPartnerPortalMockPartnerContactData[0].isPrincipal,
            ),
            isActive: new BusinessPartnerPortalPartnerContactIsActive(
              businessPartnerPortalMockPartnerContactData[0].isActive,
            ),
            isUser: new BusinessPartnerPortalPartnerContactIsUser(
              businessPartnerPortalMockPartnerContactData[0].isUser,
            ),
            userId: new BusinessPartnerPortalPartnerContactUserId(
              businessPartnerPortalMockPartnerContactData[0].userId,
            ),
            langId: new BusinessPartnerPortalPartnerContactLangId(
              businessPartnerPortalMockPartnerContactData[0].langId,
            ),
            notes: new BusinessPartnerPortalPartnerContactNotes(
              businessPartnerPortalMockPartnerContactData[0].notes,
            ),
          },
          {},
        ),
      ).toBe(undefined);
    });
  });
});
