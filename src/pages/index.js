import React from 'react'
import PropTypes from 'prop-types'

import withRoot from '../utils/withRoot'
import withStyles from '@material-ui/styles/withStyles'
import Page from '../components/Page'
import Typography from '@material-ui/core/Typography'

const styles = () => ({
  root: {
    fontWeight: `bold`
  }
})

const Home = (props) => {
  return (
    <Page title={`NewsWrap`}>
      <h1>Home</h1>
    </Page>
  )
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default  withRoot(withStyles(styles)(Home));
