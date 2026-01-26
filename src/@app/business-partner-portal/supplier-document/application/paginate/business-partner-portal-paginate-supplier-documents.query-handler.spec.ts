/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalISupplierDocumentRepository,
  BusinessPartnerPortalMockSupplierDocumentRepository,
  BusinessPartnerPortalPaginateSupplierDocumentsQuery,
} from '@app/business-partner-portal/supplier-document';
import { BusinessPartnerPortalPaginateSupplierDocumentsQueryHandler } from '@app/business-partner-portal/supplier-document/application/paginate/business-partner-portal-paginate-supplier-documents.query-handler';
import { BusinessPartnerPortalPaginateSupplierDocumentsService } from '@app/business-partner-portal/supplier-document/application/paginate/business-partner-portal-paginate-supplier-documents.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginateSupplierDocumentsQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalPaginateSupplierDocumentsQueryHandler;
  let service: BusinessPartnerPortalPaginateSupplierDocumentsService;
  let repository: BusinessPartnerPortalMockSupplierDocumentRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalPaginateSupplierDocumentsQueryHandler,
        {
          provide: BusinessPartnerPortalISupplierDocumentRepository,
          useClass: BusinessPartnerPortalMockSupplierDocumentRepository,
        },
        {
          provide: BusinessPartnerPortalPaginateSupplierDocumentsService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalPaginateSupplierDocumentsQueryHandler>(
        BusinessPartnerPortalPaginateSupplierDocumentsQueryHandler,
      );
    service = module.get<BusinessPartnerPortalPaginateSupplierDocumentsService>(
      BusinessPartnerPortalPaginateSupplierDocumentsService,
    );
    repository = <BusinessPartnerPortalMockSupplierDocumentRepository>(
      module.get<BusinessPartnerPortalISupplierDocumentRepository>(
        BusinessPartnerPortalISupplierDocumentRepository,
      )
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginateSupplierDocumentsQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an supplierDocuments paginated', async () => {
      jest.spyOn(service, 'main').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              count: 10,
              total: 100,
              rows: repository.collectionSource.slice(0, 10),
            }),
          ),
      );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalPaginateSupplierDocumentsQuery({
            offset: 0,
            limit: 10,
          }),
        ),
      ).toStrictEqual(
        new PaginationResponse(
          100,
          10,
          repository.collectionSource.slice(0, 10).map((item) => item.toDTO()),
        ),
      );
    });
  });
});
