const middy = require('middy')
const sampleLogging = require('./middleware/sample-logging')

async function sampleLogger (event: any, context: any): Promise<void> {
    // just to get started you can log the event, this will cause issues
    // if you start using API gateway with binary content.
    console.log({ event })

}

export const handler = middy(sampleLogger)
    .use(sampleLogging({ sampleRate: 0.5 }))
