const os = require('os')
const logger = require('pino')()
const config = require('./config')
const app = require('fastify')({ logger })


app.get('*', async (req, reply) => ({ env: process.env.NODE_ENV }))

app.listen(config.port, err => {

    if(err) {
        logger.error(err.message)
        process.exit(1)
    }

    logger.info(`Server started on port ${config.port} and env ${process.env.NODE_ENV}`)
})