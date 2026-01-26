/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPurchaseInvoiceHeaderQuery,
  BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
  BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
  BusinessPartnerPortalPurchaseInvoiceHeaderMapper,
} from '@app/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalFindPurchaseInvoiceHeaderQueryHandler } from '@app/business-partner-portal/purchase-invoice-header/application/find/business-partner-portal-find-purchase-invoice-header.query-handler';
import { BusinessPartnerPortalFindPurchaseInvoiceHeaderService } from '@app/business-partner-portal/purchase-invoice-header/application/find/business-partner-portal-find-purchase-invoice-header.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPurchaseInvoiceHeaderQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalFindPurchaseInvoiceHeaderQueryHandler;
  let service: BusinessPartnerPortalFindPurchaseInvoiceHeaderService;
  let repository: BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository;
  let mapper: BusinessPartnerPortalPurchaseInvoiceHeaderMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalFindPurchaseInvoiceHeaderQueryHandler,
        {
          provide: BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
          useClass: BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
        },
        {
          provide: BusinessPartnerPortalFindPurchaseInvoiceHeaderService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalFindPurchaseInvoiceHeaderQueryHandler>(
        BusinessPartnerPortalFindPurchaseInvoiceHeaderQueryHandler,
      );
    service = module.get<BusinessPartnerPortalFindPurchaseInvoiceHeaderService>(
      BusinessPartnerPortalFindPurchaseInvoiceHeaderService,
    );
    repository = <BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository>(
      module.get<BusinessPartnerPortalIPurchaseInvoiceHeaderRepository>(
        BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
      )
    );
    mapper = new BusinessPartnerPortalPurchaseInvoiceHeaderMapper();
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindPurchaseInvoiceHeaderQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an purchaseInvoiceHeader founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) => resolve(repository.collectionSource[0])),
        );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalFindPurchaseInvoiceHeaderQuery(),
        ),
      ).toStrictEqual(
        mapper.mapAggregateToResponse(repository.collectionSource[0]),
      );
    });
  });
});
