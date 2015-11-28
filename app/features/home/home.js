/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

import React            from "react";
import Slider           from "../../components/slider/Slider";


let Home = React.createClass({

    getInitialState(){
        return {
            data: require("../../mocks/players.json")
        }
    },

    render() {
        return (
            <Slider data={this.state.data}/>
        );
    }

});

export default Home;