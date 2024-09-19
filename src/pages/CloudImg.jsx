import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";

const cloudImage = () => {
        const cld = new Cloudinary({
            cloud: { cloudname: 'dozxc6jqp' }
        });

    //Scan page
    const scanBox = cld.image('ScanImg_kbmxup');
    const imageUpload = cld.image('chooseImage_adnyec');
    const scanButton = cld.image('Scanbutton_fbjmx9');
};


export default cloudImage