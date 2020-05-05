import React from 'react'
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/styles/withStyles'

const styles = {
  cardMedia: {
    height: `200px`
  }
}

const List = (props) => {
  const { classes } = props

  return (
    <Grid alignItems={`flex-start`} container direction={`row`} justify={`center`} spacing={8}>
      {
        props.items.map(({ node }) => {
          const {
              title,
              slug,
              excerpt: {
                excerpt
              }, featuredImage: {
                file: {url}
              }
          } = node;

          return (
            <Grid item key={slug} md={6} xs={12}>
              <Card>
                <CardMedia className={classes.cardMedia} image={url}/>
                <CardContent>
                  <Typography component={`h2`} gutterBottom variant={`h5`}>
                    <Link to={slug}>{title}</Link>
                  </Typography>
                  <Typography component={`p`}>
                    {excerpt}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default withStyles(styles)(List)