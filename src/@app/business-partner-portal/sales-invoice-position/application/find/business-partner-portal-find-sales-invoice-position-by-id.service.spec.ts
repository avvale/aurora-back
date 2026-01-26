/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalISalesInvoicePositionRepository,
  businessPartnerPortalMockSalesInvoicePositionData,
  BusinessPartnerPortalMockSalesInvoicePositionRepository,
} from '@app/business-partner-portal/sales-invoice-position';
import { BusinessPartnerPortalFindSalesInvoicePositionByIdService } from '@app/business-partner-portal/sales-invoice-position/application/find/business-partner-portal-find-sales-invoice-position-by-id.service';
import { BusinessPartnerPortalSalesInvoicePositionId } from '@app/business-partner-portal/sales-invoice-position/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSalesInvoicePositionByIdService', () => {
  let service: BusinessPartnerPortalFindSalesInvoicePositionByIdService;
  let repository: BusinessPartnerPortalISalesInvoicePositionRepository;
  let mockRepository: BusinessPartnerPortalMockSalesInvoicePositionRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalFindSalesInvoicePositionByIdService,
        BusinessPartnerPortalMockSalesInvoicePositionRepository,
        {
          provide: BusinessPartnerPortalISalesInvoicePositionRepository,
          useValue: {
            findById: (id) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(
      BusinessPartnerPortalFindSalesInvoicePositionByIdService,
    );
    repository = module.get(
      BusinessPartnerPortalISalesInvoicePositionRepository,
    );
    mockRepository = module.get(
      BusinessPartnerPortalMockSalesInvoicePositionRepository,
    );
  });

  describe('main', () => {
    test('FindSalesInvoicePositionByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should find salesInvoicePosition by id', async () => {
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
          new BusinessPartnerPortalSalesInvoicePositionId(
            businessPartnerPortalMockSalesInvoicePositionData[0].id,
          ),
        ),
      ).toBe(mockRepository.collectionSource[0]);
    });
  });
});
