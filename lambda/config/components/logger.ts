/**
 * Validates logger environmental variables
 *
 * @remarks
 * -
 *
 */
(() => {
    'use strict'

    require('dotenv').config()

    const joi = require('@hapi/joi')

    const levels = ['ERROR', 'WARN', 'INFO', 'DEBUG']

    const envVarsSchema = joi.object({
        LOG_LEVEL: joi.string()
            .valid(...levels)
            .default('INFO'),
        logger_enabled: joi.boolean()
            .truthy('TRUE')
            .truthy('true')
            .falsy('FALSE')
            .falsy('false')
            .default(true)
    }).unknown()
        .required()

    const { error, value: envVars } = envVarsSchema.validate(process.env)

    if (error) {
        throw new Error(`Config validation error: ${error.message}`)
    }

    const config = {
        logger: {
            LOG_LEVEL: envVars.LOG_LEVEL
        }
    }

    module.exports = config

})()
