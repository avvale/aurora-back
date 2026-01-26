/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BusinessPartnerPortalGetPaymentModesQuery,
  BusinessPartnerPortalIPaymentModeRepository,
  BusinessPartnerPortalMockPaymentModeRepository,
  BusinessPartnerPortalPaymentModeMapper,
} from '@app/business-partner-portal/payment-mode';
import { BusinessPartnerPortalGetPaymentModesQueryHandler } from '@app/business-partner-portal/payment-mode/application/get/business-partner-portal-get-payment-modes.query-handler';
import { BusinessPartnerPortalGetPaymentModesService } from '@app/business-partner-portal/payment-mode/application/get/business-partner-portal-get-payment-modes.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GetPaymentModesQueryHandler', () => {
  let queryHandler: BusinessPartnerPortalGetPaymentModesQueryHandler;
  let service: BusinessPartnerPortalGetPaymentModesService;
  let repository: BusinessPartnerPortalMockPaymentModeRepository;
  let mapper: BusinessPartnerPortalPaymentModeMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessPartnerPortalGetPaymentModesQueryHandler,
        {
          provide: BusinessPartnerPortalIPaymentModeRepository,
          useClass: BusinessPartnerPortalMockPaymentModeRepository,
        },
        {
          provide: BusinessPartnerPortalGetPaymentModesService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler = module.get<BusinessPartnerPortalGetPaymentModesQueryHandler>(
      BusinessPartnerPortalGetPaymentModesQueryHandler,
    );
    service = module.get<BusinessPartnerPortalGetPaymentModesService>(
      BusinessPartnerPortalGetPaymentModesService,
    );
    repository = <BusinessPartnerPortalMockPaymentModeRepository>(
      module.get<BusinessPartnerPortalIPaymentModeRepository>(
        BusinessPartnerPortalIPaymentModeRepository,
      )
    );
    mapper = new BusinessPartnerPortalPaymentModeMapper();
  });

  describe('main', () => {
    test('BusinessPartnerPortalGetPaymentModesQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an paymentModes founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () => new Promise((resolve) => resolve(repository.collectionSource)),
        );
      expect(
        await queryHandler.execute(
          new BusinessPartnerPortalGetPaymentModesQuery(),
        ),
      ).toStrictEqual(
        mapper.mapAggregatesToResponses(repository.collectionSource),
      );
    });
  });
});
