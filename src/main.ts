import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	// app.setGlobalPrefix('v1');

	const options = new DocumentBuilder()
		.setTitle('DexWallet Signer docs')
		.setDescription('')
		.setVersion('0.1')
		.addTag('erc20')
		.build();

	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('/api', app, document);
	await app.listen(3000);
}
bootstrap();
