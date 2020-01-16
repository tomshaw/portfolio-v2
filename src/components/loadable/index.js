import Loadable from 'react-loadable'
import PageLoader from './loader'

export default function LoadableComponent(opts) {
  return Loadable(
    Object.assign(
      {
        loading: PageLoader,
        delay: 200,
      },
      opts
    )
  )
}