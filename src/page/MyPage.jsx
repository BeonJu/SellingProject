import React from "react";
import UserInfo from './../component/myPage/userInfo';
import UserCart from "../component/myPage/userCart";
import Topbar from "../component/Topbar";
import Footer from "../component/Footer";

const MyPage = () => {
    return (
        <>
            <Topbar />
            <UserInfo />
            <UserCart />
            <Footer />
        </>
    );
};

export default MyPage;