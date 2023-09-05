/* eslint-disable indent */
/* eslint-disable key-spacing */
import { Column, Model, Table, ForeignKey, BelongsTo, HasMany, BelongsToMany, HasOne } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { OAuthApplicationModel } from '@app/o-auth/application';
import { OAuthClientModel } from '@app/o-auth/client';

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
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
    })
    applicationId: string;

    @ForeignKey(() => OAuthClientModel)
    @Column({
        field: 'clientId',
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
    })
    clientId: string;

}
