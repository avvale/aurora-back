/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalModule } from '@api/business-partner-portal/business-partner-portal.module';
import { AuthorizationPermissionsGuard } from '@api/iam/shared/guards/authorization-permissions.guard';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import {
  BusinessPartnerPortalIPartnerContactRepository,
  businessPartnerPortalMockPartnerContactData,
  BusinessPartnerPortalMockPartnerContactSeeder,
} from '@app/business-partner-portal/partner-contact';
import { GraphQLConfigModule } from '@aurora/modules';
import { INestApplication } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import * as _ from 'lodash';
import * as request from 'supertest';

// disable import foreign modules, can be micro-services
const importForeignModules = [];

describe('partner-contact', () => {
  let app: INestApplication;
  let partnerContactRepository: BusinessPartnerPortalIPartnerContactRepository;
  let partnerContactSeeder: BusinessPartnerPortalMockPartnerContactSeeder;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mockData: any;

  // set timeout to 60s by default are 5s
  jest.setTimeout(60000);

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ...importForeignModules,
        BusinessPartnerPortalModule,
        GraphQLConfigModule,
        SequelizeModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => {
            return {
              dialect: configService.get('TEST_DATABASE_DIALECT'),
              storage: configService.get('TEST_DATABASE_STORAGE'),
              host: configService.get('TEST_DATABASE_HOST'),
              port: +configService.get('TEST_DATABASE_PORT'),
              username: configService.get('TEST_DATABASE_USER'),
              password: configService.get('TEST_DATABASE_PASSWORD'),
              database: configService.get('TEST_DATABASE_SCHEMA'),
              synchronize: configService.get('TEST_DATABASE_SYNCHRONIZE'),
              logging:
                configService.get('TEST_DATABASE_LOGGIN') === 'true'
                  ? console.log
                  : false,
              autoLoadModels: true,
              models: [],
            };
          },
        }),
      ],
      providers: [BusinessPartnerPortalMockPartnerContactSeeder],
    })
      .overrideGuard(AuthenticationJwtGuard)
      .useValue({ canActivate: () => true })
      .overrideGuard(AuthorizationPermissionsGuard)
      .useValue({ canActivate: () => true })
      .compile();

    mockData = businessPartnerPortalMockPartnerContactData;
    app = module.createNestApplication();
    partnerContactRepository =
      module.get<BusinessPartnerPortalIPartnerContactRepository>(
        BusinessPartnerPortalIPartnerContactRepository,
      );
    partnerContactSeeder =
      module.get<BusinessPartnerPortalMockPartnerContactSeeder>(
        BusinessPartnerPortalMockPartnerContactSeeder,
      );

    // seed mock data in memory database
    await partnerContactRepository.insert(
      partnerContactSeeder.collectionSource,
    );

    await app.init();
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactId property can not to be null', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        id: null,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactId must be defined, can not be null',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactRowId property can not to be null', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        rowId: null,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactRowId must be defined, can not be null',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactBusinessPartnerId property can not to be null', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        businessPartnerId: null,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactBusinessPartnerId must be defined, can not be null',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactFirstName property can not to be null', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        firstName: null,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactFirstName must be defined, can not be null',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactLastName property can not to be null', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        lastName: null,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactLastName must be defined, can not be null',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactEmail property can not to be null', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        email: null,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactEmail must be defined, can not be null',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactIsPrincipal property can not to be null', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        isPrincipal: null,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactIsPrincipal must be defined, can not be null',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactIsActive property can not to be null', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        isActive: null,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactIsActive must be defined, can not be null',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactIsUser property can not to be null', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        isUser: null,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactIsUser must be defined, can not be null',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactId property can not to be undefined', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        id: undefined,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactId must be defined, can not be undefined',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactRowId property can not to be undefined', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        rowId: undefined,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactRowId must be defined, can not be undefined',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactBusinessPartnerId property can not to be undefined', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        businessPartnerId: undefined,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactBusinessPartnerId must be defined, can not be undefined',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactFirstName property can not to be undefined', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        firstName: undefined,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactFirstName must be defined, can not be undefined',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactLastName property can not to be undefined', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        lastName: undefined,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactLastName must be defined, can not be undefined',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactEmail property can not to be undefined', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        email: undefined,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactEmail must be defined, can not be undefined',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactIsPrincipal property can not to be undefined', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        isPrincipal: undefined,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactIsPrincipal must be defined, can not be undefined',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactIsActive property can not to be undefined', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        isActive: undefined,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactIsActive must be defined, can not be undefined',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactIsUser property can not to be undefined', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        isUser: undefined,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactIsUser must be defined, can not be undefined',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactId is not allowed, must be a length of 36', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        id: '*************************************',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactId is not allowed, must be a length of 36',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactBusinessPartnerId is not allowed, must be a length of 36', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        businessPartnerId: '*************************************',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactBusinessPartnerId is not allowed, must be a length of 36',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactUserId is not allowed, must be a length of 36', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        userId: '*************************************',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactUserId is not allowed, must be a length of 36',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactPreferredLanguage is not allowed, must be a length of 2', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        preferredLanguage: '***',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactPreferredLanguage is not allowed, must be a length of 2',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactFirstName is too large, has a maximum length of 128', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        firstName:
          '*********************************************************************************************************************************',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactFirstName is too large, has a maximum length of 128',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactLastName is too large, has a maximum length of 128', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        lastName:
          '*********************************************************************************************************************************',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactLastName is too large, has a maximum length of 128',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactPosition is too large, has a maximum length of 128', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        position:
          '*********************************************************************************************************************************',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactPosition is too large, has a maximum length of 128',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactDepartment is too large, has a maximum length of 128', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        department:
          '*********************************************************************************************************************************',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactDepartment is too large, has a maximum length of 128',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactEmail is too large, has a maximum length of 128', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        email:
          '*********************************************************************************************************************************',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactEmail is too large, has a maximum length of 128',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactPhone is too large, has a maximum length of 64', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        phone:
          '*****************************************************************',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactPhone is too large, has a maximum length of 64',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactPhoneCountryPrefix is too large, has a maximum length of 4', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        phoneCountryPrefix: '*****',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactPhoneCountryPrefix is too large, has a maximum length of 4',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactPhoneSanitized is too large, has a maximum length of 64', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        phoneSanitized:
          '*****************************************************************',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactPhoneSanitized is too large, has a maximum length of 64',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactMobile is too large, has a maximum length of 64', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        mobile:
          '*****************************************************************',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactMobile is too large, has a maximum length of 64',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactMobileCountryPrefix is too large, has a maximum length of 4', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        mobileCountryPrefix: '*****',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactMobileCountryPrefix is too large, has a maximum length of 4',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactMobileSanitized is too large, has a maximum length of 64', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        mobileSanitized:
          '*****************************************************************',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactMobileSanitized is too large, has a maximum length of 64',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactIsPrincipal has to be a boolean value', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        isPrincipal: 'true',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactIsPrincipal has to be a boolean value',
        );
      });
  });
  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactIsActive has to be a boolean value', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        isActive: 'true',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactIsActive has to be a boolean value',
        );
      });
  });
  test('/REST:POST business-partner-portal/partner-contact/create - Got 400 Conflict, PartnerContactIsUser has to be a boolean value', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        isUser: 'true',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalPartnerContactIsUser has to be a boolean value',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/create - Got 409 Conflict, item already exist in database', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send(mockData[0])
      .expect(409);
  });

  test('/REST:POST business-partner-portal/partner-contacts/paginate', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contacts/paginate')
      .set('Accept', 'application/json')
      .send({
        query: {
          offset: 0,
          limit: 5,
        },
      })
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({
          total: partnerContactSeeder.collectionResponse.length,
          count: partnerContactSeeder.collectionResponse.length,
          rows: partnerContactSeeder.collectionResponse
            .map((item) =>
              expect.objectContaining(
                _.omit(item, ['createdAt', 'updatedAt', 'deletedAt']),
              ),
            )
            .slice(0, 5),
        });
      });
  });

  test('/REST:POST business-partner-portal/partner-contacts/get', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contacts/get')
      .set('Accept', 'application/json')
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual(
          partnerContactSeeder.collectionResponse.map((item) =>
            expect.objectContaining(
              _.omit(item, ['createdAt', 'updatedAt', 'deletedAt']),
            ),
          ),
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/find - Got 404 Not Found', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/find')
      .set('Accept', 'application/json')
      .send({
        query: {
          where: {
            id: '6fb3454e-1fd5-530b-b4ff-d2662fea727b',
          },
        },
      })
      .expect(404);
  });

  test('/REST:POST business-partner-portal/partner-contact/create', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
      })
      .expect(201);
  });

  test('/REST:POST business-partner-portal/partner-contact/find', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/partner-contact/find')
      .set('Accept', 'application/json')
      .send({
        query: {
          where: {
            id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
          },
        },
      })
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty(
          'id',
          '5b19d6ac-4081-573b-96b3-56964d5326a8',
        );
      });
  });

  test('/REST:POST business-partner-portal/partner-contact/find/{id} - Got 404 Not Found', () => {
    return request(app.getHttpServer())
      .post(
        '/business-partner-portal/partner-contact/find/fb47eb8b-0f9e-5ae6-96c2-e689844da833',
      )
      .set('Accept', 'application/json')
      .expect(404);
  });

  test('/REST:POST business-partner-portal/partner-contact/find/{id}', () => {
    return request(app.getHttpServer())
      .post(
        '/business-partner-portal/partner-contact/find/5b19d6ac-4081-573b-96b3-56964d5326a8',
      )
      .set('Accept', 'application/json')
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty(
          'id',
          '5b19d6ac-4081-573b-96b3-56964d5326a8',
        );
      });
  });

  test('/REST:PUT business-partner-portal/partner-contact/update - Got 404 Not Found', () => {
    return request(app.getHttpServer())
      .put('/business-partner-portal/partner-contact/update')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        id: '7832187e-bf62-5bed-8a25-0a415459e76a',
      })
      .expect(404);
  });

  test('/REST:PUT business-partner-portal/partner-contact/update', () => {
    return request(app.getHttpServer())
      .put('/business-partner-portal/partner-contact/update')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
      })
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty(
          'id',
          '5b19d6ac-4081-573b-96b3-56964d5326a8',
        );
      });
  });

  test('/REST:DELETE business-partner-portal/partner-contact/delete/{id} - Got 404 Not Found', () => {
    return request(app.getHttpServer())
      .delete(
        '/business-partner-portal/partner-contact/delete/41cf137c-5de1-58ce-89a1-8a596d4d71a5',
      )
      .set('Accept', 'application/json')
      .expect(404);
  });

  test('/REST:DELETE business-partner-portal/partner-contact/delete/{id}', () => {
    return request(app.getHttpServer())
      .delete(
        '/business-partner-portal/partner-contact/delete/5b19d6ac-4081-573b-96b3-56964d5326a8',
      )
      .set('Accept', 'application/json')
      .expect(200);
  });

  test('/GraphQL businessPartnerPortalCreatePartnerContact - Got 409 Conflict, item already exist in database', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    mutation ($payload:BusinessPartnerPortalCreatePartnerContactInput!)
                    {
                        businessPartnerPortalCreatePartnerContact (payload:$payload)
                        {
                            id
                            rowId
                            businessPartnerId
                            firstName
                            lastName
                            position
                            department
                            email
                            phone
                            phoneCountryPrefix
                            phoneSanitized
                            mobile
                            mobileCountryPrefix
                            mobileSanitized
                            isPrincipal
                            isActive
                            isUser
                            userId
                            preferredLanguage
                            notes
                        }
                    }
                `,
        variables: {
          payload: _.omit(mockData[0], ['createdAt', 'updatedAt', 'deletedAt']),
        },
      })
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty('errors');
        expect(res.body.errors[0].extensions.originalError.statusCode).toBe(
          409,
        );
        expect(res.body.errors[0].extensions.originalError.message).toContain(
          'already exist in database',
        );
      });
  });

  test('/GraphQL businessPartnerPortalPaginatePartnerContacts', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    query ($query:QueryStatement $constraint:QueryStatement)
                    {
                        businessPartnerPortalPaginatePartnerContacts (query:$query constraint:$constraint)
                        {
                            total
                            count
                            rows
                        }
                    }
                `,
        variables: {
          query: {
            offset: 0,
            limit: 5,
          },
        },
      })
      .expect(200)
      .then((res) => {
        expect(
          res.body.data.businessPartnerPortalPaginatePartnerContacts,
        ).toEqual({
          total: partnerContactSeeder.collectionResponse.length,
          count: partnerContactSeeder.collectionResponse.length,
          rows: partnerContactSeeder.collectionResponse
            .map((item) =>
              expect.objectContaining(
                _.omit(item, ['createdAt', 'updatedAt', 'deletedAt']),
              ),
            )
            .slice(0, 5),
        });
      });
  });

  test('/GraphQL businessPartnerPortalGetPartnerContacts', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    query ($query:QueryStatement)
                    {
                        businessPartnerPortalGetPartnerContacts (query:$query)
                        {
                            id
                            rowId
                            firstName
                            lastName
                            position
                            department
                            email
                            phone
                            phoneCountryPrefix
                            phoneSanitized
                            mobile
                            mobileCountryPrefix
                            mobileSanitized
                            isPrincipal
                            isActive
                            isUser
                            userId
                            preferredLanguage
                            notes
                            createdAt
                            updatedAt
                        }
                    }
                `,
        variables: {},
      })
      .expect(200)
      .then((res) => {
        for (const [
          index,
          value,
        ] of res.body.data.businessPartnerPortalGetPartnerContacts.entries()) {
          expect(partnerContactSeeder.collectionResponse[index]).toEqual(
            expect.objectContaining(
              _.omit(value, ['createdAt', 'updatedAt', 'deletedAt']),
            ),
          );
        }
      });
  });

  test('/GraphQL businessPartnerPortalCreatePartnerContact', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    mutation ($payload:BusinessPartnerPortalCreatePartnerContactInput!)
                    {
                        businessPartnerPortalCreatePartnerContact (payload:$payload)
                        {
                            id
                            rowId
                            businessPartnerId
                            firstName
                            lastName
                            position
                            department
                            email
                            phone
                            phoneCountryPrefix
                            phoneSanitized
                            mobile
                            mobileCountryPrefix
                            mobileSanitized
                            isPrincipal
                            isActive
                            isUser
                            userId
                            preferredLanguage
                            notes
                        }
                    }
                `,
        variables: {
          payload: {
            ...mockData[0],
            id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
          },
        },
      })
      .expect(200)
      .then((res) => {
        expect(
          res.body.data.businessPartnerPortalCreatePartnerContact,
        ).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
      });
  });

  test('/GraphQL businessPartnerPortalFindPartnerContact - Got 404 Not Found', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    query ($query:QueryStatement)
                    {
                        businessPartnerPortalFindPartnerContact (query:$query)
                        {
                            id
                            rowId
                            firstName
                            lastName
                            position
                            department
                            email
                            phone
                            phoneCountryPrefix
                            phoneSanitized
                            mobile
                            mobileCountryPrefix
                            mobileSanitized
                            isPrincipal
                            isActive
                            isUser
                            userId
                            preferredLanguage
                            notes
                            createdAt
                            updatedAt
                        }
                    }
                `,
        variables: {
          query: {
            where: {
              id: 'c64f1884-a510-5f31-a1ac-4d0595471b9f',
            },
          },
        },
      })
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty('errors');
        expect(res.body.errors[0].extensions.originalError.statusCode).toBe(
          404,
        );
        expect(res.body.errors[0].extensions.originalError.message).toContain(
          'not found',
        );
      });
  });

  test('/GraphQL businessPartnerPortalFindPartnerContact', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    query ($query:QueryStatement)
                    {
                        businessPartnerPortalFindPartnerContact (query:$query)
                        {
                            id
                            rowId
                            firstName
                            lastName
                            position
                            department
                            email
                            phone
                            phoneCountryPrefix
                            phoneSanitized
                            mobile
                            mobileCountryPrefix
                            mobileSanitized
                            isPrincipal
                            isActive
                            isUser
                            userId
                            preferredLanguage
                            notes
                            createdAt
                            updatedAt
                        }
                    }
                `,
        variables: {
          query: {
            where: {
              id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
            },
          },
        },
      })
      .expect(200)
      .then((res) => {
        expect(
          res.body.data.businessPartnerPortalFindPartnerContact.id,
        ).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
      });
  });

  test('/GraphQL businessPartnerPortalFindPartnerContactById - Got 404 Not Found', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    query ($id:ID!)
                    {
                        businessPartnerPortalFindPartnerContactById (id:$id)
                        {
                            id
                            rowId
                            firstName
                            lastName
                            position
                            department
                            email
                            phone
                            phoneCountryPrefix
                            phoneSanitized
                            mobile
                            mobileCountryPrefix
                            mobileSanitized
                            isPrincipal
                            isActive
                            isUser
                            userId
                            preferredLanguage
                            notes
                            createdAt
                            updatedAt
                        }
                    }
                `,
        variables: {
          id: '7dabc207-169c-5097-b762-1a6441ebaf4c',
        },
      })
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty('errors');
        expect(res.body.errors[0].extensions.originalError.statusCode).toBe(
          404,
        );
        expect(res.body.errors[0].extensions.originalError.message).toContain(
          'not found',
        );
      });
  });

  test('/GraphQL businessPartnerPortalFindPartnerContactById', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    query ($id:ID!)
                    {
                        businessPartnerPortalFindPartnerContactById (id:$id)
                        {
                            id
                            rowId
                            firstName
                            lastName
                            position
                            department
                            email
                            phone
                            phoneCountryPrefix
                            phoneSanitized
                            mobile
                            mobileCountryPrefix
                            mobileSanitized
                            isPrincipal
                            isActive
                            isUser
                            userId
                            preferredLanguage
                            notes
                            createdAt
                            updatedAt
                        }
                    }
                `,
        variables: {
          id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
        },
      })
      .expect(200)
      .then((res) => {
        expect(
          res.body.data.businessPartnerPortalFindPartnerContactById.id,
        ).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
      });
  });

  test('/GraphQL businessPartnerPortalUpdatePartnerContactById - Got 404 Not Found', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    mutation ($payload:BusinessPartnerPortalUpdatePartnerContactByIdInput!)
                    {
                        businessPartnerPortalUpdatePartnerContactById (payload:$payload)
                        {
                            id
                            rowId
                            firstName
                            lastName
                            position
                            department
                            email
                            phone
                            phoneCountryPrefix
                            phoneSanitized
                            mobile
                            mobileCountryPrefix
                            mobileSanitized
                            isPrincipal
                            isActive
                            isUser
                            userId
                            preferredLanguage
                            notes
                            createdAt
                            updatedAt
                        }
                    }
                `,
        variables: {
          payload: {
            ...mockData[0],
            id: 'e53010c0-031a-588b-95a4-b5ef0311427e',
          },
        },
      })
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty('errors');
        expect(res.body.errors[0].extensions.originalError.statusCode).toBe(
          404,
        );
        expect(res.body.errors[0].extensions.originalError.message).toContain(
          'not found',
        );
      });
  });

  test('/GraphQL businessPartnerPortalUpdatePartnerContactById', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    mutation ($payload:BusinessPartnerPortalUpdatePartnerContactByIdInput!)
                    {
                        businessPartnerPortalUpdatePartnerContactById (payload:$payload)
                        {
                            id
                            rowId
                            firstName
                            lastName
                            position
                            department
                            email
                            phone
                            phoneCountryPrefix
                            phoneSanitized
                            mobile
                            mobileCountryPrefix
                            mobileSanitized
                            isPrincipal
                            isActive
                            isUser
                            userId
                            preferredLanguage
                            notes
                            createdAt
                            updatedAt
                        }
                    }
                `,
        variables: {
          payload: {
            ...mockData[0],
            id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
          },
        },
      })
      .expect(200)
      .then((res) => {
        expect(
          res.body.data.businessPartnerPortalUpdatePartnerContactById.id,
        ).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
      });
  });

  test('/GraphQL businessPartnerPortalUpdatePartnerContacts', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    mutation ($payload:BusinessPartnerPortalUpdatePartnerContactsInput! $query: QueryStatement)
                    {
                        businessPartnerPortalUpdatePartnerContacts (payload:$payload query:$query)
                        {
                            id
                            rowId
                            firstName
                            lastName
                            position
                            department
                            email
                            phone
                            phoneCountryPrefix
                            phoneSanitized
                            mobile
                            mobileCountryPrefix
                            mobileSanitized
                            isPrincipal
                            isActive
                            isUser
                            userId
                            preferredLanguage
                            notes
                            createdAt
                            updatedAt
                        }
                    }
                `,
        variables: {
          payload: {
            ...mockData[0],
            id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
          },
          query: {
            where: {
              id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
            },
          },
        },
      })
      .expect(200)
      .then((res) => {
        expect(
          res.body.data.businessPartnerPortalUpdatePartnerContacts[0].id,
        ).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
      });
  });

  test('/GraphQL businessPartnerPortalDeletePartnerContactById - Got 404 Not Found', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    mutation ($id:ID!)
                    {
                        businessPartnerPortalDeletePartnerContactById (id:$id)
                        {
                            id
                            rowId
                            firstName
                            lastName
                            position
                            department
                            email
                            phone
                            phoneCountryPrefix
                            phoneSanitized
                            mobile
                            mobileCountryPrefix
                            mobileSanitized
                            isPrincipal
                            isActive
                            isUser
                            userId
                            preferredLanguage
                            notes
                            createdAt
                            updatedAt
                        }
                    }
                `,
        variables: {
          id: 'f8b20ef3-a38d-514f-829e-3168465d0327',
        },
      })
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty('errors');
        expect(res.body.errors[0].extensions.originalError.statusCode).toBe(
          404,
        );
        expect(res.body.errors[0].extensions.originalError.message).toContain(
          'not found',
        );
      });
  });

  test('/GraphQL businessPartnerPortalDeletePartnerContactById', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    mutation ($id:ID!)
                    {
                        businessPartnerPortalDeletePartnerContactById (id:$id)
                        {
                            id
                            rowId
                            firstName
                            lastName
                            position
                            department
                            email
                            phone
                            phoneCountryPrefix
                            phoneSanitized
                            mobile
                            mobileCountryPrefix
                            mobileSanitized
                            isPrincipal
                            isActive
                            isUser
                            userId
                            preferredLanguage
                            notes
                            createdAt
                            updatedAt
                        }
                    }
                `,
        variables: {
          id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
        },
      })
      .expect(200)
      .then((res) => {
        expect(
          res.body.data.businessPartnerPortalDeletePartnerContactById.id,
        ).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
      });
  });

  afterAll(async () => {
    await partnerContactRepository.delete({
      queryStatement: {
        where: {},
      },
    });
    await app.close();
  });
});
