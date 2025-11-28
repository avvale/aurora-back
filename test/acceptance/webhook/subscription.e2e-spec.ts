/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable key-spacing */
import { AuthorizationPermissionsGuard } from '@api/iam/shared/guards/authorization-permissions.guard';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { WebhookModule } from '@api/webhook/webhook.module';
import {
    WebhookISubscriptionRepository,
    webhookMockSubscriptionData,
    WebhookMockSubscriptionSeeder,
} from '@app/webhook/subscription';
import { GraphQLConfigModule } from '@aurora/modules';
import { INestApplication } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import * as _ from 'lodash';
import * as request from 'supertest';

// disable import foreign modules, can be micro-services
const importForeignModules = [];

describe('subscription', () => {
    let app: INestApplication;
    let subscriptionRepository: WebhookISubscriptionRepository;
    let subscriptionSeeder: WebhookMockSubscriptionSeeder;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let mockData: any;

    // set timeout to 60s by default are 5s
    jest.setTimeout(60000);

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ...importForeignModules,
                WebhookModule,
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
                            password: configService.get(
                                'TEST_DATABASE_PASSWORD',
                            ),
                            database: configService.get('TEST_DATABASE_SCHEMA'),
                            synchronize: configService.get(
                                'TEST_DATABASE_SYNCHRONIZE',
                            ),
                            logging:
                                configService.get('TEST_DATABASE_LOGGIN') ===
                                'true'
                                    ? console.log
                                    : false,
                            autoLoadModels: true,
                            models: [],
                        };
                    },
                }),
            ],
            providers: [WebhookMockSubscriptionSeeder],
        })
            .overrideGuard(AuthenticationJwtGuard)
            .useValue({ canActivate: () => true })
            .overrideGuard(AuthorizationPermissionsGuard)
            .useValue({ canActivate: () => true })
            .compile();

        mockData = webhookMockSubscriptionData;
        app = module.createNestApplication();
        subscriptionRepository = module.get<WebhookISubscriptionRepository>(
            WebhookISubscriptionRepository,
        );
        subscriptionSeeder = module.get<WebhookMockSubscriptionSeeder>(
            WebhookMockSubscriptionSeeder,
        );

        // seed mock data in memory database
        await subscriptionRepository.insert(
            subscriptionSeeder.collectionSource,
        );

        await app.init();
    });

    test('/REST:POST webhook/subscription/create - Got 400 Conflict, SubscriptionId property can not to be null', () => {
        return request(app.getHttpServer())
            .post('/webhook/subscription/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: null,
            })
            .expect(400)
            .then((res) => {
                expect(res.body.message).toContain(
                    'Value for WebhookSubscriptionId must be defined, can not be null',
                );
            });
    });

    test('/REST:POST webhook/subscription/create - Got 400 Conflict, SubscriptionRowId property can not to be null', () => {
        return request(app.getHttpServer())
            .post('/webhook/subscription/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                rowId: null,
            })
            .expect(400)
            .then((res) => {
                expect(res.body.message).toContain(
                    'Value for WebhookSubscriptionRowId must be defined, can not be null',
                );
            });
    });

    test('/REST:POST webhook/subscription/create - Got 400 Conflict, SubscriptionName property can not to be null', () => {
        return request(app.getHttpServer())
            .post('/webhook/subscription/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                name: null,
            })
            .expect(400)
            .then((res) => {
                expect(res.body.message).toContain(
                    'Value for WebhookSubscriptionName must be defined, can not be null',
                );
            });
    });

    test('/REST:POST webhook/subscription/create - Got 400 Conflict, SubscriptionService property can not to be null', () => {
        return request(app.getHttpServer())
            .post('/webhook/subscription/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                service: null,
            })
            .expect(400)
            .then((res) => {
                expect(res.body.message).toContain(
                    'Value for WebhookSubscriptionService must be defined, can not be null',
                );
            });
    });

    test('/REST:POST webhook/subscription/create - Got 400 Conflict, SubscriptionEndpoint property can not to be null', () => {
        return request(app.getHttpServer())
            .post('/webhook/subscription/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                endpoint: null,
            })
            .expect(400)
            .then((res) => {
                expect(res.body.message).toContain(
                    'Value for WebhookSubscriptionEndpoint must be defined, can not be null',
                );
            });
    });

    test('/REST:POST webhook/subscription/create - Got 400 Conflict, SubscriptionId property can not to be undefined', () => {
        return request(app.getHttpServer())
            .post('/webhook/subscription/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: undefined,
            })
            .expect(400)
            .then((res) => {
                expect(res.body.message).toContain(
                    'Value for WebhookSubscriptionId must be defined, can not be undefined',
                );
            });
    });

    test('/REST:POST webhook/subscription/create - Got 400 Conflict, SubscriptionRowId property can not to be undefined', () => {
        return request(app.getHttpServer())
            .post('/webhook/subscription/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                rowId: undefined,
            })
            .expect(400)
            .then((res) => {
                expect(res.body.message).toContain(
                    'Value for WebhookSubscriptionRowId must be defined, can not be undefined',
                );
            });
    });

    test('/REST:POST webhook/subscription/create - Got 400 Conflict, SubscriptionName property can not to be undefined', () => {
        return request(app.getHttpServer())
            .post('/webhook/subscription/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                name: undefined,
            })
            .expect(400)
            .then((res) => {
                expect(res.body.message).toContain(
                    'Value for WebhookSubscriptionName must be defined, can not be undefined',
                );
            });
    });

    test('/REST:POST webhook/subscription/create - Got 400 Conflict, SubscriptionService property can not to be undefined', () => {
        return request(app.getHttpServer())
            .post('/webhook/subscription/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                service: undefined,
            })
            .expect(400)
            .then((res) => {
                expect(res.body.message).toContain(
                    'Value for WebhookSubscriptionService must be defined, can not be undefined',
                );
            });
    });

    test('/REST:POST webhook/subscription/create - Got 400 Conflict, SubscriptionEndpoint property can not to be undefined', () => {
        return request(app.getHttpServer())
            .post('/webhook/subscription/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                endpoint: undefined,
            })
            .expect(400)
            .then((res) => {
                expect(res.body.message).toContain(
                    'Value for WebhookSubscriptionEndpoint must be defined, can not be undefined',
                );
            });
    });

    test('/REST:POST webhook/subscription/create - Got 400 Conflict, SubscriptionId is not allowed, must be a length of 36', () => {
        return request(app.getHttpServer())
            .post('/webhook/subscription/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '*************************************',
            })
            .expect(400)
            .then((res) => {
                expect(res.body.message).toContain(
                    'Value for WebhookSubscriptionId is not allowed, must be a length of 36',
                );
            });
    });

    test('/REST:POST webhook/subscription/create - Got 400 Conflict, SubscriptionName is too large, has a maximum length of 255', () => {
        return request(app.getHttpServer())
            .post('/webhook/subscription/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                name: '****************************************************************************************************************************************************************************************************************************************************************',
            })
            .expect(400)
            .then((res) => {
                expect(res.body.message).toContain(
                    'Value for WebhookSubscriptionName is too large, has a maximum length of 255',
                );
            });
    });

    test('/REST:POST webhook/subscription/create - Got 400 Conflict, SubscriptionService is too large, has a maximum length of 255', () => {
        return request(app.getHttpServer())
            .post('/webhook/subscription/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                service:
                    '****************************************************************************************************************************************************************************************************************************************************************',
            })
            .expect(400)
            .then((res) => {
                expect(res.body.message).toContain(
                    'Value for WebhookSubscriptionService is too large, has a maximum length of 255',
                );
            });
    });

    test('/REST:POST webhook/subscription/create - Got 400 Conflict, SubscriptionEndpoint is too large, has a maximum length of 255', () => {
        return request(app.getHttpServer())
            .post('/webhook/subscription/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                endpoint:
                    '****************************************************************************************************************************************************************************************************************************************************************',
            })
            .expect(400)
            .then((res) => {
                expect(res.body.message).toContain(
                    'Value for WebhookSubscriptionEndpoint is too large, has a maximum length of 255',
                );
            });
    });

    test('/REST:POST webhook/subscription/create - Got 400 Conflict, SubscriptionExternalId is too large, has a maximum length of 64', () => {
        return request(app.getHttpServer())
            .post('/webhook/subscription/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                externalId:
                    '*****************************************************************',
            })
            .expect(400)
            .then((res) => {
                expect(res.body.message).toContain(
                    'Value for WebhookSubscriptionExternalId is too large, has a maximum length of 64',
                );
            });
    });

    test('/REST:POST webhook/subscription/create - Got 400 Conflict, SubscriptionSecret is too large, has a maximum length of 128', () => {
        return request(app.getHttpServer())
            .post('/webhook/subscription/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                secret: '*********************************************************************************************************************************',
            })
            .expect(400)
            .then((res) => {
                expect(res.body.message).toContain(
                    'Value for WebhookSubscriptionSecret is too large, has a maximum length of 128',
                );
            });
    });

    test('/REST:POST webhook/subscription/create - Got 409 Conflict, item already exist in database', () => {
        return request(app.getHttpServer())
            .post('/webhook/subscription/create')
            .set('Accept', 'application/json')
            .send(mockData[0])
            .expect(409);
    });

    test('/REST:POST webhook/subscriptions/paginate', () => {
        return request(app.getHttpServer())
            .post('/webhook/subscriptions/paginate')
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
                    total: subscriptionSeeder.collectionResponse.length,
                    count: subscriptionSeeder.collectionResponse.length,
                    rows: subscriptionSeeder.collectionResponse
                        .map((item) =>
                            expect.objectContaining(
                                _.omit(item, [
                                    'createdAt',
                                    'updatedAt',
                                    'deletedAt',
                                ]),
                            ),
                        )
                        .slice(0, 5),
                });
            });
    });

    test('/REST:POST webhook/subscriptions/get', () => {
        return request(app.getHttpServer())
            .post('/webhook/subscriptions/get')
            .set('Accept', 'application/json')
            .expect(200)
            .then((res) => {
                expect(res.body).toEqual(
                    subscriptionSeeder.collectionResponse.map((item) =>
                        expect.objectContaining(
                            _.omit(item, [
                                'createdAt',
                                'updatedAt',
                                'deletedAt',
                            ]),
                        ),
                    ),
                );
            });
    });

    test('/REST:POST webhook/subscription/find - Got 404 Not Found', () => {
        return request(app.getHttpServer())
            .post('/webhook/subscription/find')
            .set('Accept', 'application/json')
            .send({
                query: {
                    where: {
                        id: 'fe13f841-87ec-5298-8ad0-ea1518719b05',
                    },
                },
            })
            .expect(404);
    });

    test('/REST:POST webhook/subscription/create', () => {
        return request(app.getHttpServer())
            .post('/webhook/subscription/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
            })
            .expect(201);
    });

    test('/REST:POST webhook/subscription/find', () => {
        return request(app.getHttpServer())
            .post('/webhook/subscription/find')
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

    test('/REST:POST webhook/subscription/find/{id} - Got 404 Not Found', () => {
        return request(app.getHttpServer())
            .post(
                '/webhook/subscription/find/8b6bb939-9fea-544d-a514-d5b5ef160201',
            )
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:POST webhook/subscription/find/{id}', () => {
        return request(app.getHttpServer())
            .post(
                '/webhook/subscription/find/5b19d6ac-4081-573b-96b3-56964d5326a8',
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

    test('/REST:PUT webhook/subscription/update - Got 404 Not Found', () => {
        return request(app.getHttpServer())
            .put('/webhook/subscription/update')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: 'ec13001f-690f-5daf-8d47-fa0847a0bcfa',
            })
            .expect(404);
    });

    test('/REST:PUT webhook/subscription/update', () => {
        return request(app.getHttpServer())
            .put('/webhook/subscription/update')
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

    test('/REST:DELETE webhook/subscription/delete/{id} - Got 404 Not Found', () => {
        return request(app.getHttpServer())
            .delete(
                '/webhook/subscription/delete/b4f22241-aa82-5abf-8bb5-dac698f864a7',
            )
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:DELETE webhook/subscription/delete/{id}', () => {
        return request(app.getHttpServer())
            .delete(
                '/webhook/subscription/delete/5b19d6ac-4081-573b-96b3-56964d5326a8',
            )
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('/GraphQL webhookCreateSubscription - Got 409 Conflict, item already exist in database', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:WebhookCreateSubscriptionInput!)
                    {
                        webhookCreateSubscription (payload:$payload)
                        {
                            id
                            rowId
                            name
                            service
                            endpoint
                            externalId
                            events
                            secret
                            meta
                        }
                    }
                `,
                variables: {
                    payload: _.omit(mockData[0], [
                        'createdAt',
                        'updatedAt',
                        'deletedAt',
                    ]),
                },
            })
            .expect(200)
            .then((res) => {
                expect(res.body).toHaveProperty('errors');
                expect(
                    res.body.errors[0].extensions.originalError.statusCode,
                ).toBe(409);
                expect(
                    res.body.errors[0].extensions.originalError.message,
                ).toContain('already exist in database');
            });
    });

    test('/GraphQL webhookPaginateSubscriptions', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement $constraint:QueryStatement)
                    {
                        webhookPaginateSubscriptions (query:$query constraint:$constraint)
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
                expect(res.body.data.webhookPaginateSubscriptions).toEqual({
                    total: subscriptionSeeder.collectionResponse.length,
                    count: subscriptionSeeder.collectionResponse.length,
                    rows: subscriptionSeeder.collectionResponse
                        .map((item) =>
                            expect.objectContaining(
                                _.omit(item, [
                                    'createdAt',
                                    'updatedAt',
                                    'deletedAt',
                                ]),
                            ),
                        )
                        .slice(0, 5),
                });
            });
    });

    test('/GraphQL webhookGetSubscriptions', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        webhookGetSubscriptions (query:$query)
                        {
                            id
                            rowId
                            name
                            service
                            endpoint
                            externalId
                            events
                            secret
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
                ] of res.body.data.webhookGetSubscriptions.entries()) {
                    expect(
                        subscriptionSeeder.collectionResponse[index],
                    ).toEqual(
                        expect.objectContaining(
                            _.omit(value, [
                                'createdAt',
                                'updatedAt',
                                'deletedAt',
                            ]),
                        ),
                    );
                }
            });
    });

    test('/GraphQL webhookCreateSubscription', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:WebhookCreateSubscriptionInput!)
                    {
                        webhookCreateSubscription (payload:$payload)
                        {
                            id
                            rowId
                            name
                            service
                            endpoint
                            externalId
                            events
                            secret
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
                expect(res.body.data.webhookCreateSubscription).toHaveProperty(
                    'id',
                    '5b19d6ac-4081-573b-96b3-56964d5326a8',
                );
            });
    });

    test('/GraphQL webhookFindSubscription - Got 404 Not Found', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        webhookFindSubscription (query:$query)
                        {
                            id
                            rowId
                            name
                            service
                            endpoint
                            externalId
                            events
                            secret
                            meta
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    query: {
                        where: {
                            id: 'e451e22f-7b8f-5382-bfa5-b49690c1bab8',
                        },
                    },
                },
            })
            .expect(200)
            .then((res) => {
                expect(res.body).toHaveProperty('errors');
                expect(
                    res.body.errors[0].extensions.originalError.statusCode,
                ).toBe(404);
                expect(
                    res.body.errors[0].extensions.originalError.message,
                ).toContain('not found');
            });
    });

    test('/GraphQL webhookFindSubscription', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        webhookFindSubscription (query:$query)
                        {
                            id
                            rowId
                            name
                            service
                            endpoint
                            externalId
                            events
                            secret
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
                expect(res.body.data.webhookFindSubscription.id).toStrictEqual(
                    '5b19d6ac-4081-573b-96b3-56964d5326a8',
                );
            });
    });

    test('/GraphQL webhookFindSubscriptionById - Got 404 Not Found', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        webhookFindSubscriptionById (id:$id)
                        {
                            id
                            rowId
                            name
                            service
                            endpoint
                            externalId
                            events
                            secret
                            meta
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '5927fa6c-0892-50f3-af80-79130555a407',
                },
            })
            .expect(200)
            .then((res) => {
                expect(res.body).toHaveProperty('errors');
                expect(
                    res.body.errors[0].extensions.originalError.statusCode,
                ).toBe(404);
                expect(
                    res.body.errors[0].extensions.originalError.message,
                ).toContain('not found');
            });
    });

    test('/GraphQL webhookFindSubscriptionById', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        webhookFindSubscriptionById (id:$id)
                        {
                            id
                            rowId
                            name
                            service
                            endpoint
                            externalId
                            events
                            secret
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
                    res.body.data.webhookFindSubscriptionById.id,
                ).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL webhookUpdateSubscriptionById - Got 404 Not Found', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:WebhookUpdateSubscriptionByIdInput!)
                    {
                        webhookUpdateSubscriptionById (payload:$payload)
                        {
                            id
                            rowId
                            name
                            service
                            endpoint
                            externalId
                            events
                            secret
                            meta
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: '50ca1eeb-e7d6-5666-b2d0-69ffadc54cd6',
                    },
                },
            })
            .expect(200)
            .then((res) => {
                expect(res.body).toHaveProperty('errors');
                expect(
                    res.body.errors[0].extensions.originalError.statusCode,
                ).toBe(404);
                expect(
                    res.body.errors[0].extensions.originalError.message,
                ).toContain('not found');
            });
    });

    test('/GraphQL webhookUpdateSubscriptionById', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:WebhookUpdateSubscriptionByIdInput!)
                    {
                        webhookUpdateSubscriptionById (payload:$payload)
                        {
                            id
                            rowId
                            name
                            service
                            endpoint
                            externalId
                            events
                            secret
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
                    res.body.data.webhookUpdateSubscriptionById.id,
                ).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL webhookUpdateSubscriptions', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:WebhookUpdateSubscriptionsInput! $query: QueryStatement)
                    {
                        webhookUpdateSubscriptions (payload:$payload query:$query)
                        {
                            id
                            rowId
                            name
                            service
                            endpoint
                            externalId
                            events
                            secret
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
                    res.body.data.webhookUpdateSubscriptions[0].id,
                ).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL webhookDeleteSubscriptionById - Got 404 Not Found', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        webhookDeleteSubscriptionById (id:$id)
                        {
                            id
                            rowId
                            name
                            service
                            endpoint
                            externalId
                            events
                            secret
                            meta
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '118ea616-aea8-5faf-b31f-11293fa03af4',
                },
            })
            .expect(200)
            .then((res) => {
                expect(res.body).toHaveProperty('errors');
                expect(
                    res.body.errors[0].extensions.originalError.statusCode,
                ).toBe(404);
                expect(
                    res.body.errors[0].extensions.originalError.message,
                ).toContain('not found');
            });
    });

    test('/GraphQL webhookDeleteSubscriptionById', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        webhookDeleteSubscriptionById (id:$id)
                        {
                            id
                            rowId
                            name
                            service
                            endpoint
                            externalId
                            events
                            secret
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
                    res.body.data.webhookDeleteSubscriptionById.id,
                ).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    afterAll(async () => {
        await subscriptionRepository.delete({
            queryStatement: {
                where: {},
            },
        });
        await app.close();
    });
});
