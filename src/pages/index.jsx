

// Đây là Scan

import React, { useState, useEffect } from 'react';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import './index.css'; // Import your CSS file
import { NavLink } from "react-router-dom";
import { Box } from "zmp-ui";

//cái này đ phải lỗi mà nhắc th

//khởi tạo giá trị




//Source for backend,logic structure
const App = () => {
    const [method, setMethod] = useState('upload');
    const [fileName, setFileName] = useState('');
    const [url, setUrl] = useState('');
    const [result, setResult] = useState('');
    const [outputType, setOutputType] = useState('image');
    const [labels, setLabels] = useState(false);
    const [stroke, setStroke] = useState('2'); // Default stroke value
    const [selectedApi, setSelectedApi] = useState(''); // Track selected API

    //Bắt đầu khai báo cho hệ thống là có 1 biến tên cld sẽ truy xuất dữ liệu từ cloud trên cloudinary
    const cld = new Cloudinary({
        cloud: { cloudname: 'dozxc6jqp' }
    });
    //Truy xuất dữ liệu mong muốn trong cloud
    const scanBox = cld.image('ScanImg_kbmxup');
    const imageUpload = cld.image('chooseImage_adnyec');
    const scanButton = cld.image('Scanbutton_fbjmx9');  
    



    const handleFileChange = (e) => { 
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedApi) { 
            alert('Vui lòng chọn loại cây');
            return;
        }

        const settings = await getSettingsFromForm();

        try {
            const response = await fetch(settings.url, {
                method: settings.method,
                headers: { 'Content-Type': 'application/json' },
                body: settings.data,
            });
            const data = await response[settings.format === 'json' ? 'json' : 'blob']();

            if (settings.format === 'json') {
                setResult(JSON.stringify(data, null, 4));
            } else {
                const imageUrl = URL.createObjectURL(data);
                setResult(`<div class="zoom-container"><img src="${imageUrl}" alt="Result" class="zoom-image"/><div class="zoom-controls">Zoom</div></div>`);
            }
        } catch (error) {

        }
    };


    const getSettingsFromForm = async () => {
        const parts = [
            `${selectedApi}?api_key=LNwJ9wZ9UMWq7PGcnsrv` //đây là quả key trên roboflow
        ];

        const format = 'image';
        parts.push(`&format=${format}`);
        setOutputType(format);

        // Append labels and stroke if enabled
        parts.push(`&labels=on`);
        parts.push(`&stroke=3`);

        let xhr;
        if (format === 'image') {
            xhr = new XMLHttpRequest(); //Initialize object để gọi API
            xhr.responseType = 'arraybuffer';
        }

        const method = 'upload';
        if (method === 'upload') {  //Nếu tao bấm chọn upload
            const fileInput = document.getElementById('file');
            const file = fileInput.files[0];
            if (!file) return alert('Please select a file.'); //Nếu chọn loại cây nhưng không tải ảnh lên

            const base64image = await getBase64fromFile(file);
            //url ở đây là 1 keyword để thực thi
            return { url: parts.join(''), method: 'POST', data: base64image, xhr }; //bắt đầu gọi API Rest
        } else {
            const url = document.getElementById('url').value;
            //'url' này đang chỉ là biến mới
            if (!url) return alert('Please enter an image URL'); //Nếu tao không bấm chọn

            parts.push(`&image=${encodeURIComponent(url)}`);
            return { url: parts.join(''), method: 'POST', xhr }; //XHR là một loại xin request API
        }
    };

    const getBase64fromFile = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });



    //UI
    return (



  

        <div className="App" style={{ paddingTop: '70px' }}>
            {/* Form điền vào*/ }
                <div className="header" style={{ color: 'white', fontSize:'40px',top:'85px',left:'140px'}}>
                    <strong>Scan</strong>
                </div>

                <div className="Scanimage" style={{ width: '346.28px', height: '372.28px', position: 'absolute',top:'20px' }} >
                    <AdvancedImage cldImg={scanBox} alt="Tìm kiếm" />
                </div>

                 <div className="Scanbutton" style={{ }} >
                    <AdvancedImage cldImg={imageUpload} alt="Nút" />
                </div>
            <form id="inputForm" onSubmit={handleSubmit}> 

                {/*Scan title */ }
                <div className="header" style={{ color: 'white', fontSize:'40px',top:'85px',left:'140px'}}>
                    <strong>Scan</strong>
                </div>

                <div className="Scanimage" style={{ width: '346.28px', height: '372.28px', position: 'absolute',top:'20px' }} >
                    <AdvancedImage cldImg={scanBox} alt="Tìm kiếm" />
                </div>

                 <div className="Scanbutton" style={{ }} >
                    <AdvancedImage cldImg={imageUpload} alt="Nút" />
                </div>

                <div>
                  <AdvancedImage cldImg={ scanButton} alt =" tải hình nút"/>
                </div>



                {/*Những cái ví dụ như cái box,nút submit rồi nút tải ảnh*/ }
                <div className="content">
                    <div className="content__grid">

                        {/* API Selection */}
                        <div className="col-12-m8"> {/*Lấy dữ liệu cây ngô*/ }
                            <label className="input__label" htmlFor="apiSelect"> Chọn cây</label>
                            <select
                                id="apiSelect" //Ở đây đang sử dụng APi để select các loại cây
                                className="input"
                                onChange={(e) => setSelectedApi(e.target.value)}
                                value={selectedApi}
                            >
                                <option value="" > </option>
                                <option value="https://detect.roboflow.com/argritec/1">Cây Lúa</option>
                                <option value="https://detect.roboflow.com/argritec/2">Cây Cà Chua</option>
                            </select>
                        </div>

                        {/* File Upload */}
                        {method === 'upload' && (
                            <div className="col-12-m8" id="fileSelectionContainer">
                                <label className="input__label" htmlFor="file"></label>
                                <div className="flex">
                                    <input
                                        className="input input--left flex-1"
                                        type="text"
                                        id="fileName"
                                        value={fileName}
                                        disabled
                                    />
                                    <button
                                        id="fileMock"
                                        className="bttn right active"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById('file').click();
                                        }}
                                    >
                                        Tải ảnh
                                    </button>
                                </div>
                                <input
                                    style={{ display: 'none' }}
                                    type="file"
                                    id="file"
                                    onChange={handleFileChange}
                                />
                            </div>
                        )}

                        {/* URL Input */}
                        {method === 'url' && (
                            <div className="col-12-m8" id="urlContainer">
                                <label className="input__label" htmlFor="url"></label>
                                <div className="flex">
                                    <input
                                        type="text"
                                        id="url"
                                        placeholder="https://path.to/your.jpg"
                                        className="input"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <button type="submit" className="bttn submit">
                    Gửi 
                </button>
            </form>

            <div id="output" className="result">
                {result && <div dangerouslySetInnerHTML={{ __html: result }} />}
            </div>

        </div>

    );
};

export default App;

