import { Controller, Get } from '@nestjs/common';

import AppService from 'AppService';

@Controller()
class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello() {
		return this.appService.getHello();
	}
}

export default AppController;
