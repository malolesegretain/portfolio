import React, { Component } from 'react';
import './App.css';
import sleep from './sleep.png';
import run from './run.png';
import work from './work.png';
import read from './read.png';
import ticTacToe from './ticTacToe.png';
import simonGame from './simonGame.png';
import recipeBox from './recipeBox.png';
import gameOfLife from './gameOfLife.png';


class Intro extends Component {
  render () {
    return (
      <div className = "intro">
      <div className = "pillow"></div>
      <div className = "photoFrame">
        <img className = "profilePic" src="https://image.ibb.co/eg8yFR/profile_Pic.png" alt="profile_Pic" border="0"/>
      </div>
      <div className = "title">
        Hi, I'm Malo
      </div>
      <div className = "desc">
        I'm a code enthusiast, sports-loving, travel-bugged, full-time human !
        If I'm not working, you'll find me anywhere... Most likely having a good time !!!
      </div>
      <div>
        <div className = "linkedin">
          <a href = "https://www.linkedin.com/in/malo-lesegretain-39b59694/" target="_blank" rel="noopener noreferrer">
          <img className = "logos" alt = "linkedin-logo" src = "https://higherlogicdownload.s3.amazonaws.com/VMUG/469c9ce4-19fc-442d-8641-0373c550b095/UploadedImages/NJVMUG/LinkedIn-Logo-500x500.png"/>
          </a>
        </div >
        <div className = "gitHub">
          <a href = "https://github.com/malolesegretain" target="_blank" rel="noopener noreferrer">
          <img className = "logos" alt = "github-logo" src = "https://image.flaticon.com/icons/png/512/25/25231.png"/>
          </a>
        </div>
        <div className = "FCC">
          <a href = "https://www.freecodecamp.org/malolesegretain" target="_blank" rel="noopener noreferrer">
          <img className = "logos" alt = "fcc-logo" src = "http://metakata.altervista.org/wordpress/wp-content/uploads/2015/08/freecodecamp_white.png"/>
          </a>
        </div>
        <div className = "codePen">
          <a href = "https://codepen.io/malo1993/" target="_blank" rel="noopener noreferrer">
          <img className = "logos" alt = "github-logo" src = "https://blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Large.png"/>
          </a>
        </div>
        </div>
        <div class="main-container">
        <div class="fixer-container">
        <div className = "par one">
        <p className = "parTitle">Who am I ?</p>
        <li>24 y/o, French</li>
        <li>Lived in France, Singapore and London before the age of 18</li>
        <li>Studied business in France</li>
        <li>Lived in China, Senegal, Kazakshtan & Australia for work and study-abroad programs</li>
        <li>Worked in 2 differents startups on the client side (customer success and sales)</li>
        </div>
        <div className = "par two">
        <p className = "parTitle">Why do I code ?</p>
        In August 2017, I left my job with 2 goals in mind :
        <li>Learning javaScript</li>
        <li>Becoming superfit !</li>
        <p className = "up down">For 6 months, I focused on these 2 goals. The results are satisfying :</p>
        <li>I'm fairly confident with javaScipt (checkout my <a href="https://codepen.io/malo1993/" target="_blank" rel="noopener noreferrer">codepen</a>)</li>
        <li>I'm startting to use React (take a look at my <a href="https://github.com/malolesegretain" target="_blank" rel="noopener noreferrer">gitHub</a>)</li>
        <li>I took part in a trail run and finished 15th/322 runners</li>
        Running was already part of my life, now code is as well and I intend to keep it that way !
        </div>
        <div className = "par three">
        <p className = "parTitle">What's next ?</p>
        <p className = "down">I am now looking for a job in operations in a startup with :</p>
        <li>A motivated and fun team</li>
        <li>A stimulating environment</li>
        <li>A cool product</li>
        <li>A lot to learn</li>
        <p className = "up">Most of all, I'm looking for a challenge ! Coding taught me rigor, attention to detail, and pragmatism, but most of all, it taught me that with enough work, I can take on any challenge !
        Feel free to contact me on <a href="mailto:maloleseg@gmail.com">maloleseg@gmail.com</a>.</p>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

class Occupation extends Component {
  render () {
    return (
      <div className = "occupation">
        <div className = "occ-title">
          My typical day includes
        </div>
        <div className = "firstRow">
          <img className = "sleep icon" src={sleep} alt="Who doesn't love sleeping :)" />
          <p className = "sleepDesc">Unfortunately, I'm not one of those superhumans who feel perfectly OK with just 5h sleep per night! I need my sleep as much as I love it :)</p>
          <img className = "run icon" src={run} alt="No morning without my run!" />
          <p className = "runDesc"> Every weekday is running day. No exception. Nothing like an intense morning run to get ready for a big day!</p>
        </div>
        <div className = "secondRow">
          <img className = "work icon" src={work} alt="I work until I'm really happy with myself!" />
          <p className = "workDesc">Currently, my main project is going through <a href="https://www.freecodecamp.org/malolesegretain" target = "_blank" rel="noopener noreferrer">freeCodeCamp</a> to improve my coding skills. I usually spend the rest of my time running my online store as a side project.</p>
          <img className = "read icon" src={read} alt="I recently got into reading and can't get enough of it..." />
          <p className = "readDesc">Evening is reading time for me! Whether on <a href = "https://www.quora.com/">Quora</a>, <a href = "https://medium.com/">Medium</a>, or reading actual books, you'll mostly find me reading about history, science, great men and women as well as travels!</p>
        </div>
      </div>
    );
  }
}

class Portfolio extends Component {
  render () {
    return (
      <div className = "portfolio">
        <div className = "port-title">My Porojects (among others...)</div>
          <div className = "first">
            <span><figure>
              <a href = "https://codepen.io/malo1993/full/xXvBGY/" target="_blank" rel="noopener noreferrer"><img className = "ticTacToe port" src= {ticTacToe} alt ="Malo's Tic-Tac-Toe game"/></a>
              <figcaption>My Tic-Tac-Toe Game in JS</figcaption>
            </figure></span>
            <span><figure>
              <a href = "https://codepen.io/malo1993/full/QOOWaO/" target="_blank" rel="noopener noreferrer"><img className = "simonGame port" src= {simonGame} alt ="Malo's Simon game game"/></a>
              <figcaption>My Simon Game in JS</figcaption>
            </figure></span>
          </div>
          <div className = "second">
          <span><figure>
              <a href = "https://codepen.io/malo1993/full/BmeERB/" target="_blank" rel="noopener noreferrer"><img className = "recipeBox port" src= {recipeBox} alt ="Malo's recipe box"/></a>
              <figcaption>My recipe box in React !</figcaption>
          </figure></span>
          <span><figure>
              <a href = "https://codepen.io/malo1993/full/MrwpaG/" target="_blank" rel="noopener noreferrer"><img className = "gameOfLife port" src= {gameOfLife} alt ="Malo's game-of-life !"/></a>
              <figcaption>My game of life in React !</figcaption>
          </figure></span>
          </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Intro />
        <Occupation />
        <Portfolio />
      </div>
    );
  }
}

export default App;
