import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import styles from "../styles/CSVUploader.module.css"
import AWS from 'aws-sdk'
import _Alert from './Alert.js';

const AWS_ACCESS_KEY = "AKIASQVK4OV2CLU5MQM3"
const AWS_SECRET_ACCESS_KEY = "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"
const S3_BUCKET = "tiaa-hackathon-csv"
const REGION = "eu-north-1"

const NOTIFICATION_DELAY = 2000

AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
})

const NULL = "___NULL_ALERT____"
const sleep = ms => new Promise(r => setTimeout(r, ms));
const DEFAULT_TEXT = "Drag 'n' drop some files here, or click Upload"

function CSVUploader() {
    let [notification, setNotification] = useState(NULL)
    let [severity, setSeverity] = useState("error")

    let notify = (text, severity) => {
        setNotification(text)
        setSeverity(severity)
        sleep(NOTIFICATION_DELAY).then(() => { setNotification(NULL) })
    }

    const onDrop = useCallback(selectedFiles => {
        if (selectedFiles.length > 1) {
            notify("You can not upload multiple files at the same time!", "error")
            return
        }
        let file = selectedFiles[0]
        const params = {
            Body: file,
            Bucket: S3_BUCKET,
            Key: file.name
        };
        notify(`Uploading ${file.name}....`)
        myBucket.putObject(params)
            .send((err) => {
                if (err) {
                    notify(err.message, "error")
                    return
                }
            })
        notify(`${file.name} Uploaded Succesfully!`, "success")
    }, [])
    const { getRootProps, _, isDragActive } = useDropzone({ onDrop })

    return (
        <div className={styles.adminUpload}>
            {notification !== NULL ? <_Alert text={notification} severity={severity}/> : ""}
            <div className={styles.mainBox} {...getRootProps()}>
                <div className={styles.innerBox} >
                    {
                        isDragActive ?
                            <p>Drop the files here ...</p> :
                            <>
                                <p>{ DEFAULT_TEXT } </p>
                                <button className={styles.upload_btn}>Upload</button>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default CSVUploader;
