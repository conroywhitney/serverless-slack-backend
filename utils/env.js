export const env = process.env.NODE_ENV
export const isDevEnv = (env === 'development')
export const isTestEnv = (env === 'test')
export const isProdEnv = (env === 'production')
