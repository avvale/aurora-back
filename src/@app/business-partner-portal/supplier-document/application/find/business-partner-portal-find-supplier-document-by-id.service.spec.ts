/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalISupplierDocumentRepository,
  businessPartnerPortalMockSupplierDocumentData,
  BusinessPartnerPortalMockSupplierDocumentRepository,
} from '@app/business-partner-portal/supplier-document';
import { BusinessPartnerPortalFindSupplierDocumentByIdService } from '@app/business-partner-portal/supplier-document/application/find/business-partner-portal-find-supplier-document-by-id.service';
import { BusinessPartnerPortalSupplierDocumentId } from '@app/business-partner-portal/supplier-document/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindSupplierDocumentByIdService', () => {
  let service: BusinessPartnerPortalFindSupplierDocumentByIdService;
  let repository: BusinessPartnerPortalISupplierDocumentRepository;
  let mockRepository: BusinessPartnerPortalMockSupplierDocumentRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalFindSupplierDocumentByIdService,
        BusinessPartnerPortalMockSupplierDocumentRepository,
        {
          provide: BusinessPartnerPortalISupplierDocumentRepository,
          useValue: {
            findById: (id) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(BusinessPartnerPortalFindSupplierDocumentByIdService);
    repository = module.get(BusinessPartnerPortalISupplierDocumentRepository);
    mockRepository = module.get(
      BusinessPartnerPortalMockSupplierDocumentRepository,
    );
  });

  describe('main', () => {
    test('FindSupplierDocumentByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should find supplierDocument by id', async () => {
      jest
        .spyOn(repository, 'findById')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(mockRepository.collectionSource[0]),
            ),
        );
      expect(
        await service.main(
          new BusinessPartnerPortalSupplierDocumentId(
            businessPartnerPortalMockSupplierDocumentData[0].id,
          ),
        ),
      ).toBe(mockRepository.collectionSource[0]);
    });
  });
});
