import { isDevEnv } from './utils/env'

if (isDevEnv && !global._babelPolyfill) { require('babel-polyfill') }

export { default as iotKeys } from './handlers/iot_keys'
