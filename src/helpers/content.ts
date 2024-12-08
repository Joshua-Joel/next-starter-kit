import _ from 'lodash';

const mergeIgnoringUndefined = (A: unknown, B: unknown) => {
  return _.mergeWith({}, A, B, (a,b) => (b === undefined ? a : undefined))
};
export default mergeIgnoringUndefined;
