/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalISupplierDocumentRepository,
  businessPartnerPortalMockSupplierDocumentData,
  BusinessPartnerPortalMockSupplierDocumentRepository,
} from '@app/business-partner-portal/supplier-document';
import { BusinessPartnerPortalDeleteSupplierDocumentByIdService } from '@app/business-partner-portal/supplier-document/application/delete/business-partner-portal-delete-supplier-document-by-id.service';
import { BusinessPartnerPortalSupplierDocumentId } from '@app/business-partner-portal/supplier-document/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeleteSupplierDocumentByIdService', () => {
  let service: BusinessPartnerPortalDeleteSupplierDocumentByIdService;
  let repository: BusinessPartnerPortalISupplierDocumentRepository;
  let mockRepository: BusinessPartnerPortalMockSupplierDocumentRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        BusinessPartnerPortalDeleteSupplierDocumentByIdService,
        BusinessPartnerPortalMockSupplierDocumentRepository,
        {
          provide: BusinessPartnerPortalISupplierDocumentRepository,
          useValue: {
            deleteById: (id) => {
              /**/
            },
            findById: (id) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(
      BusinessPartnerPortalDeleteSupplierDocumentByIdService,
    );
    repository = module.get(BusinessPartnerPortalISupplierDocumentRepository);
    mockRepository = module.get(
      BusinessPartnerPortalMockSupplierDocumentRepository,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeleteSupplierDocumentByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should delete supplierDocument and emit event', async () => {
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
          {},
        ),
      ).toBe(undefined);
    });
  });
});
