import React, { useState } from 'react';


function NoteCard(props) {
    const [content, setContent] = useState(props.itemcard.note);
    let oldNote = props.itemcard.note;
    console.log(oldNote);
    return (
        <div className='note-div'>
            <textarea className="textnote" onChange={(e) => setContent(e.target.value)} defaultValue={props.itemcard.note}></textarea>
            {(content !== oldNote) ? <div className='commit-note' onClick={() => props.PatchchangeCard({ note: content }, props.itemcard)}>
                commit
            </div> : ""}

        </div>
    );
}

export default NoteCard;