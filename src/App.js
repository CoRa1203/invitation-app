import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import photo from "./../src/img/photo.png";
import hoverPhoto from "./img/butt.png";
import hoverPhoto5 from "./img/sit.png";
import hoverPhoto2 from "./img/yow.png";
import hoverPhoto3 from "./img/dressCode.png";
import hoverPhoto4 from "./img/program.png";
import hoverPhoto6 from "./img/gift.png";
import Modal from "./components/modal/Modal";
import Tooltip from "./components/Tooltip/Tooltip";

function App() {
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    content: null,
    accordionData: [], // Добавляем данные для аккордеонов
  }); /*хранятся данные для можального окна*/

  const openModal = (title, content, accordionData,  modalText) => {
    setModalData({ title, content, accordionData, modalText});
    setVisible(true);
  }; /*Принимает заголовок и контент для модального окна. Устанавливает состояние modalData и делает модальное окно видимым.*/

  return (
    <div className="App">
      <div className="container">
        <h1 className="h1">
          Приглашение на ежегодное празднование, появления на свет этой
          соски-нереалки - 15.03.2025г. в 14.00 <br />
          <span className="smallText">
            15.03.2025 - когда нужно приходить. Родилась я 12.03, если что
          </span>
        </h1>
        <div className="content">
          <img className="photo" src={photo} alt="photoMain" />
          <div className="button-container1">
            <button
              onClick={() =>
                openModal("Где?", <img src={hoverPhoto} alt="где" />, [
                  { title: "В п   .   .   .   .", content: <p>постоянном месте обитания соски-нереалки - у нее дома. Кто не помнит адрес, пишите соске-нереалке в тг.</p> },

                ])
              }
              className="info-block block1"
            >
              Где
              <img
                className="hoverPhoto info-block-photo "
                src={hoverPhoto}
                alt="hoverPhoto"
              />
            </button>
          </div>
          <div className="button-container2">
            <button
              onClick={() =>
                openModal("Еда", <img src={hoverPhoto2} alt="еда" />, [], 'Питаемся исключительно энергией солнца. Деняг и сил нет устраивать пир. Есть идея запихать картоху с курой в духовку и возможно салатиков поделать простых, чтобы не откинуться от голодного обморока. Если есть идеи и пожелания по еде, добро пожаловать в тг.' )
              }
              className="info-block block2"
            >
              Еда
              <img
                className="hoverPhoto2 info-block-photo "
                src={hoverPhoto2}
                alt="hoverPhoto"
              />
            </button>
          </div>
          <div className="button-container3">
            <button
              onClick={() =>
                openModal("Дресс-код", <img src={hoverPhoto3} alt="дресс-код" />, [], 'Скажем "нет" трусикам! (почему? см. п.1 раздел "Программа"). А вообще надевайте, что хотите.')
              }
              className="info-block block3"
            >
              Дресс-код
              <img
                className="hoverPhoto3 info-block-photo "
                src={hoverPhoto3}
                alt="hoverPhoto"
              />
            </button>
          </div>
          <div className="button-container4">
            <button
              onClick={() =>
                openModal("Программа", <img src={hoverPhoto4} alt="программа" />, [], '1) Играем в "Очко";\n2) Тащите настолки, которые сможете до меня донести; \n3) По классике "беседы о важном: поныть на все темы, обсудить болячки, заговнить мужланов, улететь в закат на метле и многое другое;\n\n Если есть интересные предложения, жду в тг')
              }
              className="info-block block4"
            >
              Программа
              <img
                className="hoverPhoto4 info-block-photo "
                src={hoverPhoto4}
                alt="hoverPhoto"
              />
            </button>
          </div>
          <div className="button-container5">
            <button
              onClick={() =>
                openModal("Доп.люди", <img src={hoverPhoto5} alt="доп.люди" />, [], 'Вход строго по приглашению, но если с вами будут горячие азиаты или 2Д мужики, то Welcome в мою кроватку')
              }
              className="info-block block5"
            >
              Доп.люди
              <img
                className="hoverPhoto5 info-block-photo "
                src={hoverPhoto5}
                alt="hoverPhoto"
              />
            </button>
          </div>
          <div className="button-container6">
            <button
              onClick={() =>
                openModal("Подарок", <img src={hoverPhoto6} alt="подарок" />, [], 'Самый лучший подарок - пожизненное безвозмездное содержание соски-нереалки, но помимо этого подойдет следующее:\n\n1) Пижама. Милая пижамка или сорочка. Да, у меня уже пижам больше, чем выходной одежды, но это же моя рабоча форма. На работу нужно ходить в подобающем виде. Какая пижама? Все, что в поисковике находится с припиской "корея" зайдет мне на 90% (мб наебала, но это не точно)\n3) Мерч по аниме, сериалам, играм. Моя последняя и текущая гиперфиксация - игра "Resident evil". Мои соболезнования тем, кто активно общается со мной в период этого гиперфикса\n4) Трусы, носки, тканевые маски для лица, прикольные заколки, украшения\n5) Прочитайте первое предложение "Самый лучший подарок.....". Если все скинутся, то рили получится не так дорого (✯◡✯)\n6) Если мало инфы, иди в тг или думай своим брэйном :D')
              }
              className="info-block block6"
            >
              Подарок
              <img
                className="hoverPhoto6 info-block-photo "
                src={hoverPhoto6}
                alt="hoverPhoto"
              />
            </button>
          </div>
        </div>
        <div className="lowerInfo">
          <div className="lowerInfoContent">
            <h1>Придешь к соске-нереалке? </h1>
            <div className="submitBtns">
              <Tooltip text="Пизда. Я не умею работать с формами, поэтому ответ жду в тг :D"> <Button text="Да" /></Tooltip>
              <Tooltip text="Пидора ответ. Я не умею работать с формами, поэтому ответ жду в тг :D"> <Button text="Нет" /></Tooltip>
            </div>
          </div>
        </div>
      </div>
      <Modal
        visible={visible}
        setVisible={setVisible}
        title={modalData.title}
        accordionData={modalData.accordionData}
        modalText={modalData.modalText}
      >
        {modalData.content}

      </Modal>
    </div>
  );
}

export default App;
