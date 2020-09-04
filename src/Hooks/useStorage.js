import { useEffect, useState} from 'react'
import {projectStorage, projectFirestore, timestamp} from "../firebase/config"
const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        const firestoreRef = projectFirestore.collection("images");
        storageRef.put(file).on('state_changed', (snap)=> {
            let percentage = (snap.bytesTransferred/snap.totalBytes) * 100;
            setProgress(percentage);
        },
        (error)=> {
            setError(error);
        }, async ()=> {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            firestoreRef.add({url, createdAt})
            setUrl(url);
        })
    }, [file])
    return {progress, error, url}
}

export default useStorage
