import React, { Component } from "react";
class LandingPage extends Component {
    render() {
        return(
            <div>
                <div id="main" class="main-container">
                    <article id="slide00" class="slide">
                        <div class="wrapper">
                            <h1>INTRODUCTION</h1>
                            <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
                        </div> 
                    </article>

                    <article id="slide01" class="slide">
                        <div class="img"></div>
                        <div class="wrapper">
                            <h1>TITLE ONE</h1>
                            <p>Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas.</p>
                        </div>
                    </article>

                    <article id="slide02" class="slide">
                        <div class="img"></div>
                        <div class="wrapper">
                            <h1>TITLE TWO</h1>
                            <p>Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus.</p>
                        </div>
                    </article>

                    <article id="slide03" class="slide">
                        <div class="img"></div>
                        <div class="wrapper">
                            <h1>TITLE THREE</h1>
                            <p>Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in.</p>
                        </div>
                    </article>

                    <article id="slide04" class="slide">
                        <div class="img"></div>
                        <div class="wrapper">
                            <h1>TITLE FOUR</h1>
                            <p>Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas.</p>
                        </div>
                    </article>

                    <article id="slide05" class="slide">
                        <div class="wrapper">
                            <h1>UNPINNED SLIDE</h1>
                            <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
                        </div>
                    </article>

                </div> 
        
                <div class="footer-container">
                    <footer class="wrapper">
                        <h3>2016 &copy; <a href="https://ihatetomatoes.net" target="_blank">Ihatetomatoes.net</a> | <a href="https://twitter.com/ihatetomatoes" target="_blank">@ihatetomatoes</a> | Animate responsibly!</h3>
                    </footer>
                </div>
            </div>
        )
    }
}

export default LandingPage;