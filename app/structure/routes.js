/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

import React                                     from "react";
import { Router, Route, DefaultRoute }           from "react-router";
import Header                                    from "../components/header/header";
import Splashscreen                              from "../features/splashscreen/splashscreen";
import Home                                      from "../features/home/home";
import Styles                                    from "../sass/main.scss";


let Routes = (
    <Route>
        <Route handler={Splashscreen} path="/"/>
        <Route handler={Header} path="/home">
            <DefaultRoute name="home" handler={Home}/>
        </Route>
    </Route>
);

export default Routes;