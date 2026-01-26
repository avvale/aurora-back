/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalIBusinessPartnerRepository,
  BusinessPartnerPortalMockBusinessPartnerRepository,
  BusinessPartnerPortalPaginateBusinessPartnersQuery,
} from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalPaginateBusinessPartnersQueryHandler } from '@app/business-partner-portal/business-partner/application/paginate/business-partner-portal-paginate-business-partners.query-handler';
import { BusinessPartnerPortalPaginateBusinessPartnersService } from '@app/business-partner-portal/business-partner/application/paginate/business-partner-portal-paginate-business-partners.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginateBusinessPartnersQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalPaginateBusinessPartnersQueryHandler;
  let service: BusinessPartnerPortalPaginateBusinessPartnersService;
  let repository: BusinessPartnerPortalMockBusinessPartnerRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalPaginateBusinessPartnersQueryHandler,
        {
          provide: BusinessPartnerPortalIBusinessPartnerRepository,
          useClass: BusinessPartnerPortalMockBusinessPartnerRepository,
        },
        {
          provide: BusinessPartnerPortalPaginateBusinessPartnersService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalPaginateBusinessPartnersQueryHandler>(
        BusinessPartnerPortalPaginateBusinessPartnersQueryHandler,
      );
    service = module.get<BusinessPartnerPortalPaginateBusinessPartnersService>(
      BusinessPartnerPortalPaginateBusinessPartnersService,
    );
    repository = <BusinessPartnerPortalMockBusinessPartnerRepository>(
      module.get<BusinessPartnerPortalIBusinessPartnerRepository>(
        BusinessPartnerPortalIBusinessPartnerRepository,
      )
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginateBusinessPartnersQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an businessPartners paginated', async () => {
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
          new BusinessPartnerPortalPaginateBusinessPartnersQuery({
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
