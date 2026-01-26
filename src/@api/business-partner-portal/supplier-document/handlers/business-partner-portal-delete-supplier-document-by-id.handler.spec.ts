/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalDeleteSupplierDocumentByIdHandler } from '@api/business-partner-portal/supplier-document';
import { businessPartnerPortalMockSupplierDocumentData } from '@app/business-partner-portal/supplier-document';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalDeleteSupplierDocumentByIdController', () => {
  let handler: BusinessPartnerPortalDeleteSupplierDocumentByIdHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalDeleteSupplierDocumentByIdHandler,
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
      module.get<BusinessPartnerPortalDeleteSupplierDocumentByIdHandler>(
        BusinessPartnerPortalDeleteSupplierDocumentByIdHandler,
      );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  describe('main', () => {
    test('BusinessPartnerPortalDeleteSupplierDocumentByIdHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return an supplierDocument deleted', async () => {
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
          businessPartnerPortalMockSupplierDocumentData[0].id,
          {},
          'Europe/Madrid',
        ),
      ).toBe(businessPartnerPortalMockSupplierDocumentData[0]);
    });
  });
});
