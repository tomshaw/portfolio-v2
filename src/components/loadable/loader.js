// ==========================================================================
// Loadable Loader
// ==========================================================================
import PropTypes from 'prop-types'

const propTypes = {
  isLoading: PropTypes.bool,
  timedOut: PropTypes.bool,
  pastDelay: PropTypes.bool,
  error: PropTypes.bool,
}

const PageLoader = ({ isLoading, timedOut, pastDelay, error }) => {
    return null;
}

PageLoader.propTypes = propTypes

export default PageLoader
