/**
 * Validates common environmental variables
 *
 * @remarks
 * -
 *
 */
(() => {
    'use strict'

    require('dotenv').config()

    const joi = require('@hapi/joi')

    const envVarsSchema = joi.object({
        DEBUG: joi.boolean()
            .truthy('TRUE')
            .truthy('true')
            .falsy('FALSE')
            .falsy('false')
            .default(true)
    }).unknown()

    const { error, value: envVars } = envVarsSchema.validate(process.env)

    if (error) {
        throw new Error(`Config validation error: ${error.message}`)
    }

    const common = {
        common: {
            DEBUG: envVars.DEBUG
        }
    }

    module.exports = common

})()
