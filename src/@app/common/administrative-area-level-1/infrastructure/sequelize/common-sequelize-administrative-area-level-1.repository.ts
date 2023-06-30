import { Injectable, LiteralObject } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AuditingRunner, ICriteria, SequelizeRepository } from '@aurorajs.dev/core';
import { CommonIAdministrativeAreaLevel1Repository } from '../../domain/common-administrative-area-level-1.repository';
import { CommonAdministrativeAreaLevel1 } from '../../domain/common-administrative-area-level-1.aggregate';
import { CommonAdministrativeAreaLevel1Mapper } from '../../domain/common-administrative-area-level-1.mapper';
import { CommonAdministrativeAreaLevel1Model } from './common-sequelize-administrative-area-level-1.model';

@Injectable()
export class CommonSequelizeAdministrativeAreaLevel1Repository extends SequelizeRepository<CommonAdministrativeAreaLevel1, CommonAdministrativeAreaLevel1Model> implements CommonIAdministrativeAreaLevel1Repository
{
    public readonly aggregateName: string = 'CommonAdministrativeAreaLevel1';
    public readonly mapper: CommonAdministrativeAreaLevel1Mapper = new CommonAdministrativeAreaLevel1Mapper();

    constructor(
        @InjectModel(CommonAdministrativeAreaLevel1Model)
        public readonly repository: typeof CommonAdministrativeAreaLevel1Model,
        public readonly criteria: ICriteria,
        public readonly auditingRunner: AuditingRunner,
    )
    {
        super();
    }
}