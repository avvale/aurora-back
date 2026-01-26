/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalIPartnerContactRepository,
  BusinessPartnerPortalMockPartnerContactRepository,
} from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalPaginatePartnerContactsService } from '@app/business-partner-portal/partner-contact/application/paginate/business-partner-portal-paginate-partner-contacts.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePartnerContactsService', () => {
  let service: BusinessPartnerPortalPaginatePartnerContactsService;
  let repository: BusinessPartnerPortalIPartnerContactRepository;
  let mockRepository: BusinessPartnerPortalMockPartnerContactRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalPaginatePartnerContactsService,
        BusinessPartnerPortalMockPartnerContactRepository,
        {
          provide: BusinessPartnerPortalIPartnerContactRepository,
          useValue: {
            paginate: (queryStatement, constraints) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalPaginatePartnerContactsService);
    repository = module.get(BusinessPartnerPortalIPartnerContactRepository);
    mockRepository = module.get(
      BusinessPartnerPortalMockPartnerContactRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePartnerContactsService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should paginate partnerContacts', async () => {
      jest.spyOn(repository, 'paginate').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: mockRepository.collectionSource.slice(0, 10).length,
              count: mockRepository.collectionSource.slice(0, 10).length,
              rows: mockRepository.collectionSource.slice(0, 10),
            }),
          ),
      );
      expect(
        await service.main({
          offset: 0,
          limit: 10,
        }),
      ).toStrictEqual({
        total: mockRepository.collectionSource.slice(0, 10).length,
        count: mockRepository.collectionSource.slice(0, 10).length,
        rows: mockRepository.collectionSource.slice(0, 10),
      });
    });
  });
});
