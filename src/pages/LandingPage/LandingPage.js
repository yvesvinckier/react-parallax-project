import React, { Component } from "react";
import { TweenMax } from 'TweenMax';
import ScrollMagic from 'scrollmagic';
import 'animation.gsap';
import 'debug.addIndicators';

class LandingPage extends Component {
    componentDidMount() {
        // const box = document.getElementById('box');
        // TweenMax.to( box, 5, { left: 1000 });
        // const controller = new ScrollMagic.controller();
        // == Init Controller in ScrollMagic
        const controller = new ScrollMagic.Controller();

        // == Init Scene01 in ScrollMagic
        const pinScene01 = new ScrollMagic.Scene({
            triggerElement: '#slide01',
            triggerHook: 0,
            duration: '100%'
        })
        .setPin('#slide01 .pin-wrapper')
        .addIndicators()
        .addTo(controller)

        // == Init Scene02 in ScrollMagic
        const pinScene02 = new ScrollMagic.Scene({
            triggerElement: '#slide01',
            triggerHook: 0,
            duration: '200%'
        })
        .setPin('#slide02 .pin-wrapper')
        .addIndicators()
        .addTo(controller)

        // == Init Scene03 in ScrollMagic
        const pinScene03 = new ScrollMagic.Scene({
            triggerElement: "#slide02",
            triggerHook: 0,
            duration: '200%'
        })
        .setPin("#slide03 .pin-wrapper")
        .addIndicators()
        .addTo(controller)

        // == Init Scene03 in ScrollMagic
        const pinScene04 = new ScrollMagic.Scene({
            triggerElement: "#slide03",
            triggerHook: 0,
            duration: '200%'
        })
        .setPin("#slide04 .pin-wrapper")
        .addIndicators()
        .addTo(controller)

    }
    render() {
        return(
            <div>
                {/* <div id="box" style={{ position: "absolute", top: 0, left: 0, height: 100, width: 100, background: "#4c4c4c", zIndex: 3}} /> */}
                <div id="main" className="main-container">
                    <article id="slide00" className="slide">
                        <div className="wrapper">
                            <h1>INTRODUCTION</h1>
                            <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
                        </div> 
                    </article>

                    <article id="slide01" className="slide">
                        <div className="pin-wrapper">
                            <div className="img"></div>
                            <div className="wrapper">
                                <h1>TITLE ONE</h1>
                                <p>Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas.</p>
                            </div>
                        </div>
                    </article>

                    <article id="slide02" className="slide">
                        <div className="pin-wrapper">
                            <div className="img"></div>
                            <div className="wrapper">
                                <h1>TITLE TWO</h1>
                                <p>Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus.</p>
                            </div>
                        </div>
                    </article>

                    <article id="slide03" className="slide">
                        <div className="pin-wrapper">
                            <div className="img"></div>
                            <div className="wrapper">
                                <h1>TITLE THREE</h1>
                                <p>Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in.</p>
                            </div>
                        </div>
                    </article>

                    <article id="slide04" className="slide">
                        <div className="pin-wrapper">
                            <div className="img"></div>
                            <div className="wrapper">
                                <h1>TITLE FOUR</h1>
                                <p>Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas.</p>
                            </div>
                        </div>
                    </article>

                    <article id="slide05" className="slide">
                        <div className="wrapper">
                            <h1>UNPINNED SLIDE</h1>
                            <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
                        </div>
                    </article>

                </div> 
        
                <div className="footer-container">
                    <footer className="wrapper">
                        <h3>2016 &copy; <a href="https://ihatetomatoes.net" target="_blank">Ihatetomatoes.net</a> | <a href="https://twitter.com/ihatetomatoes" target="_blank">@ihatetomatoes</a> | Animate responsibly!</h3>
                    </footer>
                </div>
            </div>
        )
    }
}

export { LandingPage };