/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoiceHeaderRepository,
  BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
} from '@app/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalGetSalesInvoiceHeadersService } from '@app/business-partner-portal/sales-invoice-header/application/get/business-partner-portal-get-sales-invoice-headers.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalGetSalesInvoiceHeadersService', () => {
  let service: BusinessPartnerPortalGetSalesInvoiceHeadersService;
  let repository: BusinessPartnerPortalISalesInvoiceHeaderRepository;
  let mockRepository: BusinessPartnerPortalMockSalesInvoiceHeaderRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalGetSalesInvoiceHeadersService,
        BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
        {
          provide: BusinessPartnerPortalISalesInvoiceHeaderRepository,
          useValue: {
            get: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalGetSalesInvoiceHeadersService);
    repository = module.get(BusinessPartnerPortalISalesInvoiceHeaderRepository);
    mockRepository = module.get(
      BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
    );
  });

  describe('main', () => {
    test('GetSalesInvoiceHeadersService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should get salesInvoiceHeaders', async () => {
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
