import { isDevEnv } from './utils/env'

if (isDevEnv) { require('dotenv').config() }

module.exports = {}
