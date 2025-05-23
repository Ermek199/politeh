// src/components/Auth/AuthButtons.jsx
import { useState } from "react";
import { Button, Div } from "atomize";
import AuthDrawer from "./AuthDrawer";

const AuthButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("signin");

  return (
    <>
      <Div p="80px" d="flex" flexDir="column" style={{gap:"1rem"}} >
        <Button
           h="3rem"
           w="12rem"
           p={{ x: "1.25rem" }}
           textSize="body"
           textColor="info700"
           hoverTextColor="info900"
           bg="white"
           hoverBg="info200"
           border="1px solid"
           borderColor="info700"
           hoverBorderColor="info900"
           m={{ r: "0.5rem" }}
          onClick={() => {
            setMode("signin");
            setIsOpen(true);
          }}
        >
          Ввойти 
        </Button>
        <Button
           h="3rem"
           w="12rem"
           p={{ x: "1.25rem" }}
           textSize="body"
           textColor="info700"
           hoverTextColor="info900"
           bg="white"
           hoverBg="info200"
           border="1px solid"
           borderColor="info700"
           hoverBorderColor="info900"
           m={{ r: "0.5rem" }}
          onClick={() => {
            setMode("signup");
            setIsOpen(true);
          }}
          
        >
          Регистрация
        </Button>

        <AuthDrawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          mode={mode}
        />
      </Div>
    </>
  );
};

export default AuthButtons;
