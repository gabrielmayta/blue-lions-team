/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

import React            from "react";


let Slider = React.createClass({

    getInitialState(){
        return {
            height: window.innerHeight
        }
    },

    componentDidMount() {
        var slides = new Swiper(".tab", {
            direction: "horizontal",
            allowSwipeToPrev: false,
            onSlideChangeStart: function (e) {
                this.allowSwipeToPrev = !e.isBeginning;
                this.allowSwipeToNext = !e.isEnd;
            }
        });
    },

    render() {
        var self = this;
        var players = function (player) {
            return (
                <div key={player.id} className="swiper-slide" style={{height: self.state.height}}>
                    <div className="swiper-player-overlay"></div>
                    <div className="swiper-player" style={{backgroundImage: "url("+ player.photo  + ")"}}>
                        <div className="player-box-info">
                            <div className="player-box-left">
                                <div className="player-number">{player.number}</div>
                            </div>
                            <div className="player-box-right">
                                <div className="player-fullname">
                                    {player.firstname + " " + player.lastname}
                                </div>
                                <div className="player-position">{player.position}</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        return (
            <div className="swiper-container tab">
                <div className="swiper-wrapper">
                    {this.props.data.map(players)}
                </div>
            </div>
        );
    }

});

export default Slider;