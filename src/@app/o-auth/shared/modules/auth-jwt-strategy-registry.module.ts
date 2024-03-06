import { DynamicModule, Module } from '@nestjs/common';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { CqrsConfigModule } from '@aurora/modules';
import { JwtStrategy } from '../strategies/jwt.strategy';

@Module({
    imports: [
        CqrsConfigModule,
        PassportModule,
    ],
    providers: [
        JwtStrategy,
    ],
    exports: [
        JwtModule,
    ],
})
export class AuthJwtStrategyRegistryModule
{
    static forRoot(jwtOptions: JwtModuleOptions): DynamicModule
    {
        return {
            module : AuthJwtStrategyRegistryModule,
            imports: [
                JwtModule.register(jwtOptions),
            ],
        };
    }
}