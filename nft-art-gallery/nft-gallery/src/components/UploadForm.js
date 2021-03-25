import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../contexts/user';
import ProgressBar from './ProgressBar';

export default function UploadForm () {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);


  const types = ['image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please Select an image file (png or jpeg)');
    }
  }

  const msg = useContext(UserContext)


  return (
    <div>
      <form>
        <div clasName="file-input">
          <input type="file" id="file" className="inputfile" onChange={changeHandler} />
          <label for="file">Select An Image {msg}</label>
        </div>
        <div className="output">
          {error && (
            <div className="error">{error}</div>
          )}
          {file && (
            <div>{file.name}</div>
          )}
          {file && (
            <ProgressBar file={file} setFile={setFile} />
          )}
        </div>
      </form >
    </div>
  )
}