/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoicePositionRepository,
  BusinessPartnerPortalMockSalesInvoicePositionRepository,
} from '@app/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalGetSalesInvoicePositionsService } from '@app/business-partner-portal/sales-invoice-position/application/get/business-partner-portal-get-sales-invoice-positions.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetSalesInvoicePositionsService', () => {
  let service: BusinessPartnerPortalGetSalesInvoicePositionsService;
  let repository: BusinessPartnerPortalISalesInvoicePositionRepository;
  let mockRepository: BusinessPartnerPortalMockSalesInvoicePositionRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalGetSalesInvoicePositionsService,
        BusinessPartnerPortalMockSalesInvoicePositionRepository,
        {
          provide: BusinessPartnerPortalISalesInvoicePositionRepository,
          useValue: {
            get: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalGetSalesInvoicePositionsService);
    repository = module.get(
      BusinessPartnerPortalISalesInvoicePositionRepository,
    );
    mockRepository = module.get(
      BusinessPartnerPortalMockSalesInvoicePositionRepository,
    );
  });

  describe('main', () => {
    test('GetSalesInvoicePositionsService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should get salesInvoicePositions', async () => {
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
