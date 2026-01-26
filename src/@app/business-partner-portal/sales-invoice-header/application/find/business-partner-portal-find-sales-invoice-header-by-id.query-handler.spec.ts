/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSalesInvoiceHeaderByIdQuery,
  BusinessPartnerPortalISalesInvoiceHeaderRepository,
  businessPartnerPortalMockSalesInvoiceHeaderData,
  BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
  BusinessPartnerPortalSalesInvoiceHeaderMapper,
} from '@app/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalFindSalesInvoiceHeaderByIdQueryHandler } from '@app/business-partner-portal/sales-invoice-header/application/find/business-partner-portal-find-sales-invoice-header-by-id.query-handler';
import { BusinessPartnerPortalFindSalesInvoiceHeaderByIdService } from '@app/business-partner-portal/sales-invoice-header/application/find/business-partner-portal-find-sales-invoice-header-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSalesInvoiceHeaderByIdQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalFindSalesInvoiceHeaderByIdQueryHandler;
  let service: BusinessPartnerPortalFindSalesInvoiceHeaderByIdService;
  let repository: BusinessPartnerPortalMockSalesInvoiceHeaderRepository;
  let mapper: BusinessPartnerPortalSalesInvoiceHeaderMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalFindSalesInvoiceHeaderByIdQueryHandler,
        {
          provide: BusinessPartnerPortalISalesInvoiceHeaderRepository,
          useClass: BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
        },
        {
          provide: BusinessPartnerPortalFindSalesInvoiceHeaderByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalFindSalesInvoiceHeaderByIdQueryHandler>(
        BusinessPartnerPortalFindSalesInvoiceHeaderByIdQueryHandler,
      );
    service =
      module.get<BusinessPartnerPortalFindSalesInvoiceHeaderByIdService>(
        BusinessPartnerPortalFindSalesInvoiceHeaderByIdService,
      );
    repository = <BusinessPartnerPortalMockSalesInvoiceHeaderRepository>(
      module.get<BusinessPartnerPortalISalesInvoiceHeaderRepository>(
        BusinessPartnerPortalISalesInvoiceHeaderRepository,
      )
    );
    mapper = new BusinessPartnerPortalSalesInvoiceHeaderMapper();
  });

  describe('main', () => {
    test('FindSalesInvoiceHeaderByIdQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an salesInvoiceHeader founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) => resolve(repository.collectionSource[0])),
        );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalFindSalesInvoiceHeaderByIdQuery(
            businessPartnerPortalMockSalesInvoiceHeaderData[0].id,
          ),
        ),
      ).toStrictEqual(
        mapper.mapAggregateToResponse(repository.collectionSource[0]),
      );
    });
  });
});
