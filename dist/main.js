"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const global_validation_pipe_1 = require("./common/pipes/global-validation.pipe");
const http_exception_filter_1 = require("./common/filters/http-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new global_validation_pipe_1.GlobalValidationPipe());
    app.useGlobalFilters(new http_exception_filter_1.AllExceptionsFilter());
    await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map