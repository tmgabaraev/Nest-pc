import { Module } from '@nestjs/common';
import { ComputerService } from './computer.service';
import { ComputerController } from './computer.controller';
import { DiskModule } from 'src/disk/disk.module';
import { CpuModule } from 'src/cpu/cpu.module';

@Module({
  imports: [DiskModule, CpuModule],
  providers: [ComputerService],
  controllers: [ComputerController],
})
export class ComputerModule {}
