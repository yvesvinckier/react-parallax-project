import React, { Component } from "react";
import ScrollMagic from "scrollmagic";
import { TweenMax } from "TweenMax";
import "animation.gsap";
import "debug.addIndicators"
import "./PenPage.css";
import imgPen from "../../img/img_pen-landscape.png";

class PenPage extends Component {
    componentDidMount() {
        TweenMax.set('.part3', { y: -572 })
        TweenMax.set('.part4', { y: -557 })
        TweenMax.set('.part5', { y: -726 })
        TweenMax.set('.part6', { y: -846 })
        // TweenMax.set(['.parts h2, .parts p'], { autoAlpha: 0 });

        const bodyToStart = TweenMax.to('.part3', 1, { y: 0, ease: "Linear.easeNone" })
        const part4ToStart = TweenMax.to('.part4', 1, { y: 0, ease: "Linear.easeNone" })
        const part5ToStart = TweenMax.to('.part5', 1, { y: 0, ease: "Linear.easeNone" })
        const part6ToStart = TweenMax.to('.part6', 1, { y: 0, ease: "Linear.easeNone" })

        // init ScrollMagic Controller
        const controller = new ScrollMagic.Controller();

        // init ScrollMagic Scene01
        const scene01 = new ScrollMagic.Scene({
            triggerElement: '.part1',
            triggerHook: '1',
            offset: 282,
            duration: 572
        })
        .setTween(bodyToStart)
        .addIndicators()
        .addTo(controller)

        // const scene02 = new ScrollMagic.Scene({
        //     triggerElement: '.part3',
        //     triggerHook: '1',
        //     offset: 282,
        //     duration: 557
        // })
        // .setTween(part4ToStart)
        // .addIndicators()
        // .addTo(controller)

        const pt6Scene = new ScrollMagic.Scene({
            triggerElement: '.part3',
            triggerHook: '0',
            offset: -200,
            duration: 846
        })
        .setTween(part6ToStart)
        .addIndicators()
        .addTo(controller)

        
        const pt5Scene = new ScrollMagic.Scene({
            triggerElement: '.part3',
            triggerHook: '0',
            offset: -200,
            duration: 726
        })
        .setTween(part5ToStart)
        .addIndicators()
        .addTo(controller)

        const pt4Scene = new ScrollMagic.Scene({
            triggerElement: '.part3',
            triggerHook: '0',
            offset: -200,
            duration: 557
        })
        .setTween(part4ToStart)
        .addIndicators()
        .addTo(controller)

        const arrayLi = document.getElementsByClassName('parts')[0].getElementsByTagName("li");
        // console.log(arrayLi[0].getElementsByTagName("li"));
        [...arrayLi].map((item) => { 
            const scene = new ScrollMagic.Scene({
               triggerElement: item,
               triggerHook: 0.55 
            })
            .setClassToggle(item, 'fade-in')
            .addTo(controller);
            console.log(item);})
    }

    render() {
        return(
            <div className="PenPage">
                <header>
                    <div className="wrapper clearfix">
                        <h1 className="title">Pen Animation</h1>
                        <p className="intro">Learn how to reveal parts of a product or uncover your story step by step.</p>
                        <p className="intro-img">
                            <img src={imgPen} alt="" />
                        </p>
                    </div>
                </header>

                <main>
                    <section className="section-static bcg-white">
                    <div className="wrapper">
                        <h1>Static Section</h1>
                        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. </p>
                    </div>
                </section>

                    <section id="reveal-effect" className="section-static bcg-blue">
                        <div className="wrapper">
                            <h1>Reveal Effect</h1>
                            <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. </p>
                            <ol className="parts">
                                <li className="part1">
                                    <h2>Heading 1</h2>
                                    <p>Vivamus hendrerit in dui arcu sed erat molestie vehicula. Nullam in dui mauris.</p>
                                </li>
                                <li className="part2">
                                    <h2>Heading 2</h2>
                                    <p>Vivamus hendrerit in dui arcu sed erat molestie vehicula. Nullam in dui mauris.</p>
                                </li>
                                <li className="part3">
                                    <h2>Heading 3</h2>
                                    <p>Vivamus hendrerit in dui arcu sed erat molestie vehicula. Nullam in dui mauris.</p>
                                </li>
                                <li className="part4">
                                    <h2>Heading 4</h2>
                                    <p>Vivamus hendrerit in dui arcu sed erat molestie vehicula. Nullam in dui mauris.</p>
                                </li>
                                <li className="part5">
                                    <h2>Heading 5</h2>
                                    <p>Vivamus hendrerit in dui arcu sed erat molestie vehicula. Nullam in dui mauris.</p>
                                </li>
                                <li className="part6">
                                    <h2>Heading 6</h2>
                                    <p>Vivamus hendrerit in dui arcu sed erat molestie vehicula. Nullam in dui mauris.</p>
                                </li>
                            </ol>
                        </div>
                    </section> 
                    <section className="section-static bcg-white">
                        <div className="wrapper">
                            <h1>Static Section</h1>
                            <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. </p>
                        </div>
                    </section>
                </main>
        
                <footer>
                    <div className="wrapper clearfix">
                        <p>&copy; 2016 <a href="https://ihatetomatoes.net/product/scrollmagci-workshop/"> Petr Tichy - Ihatetomatoes.net</a></p>
                    </div>
                </footer>
            </div>
        )
    }
}

export { PenPage };