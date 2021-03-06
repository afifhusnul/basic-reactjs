import React, { Component } from "react";
import Header from './components/views/layout/Header';
import { Container } from "react-bootstrap";
import {HashRouter, Route} from 'react-router-dom';
import Welcome from './components/views/Welcome';
import Message from './components/views/Message';
import Hello from './components/views/Hello';
import Greet from './components/views/Greet';
import Counter from './components/views/Counter';
import FunctionClick from './components/views/FunctionClick';
import ClassClick from './components/views/ClassClick';
import EventBind from './components/views/EventBind';
import ParentComp from './components/views/ParentComponent';


import Modalku from './components/views/OpenModal';

import './components/styles/Main.css';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
          <Container className="container-fluid">
            <div>              

              <div className="content">
                <HashRouter>
                  <Route path="/welcome" component={Welcome}/>
                  <Route path="/message" component={Message}/>
                  <Route path="/hello" component={Hello}/>
                  <Route path="/greet" component={Greet}/>
                  <Route path="/counter" component={Counter}/>
                  <Route path="/functionclick" component={FunctionClick}/>
                  <Route path="/classclick" component={ClassClick}/>
                  <Route path="/eventbind" component={EventBind}/>
                  <Route path="/parentcomp" component={ParentComp}/>
                  
                  <Route path="/modal" component={Modalku}/>
                </HashRouter>
              </div>
              <br/>
              <br/>
              
              {/*<center><Welcome name="Afif" heroName="Brawijaya"/> </center>*/}
              {/*<center><Greet name="Afif" heroName="Brawijaya"/> </center>*/}
              <br/>
              <br/>              
            </div>  
        </Container>
    </div>        
    )
  }
}
