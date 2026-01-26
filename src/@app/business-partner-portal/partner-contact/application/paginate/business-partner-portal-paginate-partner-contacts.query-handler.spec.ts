/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalIPartnerContactRepository,
  BusinessPartnerPortalMockPartnerContactRepository,
  BusinessPartnerPortalPaginatePartnerContactsQuery,
} from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalPaginatePartnerContactsQueryHandler } from '@app/business-partner-portal/partner-contact/application/paginate/business-partner-portal-paginate-partner-contacts.query-handler';
import { BusinessPartnerPortalPaginatePartnerContactsService } from '@app/business-partner-portal/partner-contact/application/paginate/business-partner-portal-paginate-partner-contacts.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePartnerContactsQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalPaginatePartnerContactsQueryHandler;
  let service: BusinessPartnerPortalPaginatePartnerContactsService;
  let repository: BusinessPartnerPortalMockPartnerContactRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalPaginatePartnerContactsQueryHandler,
        {
          provide: BusinessPartnerPortalIPartnerContactRepository,
          useClass: BusinessPartnerPortalMockPartnerContactRepository,
        },
        {
          provide: BusinessPartnerPortalPaginatePartnerContactsService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalPaginatePartnerContactsQueryHandler>(
        BusinessPartnerPortalPaginatePartnerContactsQueryHandler,
      );
    service = module.get<BusinessPartnerPortalPaginatePartnerContactsService>(
      BusinessPartnerPortalPaginatePartnerContactsService,
    );
    repository = <BusinessPartnerPortalMockPartnerContactRepository>(
      module.get<BusinessPartnerPortalIPartnerContactRepository>(
        BusinessPartnerPortalIPartnerContactRepository,
      )
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePartnerContactsQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an partnerContacts paginated', async () => {
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
          new BusinessPartnerPortalPaginatePartnerContactsQuery({
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
