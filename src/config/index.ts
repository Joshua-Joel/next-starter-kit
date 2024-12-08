/* eslint-disable @typescript-eslint/no-var-requires */
const env = process.env.APP_ENV || 'local';
import mergeIgnoringUndefined from '@/helpers/content';

const config = mergeIgnoringUndefined(
  require('./defaults'),
  env !== 'development' ? require(`./${env}`) : require('./local')
);

export default config;
