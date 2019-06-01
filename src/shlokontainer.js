import React, { useState } from 'react';
import { nashlok } from './shlok';

export const ShloKontainer = () => {
    const [content, setContent] = useState('Видимо нашльокан текст.')

    return <div className="ShloKontainer">
        <div>
            <h4>Текст на кирилица</h4>
            <textarea rows="6" cols="80" value={content} onChange={(event) => setContent(event.target.value)} className="textareata" />
        </div>
        <div>
            <h4>Tekst na 6lyokavica</h4>
            <div className="shlokResult">
                {nashlok(content)}
            </div>
        </div>

    </div>
}
