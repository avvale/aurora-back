/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalBusinessPartnerMapper,
  BusinessPartnerPortalFindBusinessPartnerByIdQuery,
  BusinessPartnerPortalIBusinessPartnerRepository,
  businessPartnerPortalMockBusinessPartnerData,
  BusinessPartnerPortalMockBusinessPartnerRepository,
} from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalFindBusinessPartnerByIdQueryHandler } from '@app/business-partner-portal/business-partner/application/find/business-partner-portal-find-business-partner-by-id.query-handler';
import { BusinessPartnerPortalFindBusinessPartnerByIdService } from '@app/business-partner-portal/business-partner/application/find/business-partner-portal-find-business-partner-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindBusinessPartnerByIdQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalFindBusinessPartnerByIdQueryHandler;
  let service: BusinessPartnerPortalFindBusinessPartnerByIdService;
  let repository: BusinessPartnerPortalMockBusinessPartnerRepository;
  let mapper: BusinessPartnerPortalBusinessPartnerMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalFindBusinessPartnerByIdQueryHandler,
        {
          provide: BusinessPartnerPortalIBusinessPartnerRepository,
          useClass: BusinessPartnerPortalMockBusinessPartnerRepository,
        },
        {
          provide: BusinessPartnerPortalFindBusinessPartnerByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalFindBusinessPartnerByIdQueryHandler>(
        BusinessPartnerPortalFindBusinessPartnerByIdQueryHandler,
      );
    service = module.get<BusinessPartnerPortalFindBusinessPartnerByIdService>(
      BusinessPartnerPortalFindBusinessPartnerByIdService,
    );
    repository = <BusinessPartnerPortalMockBusinessPartnerRepository>(
      module.get<BusinessPartnerPortalIBusinessPartnerRepository>(
        BusinessPartnerPortalIBusinessPartnerRepository,
      )
    );
    mapper = new BusinessPartnerPortalBusinessPartnerMapper();
  });

  describe('main', () => {
    test('FindBusinessPartnerByIdQueryHandler should be defined', () => {
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
          new BusinessPartnerPortalFindBusinessPartnerByIdQuery(
            businessPartnerPortalMockBusinessPartnerData[0].id,
          ),
        ),
      ).toStrictEqual(
        mapper.mapAggregateToResponse(repository.collectionSource[0]),
      );
    });
  });
});
