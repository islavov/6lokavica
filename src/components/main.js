import React, { useState } from 'react';
import { nashlok } from '../lib/transliterator';

const InitialText = `Транслитератор от кирилица към шльокавица. Запазва големината на буквите. Поставя заменяеми символи на случаен принцип.
`

export const MainContainer = () => {
    const [content, setContent] = useState(InitialText)

    return <div className="columns">
        <div className="column">
            <div className="box outlined">
                <h4 className="title is-size-3">Текст на кирилица</h4>
                <textarea className="box" className='is-background-light' rows="6" cols="70" 
                value={content} 
                onChange={(event) => setContent(event.target.value)} className="textareata" />
            </div>
        </div>
        <div className="column">
            <div className="box outlined ">
                <h4 className="title is-size-3">Tekst na 6lyokavica</h4>
                <div className="shlokResult has-text-left">
                    {nashlok(content)}
                </div>
            </div>
            
        </div>

    </div>
}
