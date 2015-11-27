/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

import React            from "react";
import { RouteHandler } from "react-router";


let Header = React.createClass({

    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav className="light-blue darken-4">
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo">Logo</a>
                            <a href="#" className="button-collapse">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul className="right hide-on-med-and-down">
                                <li>
                                    <a href="#">Rosa 2015/2016</a>
                                </li>
                                <li>

                                    <a href="#">Punto Sangatti</a>
                                </li>
                                <li>
                                    <a href="#">Arruolati</a>
                                </li>
                            </ul>
                            <ul className="side-nav">
                                <li>
                                    <a href="#">Rosa 2015/2016</a>
                                </li>
                                <li>
                                    <a href="#">Punto Sangatti</a>
                                </li>
                                <li>
                                    <a href="#">Arruolati</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <RouteHandler/>
            </div>
        );
    }

});

export default Header;