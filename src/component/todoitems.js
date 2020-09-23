 import React from 'react'
 
 function todoitems(props) {
     return (
         <>
            <li key={props.key}>{props.todo}</li> 
         </>
     )
 }
 
 export default todoitems
 