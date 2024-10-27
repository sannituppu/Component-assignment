import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

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
    <div>
      <img src={dogPhoto} alt="Another Dog!"/>
      <button onClick={fetchDogPhoto}>Click for another Dog!</button>
    </div>
  );
};

export default DogPhoto;