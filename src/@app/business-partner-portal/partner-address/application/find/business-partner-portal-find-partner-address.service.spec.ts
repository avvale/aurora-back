/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalIPartnerAddressRepository,
  BusinessPartnerPortalMockPartnerAddressRepository,
} from '@app/business-partner-portal/partner-address';
import { BusinessPartnerPortalFindPartnerAddressService } from '@app/business-partner-portal/partner-address/application/find/business-partner-portal-find-partner-address.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPartnerAddressService', () => {
  let service: BusinessPartnerPortalFindPartnerAddressService;
  let repository: BusinessPartnerPortalIPartnerAddressRepository;
  let mockRepository: BusinessPartnerPortalMockPartnerAddressRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalFindPartnerAddressService,
        BusinessPartnerPortalMockPartnerAddressRepository,
        {
          provide: BusinessPartnerPortalIPartnerAddressRepository,
          useValue: {
            find: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalFindPartnerAddressService);
    repository = module.get(BusinessPartnerPortalIPartnerAddressRepository);
    mockRepository = module.get(
      BusinessPartnerPortalMockPartnerAddressRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPartnerAddressService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should find partnerAddress', async () => {
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
