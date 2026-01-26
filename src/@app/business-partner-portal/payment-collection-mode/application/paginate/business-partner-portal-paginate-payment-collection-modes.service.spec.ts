/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentCollectionModeRepository,
  BusinessPartnerPortalMockPaymentCollectionModeRepository,
} from '@app/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalPaginatePaymentCollectionModesService } from '@app/business-partner-portal/payment-collection-mode/application/paginate/business-partner-portal-paginate-payment-collection-modes.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePaymentCollectionModesService', () => {
  let service: BusinessPartnerPortalPaginatePaymentCollectionModesService;
  let repository: BusinessPartnerPortalIPaymentCollectionModeRepository;
  let mockRepository: BusinessPartnerPortalMockPaymentCollectionModeRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalPaginatePaymentCollectionModesService,
        BusinessPartnerPortalMockPaymentCollectionModeRepository,
        {
          provide: BusinessPartnerPortalIPaymentCollectionModeRepository,
          useValue: {
            paginate: (queryStatement, constraints) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(
      BusinessPartnerPortalPaginatePaymentCollectionModesService,
    );
    repository = module.get(
      BusinessPartnerPortalIPaymentCollectionModeRepository,
    );
    mockRepository = module.get(
      BusinessPartnerPortalMockPaymentCollectionModeRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePaymentCollectionModesService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should paginate paymentCollectionModes', async () => {
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
