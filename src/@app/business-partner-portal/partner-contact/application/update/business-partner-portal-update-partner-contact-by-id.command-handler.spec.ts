/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  businessPartnerPortalMockPartnerContactData,
  BusinessPartnerPortalUpdatePartnerContactByIdCommand,
} from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalUpdatePartnerContactByIdCommandHandler } from '@app/business-partner-portal/partner-contact/application/update/business-partner-portal-update-partner-contact-by-id.command-handler';
import { BusinessPartnerPortalUpdatePartnerContactByIdService } from '@app/business-partner-portal/partner-contact/application/update/business-partner-portal-update-partner-contact-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdatePartnerContactByIdCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalUpdatePartnerContactByIdCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalUpdatePartnerContactByIdCommandHandler,
        {
          provide: BusinessPartnerPortalUpdatePartnerContactByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalUpdatePartnerContactByIdCommandHandler>(
        BusinessPartnerPortalUpdatePartnerContactByIdCommandHandler,
      );
  });

  describe('main', () => {
    test('UpdatePartnerContactByIdCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should return an partnerContact created', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalUpdatePartnerContactByIdCommand(
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
              mobile: businessPartnerPortalMockPartnerContactData[0].mobile,
              isPrimary:
                businessPartnerPortalMockPartnerContactData[0].isPrimary,
              isActive: businessPartnerPortalMockPartnerContactData[0].isActive,
              isUser: businessPartnerPortalMockPartnerContactData[0].isUser,
              userId: businessPartnerPortalMockPartnerContactData[0].userId,
              preferredLanguage:
                businessPartnerPortalMockPartnerContactData[0]
                  .preferredLanguage,
              notes: businessPartnerPortalMockPartnerContactData[0].notes,
            },
            {},
            { timezone: process.env.TZ },
          ),
        ),
      ).toBe(undefined);
    });
  });
});
