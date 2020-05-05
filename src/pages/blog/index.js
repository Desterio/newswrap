import withRoot from "../../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
import List from "../../components/List";

const BlogPage = (props) => {
  const posts = props.data.posts.edges;

  return (
    <Page title="News Articles">
      <SEO title="News Articles" />
      <List items={posts}  />
    </Page>
  );
}

export const query = graphql`
    query {
        posts: allContentfulBlogPost {
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

export default withRoot(BlogPage)
