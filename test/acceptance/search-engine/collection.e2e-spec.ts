/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable key-spacing */
import { SearchEngineModule } from '@api/search-engine/search-engine.module';
import { SearchEngineICollectionRepository } from '@app/search-engine/collection/domain/search-engine-collection.repository';
import { searchEngineCollections } from '@app/search-engine/collection/infrastructure/mock/search-engine-mock-collection.data';
import { SearchEngineMockCollectionSeeder } from '@app/search-engine/collection/infrastructure/mock/search-engine-mock-collection.seeder';
import { Auth } from '@aurora/decorators';
import { GraphQLConfigModule } from '@aurora/graphql/graphql-config.module';
import { INestApplication } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import * as _ from 'lodash';
import * as request from 'supertest';

// disable import foreign modules, can be micro-services
const importForeignModules = [];

describe('collection', () =>
{
    let app: INestApplication;
    let collectionRepository: SearchEngineICollectionRepository;
    let collectionSeeder: SearchEngineMockCollectionSeeder;

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
                SearchEngineMockCollectionSeeder,
            ],
        })
            .overrideGuard(Auth)
            .useValue({ canActivate: () => true })
            .compile();

        mockData = searchEngineCollections;
        app = module.createNestApplication();
        collectionRepository = module.get<SearchEngineICollectionRepository>(SearchEngineICollectionRepository);
        collectionSeeder = module.get<SearchEngineMockCollectionSeeder>(SearchEngineMockCollectionSeeder);

        // seed mock data in memory database
        await collectionRepository.insert(collectionSeeder.collectionSource);

        await app.init();
    });

    test('/REST:POST search-engine/collection/create - Got 400 Conflict, CollectionId property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/collection/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for CollectionId must be defined, can not be null');
            });
    });

    test('/REST:POST search-engine/collection/create - Got 400 Conflict, CollectionName property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/collection/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                name: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for CollectionName must be defined, can not be null');
            });
    });

    test('/REST:POST search-engine/collection/create - Got 400 Conflict, CollectionIsEnableNestedFields property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/collection/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                isEnableNestedFields: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for CollectionIsEnableNestedFields must be defined, can not be null');
            });
    });

    test('/REST:POST search-engine/collection/create - Got 400 Conflict, CollectionId property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/collection/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for CollectionId must be defined, can not be undefined');
            });
    });

    test('/REST:POST search-engine/collection/create - Got 400 Conflict, CollectionName property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/collection/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                name: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for CollectionName must be defined, can not be undefined');
            });
    });

    test('/REST:POST search-engine/collection/create - Got 400 Conflict, CollectionIsEnableNestedFields property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/collection/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                isEnableNestedFields: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for CollectionIsEnableNestedFields must be defined, can not be undefined');
            });
    });

    test('/REST:POST search-engine/collection/create - Got 400 Conflict, CollectionId is not allowed, must be a length of 36', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/collection/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '*************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for CollectionId is not allowed, must be a length of 36');
            });
    });

    test('/REST:POST search-engine/collection/create - Got 400 Conflict, CollectionName is too large, has a maximum length of 255', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/collection/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                name: '****************************************************************************************************************************************************************************************************************************************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for CollectionName is too large, has a maximum length of 255');
            });
    });

    test('/REST:POST search-engine/collection/create - Got 400 Conflict, CollectionAlias is too large, has a maximum length of 255', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/collection/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                alias: '****************************************************************************************************************************************************************************************************************************************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for CollectionAlias is too large, has a maximum length of 255');
            });
    });

    test('/REST:POST search-engine/collection/create - Got 400 Conflict, CollectionDocumentsNumber is too large, has a maximum length of 10', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/collection/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                documentsNumber: 11111111111,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for CollectionDocumentsNumber is too large, has a maximum length of 10');
            });
    });

    test('/REST:POST search-engine/collection/create - Got 400 Conflict, CollectionDefaultSortingField is too large, has a maximum length of 255', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/collection/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                defaultSortingField: '****************************************************************************************************************************************************************************************************************************************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for CollectionDefaultSortingField is too large, has a maximum length of 255');
            });
    });

    test('/REST:POST search-engine/collection/create - Got 400 Conflict, CollectionNumMemoryShards is too large, has a maximum length of 5', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/collection/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                numMemoryShards: 111111,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for CollectionNumMemoryShards is too large, has a maximum length of 5');
            });
    });

    test('/REST:POST search-engine/collection/create - Got 400 Conflict, CollectionTimestampCreatedAt is too large, has a maximum length of 10', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/collection/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                timestampCreatedAt: 11111111111,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for CollectionTimestampCreatedAt is too large, has a maximum length of 10');
            });
    });

    test('/REST:POST search-engine/collection/create - Got 400 Conflict, CollectionDocumentsNumber must have a positive sign', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/collection/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                documentsNumber: -1,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('The numerical value for CollectionDocumentsNumber must have a positive sign, this field does not accept negative values');
            });
    });
    test('/REST:POST search-engine/collection/create - Got 400 Conflict, CollectionTimestampCreatedAt must have a positive sign', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/collection/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                timestampCreatedAt: -1,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('The numerical value for CollectionTimestampCreatedAt must have a positive sign, this field does not accept negative values');
            });
    });
    test('/REST:POST search-engine/collection/create - Got 400 Conflict, CollectionIsEnableNestedFields has to be a boolean value', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/collection/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                isEnableNestedFields: 'true',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for CollectionIsEnableNestedFields has to be a boolean value');
            });
    });

    test('/REST:POST search-engine/collection/create - Got 409 Conflict, item already exist in database', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/collection/create')
            .set('Accept', 'application/json')
            .send(mockData[0])
            .expect(409);
    });

    test('/REST:POST search-engine/collections/paginate', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/collections/paginate')
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
                    total: collectionSeeder.collectionResponse.length,
                    count: collectionSeeder.collectionResponse.length,
                    rows : collectionSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))).slice(0, 5),
                });
            });
    });

    test('/REST:POST search-engine/collections/get', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/collections/get')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res =>
            {
                expect(res.body).toEqual(
                    collectionSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))),
                );
            });
    });

    test('/REST:POST search-engine/collection/find - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/collection/find')
            .set('Accept', 'application/json')
            .send({
                query:
                {
                    where:
                    {
                        id: '0fb566ce-066a-569c-b141-d85aa4a121ea',
                    },
                },
            })
            .expect(404);
    });

    test('/REST:POST search-engine/collection/create', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/collection/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
            })
            .expect(201);
    });

    test('/REST:POST search-engine/collection/find', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/collection/find')
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

    test('/REST:POST search-engine/collection/find/{id} - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/collection/find/4954a302-a390-5841-a38d-99735d3ba730')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:POST search-engine/collection/find/{id}', () =>
    {
        return request(app.getHttpServer())
            .post('/search-engine/collection/find/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/REST:PUT search-engine/collection/update - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .put('/search-engine/collection/update')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: 'c2954c3b-97e8-5134-9742-4980aac6ed73',
            })
            .expect(404);
    });

    test('/REST:PUT search-engine/collection/update', () =>
    {
        return request(app.getHttpServer())
            .put('/search-engine/collection/update')
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

    test('/REST:DELETE search-engine/collection/delete/{id} - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .delete('/search-engine/collection/delete/cc52bff5-612c-5d47-acca-4791836441de')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:DELETE search-engine/collection/delete/{id}', () =>
    {
        return request(app.getHttpServer())
            .delete('/search-engine/collection/delete/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('/GraphQL searchEngineCreateCollection - Got 409 Conflict, item already exist in database', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:SearchEngineCreateCollectionInput!)
                    {
                        searchEngineCreateCollection (payload:$payload)
                        {
                            id
                            name
                            alias
                            documentsNumber
                            defaultSortingField
                            numMemoryShards
                            timestampCreatedAt
                            isEnableNestedFields
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

    test('/GraphQL searchEnginePaginateCollections', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement $constraint:QueryStatement)
                    {
                        searchEnginePaginateCollections (query:$query constraint:$constraint)
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
                expect(res.body.data.searchEnginePaginateCollections).toEqual({
                    total: collectionSeeder.collectionResponse.length,
                    count: collectionSeeder.collectionResponse.length,
                    rows : collectionSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))).slice(0, 5),
                });
            });
    });

    test('/GraphQL searchEngineGetCollections', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        searchEngineGetCollections (query:$query)
                        {
                            id
                            name
                            alias
                            documentsNumber
                            defaultSortingField
                            numMemoryShards
                            timestampCreatedAt
                            isEnableNestedFields
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
                for (const [index, value] of res.body.data.searchEngineGetCollections.entries())
                {
                    expect(collectionSeeder.collectionResponse[index]).toEqual(expect.objectContaining(_.omit(value, ['createdAt', 'updatedAt', 'deletedAt'])));
                }
            });
    });

    test('/GraphQL searchEngineCreateCollection', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:SearchEngineCreateCollectionInput!)
                    {
                        searchEngineCreateCollection (payload:$payload)
                        {
                            id
                            name
                            alias
                            documentsNumber
                            defaultSortingField
                            numMemoryShards
                            timestampCreatedAt
                            isEnableNestedFields
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
                expect(res.body.data.searchEngineCreateCollection).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL searchEngineFindCollection - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        searchEngineFindCollection (query:$query)
                        {
                            id
                            name
                            alias
                            documentsNumber
                            defaultSortingField
                            numMemoryShards
                            timestampCreatedAt
                            isEnableNestedFields
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
                            id: 'b49dc63b-6fb8-56a6-9fde-efd9f88b6212',
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

    test('/GraphQL searchEngineFindCollection', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        searchEngineFindCollection (query:$query)
                        {
                            id
                            name
                            alias
                            documentsNumber
                            defaultSortingField
                            numMemoryShards
                            timestampCreatedAt
                            isEnableNestedFields
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
                expect(res.body.data.searchEngineFindCollection.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL searchEngineFindCollectionById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        searchEngineFindCollectionById (id:$id)
                        {
                            id
                            name
                            alias
                            documentsNumber
                            defaultSortingField
                            numMemoryShards
                            timestampCreatedAt
                            isEnableNestedFields
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '97b460f4-f4ff-5b60-add2-93dd924a86e1',
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

    test('/GraphQL searchEngineFindCollectionById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        searchEngineFindCollectionById (id:$id)
                        {
                            id
                            name
                            alias
                            documentsNumber
                            defaultSortingField
                            numMemoryShards
                            timestampCreatedAt
                            isEnableNestedFields
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
                expect(res.body.data.searchEngineFindCollectionById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL searchEngineUpdateCollectionById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:SearchEngineUpdateCollectionByIdInput!)
                    {
                        searchEngineUpdateCollectionById (payload:$payload)
                        {
                            id
                            name
                            alias
                            documentsNumber
                            defaultSortingField
                            numMemoryShards
                            timestampCreatedAt
                            isEnableNestedFields
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: '4da3be44-fbc1-5908-b0b9-1168d791c9fb',
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

    test('/GraphQL searchEngineUpdateCollectionById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:SearchEngineUpdateCollectionByIdInput!)
                    {
                        searchEngineUpdateCollectionById (payload:$payload)
                        {
                            id
                            name
                            alias
                            documentsNumber
                            defaultSortingField
                            numMemoryShards
                            timestampCreatedAt
                            isEnableNestedFields
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
                expect(res.body.data.searchEngineUpdateCollectionById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL searchEngineUpdateCollections', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:SearchEngineUpdateCollectionsInput! $query: QueryStatement)
                    {
                        searchEngineUpdateCollections (payload:$payload query:$query)
                        {
                            id
                            name
                            alias
                            documentsNumber
                            defaultSortingField
                            numMemoryShards
                            timestampCreatedAt
                            isEnableNestedFields
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
                expect(res.body.data.searchEngineUpdateCollections[0].id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL searchEngineDeleteCollectionById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        searchEngineDeleteCollectionById (id:$id)
                        {
                            id
                            name
                            alias
                            documentsNumber
                            defaultSortingField
                            numMemoryShards
                            timestampCreatedAt
                            isEnableNestedFields
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '03d3f9ae-ea7a-5a75-850f-28abcc598ed3',
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

    test('/GraphQL searchEngineDeleteCollectionById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        searchEngineDeleteCollectionById (id:$id)
                        {
                            id
                            name
                            alias
                            documentsNumber
                            defaultSortingField
                            numMemoryShards
                            timestampCreatedAt
                            isEnableNestedFields
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
                expect(res.body.data.searchEngineDeleteCollectionById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    afterAll(async () =>
    {
        await collectionRepository.delete({
            queryStatement: {
                where: {},
            },
        });
        await app.close();
    });
});