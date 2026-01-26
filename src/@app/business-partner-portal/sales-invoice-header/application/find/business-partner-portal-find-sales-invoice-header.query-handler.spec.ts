/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSalesInvoiceHeaderQuery,
  BusinessPartnerPortalISalesInvoiceHeaderRepository,
  BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
  BusinessPartnerPortalSalesInvoiceHeaderMapper,
} from '@app/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalFindSalesInvoiceHeaderQueryHandler } from '@app/business-partner-portal/sales-invoice-header/application/find/business-partner-portal-find-sales-invoice-header.query-handler';
import { BusinessPartnerPortalFindSalesInvoiceHeaderService } from '@app/business-partner-portal/sales-invoice-header/application/find/business-partner-portal-find-sales-invoice-header.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSalesInvoiceHeaderQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalFindSalesInvoiceHeaderQueryHandler;
  let service: BusinessPartnerPortalFindSalesInvoiceHeaderService;
  let repository: BusinessPartnerPortalMockSalesInvoiceHeaderRepository;
  let mapper: BusinessPartnerPortalSalesInvoiceHeaderMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalFindSalesInvoiceHeaderQueryHandler,
        {
          provide: BusinessPartnerPortalISalesInvoiceHeaderRepository,
          useClass: BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
        },
        {
          provide: BusinessPartnerPortalFindSalesInvoiceHeaderService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalFindSalesInvoiceHeaderQueryHandler>(
        BusinessPartnerPortalFindSalesInvoiceHeaderQueryHandler,
      );
    service = module.get<BusinessPartnerPortalFindSalesInvoiceHeaderService>(
      BusinessPartnerPortalFindSalesInvoiceHeaderService,
    );
    repository = <BusinessPartnerPortalMockSalesInvoiceHeaderRepository>(
      module.get<BusinessPartnerPortalISalesInvoiceHeaderRepository>(
        BusinessPartnerPortalISalesInvoiceHeaderRepository,
      )
    );
    mapper = new BusinessPartnerPortalSalesInvoiceHeaderMapper();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindSalesInvoiceHeaderQueryHandler should be defined', () => {
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
          new BusinessPartnerPortalFindSalesInvoiceHeaderQuery(),
        ),
      ).toStrictEqual(
        mapper.mapAggregateToResponse(repository.collectionSource[0]),
      );
    });
  });
});
