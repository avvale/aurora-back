/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import {
  BusinessPartnerPortalFindPurchaseInvoicePositionByIdQuery,
  BusinessPartnerPortalIPurchaseInvoicePositionRepository,
  businessPartnerPortalMockPurchaseInvoicePositionData,
  BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
  BusinessPartnerPortalPurchaseInvoicePositionMapper,
} from '@app/business-partner-portal/purchase-invoice-position';
import { BusinessPartnerPortalFindPurchaseInvoicePositionByIdQueryHandler } from '@app/business-partner-portal/purchase-invoice-position/application/find/business-partner-portal-find-purchase-invoice-position-by-id.query-handler';
import { BusinessPartnerPortalFindPurchaseInvoicePositionByIdService } from '@app/business-partner-portal/purchase-invoice-position/application/find/business-partner-portal-find-purchase-invoice-position-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindPurchaseInvoicePositionByIdQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalFindPurchaseInvoicePositionByIdQueryHandler;
  let service: BusinessPartnerPortalFindPurchaseInvoicePositionByIdService;
  let repository: BusinessPartnerPortalMockPurchaseInvoicePositionRepository;
  let mapper: BusinessPartnerPortalPurchaseInvoicePositionMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalFindPurchaseInvoicePositionByIdQueryHandler,
        {
          provide: BusinessPartnerPortalIPurchaseInvoicePositionRepository,
          useClass: BusinessPartnerPortalMockPurchaseInvoicePositionRepository,
        },
        {
          provide: BusinessPartnerPortalFindPurchaseInvoicePositionByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalFindPurchaseInvoicePositionByIdQueryHandler>(
        BusinessPartnerPortalFindPurchaseInvoicePositionByIdQueryHandler,
      );
    service =
      module.get<BusinessPartnerPortalFindPurchaseInvoicePositionByIdService>(
        BusinessPartnerPortalFindPurchaseInvoicePositionByIdService,
      );
    repository = <BusinessPartnerPortalMockPurchaseInvoicePositionRepository>(
      module.get<BusinessPartnerPortalIPurchaseInvoicePositionRepository>(
        BusinessPartnerPortalIPurchaseInvoicePositionRepository,
      )
    );
    mapper = new BusinessPartnerPortalPurchaseInvoicePositionMapper();
  });

  describe('main', () => {
    test('FindPurchaseInvoicePositionByIdQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an purchaseInvoicePosition founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) => resolve(repository.collectionSource[0])),
        );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalFindPurchaseInvoicePositionByIdQuery(
            businessPartnerPortalMockPurchaseInvoicePositionData[0].id,
          ),
        ),
      ).toStrictEqual(
        mapper.mapAggregateToResponse(repository.collectionSource[0]),
      );
    });
  });
});
