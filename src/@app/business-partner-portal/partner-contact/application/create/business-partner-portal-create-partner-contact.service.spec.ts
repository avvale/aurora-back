/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalIPartnerContactRepository,
  businessPartnerPortalMockPartnerContactData,
  BusinessPartnerPortalMockPartnerContactRepository,
} from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalCreatePartnerContactService } from '@app/business-partner-portal/partner-contact/application/create/business-partner-portal-create-partner-contact.service';
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

describe('BusinessPartnerPortalCreatePartnerContactService', () => {
  let service: BusinessPartnerPortalCreatePartnerContactService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalCreatePartnerContactService,
        BusinessPartnerPortalMockPartnerContactRepository,
        {
          provide: BusinessPartnerPortalIPartnerContactRepository,
          useValue: {
            create: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalCreatePartnerContactService);
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreatePartnerContactService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should create a partnerContact and emit event', async () => {
      expect(
        await service.main({
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
        }),
      ).toBe(undefined);
    });
  });
});
