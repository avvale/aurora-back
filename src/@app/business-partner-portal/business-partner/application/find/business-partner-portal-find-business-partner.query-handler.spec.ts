/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalBusinessPartnerMapper,
  BusinessPartnerPortalFindBusinessPartnerQuery,
  BusinessPartnerPortalIBusinessPartnerRepository,
  BusinessPartnerPortalMockBusinessPartnerRepository,
} from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalFindBusinessPartnerQueryHandler } from '@app/business-partner-portal/business-partner/application/find/business-partner-portal-find-business-partner.query-handler';
import { BusinessPartnerPortalFindBusinessPartnerService } from '@app/business-partner-portal/business-partner/application/find/business-partner-portal-find-business-partner.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindBusinessPartnerQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalFindBusinessPartnerQueryHandler;
  let service: BusinessPartnerPortalFindBusinessPartnerService;
  let repository: BusinessPartnerPortalMockBusinessPartnerRepository;
  let mapper: BusinessPartnerPortalBusinessPartnerMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalFindBusinessPartnerQueryHandler,
        {
          provide: BusinessPartnerPortalIBusinessPartnerRepository,
          useClass: BusinessPartnerPortalMockBusinessPartnerRepository,
        },
        {
          provide: BusinessPartnerPortalFindBusinessPartnerService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalFindBusinessPartnerQueryHandler>(
        BusinessPartnerPortalFindBusinessPartnerQueryHandler,
      );
    service = module.get<BusinessPartnerPortalFindBusinessPartnerService>(
      BusinessPartnerPortalFindBusinessPartnerService,
    );
    repository = <BusinessPartnerPortalMockBusinessPartnerRepository>(
      module.get<BusinessPartnerPortalIBusinessPartnerRepository>(
        BusinessPartnerPortalIBusinessPartnerRepository,
      )
    );
    mapper = new BusinessPartnerPortalBusinessPartnerMapper();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindBusinessPartnerQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an businessPartner founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) => resolve(repository.collectionSource[0])),
        );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalFindBusinessPartnerQuery(),
        ),
      ).toStrictEqual(
        mapper.mapAggregateToResponse(repository.collectionSource[0]),
      );
    });
  });
});
