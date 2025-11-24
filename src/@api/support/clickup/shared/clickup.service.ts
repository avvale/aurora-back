import { ClickupFolder, ClickupList, ClickupSpace } from '@api/graphql';
import { Str } from '@aurorajs.dev/core';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class ClickupService {
    apiUrl = 'https://api.clickup.com';

    // spaces
    apiGetSpaces = '/api/v2/team/:teamId/space';

    // folders
    apiGetFolders = '/api/v2/space/:spaceId/folder';

    // lists
    apiGetLists = '/api/v2/folder/:folderId/list';

    // tasks
    apiCreateTask = '/api/v2/list/:listId/task';
    apiGetTask = '/api/v2/task/:taskId';
    apiUpdateTask = '/api/v2/task/:taskId';

    // comments
    apiCreateComment = '/api/v2/task/:taskId/comment';

    constructor(private readonly httpService: HttpService) {}

    getSpaces(
        teamId: string,
        options: { authorization: string },
    ): Observable<ClickupSpace[]> {
        return this.httpService
            .get<{ spaces: ClickupSpace[] }>(
                `${this.apiUrl}${Str.replaceParams(this.apiGetSpaces, { teamId })}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: options.authorization,
                    },
                },
            )
            .pipe(map((response) => response.data.spaces));
    }

    getFolders(
        spaceId: string,
        options: { authorization: string },
    ): Observable<ClickupFolder[]> {
        return this.httpService
            .get<{ folders: ClickupFolder[] }>(
                `${this.apiUrl}${Str.replaceParams(this.apiGetFolders, { spaceId })}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: options.authorization,
                    },
                },
            )
            .pipe(map((response) => response.data.folders));
    }

    getLists(
        folderId: string,
        options: { authorization: string },
    ): Observable<ClickupList[]> {
        return this.httpService
            .get<{ lists: ClickupList[] }>(
                `${this.apiUrl}${Str.replaceParams(this.apiGetLists, { folderId })}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: options.authorization,
                    },
                },
            )
            .pipe(map((response) => response.data.lists));
    }

    createTask(
        listId: string,
        task: {
            name: string;
            description?: string;
            status?: string;
            priority?: number;
        },
        options: { authorization: string },
    ): Observable<any> {
        return this.httpService
            .post(
                `${this.apiUrl}${Str.replaceParams(this.apiCreateTask, { listId })}`,
                {
                    ...task,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: options.authorization,
                    },
                },
            )
            .pipe(map((response) => response.data));
    }

    updateTask(
        taskId: string,
        task: {
            name?: string;
            description?: string;
            status?: string;
            priority?: number;
        },
        options: { authorization: string },
    ): Observable<any> {
        return this.httpService.put(
            `${this.apiUrl}${Str.replaceParams(this.apiUpdateTask, { taskId })}`,
            {
                ...task,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: options.authorization,
                },
            },
        );
    }
}
