/* eslint-disable indent */
/* eslint-disable key-spacing */
import { OAuthApplicationModel } from '@app/o-auth/application';
import { OAuthClientModel } from '@app/o-auth/client';
import { DataTypes } from 'sequelize';
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';

@Table({
    modelName: 'OAuthApplicationClient',
    freezeTableName: true,
    timestamps: false,
})
export class OAuthApplicationClientModel extends Model<OAuthApplicationClientModel>
{
    @ForeignKey(() => OAuthApplicationModel)
    @Column({
        field: 'applicationId',
        type: DataTypes.UUID,
    })
    applicationId: string;

    @ForeignKey(() => OAuthClientModel)
    @Column({
        field: 'clientId',
        type: DataTypes.UUID,
    })
    clientId: string;
}