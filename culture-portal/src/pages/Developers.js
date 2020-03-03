import React, {useContext} from 'react'

import './Developers.css'
import Layout from '../components/layout';
import { useSpring, animated as a } from "react-spring";

import {GlobalStateContext} from '../components/context/GlobalContextProvider';
import {
  Button
} from "react-bootstrap";

import SEO from "../components/seo"

import {developers as translate}  from "../components/data/dictionary"

let info;
let spring;
let intro;
const App = ({lang}) => {

      info = translate.info[lang];
      intro = translate.intro[lang];
      spring = translate.spring[lang];
      const [greetingStatus, displayGreeting] = React.useState(false);
      const contentProps = useSpring({
         opacity: greetingStatus ? 1 : 0,
         marginTop: greetingStatus ? 0 : -300
      });
      return (
    <div className="contain">
      <div className="button-container">
        <Button variant="secondary" onClick={() => displayGreeting(a => !a)} className="button">
         {info}
        </Button>
      </div>
      {!greetingStatus ? (
        <div className="intro">{intro}</div>
      ) : (
        <a.div className="box" style={contentProps}>
          <h4>{spring}</h4>
        </a.div>
      )}
    </div>
  );
};

let dmitry;
let nikolay;
let maksim;
let ali;
let vladimir;
let pavel;

//let currLang;


const url = 'https://jardin.ee/wp-content/uploads/2014/08/No-profile-LinkedIn-e1566456325422-320x320.jpg';
const Developers = () => {
      const state = useContext(GlobalStateContext);
      let currLang = state.language;


      dmitry = translate.dmitry[currLang];
      nikolay = translate.nikolay[currLang];
      maksim = translate.maksim[currLang];
      ali = translate.ali[currLang];
      vladimir = translate.vladimir[currLang];
      pavel = translate.pavel[currLang];
      return (
      <Layout>
        <SEO title="Developers" />
          <div>
             <ul className='team' >
                <li className='team-list' >
                   <div className='photo photo__1'/>
                   <h2 className='dev-name'><a href="https://github.com/Asindeton" className='team-link' >{dmitry}</a></h2>
                   <App lang={currLang}/>
                </li>
                <li className='team-list' >
                   <div className='photo photo__2'/>
                   <h2 className='dev-name'><a href="https://github.com/shebekocom" className='team-link' >{nikolay}</a></h2>
                   <App lang={currLang}/>
                </li>
                <li className='team-list' >
                   <div className='photo photo__3'/>
                   <h2 className='dev-name'><a href="https://github.com/Kr-Mx" className='team-link' >{maksim}</a></h2>
                   <App lang={currLang}/>
                </li>
                <li className='team-list' >
                   <div className='photo photo__4'/>
                   <h2 className='dev-name'><a href="https://github.com/GurbanovAli" className='team-link' >{ali}</a></h2>
                   <App lang={currLang}/>
                </li>
                <li className='team-list' >
                   <div className='photo photo__5'/>
                   <h2 className='dev-name'><a href="https://github.com/vukzh" className='team-link ' >{vladimir}</a></h2>
                   <App lang={currLang}/>
                </li>
                <li className='team-list' >
                   <div className='photo photo__6'/>
                   <h2 className='dev-name'><a href="https://github.com/pavlenstory" className='team-link' >{pavel}</a></h2>
                   <App lang={currLang}/>
                </li>
             </ul>
          </div>
      </Layout>
   )
}

export default Developers
