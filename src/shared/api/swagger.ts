import { codegen } from 'swagger-axios-codegen';

codegen({
  methodNameMode: 'operationId',
  source: require('./swagger.json'),
  useHeaderParameters: true,
  serviceNameSuffix: 'Service',
  useStaticMethod: true,
  enumNamePrefix: 'Enum',
  fileName: 'api.ts',
  outputDir: './src/shared/api',
});
