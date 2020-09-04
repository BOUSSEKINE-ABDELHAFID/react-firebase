import React from 'react'
import useFirestore from "../Hooks/useFirestore"
const ImageGrid = () => {
    const {docs} = useFirestore("images");
    return (
        <div>
            {
               docs && docs.map(doc => (
                   <div key = {doc.id}>
                       <img src={doc.url} alt=""/>
                   </div>
               ))
            }
        </div>
    )
}

export default ImageGrid
