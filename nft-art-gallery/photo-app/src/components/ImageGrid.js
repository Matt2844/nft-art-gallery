import React, { useState } from 'react'
import useFirestore from '../hooks/useFirestore';
import { Animated } from "react-animated-css";

export default function ImageGrid () {
  const [pictureName, setPictureName] = useState('');
  const { docs } = useFirestore('images');
  console.log(docs, docs[3])

  const addPictureName = () => {
    docs.add({
      photographer: `changed the name of photographer`
    })
  }

  return (
    <div className="img-grid">
      {docs && (
        docs.map(doc => (
          <Animated animationIn="fadeIn" animationInDuration={2500} isVisible={true}>
            <div className="img-wrap" key={doc.id}>
              <img src={doc.url} alt="uploaded pic" />
            </div>
            <div className="photographer-name">
              {doc.photographer}
            </div>
          </Animated>
        ))
      )
      }
    </div >
  )
}