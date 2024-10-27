import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './OpenData.css';

const DogPhoto = () => {
  const [dogPhoto, setDogPhoto] = useState('');

  useEffect(() => {
    fetchDogPhoto();
  }, []);

  const fetchDogPhoto = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setDogPhoto(data.message);
  };

  return (
    <div className="dogPhotoContainer">
      <img src={dogPhoto} alt="Another Dog!" className="dogImage"/>
      <button onClick={fetchDogPhoto} className="dogButton">Click for another Dog!</button>
    </div>
  );
};

export default DogPhoto;