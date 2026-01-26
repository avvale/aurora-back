/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalBusinessPartnerMapper,
  BusinessPartnerPortalGetBusinessPartnersQuery,
  BusinessPartnerPortalIBusinessPartnerRepository,
  BusinessPartnerPortalMockBusinessPartnerRepository,
} from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalGetBusinessPartnersQueryHandler } from '@app/business-partner-portal/business-partner/application/get/business-partner-portal-get-business-partners.query-handler';
import { BusinessPartnerPortalGetBusinessPartnersService } from '@app/business-partner-portal/business-partner/application/get/business-partner-portal-get-business-partners.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GetBusinessPartnersQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalGetBusinessPartnersQueryHandler;
  let service: BusinessPartnerPortalGetBusinessPartnersService;
  let repository: BusinessPartnerPortalMockBusinessPartnerRepository;
  let mapper: BusinessPartnerPortalBusinessPartnerMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalGetBusinessPartnersQueryHandler,
        {
          provide: BusinessPartnerPortalIBusinessPartnerRepository,
          useClass: BusinessPartnerPortalMockBusinessPartnerRepository,
        },
        {
          provide: BusinessPartnerPortalGetBusinessPartnersService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalGetBusinessPartnersQueryHandler>(
        BusinessPartnerPortalGetBusinessPartnersQueryHandler,
      );
    service = module.get<BusinessPartnerPortalGetBusinessPartnersService>(
      BusinessPartnerPortalGetBusinessPartnersService,
    );
    repository = <BusinessPartnerPortalMockBusinessPartnerRepository>(
      module.get<BusinessPartnerPortalIBusinessPartnerRepository>(
        BusinessPartnerPortalIBusinessPartnerRepository,
      )
    );
    mapper = new BusinessPartnerPortalBusinessPartnerMapper();
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetBusinessPartnersQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an businessPartners founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () => new Promise((resolve) => resolve(repository.collectionSource)),
        );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalGetBusinessPartnersQuery(),
        ),
      ).toStrictEqual(
        mapper.mapAggregatesToResponses(repository.collectionSource),
      );
    });
  });
});
