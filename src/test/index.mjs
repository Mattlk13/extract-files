import testDirector from 'test-director'
import ReactNativeFile from './lib/ReactNativeFile.test.mjs'
import extractFiles from './lib/extractFiles.test.mjs'
import isExtractableFile from './lib/isExtractableFile.test.mjs'

const tests = new testDirector.TestDirector()

ReactNativeFile(tests)
extractFiles(tests)
isExtractableFile(tests)

tests.run()
