/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoiceHeaderRepository,
  BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
} from '@app/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalFindSalesInvoiceHeaderService } from '@app/business-partner-portal/sales-invoice-header/application/find/business-partner-portal-find-sales-invoice-header.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSalesInvoiceHeaderService', () => {
  let service: BusinessPartnerPortalFindSalesInvoiceHeaderService;
  let repository: BusinessPartnerPortalISalesInvoiceHeaderRepository;
  let mockRepository: BusinessPartnerPortalMockSalesInvoiceHeaderRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalFindSalesInvoiceHeaderService,
        BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
        {
          provide: BusinessPartnerPortalISalesInvoiceHeaderRepository,
          useValue: {
            find: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalFindSalesInvoiceHeaderService);
    repository = module.get(BusinessPartnerPortalISalesInvoiceHeaderRepository);
    mockRepository = module.get(
      BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindSalesInvoiceHeaderService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should find salesInvoiceHeader', async () => {
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
