/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalIPartnerAddressRepository,
  BusinessPartnerPortalMockPartnerAddressRepository,
} from '@app/business-partner-portal/partner-address';
import { BusinessPartnerPortalGetPartnerAddressesService } from '@app/business-partner-portal/partner-address/application/get/business-partner-portal-get-partner-addresses.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetPartnerAddressesService', () => {
  let service: BusinessPartnerPortalGetPartnerAddressesService;
  let repository: BusinessPartnerPortalIPartnerAddressRepository;
  let mockRepository: BusinessPartnerPortalMockPartnerAddressRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalGetPartnerAddressesService,
        BusinessPartnerPortalMockPartnerAddressRepository,
        {
          provide: BusinessPartnerPortalIPartnerAddressRepository,
          useValue: {
            get: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalGetPartnerAddressesService);
    repository = module.get(BusinessPartnerPortalIPartnerAddressRepository);
    mockRepository = module.get(
      BusinessPartnerPortalMockPartnerAddressRepository,
    );
  });

  describe('main', () => {
    test('GetPartnerAddressesService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should get partnerAddresses', async () => {
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
