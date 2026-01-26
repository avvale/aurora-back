/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoiceHeaderRepository,
  businessPartnerPortalMockSalesInvoiceHeaderData,
  BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
} from '@app/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdService } from '@app/business-partner-portal/sales-invoice-header/application/delete/business-partner-portal-delete-sales-invoice-header-by-id.service';
import { BusinessPartnerPortalSalesInvoiceHeaderId } from '@app/business-partner-portal/sales-invoice-header/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdService', () => {
  let service: BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdService;
  let repository: BusinessPartnerPortalISalesInvoiceHeaderRepository;
  let mockRepository: BusinessPartnerPortalMockSalesInvoiceHeaderRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdService,
        BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
        {
          provide: BusinessPartnerPortalISalesInvoiceHeaderRepository,
          useValue: {
            deleteById: (id) => {
              /**/
            },
            findById: (id) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(
      BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdService,
    );
    repository = module.get(BusinessPartnerPortalISalesInvoiceHeaderRepository);
    mockRepository = module.get(
      BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeleteSalesInvoiceHeaderByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should delete salesInvoiceHeader and emit event', async () => {
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
          {},
        ),
      ).toBe(undefined);
    });
  });
});
