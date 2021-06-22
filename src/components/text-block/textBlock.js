import './textBlock.css'

import React from 'react'

function textBlock({title, content}) {
    return (
        <div className="py-4 px-5">
            <div className="text-block ">
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>

    )
}

export default textBlock
