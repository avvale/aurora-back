/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdQuery,
  BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
  businessPartnerPortalMockPurchaseInvoiceHeaderData,
  BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
  BusinessPartnerPortalPurchaseInvoiceHeaderMapper,
} from '@app/business-partner-portal/purchase-invoice-header';
import { BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdQueryHandler } from '@app/business-partner-portal/purchase-invoice-header/application/find/business-partner-portal-find-purchase-invoice-header-by-id.query-handler';
import { BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdService } from '@app/business-partner-portal/purchase-invoice-header/application/find/business-partner-portal-find-purchase-invoice-header-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdQueryHandler;
  let service: BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdService;
  let repository: BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository;
  let mapper: BusinessPartnerPortalPurchaseInvoiceHeaderMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdQueryHandler,
        {
          provide: BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
          useClass: BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository,
        },
        {
          provide: BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdQueryHandler>(
        BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdQueryHandler,
      );
    service =
      module.get<BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdService>(
        BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdService,
      );
    repository = <BusinessPartnerPortalMockPurchaseInvoiceHeaderRepository>(
      module.get<BusinessPartnerPortalIPurchaseInvoiceHeaderRepository>(
        BusinessPartnerPortalIPurchaseInvoiceHeaderRepository,
      )
    );
    mapper = new BusinessPartnerPortalPurchaseInvoiceHeaderMapper();
  });

  describe('main', () => {
    test('FindPurchaseInvoiceHeaderByIdQueryHandler should be defined', () => {
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
          new BusinessPartnerPortalFindPurchaseInvoiceHeaderByIdQuery(
            businessPartnerPortalMockPurchaseInvoiceHeaderData[0].id,
          ),
        ),
      ).toStrictEqual(
        mapper.mapAggregateToResponse(repository.collectionSource[0]),
      );
    });
  });
});
