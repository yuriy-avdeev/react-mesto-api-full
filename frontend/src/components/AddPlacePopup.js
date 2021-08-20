import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace, isSubmitting }) {

    const [name, setName] = React.useState('');
    const [url, setUrl] = React.useState('');

    React.useEffect(() => {
        if (!isOpen) {
            setName('');
            setUrl('');
        }
    }, [isOpen]);

    const handleNameInput = (evt) => {
        setName(evt.target.value);
    }

    const handleUrlInput = (evt) => {
        setUrl(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onAddPlace({ name, url });
        // evt.target.reset(); // <= только с useRef
    }

    return (
        <PopupWithForm
            title='Новая карточка'
            name='addPlace'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            buttonText={isSubmitting ? 'Создаем...' : 'Создать'}
        >
            <input
                id="place-input"
                name="name"
                type="text"
                className="popup__input popup__input_type_place"
                placeholder="Название"
                value={name}
                minLength="2"
                maxLength="30"
                onChange={handleNameInput}
                required
            />
            <span className="place-input-error popup__input-error"></span>
            <input
                id="url-input"
                name="link"
                type="url"
                className="popup__input popup__input_type_url"
                placeholder="Ссылка на картинку"
                value={url}
                onChange={handleUrlInput}
                required
            />
            <span className="url-input-error popup__input-error"></span>
        </PopupWithForm>
    );
}

export default AddPlacePopup;