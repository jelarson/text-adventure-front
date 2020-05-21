import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { UserProvider } from "./context/context";
import Home from "./home/home";
import Sick from "./end-results/sick";
import Success from "./end-results/success";
import KickedOut from "./end-results/kicked-out";
import Results from "./results/results";
// import Results1 from './results/results1'
// import Results2 from './results/results2'
// import Results3 from './results/results3'
// import Results4 from './results/results4'
// import Results5 from './results/results5'
// import Results6 from './results/results6'
// import Results7 from './results/results7'
// import Results8 from './results/results8'
// import Results9 from './results/results9'
// import Results10 from './results/results10'
// import Results11 from './results/results11'
// import Results12 from './results/results12'
// import Results13 from './results/results13'
// import Results14 from './results/results14'
// import Results15 from './results/results15'
import AdventurePage from "./adventure-page/adventure-page";
// import AdventurePage1 from './adventure-page/adventure-page1'
// import AdventurePage2 from './adventure-page/adventure-page2'
// import AdventurePage3 from './adventure-page/adventure-page3'
// import AdventurePage4 from './adventure-page/adventure-page4'
// import AdventurePage5 from './adventure-page/adventure-page5'
// import AdventurePage6 from './adventure-page/adventure-page6'
// import AdventurePage7 from './adventure-page/adventure-page7'
// import AdventurePage5 from './adventure-page/adventure-page5'

export default function App() {
  return (
    <div className='app'>
      <UserProvider>
        <Router>
          <div className='app-wrapper'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/adventure/:slug' component={AdventurePage} />
              {/* <Route exact path="/adventure1" component={AdventurePage1}/>
            <Route exact path="/adventure2" component={AdventurePage2}/>
            <Route exact path="/adventure3" component={AdventurePage3}/>
            <Route exact path="/adventure4" component={AdventurePage4}/>
            <Route exact path="/adventure5" component={AdventurePage5}/>
            <Route exact path="/adventure6" component={AdventurePage6}/>
            <Route exact path="/adventure7" component={AdventurePage7}/> */}
              <Route exact path='/sick' component={Sick} />
              <Route exact path='/success' component={Success} />
              <Route exact path='/kicked-out' component={KickedOut} />
              <Route exact path='/results/:slug' component={Results} />
              {/* <Route exact path="/results1" component={Results1}/>
            <Route exact path="/results2" component={Results2}/>
            <Route exact path="/results3" component={Results3}/>
            <Route exact path="/results4" component={Results4}/>
            <Route exact path="/results5" component={Results5}/>
            <Route exact path="/results6" component={Results6}/>
            <Route exact path="/results7" component={Results7}/>
            <Route exact path="/results8" component={Results8}/>
            <Route exact path="/results9" component={Results9}/>
            <Route exact path="/results10" component={Results10}/>
            <Route exact path="/results11" component={Results11}/>
            <Route exact path="/results12" component={Results12}/>
            <Route exact path="/results13" component={Results13}/>
            <Route exact path="/results14" component={Results14}/>
            <Route exact path="/results15" component={Results15}/> */}
            </Switch>
          </div>
        </Router>
      </UserProvider>
    </div>
  );
}
