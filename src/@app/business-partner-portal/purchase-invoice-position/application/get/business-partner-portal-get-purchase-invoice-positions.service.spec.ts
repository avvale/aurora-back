/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalIPurchaseInvoicePositionRepository,
  BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
} from '@app/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalGetPurchaseInvoicePositionsService } from '@app/business-partner-portal/purchase-invoice-position/application/get/business-partner-portal-get-purchase-invoice-positions.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetPurchaseInvoicePositionsService', () => {
  let service: BusinessPartnerPortalGetPurchaseInvoicePositionsService;
  let repository: BusinessPartnerPortalIPurchaseInvoicePositionRepository;
  let mockRepository: BusinessPartnerPortalMockPurchaseInvoicePositionRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalGetPurchaseInvoicePositionsService,
        BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
        {
          provide: BusinessPartnerPortalIPurchaseInvoicePositionRepository,
          useValue: {
            get: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(
      BusinessPartnerPortalGetPurchaseInvoicePositionsService,
    );
    repository = module.get(
      BusinessPartnerPortalIPurchaseInvoicePositionRepository,
    );
    mockRepository = module.get(
      BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
    );
  });

  describe('main', () => {
    test('GetPurchaseInvoicePositionsService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should get purchaseInvoicePositions', async () => {
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
