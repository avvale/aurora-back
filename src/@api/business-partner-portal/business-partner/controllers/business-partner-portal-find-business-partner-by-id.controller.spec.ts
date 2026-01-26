/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  BusinessPartnerPortalFindBusinessPartnerByIdController,
  BusinessPartnerPortalFindBusinessPartnerByIdHandler,
} from '@api/business-partner-portal/business-partner';
import { businessPartnerPortalMockBusinessPartnerData } from '@app/business-partner-portal/business-partner';
import { Test, TestingModule } from '@nestjs/testing';

describe('BusinessPartnerPortalFindBusinessPartnerByIdController', () => {
  let controller: BusinessPartnerPortalFindBusinessPartnerByIdController;
  let handler: BusinessPartnerPortalFindBusinessPartnerByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BusinessPartnerPortalFindBusinessPartnerByIdController],
      providers: [
        {
          provide: BusinessPartnerPortalFindBusinessPartnerByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller =
      module.get<BusinessPartnerPortalFindBusinessPartnerByIdController>(
        BusinessPartnerPortalFindBusinessPartnerByIdController,
      );
    handler = module.get<BusinessPartnerPortalFindBusinessPartnerByIdHandler>(
      BusinessPartnerPortalFindBusinessPartnerByIdHandler,
    );
  });

  describe('main', () => {
    test('BusinessPartnerPortalFindBusinessPartnerByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an businessPartner by id', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(businessPartnerPortalMockBusinessPartnerData[0]),
            ),
        );
      expect(
        await controller.main(
          businessPartnerPortalMockBusinessPartnerData[0].id,
        ),
      ).toBe(businessPartnerPortalMockBusinessPartnerData[0]);
    });
  });
});
