import React from 'react'
import "./atclsetting.css";
const AtclSettings = () => {
  return (
    <div class="wrapper">
        <div class="container-bg">
            <div class="modal__block">
                <div class="modal__content">
                    <h3 class="modal__title">Редактировать объявление</h3>
                    <div class="modal__btn-close">
                        <div class="modal__btn-close-line"></div>
                    </div>
                    <form class="modal__form-newArt form-newArt" id="formNewArt" action="#">
                        <div class="form-newArt__block">
                            <label for="name">Название</label>
                            <input class="form-newArt__input" type="text" name="name" id="formName" placeholder="Введите название" value="Ракетка для большого тенниса Triumph Pro STС Б/У"/>
                        </div>
                        <div class="form-newArt__block">
                            <label for="text">Описание</label>                            
                            <textarea class="form-newArt__area" name="text" id="formArea" cols="auto" rows="10" placeholder="Введите описание">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
                        </div>
                        <div class="form-newArt__block">
                            <p class="form-newArt__p">Фотографии товара<span>не более 5 фотографий</span></p>
                            <div class="form-newArt__bar-img">
                                <div class="form-newArt__img">
                                    <img src="" alt=""/>
                                    <div class="form-newArt__img-cover"></div>                                    
                                </div>
                                <div class="form-newArt__img">
                                    <img src="" alt=""/>
                                    <div class="form-newArt__img-cover"></div>
                                </div>
                                <div class="form-newArt__img">
                                    <div class="form-newArt__img-cover"></div>
                                    <img src="" alt=""/>
                                </div>
                                <div class="form-newArt__img">
                                    <div class="form-newArt__img-cover"></div>
                                    <img src="" alt=""/>
                                </div>
                                <div class="form-newArt__img">
                                    <div class="form-newArt__img-cover"></div>
                                    <img src="" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div class="form-newArt__block block-price">
                            <label for="price">Цена</label>
                            <input class="form-newArt__input-price" type="text" name="price" id="formName" value="2 200"/>
                            <div class="form-newArt__input-price-cover"></div>
                        </div> 
                       
                        <button class="form-newArt__btn-pub btn-hov02" id="btnPublish">Сохранить</button>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AtclSettings