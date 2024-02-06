/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable key-spacing */
import { AuthorizationPermissionsGuard } from '@api/iam/shared/guards/authorization-permissions.guard';
import { NotificationModule } from '@api/notification/notification.module';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { NotificationIOutBoxNotificationRepository, notificationMockOutBoxNotificationData, NotificationMockOutBoxNotificationSeeder } from '@app/notification/out-box-notification';
import { GraphQLConfigModule } from '@aurora/graphql/graphql-config.module';
import { INestApplication } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import * as _ from 'lodash';
import * as request from 'supertest';

// disable import foreign modules, can be micro-services
const importForeignModules = [];

describe('out-box-notification', () =>
{
    let app: INestApplication;
    let outBoxNotificationRepository: NotificationIOutBoxNotificationRepository;
    let outBoxNotificationSeeder: NotificationMockOutBoxNotificationSeeder;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let mockData: any;

    // set timeout to 60s by default are 5s
    jest.setTimeout(60000);

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ...importForeignModules,
                NotificationModule,
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
                NotificationMockOutBoxNotificationSeeder,
            ],
        })
            .overrideGuard(AuthenticationJwtGuard)
            .useValue({ canActivate: () => true })
            .overrideGuard(AuthorizationPermissionsGuard)
            .useValue({ canActivate: () => true })
            .compile();

        mockData = notificationMockOutBoxNotificationData;
        app = module.createNestApplication();
        outBoxNotificationRepository = module.get<NotificationIOutBoxNotificationRepository>(NotificationIOutBoxNotificationRepository);
        outBoxNotificationSeeder = module.get<NotificationMockOutBoxNotificationSeeder>(NotificationMockOutBoxNotificationSeeder);

        // seed mock data in memory database
        await outBoxNotificationRepository.insert(outBoxNotificationSeeder.collectionSource);

        await app.init();
    });

    test('/REST:POST notification/out-box-notification/create - Got 400 Conflict, OutBoxNotificationId property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/out-box-notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutBoxNotificationId must be defined, can not be null');
            });
    });

    test('/REST:POST notification/out-box-notification/create - Got 400 Conflict, OutBoxNotificationSort property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/out-box-notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                sort: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutBoxNotificationSort must be defined, can not be null');
            });
    });

    test('/REST:POST notification/out-box-notification/create - Got 400 Conflict, OutBoxNotificationIsImportant property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/out-box-notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                isImportant: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutBoxNotificationIsImportant must be defined, can not be null');
            });
    });

    test('/REST:POST notification/out-box-notification/create - Got 400 Conflict, OutBoxNotificationSubject property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/out-box-notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                subject: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutBoxNotificationSubject must be defined, can not be null');
            });
    });

    test('/REST:POST notification/out-box-notification/create - Got 400 Conflict, OutBoxNotificationBody property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/out-box-notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                body: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutBoxNotificationBody must be defined, can not be null');
            });
    });

    test('/REST:POST notification/out-box-notification/create - Got 400 Conflict, OutBoxNotificationId property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/out-box-notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutBoxNotificationId must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/out-box-notification/create - Got 400 Conflict, OutBoxNotificationSort property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/out-box-notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                sort: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutBoxNotificationSort must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/out-box-notification/create - Got 400 Conflict, OutBoxNotificationIsImportant property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/out-box-notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                isImportant: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutBoxNotificationIsImportant must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/out-box-notification/create - Got 400 Conflict, OutBoxNotificationSubject property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/out-box-notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                subject: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutBoxNotificationSubject must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/out-box-notification/create - Got 400 Conflict, OutBoxNotificationBody property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/out-box-notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                body: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutBoxNotificationBody must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/out-box-notification/create - Got 400 Conflict, OutBoxNotificationId is not allowed, must be a length of 36', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/out-box-notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '*************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutBoxNotificationId is not allowed, must be a length of 36');
            });
    });

    test('/REST:POST notification/out-box-notification/create - Got 400 Conflict, OutBoxNotificationTenantId is not allowed, must be a length of 36', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/out-box-notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                tenantId: '*************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutBoxNotificationTenantId is not allowed, must be a length of 36');
            });
    });

    test('/REST:POST notification/out-box-notification/create - Got 400 Conflict, OutBoxNotificationSubject is too large, has a maximum length of 255', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/out-box-notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                subject: '****************************************************************************************************************************************************************************************************************************************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutBoxNotificationSubject is too large, has a maximum length of 255');
            });
    });

    test('/REST:POST notification/out-box-notification/create - Got 400 Conflict, OutBoxNotificationSort has to be a integer value', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/out-box-notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                sort: 100.10,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutBoxNotificationSort has to be a integer value');
            });
    });
    test('/REST:POST notification/out-box-notification/create - Got 400 Conflict, OutBoxNotificationIsImportant has to be a boolean value', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/out-box-notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                isImportant: 'true',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutBoxNotificationIsImportant has to be a boolean value');
            });
    });
    test('/REST:POST notification/out-box-notification/create - Got 400 Conflict, OutBoxNotificationAccountTenantOperator has to be a enum option of AND, OR', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/out-box-notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                accountTenantOperator: '****',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationOutBoxNotificationAccountTenantOperator has to be any of this options: AND, OR');
            });
    });

    test('/REST:POST notification/out-box-notification/create - Got 409 Conflict, item already exist in database', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/out-box-notification/create')
            .set('Accept', 'application/json')
            .send(mockData[0])
            .expect(409);
    });

    test('/REST:POST notification/out-box-notifications/paginate', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/out-box-notifications/paginate')
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
                    total: outBoxNotificationSeeder.collectionResponse.length,
                    count: outBoxNotificationSeeder.collectionResponse.length,
                    rows : outBoxNotificationSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))).slice(0, 5),
                });
            });
    });

    test('/REST:POST notification/out-box-notifications/get', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/out-box-notifications/get')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res =>
            {
                expect(res.body).toEqual(
                    outBoxNotificationSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))),
                );
            });
    });

    test('/REST:POST notification/out-box-notification/find - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/out-box-notification/find')
            .set('Accept', 'application/json')
            .send({
                query:
                {
                    where:
                    {
                        id: '4e2ee4b8-3281-51d2-9068-3e99fbf33e53',
                    },
                },
            })
            .expect(404);
    });

    test('/REST:POST notification/out-box-notification/create', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/out-box-notification/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
            })
            .expect(201);
    });

    test('/REST:POST notification/out-box-notification/find', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/out-box-notification/find')
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

    test('/REST:POST notification/out-box-notification/find/{id} - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/out-box-notification/find/cdcefe15-160f-5d6c-9f88-4d92d4ddc493')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:POST notification/out-box-notification/find/{id}', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/out-box-notification/find/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/REST:PUT notification/out-box-notification/update - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .put('/notification/out-box-notification/update')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '37274370-66b8-5690-b0bd-86e34183acea',
            })
            .expect(404);
    });

    test('/REST:PUT notification/out-box-notification/update', () =>
    {
        return request(app.getHttpServer())
            .put('/notification/out-box-notification/update')
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

    test('/REST:DELETE notification/out-box-notification/delete/{id} - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .delete('/notification/out-box-notification/delete/f697e8b6-e370-539e-96ac-775fadab764d')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:DELETE notification/out-box-notification/delete/{id}', () =>
    {
        return request(app.getHttpServer())
            .delete('/notification/out-box-notification/delete/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('/GraphQL notificationCreateOutBoxNotification - Got 409 Conflict, item already exist in database', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationCreateOutBoxNotificationInput!)
                    {
                        notificationCreateOutBoxNotification (payload:$payload)
                        {
                            id
                            sort
                            tenantId
                            accountIds
                            accountTenantOperator
                            tenantIds
                            scopes
                            isImportant
                            subject
                            body
                            attachments
                            meta
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

    test('/GraphQL notificationPaginateOutBoxNotifications', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement $constraint:QueryStatement)
                    {
                        notificationPaginateOutBoxNotifications (query:$query constraint:$constraint)
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
                expect(res.body.data.notificationPaginateOutBoxNotifications).toEqual({
                    total: outBoxNotificationSeeder.collectionResponse.length,
                    count: outBoxNotificationSeeder.collectionResponse.length,
                    rows : outBoxNotificationSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))).slice(0, 5),
                });
            });
    });

    test('/GraphQL notificationGetOutBoxNotifications', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        notificationGetOutBoxNotifications (query:$query)
                        {
                            id
                            sort
                            tenantId
                            accountIds
                            accountTenantOperator
                            tenantIds
                            scopes
                            isImportant
                            subject
                            body
                            attachments
                            meta
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
                for (const [index, value] of res.body.data.notificationGetOutBoxNotifications.entries())
                {
                    expect(outBoxNotificationSeeder.collectionResponse[index]).toEqual(expect.objectContaining(_.omit(value, ['createdAt', 'updatedAt', 'deletedAt'])));
                }
            });
    });

    test('/GraphQL notificationCreateOutBoxNotification', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationCreateOutBoxNotificationInput!)
                    {
                        notificationCreateOutBoxNotification (payload:$payload)
                        {
                            id
                            sort
                            tenantId
                            accountIds
                            accountTenantOperator
                            tenantIds
                            scopes
                            isImportant
                            subject
                            body
                            attachments
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
            .then(res =>
            {
                expect(res.body.data.notificationCreateOutBoxNotification).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationFindOutBoxNotification - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        notificationFindOutBoxNotification (query:$query)
                        {
                            id
                            sort
                            tenantId
                            accountIds
                            accountTenantOperator
                            tenantIds
                            scopes
                            isImportant
                            subject
                            body
                            attachments
                            meta
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
                            id: '3f14cecf-c6a4-516e-a9ed-e88899d599a1',
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

    test('/GraphQL notificationFindOutBoxNotification', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        notificationFindOutBoxNotification (query:$query)
                        {
                            id
                            sort
                            tenantId
                            accountIds
                            accountTenantOperator
                            tenantIds
                            scopes
                            isImportant
                            subject
                            body
                            attachments
                            meta
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
                expect(res.body.data.notificationFindOutBoxNotification.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationFindOutBoxNotificationById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        notificationFindOutBoxNotificationById (id:$id)
                        {
                            id
                            sort
                            tenantId
                            accountIds
                            accountTenantOperator
                            tenantIds
                            scopes
                            isImportant
                            subject
                            body
                            attachments
                            meta
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '3cea1186-39c4-51b9-801a-36a1ae5d8c78',
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

    test('/GraphQL notificationFindOutBoxNotificationById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        notificationFindOutBoxNotificationById (id:$id)
                        {
                            id
                            sort
                            tenantId
                            accountIds
                            accountTenantOperator
                            tenantIds
                            scopes
                            isImportant
                            subject
                            body
                            attachments
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
            .then(res =>
            {
                expect(res.body.data.notificationFindOutBoxNotificationById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationUpdateOutBoxNotificationById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationUpdateOutBoxNotificationByIdInput!)
                    {
                        notificationUpdateOutBoxNotificationById (payload:$payload)
                        {
                            id
                            sort
                            tenantId
                            accountIds
                            accountTenantOperator
                            tenantIds
                            scopes
                            isImportant
                            subject
                            body
                            attachments
                            meta
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: '1f8e445f-aa1a-5c06-a43f-efeb336d2314',
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

    test('/GraphQL notificationUpdateOutBoxNotificationById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationUpdateOutBoxNotificationByIdInput!)
                    {
                        notificationUpdateOutBoxNotificationById (payload:$payload)
                        {
                            id
                            sort
                            tenantId
                            accountIds
                            accountTenantOperator
                            tenantIds
                            scopes
                            isImportant
                            subject
                            body
                            attachments
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
            .then(res =>
            {
                expect(res.body.data.notificationUpdateOutBoxNotificationById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationUpdateOutBoxNotifications', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationUpdateOutBoxNotificationsInput! $query: QueryStatement)
                    {
                        notificationUpdateOutBoxNotifications (payload:$payload query:$query)
                        {
                            id
                            sort
                            tenantId
                            accountIds
                            accountTenantOperator
                            tenantIds
                            scopes
                            isImportant
                            subject
                            body
                            attachments
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
            .then(res =>
            {
                expect(res.body.data.notificationUpdateOutBoxNotifications[0].id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationDeleteOutBoxNotificationById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        notificationDeleteOutBoxNotificationById (id:$id)
                        {
                            id
                            sort
                            tenantId
                            accountIds
                            accountTenantOperator
                            tenantIds
                            scopes
                            isImportant
                            subject
                            body
                            attachments
                            meta
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '4b83c910-d701-5491-8fe6-d0dd436d6017',
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

    test('/GraphQL notificationDeleteOutBoxNotificationById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        notificationDeleteOutBoxNotificationById (id:$id)
                        {
                            id
                            sort
                            tenantId
                            accountIds
                            accountTenantOperator
                            tenantIds
                            scopes
                            isImportant
                            subject
                            body
                            attachments
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
            .then(res =>
            {
                expect(res.body.data.notificationDeleteOutBoxNotificationById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    afterAll(async () =>
    {
        await outBoxNotificationRepository.delete({
            queryStatement: {
                where: {},
            },
        });
        await app.close();
    });
});
