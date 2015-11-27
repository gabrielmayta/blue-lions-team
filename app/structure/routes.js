/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

import React                       from "react";
import { Router, Route }           from "react-router";
import Home                        from "../features/home/home";
import Styles                      from "../sass/main.scss";

let Routes = (
    <Route path="/">
        <Route name="/" handler={Home}/>
    </Route>
);

export default Routes;