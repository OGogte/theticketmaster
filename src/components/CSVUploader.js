import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import styles from "../styles/CSVUploader.module.css"
import AWS from 'aws-sdk'

const AWS_ACCESS_KEY = "AKIASQVK4OV2CLU5MQM3"
const AWS_SECRET_ACCESS_KEY = "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"
const S3_BUCKET = "tiaa-hackathon-csv"
const REGION = "eu-north-1"

AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
})

function CSVUploader() {
    let [uploadText, setUploadText] = useState("Drag 'n' drop some files here, or click Upload")
    const onDrop = useCallback(selectedFiles => {
        let count = 0
        selectedFiles.forEach((file, index) => {
            const params = {
                Body: file,
                Bucket: S3_BUCKET,
                Key: file.name
            };
            setUploadText(`Uploading ${index} out of ${selectedFiles.length} files...`)
            myBucket.putObject(params)
                .on('httpUploadProgress', (evt) => {
                    console.log(Math.round((evt.loaded / evt.total) * 100))
                })
                .send((err) => {
                    console.log(err)
                })
            count++
        })
        setUploadText(`Uploaded ${count}/${selectedFiles.length} files Succesfully`)
    }, [])

    const { getRootProps, _, isDragActive } = useDropzone({ onDrop })

    return (
        <div className={styles.mainBox} {...getRootProps()}>
            <div className={styles.innerBox} >
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <>
                            <p>{uploadText}</p>
                            <button className={styles.upload_btn}>Upload</button>
                        </>
                }
            </div>
        </div>
    )
}

export default CSVUploader;
