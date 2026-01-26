/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalIPartnerContactRepository,
  BusinessPartnerPortalMockPartnerContactRepository,
} from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalGetPartnerContactsService } from '@app/business-partner-portal/partner-contact/application/get/business-partner-portal-get-partner-contacts.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetPartnerContactsService', () => {
  let service: BusinessPartnerPortalGetPartnerContactsService;
  let repository: BusinessPartnerPortalIPartnerContactRepository;
  let mockRepository: BusinessPartnerPortalMockPartnerContactRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalGetPartnerContactsService,
        BusinessPartnerPortalMockPartnerContactRepository,
        {
          provide: BusinessPartnerPortalIPartnerContactRepository,
          useValue: {
            get: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalGetPartnerContactsService);
    repository = module.get(BusinessPartnerPortalIPartnerContactRepository);
    mockRepository = module.get(
      BusinessPartnerPortalMockPartnerContactRepository,
    );
  });

  describe('main', () => {
    test('GetPartnerContactsService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should get partnerContacts', async () => {
      jest
        .spyOn(repository, 'get')
        .mockImplementation(
          () =>
            new Promise((resolve) => resolve(mockRepository.collectionSource)),
        );
      expect(await service.main()).toBe(mockRepository.collectionSource);
    });
  });
});
