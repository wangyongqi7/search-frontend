import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import {Card, message, Upload} from 'antd';

const { Dragger } = Upload;
const port = process.env.PORT || 3000;
const props = {
    name: 'file',
    multiple: true,
    action: '/api/file',

    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

const App = () => {
    return (
        <Card title={"选择图片上传"} size={"small"}>
            <Dragger {...props} >
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                    banned files.
                </p>
            </Dragger>
        </Card>
        )
}



export default App;