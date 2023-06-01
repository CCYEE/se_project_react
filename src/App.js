import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import ModalWithForm from './ModalWithForm/ModalWithForm';
import ItemModal from './ItemModal/ItemModal';
import { useEffect, useState } from 'react';
import { getForecastWeather, parseWeatherData } from './utils/weatherApi';


function App() {
  const [activeModal, setActiveModal] = useState('');
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

  const handleCreateModal = () => {
    setActiveModal('create');
  };
  const handleCloseModal = () => {
    setActiveModal('');
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview")
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header onCreateModal={handleCreateModal}/>
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard}/>
      <Footer />
      {activeModal ==='create' && (
        <ModalWithForm title='New Garment' onClose={handleCloseModal}>
          <label className='modal__label'>
            Name 
            <input className='modal__input' placeholder="Name" type='text' name='name' minLength='1' maxLength='30'/>
          </label>
          <label className='modal__label'>
            Image
            <input className='modal__input' placeholder="Image URL" type='text' name='link' minLength='1' maxLength='30'/>
          </label>
          <p className="modal__text">Select the weather type:</p>
          <div className="modal__buttons">
            <div className="modal__button">
              <input className="modal__button-input" type='radio' id='hot' value='hot' name="weather-type"/>
              <label> Hot </label>
            </div>
            <div className="modal__button">
              <input className="modal__button-input" type='radio' id='warm' value='warm' name="weather-type"/>
              <label> Warm</label>
            </div>
            <div className="modal__button">
              <input className="modal__button-input" type='radio' id='cold' value='cold' name="weather-type"/>
              <label> Cold</label>
            </div>
          </div>
        </ModalWithForm> 
      )}
      {activeModal === "preview" && <ItemModal selectedCard={selectedCard} onClose={handleCloseModal}/>}
    </div>
  );
}




export default App;
