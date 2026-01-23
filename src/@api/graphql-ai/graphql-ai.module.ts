import { Module } from '@nestjs/common';
import { GraphQLAIController } from './graphql-ai.controller';
import { GraphQLAIService } from './graphql-ai.service';

@Module({
  providers: [GraphQLAIService],
  controllers: [GraphQLAIController],
  exports: [GraphQLAIService],
})
export class GraphQLAIModule {}
