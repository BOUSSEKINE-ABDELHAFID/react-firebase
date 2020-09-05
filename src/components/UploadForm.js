import React from 'react'
import { useState } from 'react'
import ProgressBar from './ProgressBar';



const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [erroe, setErroe] = useState(null)

    const types = ["image/png", "image/jpeg"];

    const handleChange = e => {
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setErroe(null)
        }else{
            setFile(null)
            setErroe("please select an image file (png or jpeg)");
        }
    }
    return (
        <form>
          <input type="file" name="" id="imageInput" onChange = {handleChange} className = "imageInput"/>
          <label htmlFor="imageInput" className = "ajouterPhoto">ajouter une photo</label>
          <div>
              {
                  erroe && (
                      <div>
                          {erroe}
                      </div>
                  )
                  
              }
              {
                file && (
                      <div className = "fileName">
                          {file.name}
                      </div>
                  )
              }
              {
                  file && (
                      <ProgressBar file = {file} setFile = {setFile}/>
                  )
              }
          </div>  
        </form>
    )
}

export default UploadForm
