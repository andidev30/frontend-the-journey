import React from 'react'
import parse from 'html-react-parser'

function Description({data, desc}) {
    return (
        <div>
            <img src={data.image} alt="a"/>
            <div>
                {parse(desc)}
            </div>
        </div>
    )
}

export default Description
