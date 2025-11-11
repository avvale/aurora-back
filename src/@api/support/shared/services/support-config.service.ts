import {
    ToolsGetKeyValuesQuery,
    ToolsKeyValueResponse,
} from '@app/tools/key-value';
import { ICommandBus, IQueryBus, Operator } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import {
    SUPPORT_TASK_PLATFORM_API_KEY,
    SUPPORT_TASK_PLATFORM_LIST_ID,
} from './support.constants';

@Injectable()
export class SupportConfigService {
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async onApplicationBootstrap(): Promise<void> {
        const supportConfigValues = await this.queryBus.ask<
            ToolsGetKeyValuesQuery,
            ToolsKeyValueResponse[]
        >(
            new ToolsGetKeyValuesQuery({
                where: {
                    key: {
                        [Operator.or]: [
                            SUPPORT_TASK_PLATFORM_API_KEY,
                            SUPPORT_TASK_PLATFORM_LIST_ID,
                        ],
                    },
                },
            }),
        );
        /*
        if (
            !supportConfigValues.find(
                (value) =>
                    value.key ===
                    (SupportConfigKey.SUPPORT_TASK_PLATFORM_API_KEY as unknown as typeof value.key),
            )
        ) {
            await this.commandBus.dispatch(
                new ToolsCreateKeyValueCommand({
                    id: uuid(),
                    key: SupportConfigKey.SUPPORT_TASK_PLATFORM_API_KEY as string,
                    type: ToolsKeyValueType.STRING,
                    value: '<API_KEY>',
                    isActive: true,
                    description: 'API key for the support task platform',
                }),
            );
        }

        if (
            !supportConfigValues.find(
                (value) =>
                    value.key ===
                    (SupportConfigKey.SUPPORT_TASK_PLATFORM_LIST_ID as unknown as typeof value.key),
            )
        ) {
            await this.commandBus.dispatch(
                new ToolsCreateKeyValueCommand({
                    id: uuid(),
                    key: SupportConfigKey.SUPPORT_TASK_PLATFORM_LIST_ID as string,
                    type: ToolsKeyValueType.STRING,
                    value: '<LIST_ID>',
                    isActive: true,
                    description: 'List ID for the support task platform',
                }),
            );
        }*/
    }
}
