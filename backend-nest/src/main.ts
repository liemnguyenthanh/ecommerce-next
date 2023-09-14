import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from './configs/configuration.config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const config_service = app.get(ConfigService);
	const logger = new Logger(bootstrap.name);
	const database_env = config_service.get<DatabaseConfig>('database');
	logger.debug(database_env);
	await await app.listen(config_service.get('PORT'), () =>
		logger.log(`Application running on port ${config_service.get('PORT')}`),
	);
}
bootstrap();
