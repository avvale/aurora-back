/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalIPurchaseInvoicePositionRepository,
  BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
} from '@app/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalPaginatePurchaseInvoicePositionsService } from '@app/business-partner-portal/purchase-invoice-position/application/paginate/business-partner-portal-paginate-purchase-invoice-positions.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePurchaseInvoicePositionsService', () => {
  let service: BusinessPartnerPortalPaginatePurchaseInvoicePositionsService;
  let repository: BusinessPartnerPortalIPurchaseInvoicePositionRepository;
  let mockRepository: BusinessPartnerPortalMockPurchaseInvoicePositionRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalPaginatePurchaseInvoicePositionsService,
        BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
        {
          provide: BusinessPartnerPortalIPurchaseInvoicePositionRepository,
          useValue: {
            paginate: (queryStatement, constraints) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(
      BusinessPartnerPortalPaginatePurchaseInvoicePositionsService,
    );
    repository = module.get(
      BusinessPartnerPortalIPurchaseInvoicePositionRepository,
    );
    mockRepository = module.get(
      BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePurchaseInvoicePositionsService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should paginate purchaseInvoicePositions', async () => {
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
