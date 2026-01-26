/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPartnerContactQuery,
  BusinessPartnerPortalIPartnerContactRepository,
  BusinessPartnerPortalMockPartnerContactRepository,
  BusinessPartnerPortalPartnerContactMapper,
} from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalFindPartnerContactQueryHandler } from '@app/business-partner-portal/partner-contact/application/find/business-partner-portal-find-partner-contact.query-handler';
import { BusinessPartnerPortalFindPartnerContactService } from '@app/business-partner-portal/partner-contact/application/find/business-partner-portal-find-partner-contact.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPartnerContactQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalFindPartnerContactQueryHandler;
  let service: BusinessPartnerPortalFindPartnerContactService;
  let repository: BusinessPartnerPortalMockPartnerContactRepository;
  let mapper: BusinessPartnerPortalPartnerContactMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalFindPartnerContactQueryHandler,
        {
          provide: BusinessPartnerPortalIPartnerContactRepository,
          useClass: BusinessPartnerPortalMockPartnerContactRepository,
        },
        {
          provide: BusinessPartnerPortalFindPartnerContactService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalFindPartnerContactQueryHandler>(
        BusinessPartnerPortalFindPartnerContactQueryHandler,
      );
    service = module.get<BusinessPartnerPortalFindPartnerContactService>(
      BusinessPartnerPortalFindPartnerContactService,
    );
    repository = <BusinessPartnerPortalMockPartnerContactRepository>(
      module.get<BusinessPartnerPortalIPartnerContactRepository>(
        BusinessPartnerPortalIPartnerContactRepository,
      )
    );
    mapper = new BusinessPartnerPortalPartnerContactMapper();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPartnerContactQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an partnerContact founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) => resolve(repository.collectionSource[0])),
        );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalFindPartnerContactQuery(),
        ),
      ).toStrictEqual(
        mapper.mapAggregateToResponse(repository.collectionSource[0]),
      );
    });
  });
});
