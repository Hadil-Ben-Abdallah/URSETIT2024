import React, { createContext, useContext, useState } from 'react';

const PhotoContext = createContext();

export function PhotoProvider({ children }) {
  const [photoUrl, setPhotoUrl] = useState('');

  return (
    <PhotoContext.Provider value={{ photoUrl, setPhotoUrl }}>
      {children}
    </PhotoContext.Provider>
  );
}

export function usePhoto() {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhoto must be used within a PhotoProvider');
  }
  return context;
}
