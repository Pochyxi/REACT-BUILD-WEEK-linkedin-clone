import React, { useEffect, useState } from 'react'

const LinkedinPost = ({post}) => {

    const deletePostWithoutImage = (arr) => {
        let arrDelete = []
        for (let i = arr.length - 1 ; i > 1; i--) {
          if (typeof arr[i].user === 'object' ) {
           arrDelete = arr.filter(item => item._id === arr[i]._id)
        }
      }
      console.log(arrDelete);
      return arrDelete
      }
      console.log(deletePostWithoutImage(post));

  return (
    <div>

      <h2></h2>
      <p></p>
    </div>
  )
}

export default LinkedinPost
