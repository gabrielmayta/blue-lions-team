/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

import React                                     from "react";
import { Router, Route, DefaultRoute }           from "react-router";
import Header                                    from "../components/header/header";
import Home                                      from "../features/home/home";
import Styles                                    from "../sass/main.scss";


let Routes = (
    <Route handler={Header} path="/">
        <DefaultRoute handler={Home}/>
    </Route>
);

export default Routes;