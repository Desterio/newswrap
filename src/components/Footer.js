import React from "react"

import withStyles from "@material-ui/styles/withStyles"
import { graphql, StaticQuery } from "gatsby"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import { Hidden } from "@material-ui/core"

const styles = (theme) => ({
  divider: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6)
  },
  footer: {
    marginBottom: theme.spacing(3),
    whiteSpace: `nowrap`
  }
})

const Footer = withStyles(styles)((props) => {
  const {
    classes,
    data: {
      site: {
        siteMetadata: {
          title,
          contact: { email, phone }
        }
      }
    }
  } = props

  return (
    <>
      <Divider className={classes.divider} />
      <footer className={classes.footer} id={`footer`}>
        <span>
          <Typography component={`span`} variant={`caption`}>
            ©{new Date().getFullYear()} {title} {` `}
            <Hidden only={[`xs`, `sm`]}>-</Hidden>
            <Hidden only={[`xl`, `lg`, `md`]}>
              <br />
            </Hidden>
            {email} - {phone}
            <br/>
            &middot;
            <br/>
            NewsWrap News Site {` `}
            <a href="https://twitter.com/desterio">Desterio Dennis</a>
          </Typography>
        </span>
      </footer>
    </>
  );
});

export default () => (
  <StaticQuery query={graphql`
    query {
        site {
          siteMetadata {
            title
            contact {
              email
              phone
            }
          }
        }
      }  
`}
  render={(data) => <Footer data={data} />}
  />
);

