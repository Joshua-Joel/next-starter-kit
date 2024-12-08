/* eslint-disable @typescript-eslint/no-var-requires */
const env = process.env.APP_ENV || 'local';
const mergeIgnoringUndefined = (A, B) => {
  return _.mergeWith({}, A, B, (a,b) => (b === undefined ? a : undefined))
};

const config = mergeIgnoringUndefined(
  require('./defaults'),
  env !== 'development' ? require(`./${env}`) : require('./local')
);

export default config;
