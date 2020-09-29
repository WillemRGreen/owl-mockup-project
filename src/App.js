import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Stage from '../stage'
import store from './store'

class App extends Component {
  static defaultProps = {
    store: {
      participants:[],
      chatEvents:[]
    }
  }
  render() {
    <div className = 'App'>
      <div className='group'>
        {store.participants.map((item)=>(
          <Stage 
          key ={item.id} 
          name={item.name} 
          avatar={item.avatar}
          onStage={item.onStage}
          inSession={item.inSession} />
          )
        )}
      </div>
      <div className='chat-log'>


      </div>
      <div className='participants-list'>
        
      </div>
    </div>
  } 
}

export default App;
