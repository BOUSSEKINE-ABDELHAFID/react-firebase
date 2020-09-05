import React from 'react'
import useFirestore from "../Hooks/useFirestore"
const ImageGrid = () => {
    const {docs} = useFirestore("images");
    return (
        <div className = "gridImage" layout>
            {
               docs && docs.map(doc => (
                   <div key = {doc.id} className = "imageContainer">
                       <img src={doc.url} alt="" className = "image"/>
                   </div>
               ))
            }
        </div>
    )
}

export default ImageGrid
