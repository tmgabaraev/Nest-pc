import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
	supplyPower(watts: number) {
		console.log(`Supplyingh ${watts} watts of power`)
	}
}
