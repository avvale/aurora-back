/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalModule } from '@api/business-partner-portal/business-partner-portal.module';
import { AuthorizationPermissionsGuard } from '@api/iam/shared/guards/authorization-permissions.guard';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import {
  BusinessPartnerPortalIBusinessPartnerRepository,
  businessPartnerPortalMockBusinessPartnerData,
  BusinessPartnerPortalMockBusinessPartnerSeeder,
} from '@app/business-partner-portal/business-partner';
import { GraphQLConfigModule } from '@aurora/modules';
import { INestApplication } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import * as _ from 'lodash';
import * as request from 'supertest';

// disable import foreign modules, can be micro-services
const importForeignModules = [];

describe('business-partner', () => {
  let app: INestApplication;
  let businessPartnerRepository: BusinessPartnerPortalIBusinessPartnerRepository;
  let businessPartnerSeeder: BusinessPartnerPortalMockBusinessPartnerSeeder;

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
      providers: [BusinessPartnerPortalMockBusinessPartnerSeeder],
    })
      .overrideGuard(AuthenticationJwtGuard)
      .useValue({ canActivate: () => true })
      .overrideGuard(AuthorizationPermissionsGuard)
      .useValue({ canActivate: () => true })
      .compile();

    mockData = businessPartnerPortalMockBusinessPartnerData;
    app = module.createNestApplication();
    businessPartnerRepository =
      module.get<BusinessPartnerPortalIBusinessPartnerRepository>(
        BusinessPartnerPortalIBusinessPartnerRepository,
      );
    businessPartnerSeeder =
      module.get<BusinessPartnerPortalMockBusinessPartnerSeeder>(
        BusinessPartnerPortalMockBusinessPartnerSeeder,
      );

    // seed mock data in memory database
    await businessPartnerRepository.insert(
      businessPartnerSeeder.collectionSource,
    );

    await app.init();
  });

  test('/REST:POST business-partner-portal/business-partner/create - Got 400 Conflict, BusinessPartnerId property can not to be null', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        id: null,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalBusinessPartnerId must be defined, can not be null',
        );
      });
  });

  test('/REST:POST business-partner-portal/business-partner/create - Got 400 Conflict, BusinessPartnerRowId property can not to be null', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        rowId: null,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalBusinessPartnerRowId must be defined, can not be null',
        );
      });
  });

  test('/REST:POST business-partner-portal/business-partner/create - Got 400 Conflict, BusinessPartnerType property can not to be null', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        type: null,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalBusinessPartnerType must be defined, can not be null',
        );
      });
  });

  test('/REST:POST business-partner-portal/business-partner/create - Got 400 Conflict, BusinessPartnerName property can not to be null', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        name: null,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalBusinessPartnerName must be defined, can not be null',
        );
      });
  });

  test('/REST:POST business-partner-portal/business-partner/create - Got 400 Conflict, BusinessPartnerIsActive property can not to be null', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        isActive: null,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalBusinessPartnerIsActive must be defined, can not be null',
        );
      });
  });

  test('/REST:POST business-partner-portal/business-partner/create - Got 400 Conflict, BusinessPartnerId property can not to be undefined', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        id: undefined,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalBusinessPartnerId must be defined, can not be undefined',
        );
      });
  });

  test('/REST:POST business-partner-portal/business-partner/create - Got 400 Conflict, BusinessPartnerRowId property can not to be undefined', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        rowId: undefined,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalBusinessPartnerRowId must be defined, can not be undefined',
        );
      });
  });

  test('/REST:POST business-partner-portal/business-partner/create - Got 400 Conflict, BusinessPartnerType property can not to be undefined', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        type: undefined,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalBusinessPartnerType must be defined, can not be undefined',
        );
      });
  });

  test('/REST:POST business-partner-portal/business-partner/create - Got 400 Conflict, BusinessPartnerName property can not to be undefined', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        name: undefined,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalBusinessPartnerName must be defined, can not be undefined',
        );
      });
  });

  test('/REST:POST business-partner-portal/business-partner/create - Got 400 Conflict, BusinessPartnerIsActive property can not to be undefined', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        isActive: undefined,
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalBusinessPartnerIsActive must be defined, can not be undefined',
        );
      });
  });

  test('/REST:POST business-partner-portal/business-partner/create - Got 400 Conflict, BusinessPartnerId is not allowed, must be a length of 36', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        id: '*************************************',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalBusinessPartnerId is not allowed, must be a length of 36',
        );
      });
  });

  test('/REST:POST business-partner-portal/business-partner/create - Got 400 Conflict, BusinessPartnerExternalId is too large, has a maximum length of 64', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        externalId:
          '*****************************************************************',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalBusinessPartnerExternalId is too large, has a maximum length of 64',
        );
      });
  });

  test('/REST:POST business-partner-portal/business-partner/create - Got 400 Conflict, BusinessPartnerCode is too large, has a maximum length of 64', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        code: '*****************************************************************',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalBusinessPartnerCode is too large, has a maximum length of 64',
        );
      });
  });

  test('/REST:POST business-partner-portal/business-partner/create - Got 400 Conflict, BusinessPartnerName is too large, has a maximum length of 128', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        name: '*********************************************************************************************************************************',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalBusinessPartnerName is too large, has a maximum length of 128',
        );
      });
  });

  test('/REST:POST business-partner-portal/business-partner/create - Got 400 Conflict, BusinessPartnerTin is too large, has a maximum length of 64', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        tin: '*****************************************************************',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalBusinessPartnerTin is too large, has a maximum length of 64',
        );
      });
  });

  test('/REST:POST business-partner-portal/business-partner/create - Got 400 Conflict, BusinessPartnerEmail is too large, has a maximum length of 128', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        email:
          '*********************************************************************************************************************************',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalBusinessPartnerEmail is too large, has a maximum length of 128',
        );
      });
  });

  test('/REST:POST business-partner-portal/business-partner/create - Got 400 Conflict, BusinessPartnerWebsite is too large, has a maximum length of 1022', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        website:
          '***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalBusinessPartnerWebsite is too large, has a maximum length of 1022',
        );
      });
  });

  test('/REST:POST business-partner-portal/business-partner/create - Got 400 Conflict, BusinessPartnerPhone is too large, has a maximum length of 64', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        phone:
          '*****************************************************************',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalBusinessPartnerPhone is too large, has a maximum length of 64',
        );
      });
  });

  test('/REST:POST business-partner-portal/business-partner/create - Got 400 Conflict, BusinessPartnerPhoneCountryPrefix is too large, has a maximum length of 4', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        phoneCountryPrefix: '*****',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalBusinessPartnerPhoneCountryPrefix is too large, has a maximum length of 4',
        );
      });
  });

  test('/REST:POST business-partner-portal/business-partner/create - Got 400 Conflict, BusinessPartnerPhoneSanitized is too large, has a maximum length of 64', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        phoneSanitized:
          '*****************************************************************',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalBusinessPartnerPhoneSanitized is too large, has a maximum length of 64',
        );
      });
  });

  test('/REST:POST business-partner-portal/business-partner/create - Got 400 Conflict, BusinessPartnerIsActive has to be a boolean value', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        isActive: 'true',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalBusinessPartnerIsActive has to be a boolean value',
        );
      });
  });
  test('/REST:POST business-partner-portal/business-partner/create - Got 400 Conflict, BusinessPartnerType has to be a enum option of CUSTOMER, SUPPLIER, VENDOR, AFFILIATE, PARTNER, OTHER', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        type: '****',
      })
      .expect(400)
      .then((res) => {
        expect(res.body.message).toContain(
          'Value for BusinessPartnerPortalBusinessPartnerType has to be any of this options: CUSTOMER, SUPPLIER, VENDOR, AFFILIATE, PARTNER, OTHER',
        );
      });
  });

  test('/REST:POST business-partner-portal/business-partner/create - Got 409 Conflict, item already exist in database', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/create')
      .set('Accept', 'application/json')
      .send(mockData[0])
      .expect(409);
  });

  test('/REST:POST business-partner-portal/business-partners/paginate', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partners/paginate')
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
          total: businessPartnerSeeder.collectionResponse.length,
          count: businessPartnerSeeder.collectionResponse.length,
          rows: businessPartnerSeeder.collectionResponse
            .map((item) =>
              expect.objectContaining(
                _.omit(item, ['createdAt', 'updatedAt', 'deletedAt']),
              ),
            )
            .slice(0, 5),
        });
      });
  });

  test('/REST:POST business-partner-portal/business-partners/get', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partners/get')
      .set('Accept', 'application/json')
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual(
          businessPartnerSeeder.collectionResponse.map((item) =>
            expect.objectContaining(
              _.omit(item, ['createdAt', 'updatedAt', 'deletedAt']),
            ),
          ),
        );
      });
  });

  test('/REST:POST business-partner-portal/business-partner/find - Got 404 Not Found', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/find')
      .set('Accept', 'application/json')
      .send({
        query: {
          where: {
            id: '6761ffc5-8668-5cb2-b1fa-f635471327a3',
          },
        },
      })
      .expect(404);
  });

  test('/REST:POST business-partner-portal/business-partner/create', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/create')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
      })
      .expect(201);
  });

  test('/REST:POST business-partner-portal/business-partner/find', () => {
    return request(app.getHttpServer())
      .post('/business-partner-portal/business-partner/find')
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

  test('/REST:POST business-partner-portal/business-partner/find/{id} - Got 404 Not Found', () => {
    return request(app.getHttpServer())
      .post(
        '/business-partner-portal/business-partner/find/16845ff2-32ab-54d7-aab5-ae7fd05607d0',
      )
      .set('Accept', 'application/json')
      .expect(404);
  });

  test('/REST:POST business-partner-portal/business-partner/find/{id}', () => {
    return request(app.getHttpServer())
      .post(
        '/business-partner-portal/business-partner/find/5b19d6ac-4081-573b-96b3-56964d5326a8',
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

  test('/REST:PUT business-partner-portal/business-partner/update - Got 404 Not Found', () => {
    return request(app.getHttpServer())
      .put('/business-partner-portal/business-partner/update')
      .set('Accept', 'application/json')
      .send({
        ...mockData[0],
        id: 'eaf6fe1b-02ec-5b70-af86-3374d05aad44',
      })
      .expect(404);
  });

  test('/REST:PUT business-partner-portal/business-partner/update', () => {
    return request(app.getHttpServer())
      .put('/business-partner-portal/business-partner/update')
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

  test('/REST:DELETE business-partner-portal/business-partner/delete/{id} - Got 404 Not Found', () => {
    return request(app.getHttpServer())
      .delete(
        '/business-partner-portal/business-partner/delete/409fc00d-3816-5ee6-9848-d53d0c9cf85f',
      )
      .set('Accept', 'application/json')
      .expect(404);
  });

  test('/REST:DELETE business-partner-portal/business-partner/delete/{id}', () => {
    return request(app.getHttpServer())
      .delete(
        '/business-partner-portal/business-partner/delete/5b19d6ac-4081-573b-96b3-56964d5326a8',
      )
      .set('Accept', 'application/json')
      .expect(200);
  });

  test('/GraphQL businessPartnerPortalCreateBusinessPartner - Got 409 Conflict, item already exist in database', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    mutation ($payload:BusinessPartnerPortalCreateBusinessPartnerInput!)
                    {
                        businessPartnerPortalCreateBusinessPartner (payload:$payload)
                        {
                            id
                            rowId
                            externalId
                            code
                            type
                            name
                            tin
                            email
                            website
                            phone
                            phoneCountryPrefix
                            phoneSanitized
                            isActive
                            meta
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

  test('/GraphQL businessPartnerPortalPaginateBusinessPartners', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    query ($query:QueryStatement $constraint:QueryStatement)
                    {
                        businessPartnerPortalPaginateBusinessPartners (query:$query constraint:$constraint)
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
          res.body.data.businessPartnerPortalPaginateBusinessPartners,
        ).toEqual({
          total: businessPartnerSeeder.collectionResponse.length,
          count: businessPartnerSeeder.collectionResponse.length,
          rows: businessPartnerSeeder.collectionResponse
            .map((item) =>
              expect.objectContaining(
                _.omit(item, ['createdAt', 'updatedAt', 'deletedAt']),
              ),
            )
            .slice(0, 5),
        });
      });
  });

  test('/GraphQL businessPartnerPortalGetBusinessPartners', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    query ($query:QueryStatement)
                    {
                        businessPartnerPortalGetBusinessPartners (query:$query)
                        {
                            id
                            rowId
                            externalId
                            code
                            type
                            name
                            tin
                            email
                            website
                            phone
                            phoneCountryPrefix
                            phoneSanitized
                            isActive
                            meta
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
        ] of res.body.data.businessPartnerPortalGetBusinessPartners.entries()) {
          expect(businessPartnerSeeder.collectionResponse[index]).toEqual(
            expect.objectContaining(
              _.omit(value, ['createdAt', 'updatedAt', 'deletedAt']),
            ),
          );
        }
      });
  });

  test('/GraphQL businessPartnerPortalCreateBusinessPartner', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    mutation ($payload:BusinessPartnerPortalCreateBusinessPartnerInput!)
                    {
                        businessPartnerPortalCreateBusinessPartner (payload:$payload)
                        {
                            id
                            rowId
                            externalId
                            code
                            type
                            name
                            tin
                            email
                            website
                            phone
                            phoneCountryPrefix
                            phoneSanitized
                            isActive
                            meta
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
          res.body.data.businessPartnerPortalCreateBusinessPartner,
        ).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
      });
  });

  test('/GraphQL businessPartnerPortalFindBusinessPartner - Got 404 Not Found', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    query ($query:QueryStatement)
                    {
                        businessPartnerPortalFindBusinessPartner (query:$query)
                        {
                            id
                            rowId
                            externalId
                            code
                            type
                            name
                            tin
                            email
                            website
                            phone
                            phoneCountryPrefix
                            phoneSanitized
                            isActive
                            meta
                            createdAt
                            updatedAt
                        }
                    }
                `,
        variables: {
          query: {
            where: {
              id: 'a5b757ff-d30d-53a0-b785-e2226c7ea4ca',
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

  test('/GraphQL businessPartnerPortalFindBusinessPartner', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    query ($query:QueryStatement)
                    {
                        businessPartnerPortalFindBusinessPartner (query:$query)
                        {
                            id
                            rowId
                            externalId
                            code
                            type
                            name
                            tin
                            email
                            website
                            phone
                            phoneCountryPrefix
                            phoneSanitized
                            isActive
                            meta
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
          res.body.data.businessPartnerPortalFindBusinessPartner.id,
        ).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
      });
  });

  test('/GraphQL businessPartnerPortalFindBusinessPartnerById - Got 404 Not Found', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    query ($id:ID!)
                    {
                        businessPartnerPortalFindBusinessPartnerById (id:$id)
                        {
                            id
                            rowId
                            externalId
                            code
                            type
                            name
                            tin
                            email
                            website
                            phone
                            phoneCountryPrefix
                            phoneSanitized
                            isActive
                            meta
                            createdAt
                            updatedAt
                        }
                    }
                `,
        variables: {
          id: 'c842a357-adbf-5e45-ad21-a85c351db2d0',
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

  test('/GraphQL businessPartnerPortalFindBusinessPartnerById', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    query ($id:ID!)
                    {
                        businessPartnerPortalFindBusinessPartnerById (id:$id)
                        {
                            id
                            rowId
                            externalId
                            code
                            type
                            name
                            tin
                            email
                            website
                            phone
                            phoneCountryPrefix
                            phoneSanitized
                            isActive
                            meta
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
          res.body.data.businessPartnerPortalFindBusinessPartnerById.id,
        ).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
      });
  });

  test('/GraphQL businessPartnerPortalUpdateBusinessPartnerById - Got 404 Not Found', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    mutation ($payload:BusinessPartnerPortalUpdateBusinessPartnerByIdInput!)
                    {
                        businessPartnerPortalUpdateBusinessPartnerById (payload:$payload)
                        {
                            id
                            rowId
                            externalId
                            code
                            type
                            name
                            tin
                            email
                            website
                            phone
                            phoneCountryPrefix
                            phoneSanitized
                            isActive
                            meta
                            createdAt
                            updatedAt
                        }
                    }
                `,
        variables: {
          payload: {
            ...mockData[0],
            id: '76220a60-c0f0-5e4d-bf79-56cdc7d2f306',
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

  test('/GraphQL businessPartnerPortalUpdateBusinessPartnerById', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    mutation ($payload:BusinessPartnerPortalUpdateBusinessPartnerByIdInput!)
                    {
                        businessPartnerPortalUpdateBusinessPartnerById (payload:$payload)
                        {
                            id
                            rowId
                            externalId
                            code
                            type
                            name
                            tin
                            email
                            website
                            phone
                            phoneCountryPrefix
                            phoneSanitized
                            isActive
                            meta
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
          res.body.data.businessPartnerPortalUpdateBusinessPartnerById.id,
        ).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
      });
  });

  test('/GraphQL businessPartnerPortalUpdateBusinessPartners', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    mutation ($payload:BusinessPartnerPortalUpdateBusinessPartnersInput! $query: QueryStatement)
                    {
                        businessPartnerPortalUpdateBusinessPartners (payload:$payload query:$query)
                        {
                            id
                            rowId
                            externalId
                            code
                            type
                            name
                            tin
                            email
                            website
                            phone
                            phoneCountryPrefix
                            phoneSanitized
                            isActive
                            meta
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
          res.body.data.businessPartnerPortalUpdateBusinessPartners[0].id,
        ).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
      });
  });

  test('/GraphQL businessPartnerPortalDeleteBusinessPartnerById - Got 404 Not Found', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    mutation ($id:ID!)
                    {
                        businessPartnerPortalDeleteBusinessPartnerById (id:$id)
                        {
                            id
                            rowId
                            externalId
                            code
                            type
                            name
                            tin
                            email
                            website
                            phone
                            phoneCountryPrefix
                            phoneSanitized
                            isActive
                            meta
                            createdAt
                            updatedAt
                        }
                    }
                `,
        variables: {
          id: '44098693-cdda-5964-8d9e-566cad4b7eb3',
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

  test('/GraphQL businessPartnerPortalDeleteBusinessPartnerById', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
                    mutation ($id:ID!)
                    {
                        businessPartnerPortalDeleteBusinessPartnerById (id:$id)
                        {
                            id
                            rowId
                            externalId
                            code
                            type
                            name
                            tin
                            email
                            website
                            phone
                            phoneCountryPrefix
                            phoneSanitized
                            isActive
                            meta
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
          res.body.data.businessPartnerPortalDeleteBusinessPartnerById.id,
        ).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
      });
  });

  afterAll(async () => {
    await businessPartnerRepository.delete({
      queryStatement: {
        where: {},
      },
    });
    await app.close();
  });
});
