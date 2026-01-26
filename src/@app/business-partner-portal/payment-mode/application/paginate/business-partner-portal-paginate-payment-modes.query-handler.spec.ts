/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalIPaymentModeRepository,
  BusinessPartnerPortalMockPaymentModeRepository,
  BusinessPartnerPortalPaginatePaymentModesQuery,
} from '@app/business-partner-portal/payment-mode';
import { BusinessPartnerPortalPaginatePaymentModesQueryHandler } from '@app/business-partner-portal/payment-mode/application/paginate/business-partner-portal-paginate-payment-modes.query-handler';
import { BusinessPartnerPortalPaginatePaymentModesService } from '@app/business-partner-portal/payment-mode/application/paginate/business-partner-portal-paginate-payment-modes.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalPaginatePaymentModesQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalPaginatePaymentModesQueryHandler;
  let service: BusinessPartnerPortalPaginatePaymentModesService;
  let repository: BusinessPartnerPortalMockPaymentModeRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalPaginatePaymentModesQueryHandler,
        {
          provide: BusinessPartnerPortalIPaymentModeRepository,
          useClass: BusinessPartnerPortalMockPaymentModeRepository,
        },
        {
          provide: BusinessPartnerPortalPaginatePaymentModesService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler =
      module.get<BusinessPartnerPortalPaginatePaymentModesQueryHandler>(
        BusinessPartnerPortalPaginatePaymentModesQueryHandler,
      );
    service = module.get<BusinessPartnerPortalPaginatePaymentModesService>(
      BusinessPartnerPortalPaginatePaymentModesService,
    );
    repository = <BusinessPartnerPortalMockPaymentModeRepository>(
      module.get<BusinessPartnerPortalIPaymentModeRepository>(
        BusinessPartnerPortalIPaymentModeRepository,
      )
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalPaginatePaymentModesQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an paymentModes paginated', async () => {
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
          new BusinessPartnerPortalPaginatePaymentModesQuery({
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
