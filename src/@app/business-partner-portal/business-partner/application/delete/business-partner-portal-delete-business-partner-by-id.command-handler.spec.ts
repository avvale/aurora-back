/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalDeleteBusinessPartnerByIdCommand,
  businessPartnerPortalMockBusinessPartnerData,
} from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalDeleteBusinessPartnerByIdCommandHandler } from '@app/business-partner-portal/business-partner/application/delete/business-partner-portal-delete-business-partner-by-id.command-handler';
import { BusinessPartnerPortalDeleteBusinessPartnerByIdService } from '@app/business-partner-portal/business-partner/application/delete/business-partner-portal-delete-business-partner-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeleteBusinessPartnerByIdCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalDeleteBusinessPartnerByIdCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalDeleteBusinessPartnerByIdCommandHandler,
        {
          provide: BusinessPartnerPortalDeleteBusinessPartnerByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalDeleteBusinessPartnerByIdCommandHandler>(
        BusinessPartnerPortalDeleteBusinessPartnerByIdCommandHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeleteBusinessPartnerByIdCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should create the value object id and pass them as parameters to the BusinessPartnerPortalDeleteBusinessPartnerByIdService', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalDeleteBusinessPartnerByIdCommand(
            businessPartnerPortalMockBusinessPartnerData[0].id,
          ),
        ),
      ).toBe(undefined);
    });
  });
});
