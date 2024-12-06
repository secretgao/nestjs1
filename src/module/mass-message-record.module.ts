import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MassMessageRecordService } from '../service/masss-message-record.service';
import { BMassMessageRecordController } from '../backend/bmass-message-record.controller';
import { fMassMessageRecordController } from '../frontend/fmass-message-record.controller';
import { MassMessageRecord } from '../entity/mass-message-record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MassMessageRecord])],
  providers: [MassMessageRecordService],
  controllers: [fMassMessageRecordController,BMassMessageRecordController],
})
export class MassMessageRecordModules {}