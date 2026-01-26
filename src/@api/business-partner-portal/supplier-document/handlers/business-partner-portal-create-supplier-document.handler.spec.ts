/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalCreateSupplierDocumentHandler } from '@api/business-partner-portal/supplier-document';
import { businessPartnerPortalMockSupplierDocumentData } from '@app/business-partner-portal/supplier-document';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalCreateSupplierDocumentHandler', () => {
  let handler: BusinessPartnerPortalCreateSupplierDocumentHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        BusinessPartnerPortalCreateSupplierDocumentHandler,
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

    handler = module.get<BusinessPartnerPortalCreateSupplierDocumentHandler>(
      BusinessPartnerPortalCreateSupplierDocumentHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  describe('main', () => {
    test('BusinessPartnerPortalCreateSupplierDocumentHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return an supplierDocument created', async () => {
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
          businessPartnerPortalMockSupplierDocumentData[0],
          'Europe/Madrid',
        ),
      ).toBe(businessPartnerPortalMockSupplierDocumentData[0]);
    });
  });
});
