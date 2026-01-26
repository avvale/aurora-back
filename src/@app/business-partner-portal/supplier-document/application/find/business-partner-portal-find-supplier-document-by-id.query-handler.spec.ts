/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalFindSupplierDocumentByIdQuery,
  BusinessPartnerPortalISupplierDocumentRepository,
  businessPartnerPortalMockSupplierDocumentData,
  BusinessPartnerPortalMockSupplierDocumentRepository,
  BusinessPartnerPortalSupplierDocumentMapper,
} from '@app/business-partner-portal/supplier-document';
import { BusinessPartnerPortalFindSupplierDocumentByIdQueryHandler } from '@app/business-partner-portal/supplier-document/application/find/business-partner-portal-find-supplier-document-by-id.query-handler';
import { BusinessPartnerPortalFindSupplierDocumentByIdService } from '@app/business-partner-portal/supplier-document/application/find/business-partner-portal-find-supplier-document-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSupplierDocumentByIdQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalFindSupplierDocumentByIdQueryHandler;
  let service: BusinessPartnerPortalFindSupplierDocumentByIdService;
  let repository: BusinessPartnerPortalMockSupplierDocumentRepository;
  let mapper: BusinessPartnerPortalSupplierDocumentMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalFindSupplierDocumentByIdQueryHandler,
        {
          provide: BusinessPartnerPortalISupplierDocumentRepository,
          useClass: BusinessPartnerPortalMockSupplierDocumentRepository,
        },
        {
          provide: BusinessPartnerPortalFindSupplierDocumentByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalFindSupplierDocumentByIdQueryHandler>(
        BusinessPartnerPortalFindSupplierDocumentByIdQueryHandler,
      );
    service = module.get<BusinessPartnerPortalFindSupplierDocumentByIdService>(
      BusinessPartnerPortalFindSupplierDocumentByIdService,
    );
    repository = <BusinessPartnerPortalMockSupplierDocumentRepository>(
      module.get<BusinessPartnerPortalISupplierDocumentRepository>(
        BusinessPartnerPortalISupplierDocumentRepository,
      )
    );
    mapper = new BusinessPartnerPortalSupplierDocumentMapper();
  });

  describe('main', () => {
    test('FindSupplierDocumentByIdQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an supplierDocument founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) => resolve(repository.collectionSource[0])),
        );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalFindSupplierDocumentByIdQuery(
            businessPartnerPortalMockSupplierDocumentData[0].id,
          ),
        ),
      ).toStrictEqual(
        mapper.mapAggregateToResponse(repository.collectionSource[0]),
      );
    });
  });
});
