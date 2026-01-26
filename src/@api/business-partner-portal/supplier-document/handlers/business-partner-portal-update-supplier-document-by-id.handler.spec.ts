/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalUpdateSupplierDocumentByIdHandler } from '@api/business-partner-portal/supplier-document';
import { BusinessPartnerPortalUpdateSupplierDocumentByIdInput } from '@api/graphql';
import { businessPartnerPortalMockSupplierDocumentData } from '@app/business-partner-portal/supplier-document';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalUpdateSupplierDocumentByIdHandler', () => {
  let handler: BusinessPartnerPortalUpdateSupplierDocumentByIdHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalUpdateSupplierDocumentByIdHandler,
        {
          provide: IQueryBus,
          useValue: {
            ask: () => {
              /**/
            },
          },
        },
        {
          provide: ICommandBus,
          useValue: {
            dispatch: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    handler =
      module.get<BusinessPartnerPortalUpdateSupplierDocumentByIdHandler>(
        BusinessPartnerPortalUpdateSupplierDocumentByIdHandler,
      );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('BusinessPartnerPortalUpdateSupplierDocumentByIdHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('BusinessPartnerPortalUpdateSupplierDocumentByIdHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a supplierDocument updated', async () => {
      jest
        .spyOn(queryBus, 'ask')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockSupplierDocumentData[0]),
            ),
        );
      expect(
        await handler.main(
          <BusinessPartnerPortalUpdateSupplierDocumentByIdInput>(
            businessPartnerPortalMockSupplierDocumentData[0]
          ),
          {},
          'Europe/Madrid',
        ),
      ).toBe(businessPartnerPortalMockSupplierDocumentData[0]);
    });
  });
});
