import React from 'react'

const Option = (props) =>(
    <div>
        <p>{props.option}</p>
        <button 
            className='button button--link'
            onClick={(e) => {
                props.handleDeleteOption(props.option)
            }}
        
        >Remove</button>
    </div>
) ;
export default Option