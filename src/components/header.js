import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import netlifyIdentity from "netlify-identity-widget";

// import gatsbyLogo from "../images/gatsby-icon.png";
import "./header.scss";

const isActive = ({ isCurrent }) => {
  return { className: isCurrent ? "active" : "navlink" };
};
const NavLink = props => <Link getProps={isActive} {...props} />;

class Header extends React.Component {
  componentDidMount() {
    netlifyIdentity.init();
  }
  // TODO: updated netlify identity UI
  render() {
    const { siteTitle } = this.props;
    return (
      <header>
        <div className="headerContent">
          {/* title/ logo */}
          {/* <span>
            <img src={gatsbyLogo} alt="gatsby garb logo" />
            <h1>
              <NavLink to="/">{siteTitle}</NavLink>
            </h1>
          </span> */}
          <NavLink to="/" id="logo">
            <span className="logo-box">
              <span className="logo-initial">N</span>
            </span>
            <span className="logo-text" data-links>
              {siteTitle}
            </span>
          </NavLink>

          <NavLink to="/about" data-links>
            About
          </NavLink>
          <NavLink to="/blog" data-links>
            Blog
          </NavLink>
          <NavLink to="/portfolio" data-links>
            Portfolio
          </NavLink>
          <NavLink to="/cv" data-links>
            CV
          </NavLink>
          {/* <NavLink to="/products">Store</NavLink> */}

          {/* <div data-netlify-identity-menu /> */}
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};
export default Header;
