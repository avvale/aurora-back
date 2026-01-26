/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalGetSalesInvoiceHeadersQuery,
  BusinessPartnerPortalISalesInvoiceHeaderRepository,
  BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
  BusinessPartnerPortalSalesInvoiceHeaderMapper,
} from '@app/business-partner-portal/sales-invoice-header';
import { BusinessPartnerPortalGetSalesInvoiceHeadersQueryHandler } from '@app/business-partner-portal/sales-invoice-header/application/get/business-partner-portal-get-sales-invoice-headers.query-handler';
import { BusinessPartnerPortalGetSalesInvoiceHeadersService } from '@app/business-partner-portal/sales-invoice-header/application/get/business-partner-portal-get-sales-invoice-headers.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GetSalesInvoiceHeadersQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalGetSalesInvoiceHeadersQueryHandler;
  let service: BusinessPartnerPortalGetSalesInvoiceHeadersService;
  let repository: BusinessPartnerPortalMockSalesInvoiceHeaderRepository;
  let mapper: BusinessPartnerPortalSalesInvoiceHeaderMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalGetSalesInvoiceHeadersQueryHandler,
        {
          provide: BusinessPartnerPortalISalesInvoiceHeaderRepository,
          useClass: BusinessPartnerPortalMockSalesInvoiceHeaderRepository,
        },
        {
          provide: BusinessPartnerPortalGetSalesInvoiceHeadersService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalGetSalesInvoiceHeadersQueryHandler>(
        BusinessPartnerPortalGetSalesInvoiceHeadersQueryHandler,
      );
    service = module.get<BusinessPartnerPortalGetSalesInvoiceHeadersService>(
      BusinessPartnerPortalGetSalesInvoiceHeadersService,
    );
    repository = <BusinessPartnerPortalMockSalesInvoiceHeaderRepository>(
      module.get<BusinessPartnerPortalISalesInvoiceHeaderRepository>(
        BusinessPartnerPortalISalesInvoiceHeaderRepository,
      )
    );
    mapper = new BusinessPartnerPortalSalesInvoiceHeaderMapper();
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetSalesInvoiceHeadersQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an salesInvoiceHeaders founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () => new Promise((resolve) => resolve(repository.collectionSource)),
        );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalGetSalesInvoiceHeadersQuery(),
        ),
      ).toStrictEqual(
        mapper.mapAggregatesToResponses(repository.collectionSource),
      );
    });
  });
});
