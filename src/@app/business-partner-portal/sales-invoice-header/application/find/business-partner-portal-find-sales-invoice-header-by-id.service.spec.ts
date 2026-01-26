/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoiceHeaderRepository,
  businessPartnerPortalMockSalesInvoiceHeaderData,
  BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
} from '@app/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalFindSalesInvoiceHeaderByIdService } from '@app/business-partner-portal/sales-invoice-header/application/find/business-partner-portal-find-sales-invoice-header-by-id.service';
import { BusinessPartnerPortalSalesInvoiceHeaderId } from '@app/business-partner-portal/sales-invoice-header/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSalesInvoiceHeaderByIdService', () => {
  let service: BusinessPartnerPortalFindSalesInvoiceHeaderByIdService;
  let repository: BusinessPartnerPortalISalesInvoiceHeaderRepository;
  let mockRepository: BusinessPartnerPortalMockSalesInvoiceHeaderRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalFindSalesInvoiceHeaderByIdService,
        BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
        {
          provide: BusinessPartnerPortalISalesInvoiceHeaderRepository,
          useValue: {
            findById: (id) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(
      BusinessPartnerPortalFindSalesInvoiceHeaderByIdService,
    );
    repository = module.get(BusinessPartnerPortalISalesInvoiceHeaderRepository);
    mockRepository = module.get(
      BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
    );
  });

  describe('main', () => {
    test('FindSalesInvoiceHeaderByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should find salesInvoiceHeader by id', async () => {
      jest
        .spyOn(repository, 'findById')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(mockRepository.collectionSource[0]),
            ),
        );
      expect(
        await service.main(
          new BusinessPartnerPortalSalesInvoiceHeaderId(
            businessPartnerPortalMockSalesInvoiceHeaderData[0].id,
          ),
        ),
      ).toBe(mockRepository.collectionSource[0]);
    });
  });
});
