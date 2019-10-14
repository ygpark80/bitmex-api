import { suite, test } from '@testdeck/jest'
import { BitmexAPI } from '../src'

@suite
class TestSuite {

	@test
	async someTest() {
		const api = new BitmexAPI({ testnet: false })
		const channels = await api.Chat.getChannels()
		// tslint:disable-next-line: no-console
		console.log(channels)
		expect(channels.length).toBeGreaterThan(0)
	}

}
