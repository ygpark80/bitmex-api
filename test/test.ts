import { suite, test } from '@testdeck/jest'
import { BitmexAPI } from '../src'

@suite
class TestSuite {

    @test
    async someTest() {
        const api = new BitmexAPI({ testnet: false })
        const indices = await api.Chat.getChannels()
        console.log(indices)
        expect(indices.length).toBeGreaterThan(0)
	}
	
}
