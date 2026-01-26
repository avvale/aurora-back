/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalIPartnerContactRepository,
  businessPartnerPortalMockPartnerContactData,
  BusinessPartnerPortalMockPartnerContactRepository,
} from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalFindPartnerContactByIdService } from '@app/business-partner-portal/partner-contact/application/find/business-partner-portal-find-partner-contact-by-id.service';
import { BusinessPartnerPortalPartnerContactId } from '@app/business-partner-portal/partner-contact/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPartnerContactByIdService', () => {
  let service: BusinessPartnerPortalFindPartnerContactByIdService;
  let repository: BusinessPartnerPortalIPartnerContactRepository;
  let mockRepository: BusinessPartnerPortalMockPartnerContactRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalFindPartnerContactByIdService,
        BusinessPartnerPortalMockPartnerContactRepository,
        {
          provide: BusinessPartnerPortalIPartnerContactRepository,
          useValue: {
            findById: (id) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalFindPartnerContactByIdService);
    repository = module.get(BusinessPartnerPortalIPartnerContactRepository);
    mockRepository = module.get(
      BusinessPartnerPortalMockPartnerContactRepository,
    );
  });

  describe('main', () => {
    test('FindPartnerContactByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should find partnerContact by id', async () => {
      jest
        .spyOn(repository, 'findById')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(mockRepository.collectionSource[0]),
            ),
        );
      expect(
        await service.main(
          new BusinessPartnerPortalPartnerContactId(
            businessPartnerPortalMockPartnerContactData[0].id,
          ),
        ),
      ).toBe(mockRepository.collectionSource[0]);
    });
  });
});
