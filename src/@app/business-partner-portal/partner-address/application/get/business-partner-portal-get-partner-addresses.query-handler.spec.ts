/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPartnerAddressesQuery,
  BusinessPartnerPortalIPartnerAddressRepository,
  BusinessPartnerPortalMockPartnerAddressRepository,
  BusinessPartnerPortalPartnerAddressMapper,
} from '@app/business-partner-portal/partner-address';
import { BusinessPartnerPortalGetPartnerAddressesQueryHandler } from '@app/business-partner-portal/partner-address/application/get/business-partner-portal-get-partner-addresses.query-handler';
import { BusinessPartnerPortalGetPartnerAddressesService } from '@app/business-partner-portal/partner-address/application/get/business-partner-portal-get-partner-addresses.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GetPartnerAddressesQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalGetPartnerAddressesQueryHandler;
  let service: BusinessPartnerPortalGetPartnerAddressesService;
  let repository: BusinessPartnerPortalMockPartnerAddressRepository;
  let mapper: BusinessPartnerPortalPartnerAddressMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalGetPartnerAddressesQueryHandler,
        {
          provide: BusinessPartnerPortalIPartnerAddressRepository,
          useClass: BusinessPartnerPortalMockPartnerAddressRepository,
        },
        {
          provide: BusinessPartnerPortalGetPartnerAddressesService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalGetPartnerAddressesQueryHandler>(
        BusinessPartnerPortalGetPartnerAddressesQueryHandler,
      );
    service = module.get<BusinessPartnerPortalGetPartnerAddressesService>(
      BusinessPartnerPortalGetPartnerAddressesService,
    );
    repository = <BusinessPartnerPortalMockPartnerAddressRepository>(
      module.get<BusinessPartnerPortalIPartnerAddressRepository>(
        BusinessPartnerPortalIPartnerAddressRepository,
      )
    );
    mapper = new BusinessPartnerPortalPartnerAddressMapper();
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetPartnerAddressesQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an partnerAddresses founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () => new Promise((resolve) => resolve(repository.collectionSource)),
        );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalGetPartnerAddressesQuery(),
        ),
      ).toStrictEqual(
        mapper.mapAggregatesToResponses(repository.collectionSource),
      );
    });
  });
});
