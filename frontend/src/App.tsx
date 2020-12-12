import React, {useState} from 'react';

import {Left, Right, Inputs,  Selects, Transitions, Content, SelectsContent} from './styles/app';

import  Select  from 'react-select';

const App: React.FC = () => {
  const [newAlphabet, setNewAlphabet] = useState('');
  const [newStates, setNewStates] = useState('');
  const [newInitialState, setNewInitialState] = useState('');
  const [newFinalsStates, setNewFinalsStates] = useState('');
  const [contentsItems, setContentsItems] = useState([
    {state: '', alphabet: '', goState: ''}
  ]);


  const alphabet = newAlphabet.split(';');
  const states = newStates.split(';');

  function setContenstsItemsValue(position: number, field:string, value:string){
    const updateContentsItems = contentsItems.map((contentItem, index) => {
      if(index === position){
        return { ...contentItem, [field]:value};
      }

      return contentItem;
    })
    setContentsItems(updateContentsItems);
  }

  function addNewContentItem(){
    setContentsItems([
      ...contentsItems,
      {state: '', alphabet: '', goState: ''}
    ]);
  }

  console.log(contentsItems);

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
            <button type="button" onClick={addNewContentItem}>+</button>
          </header>
          <Content>
           {contentsItems.map((item, index) => {
             return(
                <SelectsContent key={index}>  
                  <div>
                    <label>Estado</label>
                    <select 
                      value={item.state}
                      onChange={e => setContenstsItemsValue(index, 'state', e.target.value)}
                    >
                      {states.map((state) => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label>Alfabeto</label>
                    <select
                      value={item.alphabet}
                      onChange={e => setContenstsItemsValue(index, 'alphabet', e.target.value)}
                    >
                      {alphabet.map((alphabet) => (
                        <option key={alphabet} value={alphabet}>{alphabet}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label>Estado final</label>
                    <select
                       value={item.goState}
                       onChange={e => setContenstsItemsValue(index, 'goState', e.target.value)}
                    >
                      {states.map((state) => (
                        <option key={`${state}f`} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>
                </SelectsContent>
             )
           })}
           
          </Content>

        </Transitions>
      </Left>

      <Right>
        <header>
          <input type="text" placeholder="palavra"/>
          <button type="button">Confirmar</button>
        </header>

        <h1>Palavra null</h1>

      </Right>
    </>
  );
}

export default App;
