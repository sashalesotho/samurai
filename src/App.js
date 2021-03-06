import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';



const App = (props) => {

	
  return (
	  <BrowserRouter>
	   <div className='app-wrapper'>
		 <Header />
		 <Navbar />
		 <div className='app-wrapper-content'>

			<Route path='/profile' render={() => <Profile />} />
			<Route path='/dialogs' render={() => <DialogsContainer /> } />
			<Route path='/news' render={<News />} />
			<Route path='/music' render={<Music />} />
			<Route path='/settings' render={<Settings />} />

			 {/* <Route path='/profile' component={Profile}/>
			 <Route path='/dialogs' component={Dialogs}/>
			 <Route path='/news' component={News}/>
			 <Route path='/music' component={Music}/>
			 <Route path='/settings' component={Settings}/> */}
		 </div>
		 </div>
		 </BrowserRouter>
  );
}

export default App;
