/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPartnerContactsQuery,
  BusinessPartnerPortalIPartnerContactRepository,
  BusinessPartnerPortalMockPartnerContactRepository,
  BusinessPartnerPortalPartnerContactMapper,
} from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalGetPartnerContactsQueryHandler } from '@app/business-partner-portal/partner-contact/application/get/business-partner-portal-get-partner-contacts.query-handler';
import { BusinessPartnerPortalGetPartnerContactsService } from '@app/business-partner-portal/partner-contact/application/get/business-partner-portal-get-partner-contacts.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GetPartnerContactsQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalGetPartnerContactsQueryHandler;
  let service: BusinessPartnerPortalGetPartnerContactsService;
  let repository: BusinessPartnerPortalMockPartnerContactRepository;
  let mapper: BusinessPartnerPortalPartnerContactMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalGetPartnerContactsQueryHandler,
        {
          provide: BusinessPartnerPortalIPartnerContactRepository,
          useClass: BusinessPartnerPortalMockPartnerContactRepository,
        },
        {
          provide: BusinessPartnerPortalGetPartnerContactsService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalGetPartnerContactsQueryHandler>(
        BusinessPartnerPortalGetPartnerContactsQueryHandler,
      );
    service = module.get<BusinessPartnerPortalGetPartnerContactsService>(
      BusinessPartnerPortalGetPartnerContactsService,
    );
    repository = <BusinessPartnerPortalMockPartnerContactRepository>(
      module.get<BusinessPartnerPortalIPartnerContactRepository>(
        BusinessPartnerPortalIPartnerContactRepository,
      )
    );
    mapper = new BusinessPartnerPortalPartnerContactMapper();
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetPartnerContactsQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an partnerContacts founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () => new Promise((resolve) => resolve(repository.collectionSource)),
        );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalGetPartnerContactsQuery(),
        ),
      ).toStrictEqual(
        mapper.mapAggregatesToResponses(repository.collectionSource),
      );
    });
  });
});
