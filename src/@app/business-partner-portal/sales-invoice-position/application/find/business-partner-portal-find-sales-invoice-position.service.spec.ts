/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoicePositionRepository,
  BusinessPartnerPortalMockSalesInvoicePositionRepository,
} from '@app/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalFindSalesInvoicePositionService } from '@app/business-partner-portal/sales-invoice-position/application/find/business-partner-portal-find-sales-invoice-position.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSalesInvoicePositionService', () => {
  let service: BusinessPartnerPortalFindSalesInvoicePositionService;
  let repository: BusinessPartnerPortalISalesInvoicePositionRepository;
  let mockRepository: BusinessPartnerPortalMockSalesInvoicePositionRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalFindSalesInvoicePositionService,
        BusinessPartnerPortalMockSalesInvoicePositionRepository,
        {
          provide: BusinessPartnerPortalISalesInvoicePositionRepository,
          useValue: {
            find: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalFindSalesInvoicePositionService);
    repository = module.get(
      BusinessPartnerPortalISalesInvoicePositionRepository,
    );
    mockRepository = module.get(
      BusinessPartnerPortalMockSalesInvoicePositionRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindSalesInvoicePositionService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should find salesInvoicePosition', async () => {
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
