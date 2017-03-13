import { isDevEnv } from './env'

export function error (...message) {
  console.log('!!ERROR!!', message)
}

export function warn (...message) {
  console.log('!WARNING!', message)
}

export function info (...message) {
  console.log('INFO', message)
}

export function debug (...message) {
  if (!isDevEnv) { return }

  console.log(message)
}

export default {
  error: error,
  warn: warn,
  info: info,
  debug: debug
}
