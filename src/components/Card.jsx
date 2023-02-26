import React from 'react'
import { useContext } from 'react'
import { userStore } from './Main'

const Card = () => {
    let {user}=useContext(userStore);
  return (
    
      <>
        {user.map(value=>{
            let url=`http://${value.website}`
            return(
                <div className='card'>
                <h2>{value.name}</h2>
                <p><span>username:</span> {value.username}</p>
                <p><span>email:</span> {value.email}</p>
                <p><span>city:</span> {value.address.city}</p>
                <p><span>phone:</span> {value.phone}</p>
                <p><span>website:</span> <a href={url}>{value.website}</a></p>
                <p><span>company:</span> {value.company.name}</p>
                </div>
            )
        })}
     </>
  )
}

export default Card