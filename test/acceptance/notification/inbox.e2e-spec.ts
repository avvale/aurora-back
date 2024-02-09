/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable key-spacing */
import { TenantPolicy } from '@api/iam/shared';
import { AuthorizationPermissionsGuard } from '@api/iam/shared/guards/authorization-permissions.guard';
import { NotificationModule } from '@api/notification/notification.module';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { IamAccountResponse } from '@app/iam/account';
import { NotificationIInboxRepository, notificationMockInboxData, NotificationMockInboxSeeder } from '@app/notification/inbox';
import { GraphQLConfigModule } from '@aurora/graphql/graphql-config.module';
import { CurrentAccount } from '@aurorajs.dev/core';
import { INestApplication } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import * as _ from 'lodash';
import * as request from 'supertest';

// disable import foreign modules, can be micro-services
const importForeignModules = [];

describe('inbox', () =>
{
    let app: INestApplication;
    let inboxRepository: NotificationIInboxRepository;
    let inboxSeeder: NotificationMockInboxSeeder;

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
                NotificationMockInboxSeeder,
            ],
        })
            .overrideGuard(AuthenticationJwtGuard)
            .useValue({ canActivate: () => true })
            .overrideGuard(AuthorizationPermissionsGuard)
            .useValue({ canActivate: () => true })
            .compile();

        mockData = notificationMockInboxData;
        app = module.createNestApplication();
        inboxRepository = module.get<NotificationIInboxRepository>(NotificationIInboxRepository);
        inboxSeeder = module.get<NotificationMockInboxSeeder>(NotificationMockInboxSeeder);

        // seed mock data in memory database
        await inboxRepository.insert(inboxSeeder.collectionSource);

        await app.init();
    });

    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxId property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxId must be defined, can not be null');
            });
    });

    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxNotificationId property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                notificationId: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxNotificationId must be defined, can not be null');
            });
    });

    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxSort property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                sort: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxSort must be defined, can not be null');
            });
    });

    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxAccountId property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                accountId: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxAccountId must be defined, can not be null');
            });
    });

    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxIsImportant property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                isImportant: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxIsImportant must be defined, can not be null');
            });
    });

    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxSubject property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                subject: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxSubject must be defined, can not be null');
            });
    });

    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxBody property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                body: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxBody must be defined, can not be null');
            });
    });

    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxIsRead property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                isRead: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxIsRead must be defined, can not be null');
            });
    });

    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxIsReadAtLeastOnce property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                isReadAtLeastOnce: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxIsReadAtLeastOnce must be defined, can not be null');
            });
    });

    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxId property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxId must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxNotificationId property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                notificationId: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxNotificationId must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxSort property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                sort: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxSort must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxAccountId property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                accountId: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxAccountId must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxIsImportant property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                isImportant: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxIsImportant must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxSubject property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                subject: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxSubject must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxBody property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                body: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxBody must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxIsRead property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                isRead: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxIsRead must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxIsReadAtLeastOnce property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                isReadAtLeastOnce: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxIsReadAtLeastOnce must be defined, can not be undefined');
            });
    });

    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxId is not allowed, must be a length of 36', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '*************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxId is not allowed, must be a length of 36');
            });
    });

    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxNotificationId is not allowed, must be a length of 36', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                notificationId: '*************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxNotificationId is not allowed, must be a length of 36');
            });
    });

    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxAccountId is not allowed, must be a length of 36', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                accountId: '*************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxAccountId is not allowed, must be a length of 36');
            });
    });

    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxAccountCode is not allowed, must be a length of 127', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                accountCode: '*',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxAccountCode is not allowed, must be a length of 127');
            });
    });

    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxSubject is too large, has a maximum length of 255', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                subject: '****************************************************************************************************************************************************************************************************************************************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxSubject is too large, has a maximum length of 255');
            });
    });

    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxSort has to be a integer value', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                sort: 100.10,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxSort has to be a integer value');
            });
    });
    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxIsImportant has to be a boolean value', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                isImportant: 'true',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxIsImportant has to be a boolean value');
            });
    });
    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxIsRead has to be a boolean value', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                isRead: 'true',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxIsRead has to be a boolean value');
            });
    });
    test('/REST:POST notification/inbox/create - Got 400 Conflict, InboxIsReadAtLeastOnce has to be a boolean value', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                isReadAtLeastOnce: 'true',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for NotificationInboxIsReadAtLeastOnce has to be a boolean value');
            });
    });

    test('/REST:POST notification/inbox/create - Got 409 Conflict, item already exist in database', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send(mockData[0])
            .expect(409);
    });

    test('/REST:POST notification/inboxes/paginate', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inboxes/paginate')
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
                    total: inboxSeeder.collectionResponse.length,
                    count: inboxSeeder.collectionResponse.length,
                    rows : inboxSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))).slice(0, 5),
                });
            });
    });

    test('/REST:POST notification/inboxes/get', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inboxes/get')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res =>
            {
                expect(res.body).toEqual(
                    inboxSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))),
                );
            });
    });

    test('/REST:POST notification/inbox/find - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/find')
            .set('Accept', 'application/json')
            .send({
                query:
                {
                    where:
                    {
                        id: '4bd60567-92f7-58a6-9fc9-d19b70b58a68',
                    },
                },
            })
            .expect(404);
    });

    test('/REST:POST notification/inbox/create', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
            })
            .expect(201);
    });

    test('/REST:POST notification/inbox/find', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/find')
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

    test('/REST:POST notification/inbox/find/{id} - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/find/71a6aae3-6700-5d9e-b2bc-72fc662d3c8b')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:POST notification/inbox/find/{id}', () =>
    {
        return request(app.getHttpServer())
            .post('/notification/inbox/find/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/REST:PUT notification/inbox/update - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .put('/notification/inbox/update')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '1c165fd0-4882-51fb-9f54-cd7e7e471fbb',
            })
            .expect(404);
    });

    test('/REST:PUT notification/inbox/update', () =>
    {
        return request(app.getHttpServer())
            .put('/notification/inbox/update')
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

    test('/REST:DELETE notification/inbox/delete/{id} - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .delete('/notification/inbox/delete/5d54ddd5-9db4-575f-a05b-55a4f5f609c2')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:DELETE notification/inbox/delete/{id}', () =>
    {
        return request(app.getHttpServer())
            .delete('/notification/inbox/delete/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('/GraphQL notificationCreateInbox - Got 409 Conflict, item already exist in database', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationCreateInboxInput!)
                    {
                        notificationCreateInbox (payload:$payload)
                        {
                            id
                            tenantIds
                            notificationId
                            sort
                            accountId
                            accountCode
                            isImportant
                            subject
                            body
                            attachments
                            isRead
                            isReadAtLeastOnce
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

    test('/GraphQL notificationPaginateInboxes', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement $constraint:QueryStatement)
                    {
                        notificationPaginateInboxes (query:$query constraint:$constraint)
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
                expect(res.body.data.notificationPaginateInboxes).toEqual({
                    total: inboxSeeder.collectionResponse.length,
                    count: inboxSeeder.collectionResponse.length,
                    rows : inboxSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))).slice(0, 5),
                });
            });
    });

    test('/GraphQL notificationGetInboxes', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        notificationGetInboxes (query:$query)
                        {
                            id
                            tenantIds
                            sort
                            accountId
                            accountCode
                            isImportant
                            subject
                            body
                            attachments
                            isRead
                            isReadAtLeastOnce
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
                for (const [index, value] of res.body.data.notificationGetInboxes.entries())
                {
                    expect(inboxSeeder.collectionResponse[index]).toEqual(expect.objectContaining(_.omit(value, ['createdAt', 'updatedAt', 'deletedAt'])));
                }
            });
    });

    test('/GraphQL notificationCreateInbox', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationCreateInboxInput!)
                    {
                        notificationCreateInbox (payload:$payload)
                        {
                            id
                            tenantIds
                            notificationId
                            sort
                            accountId
                            accountCode
                            isImportant
                            subject
                            body
                            attachments
                            isRead
                            isReadAtLeastOnce
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
                expect(res.body.data.notificationCreateInbox).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationFindInbox - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        notificationFindInbox (query:$query)
                        {
                            id
                            tenantIds
                            sort
                            accountId
                            accountCode
                            isImportant
                            subject
                            body
                            attachments
                            isRead
                            isReadAtLeastOnce
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
                            id: '8fd53420-6f01-509d-9895-02892d229b33',
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

    test('/GraphQL notificationFindInbox', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        notificationFindInbox (query:$query)
                        {
                            id
                            tenantIds
                            sort
                            accountId
                            accountCode
                            isImportant
                            subject
                            body
                            attachments
                            isRead
                            isReadAtLeastOnce
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
                expect(res.body.data.notificationFindInbox.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationFindInboxById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        notificationFindInboxById (id:$id)
                        {
                            id
                            tenantIds
                            sort
                            accountId
                            accountCode
                            isImportant
                            subject
                            body
                            attachments
                            isRead
                            isReadAtLeastOnce
                            meta
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '9df9d84b-8cd7-5c64-ab1f-d613b2c796e3',
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

    test('/GraphQL notificationFindInboxById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        notificationFindInboxById (id:$id)
                        {
                            id
                            tenantIds
                            sort
                            accountId
                            accountCode
                            isImportant
                            subject
                            body
                            attachments
                            isRead
                            isReadAtLeastOnce
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
                expect(res.body.data.notificationFindInboxById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationUpdateInboxById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationUpdateInboxByIdInput!)
                    {
                        notificationUpdateInboxById (payload:$payload)
                        {
                            id
                            tenantIds
                            sort
                            accountId
                            accountCode
                            isImportant
                            subject
                            body
                            attachments
                            isRead
                            isReadAtLeastOnce
                            meta
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: '0eed9f8b-ffd8-5069-ac35-977ff7f41b52',
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

    test('/GraphQL notificationUpdateInboxById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationUpdateInboxByIdInput!)
                    {
                        notificationUpdateInboxById (payload:$payload)
                        {
                            id
                            tenantIds
                            sort
                            accountId
                            accountCode
                            isImportant
                            subject
                            body
                            attachments
                            isRead
                            isReadAtLeastOnce
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
                expect(res.body.data.notificationUpdateInboxById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationUpdateInboxes', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:NotificationUpdateInboxesInput! $query: QueryStatement)
                    {
                        notificationUpdateInboxes (payload:$payload query:$query)
                        {
                            id
                            tenantIds
                            sort
                            accountId
                            accountCode
                            isImportant
                            subject
                            body
                            attachments
                            isRead
                            isReadAtLeastOnce
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
                expect(res.body.data.notificationUpdateInboxes[0].id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL notificationDeleteInboxById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        notificationDeleteInboxById (id:$id)
                        {
                            id
                            tenantIds
                            sort
                            accountId
                            accountCode
                            isImportant
                            subject
                            body
                            attachments
                            isRead
                            isReadAtLeastOnce
                            meta
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: 'acbfd5ca-b5ab-5fb3-844f-fa8070447008',
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

    test('/GraphQL notificationDeleteInboxById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        notificationDeleteInboxById (id:$id)
                        {
                            id
                            tenantIds
                            sort
                            accountId
                            accountCode
                            isImportant
                            subject
                            body
                            attachments
                            isRead
                            isReadAtLeastOnce
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
                expect(res.body.data.notificationDeleteInboxById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    afterAll(async () =>
    {
        await inboxRepository.delete({
            queryStatement: {
                where: {},
            },
        });
        await app.close();
    });
});
