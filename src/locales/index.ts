import config from '../config';
import mergeIgnoringUndefined from '../helpers/content';
console.log(config.appBrandName)
// eslint-disable-next-line @typescript-eslint/no-var-requires
export default mergeIgnoringUndefined(require('./shared'),require(`./${config.appBrandName}`))
