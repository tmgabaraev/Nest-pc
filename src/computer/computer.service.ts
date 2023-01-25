import { Injectable } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Injectable()
export class ComputerService {
	constructor(
		private diskService: DiskService,
		private cpuService: CpuService
		) {}

	run() {
		console.log('starting Computer');
		return [
			this.diskService.getData(),
			this.cpuService.compute(3, 5)];
	}
}
