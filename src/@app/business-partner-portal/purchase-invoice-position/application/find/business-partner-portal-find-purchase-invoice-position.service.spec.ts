/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalIPurchaseInvoicePositionRepository,
  BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
} from '@app/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalFindPurchaseInvoicePositionService } from '@app/business-partner-portal/purchase-invoice-position/application/find/business-partner-portal-find-purchase-invoice-position.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPurchaseInvoicePositionService', () => {
  let service: BusinessPartnerPortalFindPurchaseInvoicePositionService;
  let repository: BusinessPartnerPortalIPurchaseInvoicePositionRepository;
  let mockRepository: BusinessPartnerPortalMockPurchaseInvoicePositionRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalFindPurchaseInvoicePositionService,
        BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
        {
          provide: BusinessPartnerPortalIPurchaseInvoicePositionRepository,
          useValue: {
            find: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(
      BusinessPartnerPortalFindPurchaseInvoicePositionService,
    );
    repository = module.get(
      BusinessPartnerPortalIPurchaseInvoicePositionRepository,
    );
    mockRepository = module.get(
      BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPurchaseInvoicePositionService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should find purchaseInvoicePosition', async () => {
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
