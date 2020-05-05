import React from 'react'

import Page from '../components/Page'
import withRoot from '../utils/withRoot'
import Typography from '@material-ui/core/Typography'

const Component = () => {
  return (
    <Page title="Not Found">
      <Typography component={`p`} variant={`h6`} style={{ textAlign: `center` }}>
        Hey! You just hit a page that doesn't exist...
      </Typography>
    </Page>
  );
}

export default withRoot(Component)
