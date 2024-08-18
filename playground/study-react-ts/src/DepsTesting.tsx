// The following imports are used to test dependency pre-bundling.
import add from 'lodash-es/add'
import ceil from 'lodash-es/ceil'
import delay from 'lodash-es/delay'
import every from 'lodash-es/every'
import first from 'lodash-es/first'
import gte from 'lodash-es/gte'

export function DepsTesting() {
  return <div>
    <h2>Dependencies Testing</h2>
    <ul>
      <li>add: {String(add)}</li>
      <li>ceil: {String(ceil)}</li>
      <li>delay: {String(delay)}</li>
      <li>every: {String(every)}</li>
      <li>first: {String(first)}</li>
      <li>gte: {String(gte)}</li>
      {/* Note: if the usage of imported stuff is commented out, their corresponding imports will be removed automatically. */}
    </ul>
  </div>
}

export default DepsTesting
