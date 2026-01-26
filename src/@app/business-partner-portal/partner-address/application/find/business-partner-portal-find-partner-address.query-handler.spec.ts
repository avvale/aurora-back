/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPartnerAddressQuery,
  BusinessPartnerPortalIPartnerAddressRepository,
  BusinessPartnerPortalMockPartnerAddressRepository,
  BusinessPartnerPortalPartnerAddressMapper,
} from '@app/business-partner-portal/partner-address';
import { BusinessPartnerPortalFindPartnerAddressQueryHandler } from '@app/business-partner-portal/partner-address/application/find/business-partner-portal-find-partner-address.query-handler';
import { BusinessPartnerPortalFindPartnerAddressService } from '@app/business-partner-portal/partner-address/application/find/business-partner-portal-find-partner-address.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPartnerAddressQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalFindPartnerAddressQueryHandler;
  let service: BusinessPartnerPortalFindPartnerAddressService;
  let repository: BusinessPartnerPortalMockPartnerAddressRepository;
  let mapper: BusinessPartnerPortalPartnerAddressMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalFindPartnerAddressQueryHandler,
        {
          provide: BusinessPartnerPortalIPartnerAddressRepository,
          useClass: BusinessPartnerPortalMockPartnerAddressRepository,
        },
        {
          provide: BusinessPartnerPortalFindPartnerAddressService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalFindPartnerAddressQueryHandler>(
        BusinessPartnerPortalFindPartnerAddressQueryHandler,
      );
    service = module.get<BusinessPartnerPortalFindPartnerAddressService>(
      BusinessPartnerPortalFindPartnerAddressService,
    );
    repository = <BusinessPartnerPortalMockPartnerAddressRepository>(
      module.get<BusinessPartnerPortalIPartnerAddressRepository>(
        BusinessPartnerPortalIPartnerAddressRepository,
      )
    );
    mapper = new BusinessPartnerPortalPartnerAddressMapper();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPartnerAddressQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an partnerAddress founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) => resolve(repository.collectionSource[0])),
        );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalFindPartnerAddressQuery(),
        ),
      ).toStrictEqual(
        mapper.mapAggregateToResponse(repository.collectionSource[0]),
      );
    });
  });
});
