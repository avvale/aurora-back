/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalCreatePartnerContactCommand,
  businessPartnerPortalMockPartnerContactData,
} from '@app/business-partner-portal/partner-contact';
import { Test, TestingModule } from '@nestjs/testing';
import { BusinessPartnerPortalCreatePartnerContactCommandHandler } from './business-partner-portal-create-partner-contact.command-handler';
import { BusinessPartnerPortalCreatePartnerContactService } from './business-partner-portal-create-partner-contact.service';

describe('BusinessPartnerPortalCreatePartnerContactCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalCreatePartnerContactCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalCreatePartnerContactCommandHandler,
        {
          provide: BusinessPartnerPortalCreatePartnerContactService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalCreatePartnerContactCommandHandler>(
        BusinessPartnerPortalCreatePartnerContactCommandHandler,
      );
  });

  describe('main', () => {
    test('CreatePartnerContactCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should create the values objects and pass them as parameters to the BusinessPartnerPortalCreatePartnerContactService', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalCreatePartnerContactCommand(
            {
              id: businessPartnerPortalMockPartnerContactData[0].id,
              rowId: businessPartnerPortalMockPartnerContactData[0].rowId,
              businessPartnerId:
                businessPartnerPortalMockPartnerContactData[0]
                  .businessPartnerId,
              firstName:
                businessPartnerPortalMockPartnerContactData[0].firstName,
              lastName: businessPartnerPortalMockPartnerContactData[0].lastName,
              position: businessPartnerPortalMockPartnerContactData[0].position,
              department:
                businessPartnerPortalMockPartnerContactData[0].department,
              email: businessPartnerPortalMockPartnerContactData[0].email,
              phone: businessPartnerPortalMockPartnerContactData[0].phone,
              phoneCountryPrefix:
                businessPartnerPortalMockPartnerContactData[0]
                  .phoneCountryPrefix,
              phoneSanitized:
                businessPartnerPortalMockPartnerContactData[0].phoneSanitized,
              mobile: businessPartnerPortalMockPartnerContactData[0].mobile,
              mobileCountryPrefix:
                businessPartnerPortalMockPartnerContactData[0]
                  .mobileCountryPrefix,
              mobileSanitized:
                businessPartnerPortalMockPartnerContactData[0].mobileSanitized,
              isPrincipal:
                businessPartnerPortalMockPartnerContactData[0].isPrincipal,
              isActive: businessPartnerPortalMockPartnerContactData[0].isActive,
              isUser: businessPartnerPortalMockPartnerContactData[0].isUser,
              userId: businessPartnerPortalMockPartnerContactData[0].userId,
              preferredLanguage:
                businessPartnerPortalMockPartnerContactData[0]
                  .preferredLanguage,
              notes: businessPartnerPortalMockPartnerContactData[0].notes,
            },
            { timezone: process.env.TZ },
          ),
        ),
      ).toBe(undefined);
    });
  });
});
