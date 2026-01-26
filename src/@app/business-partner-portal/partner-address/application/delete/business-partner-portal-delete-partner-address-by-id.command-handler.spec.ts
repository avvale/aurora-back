/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalDeletePartnerAddressByIdCommand,
  businessPartnerPortalMockPartnerAddressData,
} from '@app/business-partner-portal/partner-address';
import { BusinessPartnerPortalDeletePartnerAddressByIdCommandHandler } from '@app/business-partner-portal/partner-address/application/delete/business-partner-portal-delete-partner-address-by-id.command-handler';
import { BusinessPartnerPortalDeletePartnerAddressByIdService } from '@app/business-partner-portal/partner-address/application/delete/business-partner-portal-delete-partner-address-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePartnerAddressByIdCommandHandler', () => {
  let commandHandler: BusinessPartnerPortalDeletePartnerAddressByIdCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalDeletePartnerAddressByIdCommandHandler,
        {
          provide: BusinessPartnerPortalDeletePartnerAddressByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler =
      module.get<BusinessPartnerPortalDeletePartnerAddressByIdCommandHandler>(
        BusinessPartnerPortalDeletePartnerAddressByIdCommandHandler,
      );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePartnerAddressByIdCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should create the value object id and pass them as parameters to the BusinessPartnerPortalDeletePartnerAddressByIdService', async () => {
      expect(
        await commandHandler.execute(
          new BusinessPartnerPortalDeletePartnerAddressByIdCommand(
            businessPartnerPortalMockPartnerAddressData[0].id,
          ),
        ),
      ).toBe(undefined);
    });
  });
});
