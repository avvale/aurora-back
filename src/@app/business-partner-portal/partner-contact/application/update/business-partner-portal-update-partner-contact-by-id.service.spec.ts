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
  BusinessPartnerPortalPartnerContactIsPrimary,
  BusinessPartnerPortalPartnerContactIsUser,
  BusinessPartnerPortalPartnerContactLastName,
  BusinessPartnerPortalPartnerContactMobile,
  BusinessPartnerPortalPartnerContactNotes,
  BusinessPartnerPortalPartnerContactPhone,
  BusinessPartnerPortalPartnerContactPosition,
  BusinessPartnerPortalPartnerContactPreferredLanguage,
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
            mobile: new BusinessPartnerPortalPartnerContactMobile(
              businessPartnerPortalMockPartnerContactData[0].mobile,
            ),
            isPrimary: new BusinessPartnerPortalPartnerContactIsPrimary(
              businessPartnerPortalMockPartnerContactData[0].isPrimary,
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
            preferredLanguage:
              new BusinessPartnerPortalPartnerContactPreferredLanguage(
                businessPartnerPortalMockPartnerContactData[0].preferredLanguage,
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
