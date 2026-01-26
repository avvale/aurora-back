/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentModeRepository,
  BusinessPartnerPortalMockPaymentModeRepository,
} from '@app/business-partner-portal/payment-mode';
import { BusinessPartnerPortalPaginatePaymentModesService } from '@app/business-partner-portal/payment-mode/application/paginate/business-partner-portal-paginate-payment-modes.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePaymentModesService', () => {
  let service: BusinessPartnerPortalPaginatePaymentModesService;
  let repository: BusinessPartnerPortalIPaymentModeRepository;
  let mockRepository: BusinessPartnerPortalMockPaymentModeRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalPaginatePaymentModesService,
        BusinessPartnerPortalMockPaymentModeRepository,
        {
          provide: BusinessPartnerPortalIPaymentModeRepository,
          useValue: {
            paginate: (queryStatement, constraints) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalPaginatePaymentModesService);
    repository = module.get(BusinessPartnerPortalIPaymentModeRepository);
    mockRepository = module.get(BusinessPartnerPortalMockPaymentModeRepository);
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePaymentModesService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should paginate paymentModes', async () => {
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
