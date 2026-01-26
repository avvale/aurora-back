/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentCollectionModeRepository,
  BusinessPartnerPortalMockPaymentCollectionModeRepository,
  BusinessPartnerPortalPaginatePaymentCollectionModesQuery,
} from '@app/business-partner-portal/payment-collection-mode';
import { BusinessPartnerPortalPaginatePaymentCollectionModesQueryHandler } from '@app/business-partner-portal/payment-collection-mode/application/paginate/business-partner-portal-paginate-payment-collection-modes.query-handler';
import { BusinessPartnerPortalPaginatePaymentCollectionModesService } from '@app/business-partner-portal/payment-collection-mode/application/paginate/business-partner-portal-paginate-payment-collection-modes.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePaymentCollectionModesQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalPaginatePaymentCollectionModesQueryHandler;
  let service: BusinessPartnerPortalPaginatePaymentCollectionModesService;
  let repository: BusinessPartnerPortalMockPaymentCollectionModeRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalPaginatePaymentCollectionModesQueryHandler,
        {
          provide: BusinessPartnerPortalIPaymentCollectionModeRepository,
          useClass: BusinessPartnerPortalMockPaymentCollectionModeRepository,
        },
        {
          provide: BusinessPartnerPortalPaginatePaymentCollectionModesService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalPaginatePaymentCollectionModesQueryHandler>(
        BusinessPartnerPortalPaginatePaymentCollectionModesQueryHandler,
      );
    service =
      module.get<BusinessPartnerPortalPaginatePaymentCollectionModesService>(
        BusinessPartnerPortalPaginatePaymentCollectionModesService,
      );
    repository = <BusinessPartnerPortalMockPaymentCollectionModeRepository>(
      module.get<BusinessPartnerPortalIPaymentCollectionModeRepository>(
        BusinessPartnerPortalIPaymentCollectionModeRepository,
      )
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePaymentCollectionModesQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an paymentCollectionModes paginated', async () => {
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
          new BusinessPartnerPortalPaginatePaymentCollectionModesQuery({
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
