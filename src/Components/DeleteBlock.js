import React from 'react'

function DeleteBlock({ documentId }) {
  const deleteTicket=()=>{
    console.log("deleted")
  }
  return (
    <div className="delete-block">
    <div className="delete-icon" onClick={deleteTicket}>✖</div>
    </div>
  )
}

export default DeleteBlock