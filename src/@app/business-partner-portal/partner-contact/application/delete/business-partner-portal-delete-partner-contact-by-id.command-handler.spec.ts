/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalDeletePartnerContactByIdCommand,
  businessPartnerPortalMockPartnerContactData,
} from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalDeletePartnerContactByIdCommandHandler } from '@app/business-partner-portal/partner-contact/application/delete/business-partner-portal-delete-partner-contact-by-id.command-handler';
import { BusinessPartnerPortalDeletePartnerContactByIdService } from '@app/business-partner-portal/partner-contact/application/delete/business-partner-portal-delete-partner-contact-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePartnerContactByIdCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalDeletePartnerContactByIdCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalDeletePartnerContactByIdCommandHandler,
        {
          provide: BusinessPartnerPortalDeletePartnerContactByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalDeletePartnerContactByIdCommandHandler>(
        BusinessPartnerPortalDeletePartnerContactByIdCommandHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePartnerContactByIdCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should create the value object id and pass them as parameters to the BusinessPartnerPortalDeletePartnerContactByIdService', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalDeletePartnerContactByIdCommand(
            businessPartnerPortalMockPartnerContactData[0].id,
          ),
        ),
      ).toBe(undefined);
    });
  });
});
