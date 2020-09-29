import React, {Component} from 'react';
import Stage from './components/stage'
import Participants from './components/participants'
import Chat from './components/chat'
import './App.css'

class App extends Component {
  static defaultProps = {
    store: {
      participants:[],
      chatEvents:[]
    }
  }
  render() { 
    const { store } = this.props;
    return (
    <main className = 'App'>
      <div className='app-stage group'>
        {store.participants.map((item)=>(item.onStage ? 
          <Stage 
          key ={item.id} 
          name={item.name} 
          avatar={item.avatar}
          onStage={item.onStage} /> : undefined))}
      </div>
      <div className='participants-list'>
          {store.participants.map((item)=>(
            <Participants 
            key={item.id}
            name={item.name}
            avatar={item.avatar}
            inSession={item.inSession}
            onStage={item.onStage} />))}
       </div>
       <div className='chat-log'>
         {store.chatEvents.map((item)=>(
           <Chat 
           key={item.participantId}
           type={item.type}
           message={item.message}
           time={item.time}
           timestamp={item.timestamp}
           />))}
       </div>
    </main>)
  } 
}

export default App;
