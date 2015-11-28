/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

import React            from "react";


let Splashscreen = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    componentDidMount() {
        var self = this;
        setTimeout(function () {
            self.context.router.transitionTo("home");
        }, 4000);
    },

    render() {
        return (
            <div className="splashscreen">
                <h1>Blue Lions Team</h1>
                <div className="spinner"></div>
            </div>
        );
    }

});

export default Splashscreen;