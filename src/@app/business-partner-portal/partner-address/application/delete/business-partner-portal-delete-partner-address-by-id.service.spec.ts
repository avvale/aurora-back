/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalIPartnerAddressRepository,
  businessPartnerPortalMockPartnerAddressData,
  BusinessPartnerPortalMockPartnerAddressRepository,
} from '@app/business-partner-portal/partner-address';
import { BusinessPartnerPortalDeletePartnerAddressByIdService } from '@app/business-partner-portal/partner-address/application/delete/business-partner-portal-delete-partner-address-by-id.service';
import { BusinessPartnerPortalPartnerAddressId } from '@app/business-partner-portal/partner-address/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeletePartnerAddressByIdService', () => {
  let service: BusinessPartnerPortalDeletePartnerAddressByIdService;
  let repository: BusinessPartnerPortalIPartnerAddressRepository;
  let mockRepository: BusinessPartnerPortalMockPartnerAddressRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalDeletePartnerAddressByIdService,
        BusinessPartnerPortalMockPartnerAddressRepository,
        {
          provide: BusinessPartnerPortalIPartnerAddressRepository,
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

    service = module.get(BusinessPartnerPortalDeletePartnerAddressByIdService);
    repository = module.get(BusinessPartnerPortalIPartnerAddressRepository);
    mockRepository = module.get(
      BusinessPartnerPortalMockPartnerAddressRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeletePartnerAddressByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should delete partnerAddress and emit event', async () => {
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
          {},
        ),
      ).toBe(undefined);
    });
  });
});
