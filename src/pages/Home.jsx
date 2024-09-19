import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { NavLink } from "react-router-dom";
import './home.css';


/*
Khai báo
*/
const Home = () => {
    const cld = new Cloudinary({
        cloud: { cloudName: 'dozxc6jqp' }
    });

 /* Truy xuất dữ liệu mong muốn thông qua public ID*/ 
    const searchIcon = cld.image('bar_search_hjac0m');
    const calendarIcon = cld.image('timecare_kajvsp');
    const scanIcon = cld.image('Scan_mngzut');
    const shareIcon = cld.image('Share_xkwyye');
    const diaryIcon = cld.image('Nhatky_e4bhno');
    const dataIcon = cld.image('Database_qojg8p');
    const adviceImage = cld.image('Advice_u38c2v');
    const greenLeaves = cld.image('Back_top_ieqfvz');
    const messageIcon = cld.image('message2_lpdc5c');
    const bellIcon = cld.image('bell_s7szvj');
    const step1 = cld.image('1_yjm8vw');
    const step2 = cld.image('2_asreun');
    const step3 = cld.image('3_test_ci6luf');
    const phanTrang = cld.image('phantrang_pozof4');
    const heoRu = cld.image('heoru_qrqwms');
    const domVan = cld.image('domvan_qeybed');
    const domDen = cld.image('domden_m8uaer');


    return (
        <nav style={{ display: 'flex', justifyContent: 'center', padding: '10px', borderTop: '0px solid #ddd', color: 'white' }}>

            <div classname="title" style={{ position: 'absolute', top: '95px', left: '15px', zIndex: 100, text: 'white', fontSize: '21px',  }} >
                <strong>Danh mục </strong>
            </div>
            <div className="title" style={{ position: 'absolute', top: '350px', left: '15px', zIndex: 100, text: 'white', fontSize: '20px' }}>
                <strong>Hướng dẫn </strong>

            </div>
            <div className="title" style={{ position: 'absolute', top: '495px', left: '90px', zIndex: 100, text: 'white', fontSize: '20px' }}>
            <strong>Bệnh thường gặp </strong>
            
            </div>
            {/* Background đây */}
            <div className="background-container">
                <AdvancedImage cldImg={greenLeaves} alt="Hình nền" style={{ width: '567px', height: '111px', position: 'absolute', position: 'absolute', top: -23, left: 0 ,zIndex: -50}} />
            </div>

            {/* Search Bar */}
            <div className="search-container">
                <AdvancedImage cldImg={searchIcon} alt="Tìm kiếm" style={{ width: '352px', height: '39px', position: 'absolute', top: '118px', left: '5px' }} />
            </div>

            {/* khung trắng */}
            <div className="white-box" style={{ position: 'absolute', width: '350px', height: '160px', backgroundColor: 'white', top: '180px', padding: '20px', borderRadius: '15px' }}>



                {/* Icons function */}
                <div className="icon-container">
                    <NavLink to="/scan" className={({ isActive }) => (isActive ? 'active' : '')} style={{ margin: '0 10px' }}>
                        <AdvancedImage cldImg={scanIcon} alt="Quét" style={{ width: '61px', height: '52px', position: 'absolute', top: '15px', right: '25px',zIndex:3000 }} />
                    </NavLink>
                    <NavLink to="/About" className={({ isActive }) => (isActive ? 'active' : '')} >
                        <AdvancedImage cldImg={adviceImage} alt="Lời khuyên" style={{ width: '64px', height: '56px', position: 'absolute', top: '15px', left: '145px' }} />
                    </NavLink>
                    <AdvancedImage cldImg={diaryIcon} alt="Nhật ký trồng cây" style={{ width: '75px', height: '72px', position: 'absolute', top: '12px', left: '28px' }} />
                    <AdvancedImage cldImg={dataIcon} alt="Dữ liệu thực vật" style={{ width: '96px', height: '67px', position: 'absolute', top: '80px', left: '28px' }} />
                    <AdvancedImage cldImg={shareIcon} alt="Chia sẻ cho bạn bè" style={{ width: '51px', height: '55px', position: 'absolute', top: '90px', right: '25px' }} />
                    <AdvancedImage cldImg={calendarIcon} alt="Lịch chăm sóc" style={{ width: '83px', height: '56px', position: 'absolute', top: '90px', left: '143px' }} />
                </div>
            </div>

            <div className="notification">
                <AdvancedImage cldImg={bellIcon} alt="chuông thông báo" style={{ position: 'absolute', top: "-3px", right: "3px", width: '39px', height: '60px', }} />
                <AdvancedImage cldImg={messageIcon} alt="chuông thông báo" style={{ position: 'absolute', top: "10px", right: "50px", width: '31px', height: '33px', }} />
            </div>


            <div className="tutorial">
                <AdvancedImage cldImg={step1} alt="bước 1" style={{ position: "absolute", top: '385px', left: '25px', width: '87px', height: '101px' }}/>
                <AdvancedImage cldImg={step2} alt="bước 2" style={{ position: "absolute", top: '385px', left:  '140px', width: '87px', height: '108px' }} />
                <AdvancedImage cldImg={step3} alt="bước 3" style={{ position: "absolute", top: '385px', right: '25px', width: '87px', height: '140px' }} />
            </div>

            <div className="Common">
                <AdvancedImage cldImg={domVan} alt="Đốm vằn,khô vằn" style={{ position: "absolute", top: '550px', left: '15px', width: '69px', height: '98px' }} />
                <AdvancedImage cldImg={phanTrang} alt="Phấn trắng" style={{ position: "absolute", top: '550px', left: '100px', width: '114px', height: '85px' }} />
                <AdvancedImage cldImg={domDen} alt="Đốm đen" style={{ position: "absolute", top: '555px', right: '55px', width: '121px', height: '85    px' }} />
                <AdvancedImage cldImg={heoRu} alt="Héo rũ trắng gốc" style={{ position: "absolute", top: '550px', right: '15px', width: '69px', height: '98px' }} />

            </div>


          


        </nav>
    );
}

export default Home;