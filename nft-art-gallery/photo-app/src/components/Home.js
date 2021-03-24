import React from 'react'
import Title from './Title'
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';

export default function HomeGallery () {

  return (
    <div>
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  )
}