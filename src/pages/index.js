import React from 'react'
import PropTypes from 'prop-types'

import withRoot from '../utils/withRoot'
import withStyles from '@material-ui/styles/withStyles'
import Page from '../components/Page'
import SEO from '../components/SEO'
// import Typography from '@material-ui/core/Typography'
import { graphql , Link} from 'gatsby'
import Card from '../components/Card'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import { Gift } from "mdi-material-ui";
import Carousel from '../components/Carousel'

const styles = () => ({
  root: {
    fontWeight: `bold`
  }
})

const Home = (props) => {
  const posts = props.data.posts.edges;
  return (
    <Page title={`NewsWrap`}>
      <SEO title="Home">
        <meta
          content="A site for aggregating news..."
          name="description"
        />
      </SEO>

      <Card
      action={
        <Button
        className={props.classes.root}
        color={`primary`}
        component={Link}
        variant={`contained`}
        to={`/blog`}
        >View All Our News Articles</Button>
      }
      style={{ minHeight: 600 }} >
        <Carousel items={posts} />
      </Card>
    </Page>
  )
};

export const query = graphql`
    query {
        posts: allContentfulBlogPost(limit: 5) {
            edges {
                node {
                    title
                    slug
                    publishedDate(formatString: "MMMM Do, YYYY")
                    featuredImage {
                        file {
                            url
                        }
                    }
                    tags
                    excerpt {
                        excerpt
                    }
                }
            }
        }
    }
`

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default  withRoot(withStyles(styles)(Home));
