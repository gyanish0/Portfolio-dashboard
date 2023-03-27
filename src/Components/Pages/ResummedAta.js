import React from 'react'

const ResummedAta = (props) => {
    return (
        <div className='grid_content'>
            <h3>{props.subtitle}</h3>
            <span>{props.Name}</span>
            <p>Dolore magna aliqua. Consectetur adipisicing elit. Iusto, optio, dolorum
                provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde.</p>
            <button>{props.button}</button>
        </div>
    )
}

export default ResummedAta
