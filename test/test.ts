import { suite, test } from '@testdeck/jest'

@suite
class TestSuite {

    @test
    someTest() {
        expect(false).toBe(true)
	}
	
}
