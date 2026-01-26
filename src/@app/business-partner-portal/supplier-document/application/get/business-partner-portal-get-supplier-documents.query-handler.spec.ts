/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalGetSupplierDocumentsQuery,
  BusinessPartnerPortalISupplierDocumentRepository,
  BusinessPartnerPortalMockSupplierDocumentRepository,
  BusinessPartnerPortalSupplierDocumentMapper,
} from '@app/business-partner-portal/supplier-document';
import { BusinessPartnerPortalGetSupplierDocumentsQueryHandler } from '@app/business-partner-portal/supplier-document/application/get/business-partner-portal-get-supplier-documents.query-handler';
import { BusinessPartnerPortalGetSupplierDocumentsService } from '@app/business-partner-portal/supplier-document/application/get/business-partner-portal-get-supplier-documents.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GetSupplierDocumentsQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalGetSupplierDocumentsQueryHandler;
  let service: BusinessPartnerPortalGetSupplierDocumentsService;
  let repository: BusinessPartnerPortalMockSupplierDocumentRepository;
  let mapper: BusinessPartnerPortalSupplierDocumentMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalGetSupplierDocumentsQueryHandler,
        {
          provide: BusinessPartnerPortalISupplierDocumentRepository,
          useClass: BusinessPartnerPortalMockSupplierDocumentRepository,
        },
        {
          provide: BusinessPartnerPortalGetSupplierDocumentsService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalGetSupplierDocumentsQueryHandler>(
        BusinessPartnerPortalGetSupplierDocumentsQueryHandler,
      );
    service = module.get<BusinessPartnerPortalGetSupplierDocumentsService>(
      BusinessPartnerPortalGetSupplierDocumentsService,
    );
    repository = <BusinessPartnerPortalMockSupplierDocumentRepository>(
      module.get<BusinessPartnerPortalISupplierDocumentRepository>(
        BusinessPartnerPortalISupplierDocumentRepository,
      )
    );
    mapper = new BusinessPartnerPortalSupplierDocumentMapper();
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetSupplierDocumentsQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an supplierDocuments founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () => new Promise((resolve) => resolve(repository.collectionSource)),
        );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalGetSupplierDocumentsQuery(),
        ),
      ).toStrictEqual(
        mapper.mapAggregatesToResponses(repository.collectionSource),
      );
    });
  });
});
