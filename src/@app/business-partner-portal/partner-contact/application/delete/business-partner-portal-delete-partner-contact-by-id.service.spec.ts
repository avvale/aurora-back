/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BusinessPartnerPortalIPartnerContactRepository,
  businessPartnerPortalMockPartnerContactData,
  BusinessPartnerPortalMockPartnerContactRepository,
} from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalDeletePartnerContactByIdService } from '@app/business-partner-portal/partner-contact/application/delete/business-partner-portal-delete-partner-contact-by-id.service';
import { BusinessPartnerPortalPartnerContactId } from '@app/business-partner-portal/partner-contact/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePartnerContactByIdService', () => {
  let service: BusinessPartnerPortalDeletePartnerContactByIdService;
  let repository: BusinessPartnerPortalIPartnerContactRepository;
  let mockRepository: BusinessPartnerPortalMockPartnerContactRepository;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalDeletePartnerContactByIdService,
        BusinessPartnerPortalMockPartnerContactRepository,
        {
          provide: BusinessPartnerPortalIPartnerContactRepository,
          useValue: {
            deleteById: (id) => {
              /**/
            },
            findById: (id) => {
              /**/
            },
          },
        },
      ],
    }).compile();
    service = module.get(BusinessPartnerPortalDeletePartnerContactByIdService);
    repository = module.get(BusinessPartnerPortalIPartnerContactRepository);
    mockRepository = module.get(
      BusinessPartnerPortalMockPartnerContactRepository,
    );
  });
  describe('main', () => {
    test('BusinessPartnerPortalDeletePartnerContactByIdService should be defined', () => {
      expect(service).toBeDefined();
    });
    test('should delete partnerContact and emit event', async () => {
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
          {},
        ),
      ).toBe(undefined);
    });
  });
});
