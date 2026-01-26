/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalCreateBusinessPartnerCommand,
  businessPartnerPortalMockBusinessPartnerData,
} from '@app/business-partner-portal/business-partner';
import { Test, TestingModule } from '@nestjs/testing';
import { BusinessPartnerPortalCreateBusinessPartnerCommandHandler } from './business-partner-portal-create-business-partner.command-handler';
import { BusinessPartnerPortalCreateBusinessPartnerService } from './business-partner-portal-create-business-partner.service';

describe('BusinessPartnerPortalCreateBusinessPartnerCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalCreateBusinessPartnerCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalCreateBusinessPartnerCommandHandler,
        {
          provide: BusinessPartnerPortalCreateBusinessPartnerService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalCreateBusinessPartnerCommandHandler>(
        BusinessPartnerPortalCreateBusinessPartnerCommandHandler,
      );
  });

  describe('main', () => {
    test('CreateBusinessPartnerCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should create the values objects and pass them as parameters to the BusinessPartnerPortalCreateBusinessPartnerService', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalCreateBusinessPartnerCommand(
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
            { timezone: process.env.TZ },
          ),
        ),
      ).toBe(undefined);
    });
  });
});
