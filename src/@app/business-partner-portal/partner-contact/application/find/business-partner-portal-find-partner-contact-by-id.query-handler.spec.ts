/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPartnerContactByIdQuery,
  BusinessPartnerPortalIPartnerContactRepository,
  businessPartnerPortalMockPartnerContactData,
  BusinessPartnerPortalMockPartnerContactRepository,
  BusinessPartnerPortalPartnerContactMapper,
} from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalFindPartnerContactByIdQueryHandler } from '@app/business-partner-portal/partner-contact/application/find/business-partner-portal-find-partner-contact-by-id.query-handler';
import { BusinessPartnerPortalFindPartnerContactByIdService } from '@app/business-partner-portal/partner-contact/application/find/business-partner-portal-find-partner-contact-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPartnerContactByIdQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalFindPartnerContactByIdQueryHandler;
  let service: BusinessPartnerPortalFindPartnerContactByIdService;
  let repository: BusinessPartnerPortalMockPartnerContactRepository;
  let mapper: BusinessPartnerPortalPartnerContactMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalFindPartnerContactByIdQueryHandler,
        {
          provide: BusinessPartnerPortalIPartnerContactRepository,
          useClass: BusinessPartnerPortalMockPartnerContactRepository,
        },
        {
          provide: BusinessPartnerPortalFindPartnerContactByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalFindPartnerContactByIdQueryHandler>(
        BusinessPartnerPortalFindPartnerContactByIdQueryHandler,
      );
    service = module.get<BusinessPartnerPortalFindPartnerContactByIdService>(
      BusinessPartnerPortalFindPartnerContactByIdService,
    );
    repository = <BusinessPartnerPortalMockPartnerContactRepository>(
      module.get<BusinessPartnerPortalIPartnerContactRepository>(
        BusinessPartnerPortalIPartnerContactRepository,
      )
    );
    mapper = new BusinessPartnerPortalPartnerContactMapper();
  });

  describe('main', () => {
    test('FindPartnerContactByIdQueryHandler should be defined', () => {
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
          new BusinessPartnerPortalFindPartnerContactByIdQuery(
            businessPartnerPortalMockPartnerContactData[0].id,
          ),
        ),
      ).toStrictEqual(
        mapper.mapAggregateToResponse(repository.collectionSource[0]),
      );
    });
  });
});
