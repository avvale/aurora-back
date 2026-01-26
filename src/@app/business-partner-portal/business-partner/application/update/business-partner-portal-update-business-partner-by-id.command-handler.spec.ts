/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  businessPartnerPortalMockBusinessPartnerData,
  BusinessPartnerPortalUpdateBusinessPartnerByIdCommand,
} from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalUpdateBusinessPartnerByIdCommandHandler } from '@app/business-partner-portal/business-partner/application/update/business-partner-portal-update-business-partner-by-id.command-handler';
import { BusinessPartnerPortalUpdateBusinessPartnerByIdService } from '@app/business-partner-portal/business-partner/application/update/business-partner-portal-update-business-partner-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdateBusinessPartnerByIdCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalUpdateBusinessPartnerByIdCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalUpdateBusinessPartnerByIdCommandHandler,
        {
          provide: BusinessPartnerPortalUpdateBusinessPartnerByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalUpdateBusinessPartnerByIdCommandHandler>(
        BusinessPartnerPortalUpdateBusinessPartnerByIdCommandHandler,
      );
  });

  describe('main', () => {
    test('UpdateBusinessPartnerByIdCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should return an businessPartner created', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalUpdateBusinessPartnerByIdCommand(
            {
              id: businessPartnerPortalMockBusinessPartnerData[0].id,
              rowId: businessPartnerPortalMockBusinessPartnerData[0].rowId,
              externalId:
                businessPartnerPortalMockBusinessPartnerData[0].externalId,
              code: businessPartnerPortalMockBusinessPartnerData[0].code,
              type: businessPartnerPortalMockBusinessPartnerData[0].type,
              name: businessPartnerPortalMockBusinessPartnerData[0].name,
              tin: businessPartnerPortalMockBusinessPartnerData[0].tin,
              email: businessPartnerPortalMockBusinessPartnerData[0].email,
              website: businessPartnerPortalMockBusinessPartnerData[0].website,
              phone: businessPartnerPortalMockBusinessPartnerData[0].phone,
              phoneCountryPrefix:
                businessPartnerPortalMockBusinessPartnerData[0]
                  .phoneCountryPrefix,
              phoneSanitized:
                businessPartnerPortalMockBusinessPartnerData[0].phoneSanitized,
              isActive:
                businessPartnerPortalMockBusinessPartnerData[0].isActive,
              meta: businessPartnerPortalMockBusinessPartnerData[0].meta,
            },
            {},
            { timezone: process.env.TZ },
          ),
        ),
      ).toBe(undefined);
    });
  });
});
