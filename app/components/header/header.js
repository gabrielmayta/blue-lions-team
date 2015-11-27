/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

import React            from "react";


let Header = React.createClass({

    render() {
        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo">Logo</a>
                        <a href="#" data-activates="mobile-demo" className="button-collapse">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <a href="sass.html">Sass</a>
                            </li>
                            <li>
                                <a href="badges.html">Components</a>
                            </li>
                            <li>
                                <a href="collapsible.html">Javascript</a>
                            </li>
                            <li>
                                <a href="mobile.html">Mobile</a>
                            </li>
                        </ul>
                        <ul className="side-nav" id="mobile-demo">
                            <li>
                                <a href="sass.html">Sass</a>
                            </li>
                            <li>
                                <a href="badges.html">Components</a>
                            </li>
                            <li>
                                <a href="collapsible.html">Javascript</a>
                            </li>
                            <li>
                                <a href="mobile.html">Mobile</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }

});

export default Header;