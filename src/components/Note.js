import React from 'react'

function Note(props) {

    function handleDelete() {
        props.onDelete(props.id)
    }


  return (
    <div className='note'>
        {props.title}
        {props.content}
        <button onClick={handleDelete}>
            delete
        </button>
    </div>
  )
}

export default Note