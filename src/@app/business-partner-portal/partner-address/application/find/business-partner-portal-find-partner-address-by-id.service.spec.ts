/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalIPartnerAddressRepository,
  businessPartnerPortalMockPartnerAddressData,
  BusinessPartnerPortalMockPartnerAddressRepository,
} from '@app/business-partner-portal/partner-address';
import { BusinessPartnerPortalFindPartnerAddressByIdService } from '@app/business-partner-portal/partner-address/application/find/business-partner-portal-find-partner-address-by-id.service';
import { BusinessPartnerPortalPartnerAddressId } from '@app/business-partner-portal/partner-address/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPartnerAddressByIdService', () => {
  let service: BusinessPartnerPortalFindPartnerAddressByIdService;
  let repository: BusinessPartnerPortalIPartnerAddressRepository;
  let mockRepository: BusinessPartnerPortalMockPartnerAddressRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalFindPartnerAddressByIdService,
        BusinessPartnerPortalMockPartnerAddressRepository,
        {
          provide: BusinessPartnerPortalIPartnerAddressRepository,
          useValue: {
            findById: (id) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalFindPartnerAddressByIdService);
    repository = module.get(BusinessPartnerPortalIPartnerAddressRepository);
    mockRepository = module.get(
      BusinessPartnerPortalMockPartnerAddressRepository,
    );
  });

  describe('main', () => {
    test('FindPartnerAddressByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should find partnerAddress by id', async () => {
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
          new BusinessPartnerPortalPartnerAddressId(
            businessPartnerPortalMockPartnerAddressData[0].id,
          ),
        ),
      ).toBe(mockRepository.collectionSource[0]);
    });
  });
});
