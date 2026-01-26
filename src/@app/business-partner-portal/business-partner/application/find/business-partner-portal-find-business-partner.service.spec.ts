/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalIBusinessPartnerRepository,
  BusinessPartnerPortalMockBusinessPartnerRepository,
} from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalFindBusinessPartnerService } from '@app/business-partner-portal/business-partner/application/find/business-partner-portal-find-business-partner.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindBusinessPartnerService', () => {
  let service: BusinessPartnerPortalFindBusinessPartnerService;
  let repository: BusinessPartnerPortalIBusinessPartnerRepository;
  let mockRepository: BusinessPartnerPortalMockBusinessPartnerRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalFindBusinessPartnerService,
        BusinessPartnerPortalMockBusinessPartnerRepository,
        {
          provide: BusinessPartnerPortalIBusinessPartnerRepository,
          useValue: {
            find: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalFindBusinessPartnerService);
    repository = module.get(BusinessPartnerPortalIBusinessPartnerRepository);
    mockRepository = module.get(
      BusinessPartnerPortalMockBusinessPartnerRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindBusinessPartnerService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should find businessPartner', async () => {
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
