import {
    SupportConfig,
    SupportConfigMapper,
    SupportConfigModel,
    SupportIConfigRepository,
} from '@app/support/config';
import {
    AuditingRunner,
    ICriteria,
    SequelizeRepository,
} from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class SupportSequelizeConfigRepository
    extends SequelizeRepository<SupportConfig, SupportConfigModel>
    implements SupportIConfigRepository
{
    public readonly aggregateName: string = 'SupportConfig';
    public readonly mapper: SupportConfigMapper = new SupportConfigMapper();

    constructor(
        @InjectModel(SupportConfigModel)
        public readonly repository: typeof SupportConfigModel,
        public readonly criteria: ICriteria,
        public readonly auditingRunner: AuditingRunner,
    ) {
        super();
    }
}
