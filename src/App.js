import './App.css';
import CreateArea from './components/CreateArea';
import Header from './components/Header';
import Note from './components/Note';
import React, { useState } from 'react'

function App() {

  // 4
  const [notes, setNotes] = useState([])


  // and 7
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    })
    console.log(notes)
  }


  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }


  return (
    <div className="App">
      <h1>Hello World</h1>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* <Note title="title" content="test of content" /> */}
      {notes.map ((noteItem, idx) => {
        return (
          <Note 
            key={idx}
            id={idx}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        )
      })}
    </div>
  );
}

export default App;
