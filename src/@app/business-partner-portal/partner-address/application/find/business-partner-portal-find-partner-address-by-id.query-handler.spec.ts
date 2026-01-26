/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPartnerAddressByIdQuery,
  BusinessPartnerPortalIPartnerAddressRepository,
  businessPartnerPortalMockPartnerAddressData,
  BusinessPartnerPortalMockPartnerAddressRepository,
  BusinessPartnerPortalPartnerAddressMapper,
} from '@app/business-partner-portal/partner-address';
import { BusinessPartnerPortalFindPartnerAddressByIdQueryHandler } from '@app/business-partner-portal/partner-address/application/find/business-partner-portal-find-partner-address-by-id.query-handler';
import { BusinessPartnerPortalFindPartnerAddressByIdService } from '@app/business-partner-portal/partner-address/application/find/business-partner-portal-find-partner-address-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPartnerAddressByIdQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalFindPartnerAddressByIdQueryHandler;
  let service: BusinessPartnerPortalFindPartnerAddressByIdService;
  let repository: BusinessPartnerPortalMockPartnerAddressRepository;
  let mapper: BusinessPartnerPortalPartnerAddressMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalFindPartnerAddressByIdQueryHandler,
        {
          provide: BusinessPartnerPortalIPartnerAddressRepository,
          useClass: BusinessPartnerPortalMockPartnerAddressRepository,
        },
        {
          provide: BusinessPartnerPortalFindPartnerAddressByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalFindPartnerAddressByIdQueryHandler>(
        BusinessPartnerPortalFindPartnerAddressByIdQueryHandler,
      );
    service = module.get<BusinessPartnerPortalFindPartnerAddressByIdService>(
      BusinessPartnerPortalFindPartnerAddressByIdService,
    );
    repository = <BusinessPartnerPortalMockPartnerAddressRepository>(
      module.get<BusinessPartnerPortalIPartnerAddressRepository>(
        BusinessPartnerPortalIPartnerAddressRepository,
      )
    );
    mapper = new BusinessPartnerPortalPartnerAddressMapper();
  });

  describe('main', () => {
    test('FindPartnerAddressByIdQueryHandler should be defined', () => {
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
          new BusinessPartnerPortalFindPartnerAddressByIdQuery(
            businessPartnerPortalMockPartnerAddressData[0].id,
          ),
        ),
      ).toStrictEqual(
        mapper.mapAggregateToResponse(repository.collectionSource[0]),
      );
    });
  });
});
