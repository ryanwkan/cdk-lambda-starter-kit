import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert'
import * as cdk from '@aws-cdk/core'
import * as TempoDataWorkshop from '../lib/tempo_data_workshop-stack'

test('Empty Stack', () => {
    const app = new cdk.App()

    const stack = new TempoDataWorkshop.TempoDataWorkshopStack(app, 'MyTestStack')

    expectCDK(stack).to(matchTemplate({
        'Resources': {}
    }, MatchStyle.EXACT))
})
