import { Disclosure } from '@headlessui/react'
import { Suspense } from 'react'

export default function Repro() {
  return (
    <div>
      <p>This is a reproduction</p>
      <Disclosure defaultOpen={true}>
        <Disclosure.Button>Click me!</Disclosure.Button>
        <Disclosure.Panel>
          <Suspense fallback={null}>
            <p>Hi there</p>
          </Suspense>
        </Disclosure.Panel>
      </Disclosure>
    </div>
  )
}
