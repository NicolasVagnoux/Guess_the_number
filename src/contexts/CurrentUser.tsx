import React, { createContext, useState } from 'react';

type UserContent = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  avatar: string;
  setAvatar: React.Dispatch<React.SetStateAction<string>>;
};

type Props = { children: React.ReactNode };

const CurrentUserContext = createContext<UserContent>({
  name: '',
  setName: () => {},
  avatar: '',
  setAvatar: () => {},
});

export const CurrentUserContextProvider: React.FC<Props> = ({ children }) => {
  const [name, setName] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');

  return (
    <CurrentUserContext.Provider
      value={{
        name,
        setName,
        avatar,
        setAvatar,
      }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContext;
