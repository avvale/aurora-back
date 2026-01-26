/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalIPartnerContactRepository,
  BusinessPartnerPortalMockPartnerContactRepository,
} from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalFindPartnerContactService } from '@app/business-partner-portal/partner-contact/application/find/business-partner-portal-find-partner-contact.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPartnerContactService', () => {
  let service: BusinessPartnerPortalFindPartnerContactService;
  let repository: BusinessPartnerPortalIPartnerContactRepository;
  let mockRepository: BusinessPartnerPortalMockPartnerContactRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalFindPartnerContactService,
        BusinessPartnerPortalMockPartnerContactRepository,
        {
          provide: BusinessPartnerPortalIPartnerContactRepository,
          useValue: {
            find: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalFindPartnerContactService);
    repository = module.get(BusinessPartnerPortalIPartnerContactRepository);
    mockRepository = module.get(
      BusinessPartnerPortalMockPartnerContactRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPartnerContactService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should find partnerContact', async () => {
      jest
        .spyOn(repository, 'find')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(mockRepository.collectionSource[0]),
            ),
        );
      expect(await service.main()).toBe(mockRepository.collectionSource[0]);
    });
  });
});
