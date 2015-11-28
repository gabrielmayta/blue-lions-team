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
                <div className="menu-icon fa fa-bars"></div>
                <RouteHandler/>
            </div>
        );
    }

});

export default Header;