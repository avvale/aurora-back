/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable key-spacing */
import { AuthorizationPermissionsGuard } from '@api/iam/shared/guards/authorization-permissions.guard';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { SearchEngineModule } from '@api/search-engine/search-engine.module';
import { SearchEngineIFieldRepository, searchEngineMockFieldData, SearchEngineMockFieldSeeder } from '@app/search-engine/field';
import { GraphQLConfigModule } from '@aurora/graphql/graphql-config.module';
import { INestApplication } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import * as _ from 'lodash';
import * as request from 'supertest';

// disable import foreign modules, can be micro-services
const importForeignModules = [];

describe('field', () =>
{
    let app: INestApplication;
    let fieldRepository: SearchEngineIFieldRepository;
    let fieldSeeder: SearchEngineMockFieldSeeder;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let mockData: any;

    // set timeout to 60s by default are 5s
    jest.setTimeout(60000);

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ...importForeignModules,
                SearchEngineModule,
                GraphQLConfigModule,
                SequelizeModule.forRootAsync({
                    imports   : [ConfigModule],
                    inject    : [ConfigService],
                    useFactory: (configService: ConfigService) =>
                    {
                        return {
                            dialect       : configService.get('TEST_DATABASE_DIALECT'),
                            storage       : configService.get('TEST_DATABASE_STORAGE'),
                            host          : configService.get('TEST_DATABASE_HOST'),
                            port          : +configService.get('TEST_DATABASE_PORT'),
                            username      : configService.get('TEST_DATABASE_USER'),
                            password      : configService.get('TEST_DATABASE_PASSWORD'),
                            database      : configService.get('TEST_DATABASE_SCHEMA'),
                            synchronize   : configService.get('TEST_DATABASE_SYNCHRONIZE'),
                            logging       : configService.get('TEST_DATABASE_LOGGIN') === 'true' ? console.log : false,
                            autoLoadModels: true,
                            models        : [],
                        };
                    },
                }),
            ],
            providers: [
                SearchEngineMockFieldSeeder,
            ],
        })
            .overrideGuard(AuthenticationJwtGuard)
            .useValue({ canActivate: () => true })
            .overrideGuard(AuthorizationPermissionsGuard)
            .useValue({ canActivate: () => true })
            .compile();

        mockData = searchEngineMockFieldData;
        app = module.createNestApplication();
        fieldRepository = module.get<SearchEngineIFieldRepository>(SearchEngineIFieldRepository);
        fieldSeeder = module.get<SearchEngineMockFieldSeeder>(SearchEngineMockFieldSeeder);

        // seed mock data in memory database
        await fieldRepository.insert(fieldSeeder.collectionSource);

        await app.init();
    });

    test('/REST:POST search-engine/field/create - Got 400 Conflict, FieldId property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/field/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for SearchEngineFieldId must be defined, can not be null');
            });
    });

    test('/REST:POST search-engine/field/create - Got 400 Conflict, FieldCollectionId property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/field/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                collectionId: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for SearchEngineFieldCollectionId must be defined, can not be null');
            });
    });

    test('/REST:POST search-engine/field/create - Got 400 Conflict, FieldName property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/field/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                name: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for SearchEngineFieldName must be defined, can not be null');
            });
    });

    test('/REST:POST search-engine/field/create - Got 400 Conflict, FieldType property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/field/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                type: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for SearchEngineFieldType must be defined, can not be null');
            });
    });

    test('/REST:POST search-engine/field/create - Got 400 Conflict, FieldIsNullable property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/field/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                isNullable: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for SearchEngineFieldIsNullable must be defined, can not be null');
            });
    });

    test('/REST:POST search-engine/field/create - Got 400 Conflict, FieldId property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/field/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for SearchEngineFieldId must be defined, can not be undefined');
            });
    });

    test('/REST:POST search-engine/field/create - Got 400 Conflict, FieldCollectionId property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/field/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                collectionId: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for SearchEngineFieldCollectionId must be defined, can not be undefined');
            });
    });

    test('/REST:POST search-engine/field/create - Got 400 Conflict, FieldName property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/field/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                name: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for SearchEngineFieldName must be defined, can not be undefined');
            });
    });

    test('/REST:POST search-engine/field/create - Got 400 Conflict, FieldType property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/field/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                type: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for SearchEngineFieldType must be defined, can not be undefined');
            });
    });

    test('/REST:POST search-engine/field/create - Got 400 Conflict, FieldIsNullable property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/field/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                isNullable: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for SearchEngineFieldIsNullable must be defined, can not be undefined');
            });
    });

    test('/REST:POST search-engine/field/create - Got 400 Conflict, FieldId is not allowed, must be a length of 36', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/field/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '*************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for SearchEngineFieldId is not allowed, must be a length of 36');
            });
    });

    test('/REST:POST search-engine/field/create - Got 400 Conflict, FieldCollectionId is not allowed, must be a length of 36', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/field/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                collectionId: '*************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for SearchEngineFieldCollectionId is not allowed, must be a length of 36');
            });
    });

    test('/REST:POST search-engine/field/create - Got 400 Conflict, FieldName is too large, has a maximum length of 255', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/field/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                name: '****************************************************************************************************************************************************************************************************************************************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for SearchEngineFieldName is too large, has a maximum length of 255');
            });
    });

    test('/REST:POST search-engine/field/create - Got 400 Conflict, FieldType is too large, has a maximum length of 63', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/field/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                type: '****************************************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for SearchEngineFieldType is too large, has a maximum length of 63');
            });
    });

    test('/REST:POST search-engine/field/create - Got 400 Conflict, FieldIsNullable has to be a boolean value', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/field/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                isNullable: 'true',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for SearchEngineFieldIsNullable has to be a boolean value');
            });
    });

    test('/REST:POST search-engine/field/create - Got 409 Conflict, item already exist in database', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/field/create')
            .set('Accept', 'application/json')
            .send(mockData[0])
            .expect(409);
    });

    test('/REST:POST search-engine/fields/paginate', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/fields/paginate')
            .set('Accept', 'application/json')
            .send({
                query:
                {
                    offset: 0,
                    limit: 5,
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toEqual({
                    total: fieldSeeder.collectionResponse.length,
                    count: fieldSeeder.collectionResponse.length,
                    rows : fieldSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))).slice(0, 5),
                });
            });
    });

    test('/REST:POST search-engine/fields/get', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/fields/get')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res =>
            {
                expect(res.body).toEqual(
                    fieldSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))),
                );
            });
    });

    test('/REST:POST search-engine/field/find - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/field/find')
            .set('Accept', 'application/json')
            .send({
                query:
                {
                    where:
                    {
                        id: '4bdf2d77-5390-5e42-922f-ec7567b65c68',
                    },
                },
            })
            .expect(404);
    });

    test('/REST:POST search-engine/field/create', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/field/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
            })
            .expect(201);
    });

    test('/REST:POST search-engine/field/find', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/field/find')
            .set('Accept', 'application/json')
            .send({
                query:
                {
                    where:
                    {
                        id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/REST:POST search-engine/field/find/{id} - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/field/find/e1937919-54d4-55db-9e0c-33daa008f527')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:POST search-engine/field/find/{id}', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/field/find/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/REST:PUT search-engine/field/update - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .put('/search-engine/field/update')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '05dd9c5a-44a8-5450-8aff-464771632062',
            })
            .expect(404);
    });

    test('/REST:PUT search-engine/field/update', () =>
    {
        return request(app.getHttpServer())
            .put('/search-engine/field/update')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/REST:DELETE search-engine/field/delete/{id} - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .delete('/search-engine/field/delete/6f96fed0-dbd1-5f04-9514-370a50d0c27c')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:DELETE search-engine/field/delete/{id}', () =>
    {
        return request(app.getHttpServer())
            .delete('/search-engine/field/delete/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('/GraphQL searchEngineCreateField - Got 409 Conflict, item already exist in database', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:SearchEngineCreateFieldInput!)
                    {
                        searchEngineCreateField (payload:$payload)
                        {
                            id
                            collectionId
                            name
                            type
                            isNullable
                        }
                    }
                `,
                variables:
                {
                    payload: _.omit(mockData[0], ['createdAt','updatedAt','deletedAt']),
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(409);
                expect(res.body.errors[0].extensions.originalError.message).toContain('already exist in database');
            });
    });

    test('/GraphQL searchEnginePaginateFields', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement $constraint:QueryStatement)
                    {
                        searchEnginePaginateFields (query:$query constraint:$constraint)
                        {
                            total
                            count
                            rows
                        }
                    }
                `,
                variables:
                {
                    query:
                    {
                        offset: 0,
                        limit: 5,
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.searchEnginePaginateFields).toEqual({
                    total: fieldSeeder.collectionResponse.length,
                    count: fieldSeeder.collectionResponse.length,
                    rows : fieldSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))).slice(0, 5),
                });
            });
    });

    test('/GraphQL searchEngineGetFields', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        searchEngineGetFields (query:$query)
                        {
                            id
                            name
                            type
                            isNullable
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {},
            })
            .expect(200)
            .then(res =>
            {
                for (const [index, value] of res.body.data.searchEngineGetFields.entries())
                {
                    expect(fieldSeeder.collectionResponse[index]).toEqual(expect.objectContaining(_.omit(value, ['createdAt', 'updatedAt', 'deletedAt'])));
                }
            });
    });

    test('/GraphQL searchEngineCreateField', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:SearchEngineCreateFieldInput!)
                    {
                        searchEngineCreateField (payload:$payload)
                        {
                            id
                            collectionId
                            name
                            type
                            isNullable
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
            .then(res =>
            {
                expect(res.body.data.searchEngineCreateField).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL searchEngineFindField - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        searchEngineFindField (query:$query)
                        {
                            id
                            name
                            type
                            isNullable
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables:
                {
                    query:
                    {
                        where:
                        {
                            id: '98b5eb91-40e2-508d-8739-bc0d132b0b9e',
                        },
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(404);
                expect(res.body.errors[0].extensions.originalError.message).toContain('not found');
            });
    });

    test('/GraphQL searchEngineFindField', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        searchEngineFindField (query:$query)
                        {
                            id
                            name
                            type
                            isNullable
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables:
                {
                    query:
                    {
                        where:
                        {
                            id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                        },
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.searchEngineFindField.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL searchEngineFindFieldById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        searchEngineFindFieldById (id:$id)
                        {
                            id
                            name
                            type
                            isNullable
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '671ba8bf-60a7-570c-942e-50f55efb8e9f',
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(404);
                expect(res.body.errors[0].extensions.originalError.message).toContain('not found');
            });
    });

    test('/GraphQL searchEngineFindFieldById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        searchEngineFindFieldById (id:$id)
                        {
                            id
                            name
                            type
                            isNullable
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
            .then(res =>
            {
                expect(res.body.data.searchEngineFindFieldById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL searchEngineUpdateFieldById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:SearchEngineUpdateFieldByIdInput!)
                    {
                        searchEngineUpdateFieldById (payload:$payload)
                        {
                            id
                            name
                            type
                            isNullable
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: 'f78db7cb-fbfa-52ab-9a8c-17aa08c9423f',
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(404);
                expect(res.body.errors[0].extensions.originalError.message).toContain('not found');
            });
    });

    test('/GraphQL searchEngineUpdateFieldById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:SearchEngineUpdateFieldByIdInput!)
                    {
                        searchEngineUpdateFieldById (payload:$payload)
                        {
                            id
                            name
                            type
                            isNullable
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
            .then(res =>
            {
                expect(res.body.data.searchEngineUpdateFieldById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL searchEngineUpdateFields', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:SearchEngineUpdateFieldsInput! $query: QueryStatement)
                    {
                        searchEngineUpdateFields (payload:$payload query:$query)
                        {
                            id
                            name
                            type
                            isNullable
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
            .then(res =>
            {
                expect(res.body.data.searchEngineUpdateFields[0].id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL searchEngineDeleteFieldById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        searchEngineDeleteFieldById (id:$id)
                        {
                            id
                            name
                            type
                            isNullable
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '88eaf13d-cee3-5c4b-92cb-8b5809e7fffe',
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(404);
                expect(res.body.errors[0].extensions.originalError.message).toContain('not found');
            });
    });

    test('/GraphQL searchEngineDeleteFieldById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        searchEngineDeleteFieldById (id:$id)
                        {
                            id
                            name
                            type
                            isNullable
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
            .then(res =>
            {
                expect(res.body.data.searchEngineDeleteFieldById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    afterAll(async () =>
    {
        await fieldRepository.delete({
            queryStatement: {
                where: {},
            },
        });
        await app.close();
    });
});
