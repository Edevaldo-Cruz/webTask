import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import * as S from "./styles";
import Qr from "qrcode.react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function QRCode() {
  const [mac, setMac] = useState();
  const [redirect, setRedirect] = useState(false);

  async function SaveMac() {
    if (!mac) {
      alert("Você precisa informar o numero que apareceu no celular!");
    } else {
      await localStorage.setItem("@todo/macaddress", mac);
      setRedirect(true);
      window.location.reload();
    }
  }

  return (
    <S.Container>
      {redirect && <Redirect to="/" />}
      <Header />
      <S.Content>
        <h1>CAPTURE O QRCODE PELO APP</h1>
        <p>suas atividade serão sincronizadas com a do seu celular.</p>
        <S.QRCodeArea>
          <Qr value="getmacaddress" size={350} />
        </S.QRCodeArea>
        <S.ValidationCode>
          <span>Digite a numeração que apareceu no celular</span>
          <input
            type="text"
            onChange={(e) => setMac(e.target.value)}
            value={mac}
          />
          <button type="button" onClick={SaveMac}>
            SINCRONIZAR
          </button>
        </S.ValidationCode>
      </S.Content>
      <Footer />
    </S.Container>
  );
}

export default QRCode;
