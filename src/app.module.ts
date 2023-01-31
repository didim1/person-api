import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsModule } from './persons/persons.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PersonsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
