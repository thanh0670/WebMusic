import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState("");

    useEffect(() => {
        const storedUser = localStorage.getItem("MUSIC_USERNAME");
        if (storedUser) {
            setUsername(storedUser);
            console.log(storedUser);
        }
    }, []);

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
};