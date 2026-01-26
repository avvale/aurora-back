/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalIPartnerAddressRepository,
  BusinessPartnerPortalMockPartnerAddressRepository,
  BusinessPartnerPortalPaginatePartnerAddressesQuery,
} from '@app/business-partner-portal/partner-address';
import { BusinessPartnerPortalPaginatePartnerAddressesQueryHandler } from '@app/business-partner-portal/partner-address/application/paginate/business-partner-portal-paginate-partner-addresses.query-handler';
import { BusinessPartnerPortalPaginatePartnerAddressesService } from '@app/business-partner-portal/partner-address/application/paginate/business-partner-portal-paginate-partner-addresses.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePartnerAddressesQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalPaginatePartnerAddressesQueryHandler;
  let service: BusinessPartnerPortalPaginatePartnerAddressesService;
  let repository: BusinessPartnerPortalMockPartnerAddressRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalPaginatePartnerAddressesQueryHandler,
        {
          provide: BusinessPartnerPortalIPartnerAddressRepository,
          useClass: BusinessPartnerPortalMockPartnerAddressRepository,
        },
        {
          provide: BusinessPartnerPortalPaginatePartnerAddressesService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalPaginatePartnerAddressesQueryHandler>(
        BusinessPartnerPortalPaginatePartnerAddressesQueryHandler,
      );
    service = module.get<BusinessPartnerPortalPaginatePartnerAddressesService>(
      BusinessPartnerPortalPaginatePartnerAddressesService,
    );
    repository = <BusinessPartnerPortalMockPartnerAddressRepository>(
      module.get<BusinessPartnerPortalIPartnerAddressRepository>(
        BusinessPartnerPortalIPartnerAddressRepository,
      )
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePartnerAddressesQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an partnerAddresses paginated', async () => {
      jest.spyOn(service, 'main').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              count: 10,
              total: 100,
              rows: repository.collectionSource.slice(0, 10),
            }),
          ),
      );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalPaginatePartnerAddressesQuery({
            offset: 0,
            limit: 10,
          }),
        ),
      ).toStrictEqual(
        new PaginationResponse(
          100,
          10,
          repository.collectionSource.slice(0, 10).map((item) => item.toDTO()),
        ),
      );
    });
  });
});
