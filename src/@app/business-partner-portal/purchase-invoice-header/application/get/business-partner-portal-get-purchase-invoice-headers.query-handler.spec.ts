/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPurchaseInvoiceHeadersQuery,
  BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
  BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
  BusinessPartnerPortalPurchaseInvoiceHeaderMapper,
} from '@app/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalGetPurchaseInvoiceHeadersQueryHandler } from '@app/business-partner-portal/purchase-invoice-header/application/get/business-partner-portal-get-purchase-invoice-headers.query-handler';
import { BusinessPartnerPortalGetPurchaseInvoiceHeadersService } from '@app/business-partner-portal/purchase-invoice-header/application/get/business-partner-portal-get-purchase-invoice-headers.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GetPurchaseInvoiceHeadersQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalGetPurchaseInvoiceHeadersQueryHandler;
  let service: BusinessPartnerPortalGetPurchaseInvoiceHeadersService;
  let repository: BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository;
  let mapper: BusinessPartnerPortalPurchaseInvoiceHeaderMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalGetPurchaseInvoiceHeadersQueryHandler,
        {
          provide: BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
          useClass: BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
        },
        {
          provide: BusinessPartnerPortalGetPurchaseInvoiceHeadersService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalGetPurchaseInvoiceHeadersQueryHandler>(
        BusinessPartnerPortalGetPurchaseInvoiceHeadersQueryHandler,
      );
    service = module.get<BusinessPartnerPortalGetPurchaseInvoiceHeadersService>(
      BusinessPartnerPortalGetPurchaseInvoiceHeadersService,
    );
    repository = <BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository>(
      module.get<BusinessPartnerPortalIPurchaseInvoiceHeaderRepository>(
        BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
      )
    );
    mapper = new BusinessPartnerPortalPurchaseInvoiceHeaderMapper();
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetPurchaseInvoiceHeadersQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an purchaseInvoiceHeaders founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () => new Promise((resolve) => resolve(repository.collectionSource)),
        );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalGetPurchaseInvoiceHeadersQuery(),
        ),
      ).toStrictEqual(
        mapper.mapAggregatesToResponses(repository.collectionSource),
      );
    });
  });
});
