/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalIBusinessPartnerRepository,
  BusinessPartnerPortalMockBusinessPartnerRepository,
} from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalGetBusinessPartnersService } from '@app/business-partner-portal/business-partner/application/get/business-partner-portal-get-business-partners.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetBusinessPartnersService', () => {
  let service: BusinessPartnerPortalGetBusinessPartnersService;
  let repository: BusinessPartnerPortalIBusinessPartnerRepository;
  let mockRepository: BusinessPartnerPortalMockBusinessPartnerRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalGetBusinessPartnersService,
        BusinessPartnerPortalMockBusinessPartnerRepository,
        {
          provide: BusinessPartnerPortalIBusinessPartnerRepository,
          useValue: {
            get: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalGetBusinessPartnersService);
    repository = module.get(BusinessPartnerPortalIBusinessPartnerRepository);
    mockRepository = module.get(
      BusinessPartnerPortalMockBusinessPartnerRepository,
    );
  });

  describe('main', () => {
    test('GetBusinessPartnersService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should get businessPartners', async () => {
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
