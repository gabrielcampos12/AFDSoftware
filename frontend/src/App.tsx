import React, {useState} from 'react';

import {Left, Right, Inputs,  Selects, Transitions, Content, SelectsContent} from './styles/app';

import  Select  from 'react-select';

function App() {
  const [newAlphabet, setNewAlphabet] = useState('');
  const [newStates, setNewStates] = useState('');
  const [newInitialState, setNewInitialState] = useState('');
  const [newFinalsStates, setNewFinalsStates] = useState('');

  const alphabet = newAlphabet.split(';');
  const states = newStates.split(';');




  return (
    <>
      <Left>
        <Inputs>
          <div>
            <label>Alfabeto</label>
            <input 
              placeholder="0;1;a;b"
              onChange={(e) => setNewAlphabet(e.target.value)}>
            </input>
          </div>
          <div>
            <label>Estados</label>
            <input 
              placeholder="q1;q2;q3"
              onChange={(e) => setNewStates(e.target.value)}>
            </input>
          </div>
        </Inputs>

        <Selects>
          <div>
            <label>Est.inicial</label>
            <select 
              onChange={(e) => setNewInitialState(e.target.value)}
            >{states.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
            </select>
          </div>
          <div>
            <label>Est.final</label>
            <select 
              onChange={(e) => setNewFinalsStates(e.target.value)}
            >{states.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
            </select>
          </div>
        </Selects>

        <Transitions>
          <header>
            <strong></strong>
            <button>+</button>
          </header>
          <Content>
            {/* {contents.map((content) => (

            ))} */}
            <SelectsContent>  
              <div>
                <label>Estado</label>
                <select />
              </div>
              <div>
                <label>Alfabeto</label>
                <select />
              </div>
              <div>
                <label>Estado final</label>
                <select />
              </div>
              <button>Deletar</button>
            </SelectsContent>
          </Content>

        </Transitions>
      </Left>

      <Right>

      </Right>
    </>
  );
}

export default App;
