/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  BusinessPartnerPortalIPartnerAddressRepository,
  BusinessPartnerPortalMockPartnerAddressRepository,
} from '@app/business-partner-portal/partner-address';
import { BusinessPartnerPortalPaginatePartnerAddressesService } from '@app/business-partner-portal/partner-address/application/paginate/business-partner-portal-paginate-partner-addresses.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePartnerAddressesService', () => {
  let service: BusinessPartnerPortalPaginatePartnerAddressesService;
  let repository: BusinessPartnerPortalIPartnerAddressRepository;
  let mockRepository: BusinessPartnerPortalMockPartnerAddressRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalPaginatePartnerAddressesService,
        BusinessPartnerPortalMockPartnerAddressRepository,
        {
          provide: BusinessPartnerPortalIPartnerAddressRepository,
          useValue: {
            paginate: (queryStatement, constraints) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalPaginatePartnerAddressesService);
    repository = module.get(BusinessPartnerPortalIPartnerAddressRepository);
    mockRepository = module.get(
      BusinessPartnerPortalMockPartnerAddressRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePartnerAddressesService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should paginate partnerAddresses', async () => {
      jest.spyOn(repository, 'paginate').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: mockRepository.collectionSource.slice(0, 10).length,
              count: mockRepository.collectionSource.slice(0, 10).length,
              rows: mockRepository.collectionSource.slice(0, 10),
            }),
          ),
      );
      expect(
        await service.main({
          offset: 0,
          limit: 10,
        }),
      ).toStrictEqual({
        total: mockRepository.collectionSource.slice(0, 10).length,
        count: mockRepository.collectionSource.slice(0, 10).length,
        rows: mockRepository.collectionSource.slice(0, 10),
      });
    });
  });
});
