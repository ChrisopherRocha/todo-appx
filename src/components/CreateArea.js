import React, {useState} from 'react'

function CreateArea(props) {
    // 1
    const [note, setNote] = useState({
        title: "",
        content: ""
    })


    // 2
    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote, [name]: value
            }
        })
    }


    // 6
    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
    }

  return (
    <div>
        {/* 0 */}
        <form className='create-note'>
            <input 
                type="text"
                name="title"
                placeholder='Title'
                // 3
                onChange={handleChange}
                value={note.title}
            />
            <textarea 
                name="content" 
                rows="3" 
                placeholder='Take a note...' 
                // 3
                onChange={handleChange}
                value={note.content}
            />
            {/* 5 */}
            <h1 onClick={submitNote}>
                <p>Add Note</p>
            </h1>
        </form>
    </div>
  )
}

export default CreateArea
