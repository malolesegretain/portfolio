import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
        If I'm not working, you'll find me anywhere, doing anything... having a good time !!!
      </div>
      <div className = "logoFrame">
        <div>
          <a href = "https://www.linkedin.com/in/malo-lesegretain-39b59694/" target="_blank">
          <img className = "linkedin logos" src = "https://higherlogicdownload.s3.amazonaws.com/VMUG/469c9ce4-19fc-442d-8641-0373c550b095/UploadedImages/NJVMUG/LinkedIn-Logo-500x500.png"/>
          </a>
        </div>
        <div>
          <a href = "https://github.com/malolesegretain" target="_blank">
          <img className = "gitHub logos" src = "https://image.flaticon.com/icons/png/512/25/25231.png"/>
          </a>
        </div>
        <div>
          <a href = "https://www.freecodecamp.org/malolesegretain" target="_blank">
          <img className = "FCC logos" src = "http://metakata.altervista.org/wordpress/wp-content/uploads/2015/08/freecodecamp_white.png"/>
          </a>
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
        
      </div>
    );
  }
}

class Hobbies extends Component {
  render () {
    return (
      <div className = "hobbies">
        
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
        <Hobbies />
      </div>
    );
  }
}

export default App;
