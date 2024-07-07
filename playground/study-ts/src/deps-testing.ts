// The following imports are used to test dependency pre-bundling.
import { nanoid } from 'nanoid' // `"type": "module"` package without any additional dependencies.

import zip from 'lodash-es/zip' // Importing a specific module from a package.
import { debounce } from 'lodash-es' // Importing from a entry point of a package.

// import missing from '@dev/null' // Importing a missing package.
// console.log(missing)

// Prevents dead code elimination from removing the imports.
console.log(nanoid)
console.log(zip)
console.log(debounce)
