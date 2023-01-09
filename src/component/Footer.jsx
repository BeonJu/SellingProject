import React from 'react';
import '../stylesheets/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerWrapper">
        <div className="footer-level01 font-Pret">
          <div className="logo">
            <h2>
              <img src={'images/LogoResizing.png'} alt="logo" />
            </h2>
          </div>
          <div className="footerDepth">
            <ul>
              <li>
                <a href="#">공지사항</a>
              </li>
              <li>
                <a href="#">매장안내</a>
              </li>
              <li>
                <a href="#">제휴문의</a>
              </li>
              <li>
                <a href="#">대리점 개설문의</a>
              </li>
              <li>
                <a href="#">고객센터</a>
              </li>
              <li>
                <a href="#">1:1 고객상담</a>
              </li>
              <li>
                <a href="#">사이트맵</a>
              </li>
            </ul>
          </div>
          <hr></hr>
        </div>
        <div className="footer-level02 font-Pret">
          <div>
            <address>
              서울특별시 강남구 언주로 541 에프앤에프빌딩 (주)에프앤에프/
            </address>
            <p>
              사업자등록번호:153-81-02451 /<span>대표:김창수</span>
            </p>
            <p>TEL.2022-1030, 832-2022-1107</p>
            <p>Fax : 02 - 520 - 0091</p>
            <p>COPYRIGHT 2019. EZEN. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
