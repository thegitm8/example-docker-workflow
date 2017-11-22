const getEnvOr = (env, defaultValue) => process.env[env] || defaultValue
const getRequiredEnv = env => process.env[env] || failOnMissingEnv(env)
const failOnMissingEnv = env => {
    throw new Error(`Required environment variable [${env}] is missing.`)
}

module.exports = {
    port: getEnvOr('BANK_MONITOR_PORT', 9002)
}