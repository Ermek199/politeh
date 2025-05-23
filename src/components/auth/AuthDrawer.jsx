import { useState } from "react";
import {
  Div,
  Button,
  SideDrawer,
  Text,
  Input,
  Dropdown,
  Anchor,
} from "atomize"; 
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../store/reducers/reducer";

const AuthDrawer = ({ isOpen, onClose, mode }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    code: "",
    role: "manager", 
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState("form");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (mode === "signup" && step === "form") {
      if (form.password !== form.confirmPassword) {
        alert("Пароли не совпадают!");
        return;
      }

      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setStep("verify");
      }, 1500);
    } else if (mode === "signup" && step === "verify") {
      console.log("Проверка кода...");
      console.log("Email:", form.email);
      console.log("Код:", form.code);
      onClose();
      setStep("form");
    } else {
      // === Вход ===
      console.log("Вход...");
      console.log(form);
      dispatch(signIn(form.email, form.role)); // Добавляем роль в Redux
      navigate("/profile");
      onClose();
    }
  };

  const renderForm = () => (
    <>
      <Input
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        m={{ b: "1rem" }}
      />
      <Input
        placeholder="Пароль"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        m={{ b: "1rem" }}
      />
      {mode === "signup" && (
        <>
          <Input
            placeholder="Подтвердите пароль"
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            m={{ b: "1rem" }}
          />

          
          <Dropdown
            isOpen={form.showDropdown}
            onClick={() =>
              setForm((prev) => ({ ...prev, showDropdown: !prev.showDropdown }))
            }
            menu={
              <Div>
                {["Менеджер", "Управляющий магазина"].map((role, index) => (
                  <Anchor
                    key={index}
                    d="block"
                    p={{ y: "0.25rem" }}
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        role,
                        showDropdown: false, 
                      }))
                    }
                  >
                    {role}
                  </Anchor>
                ))}
              </Div>
            }
          >
            Выберите роль
          </Dropdown>

          <Text m={{ b: "1rem" }}> {form.role}</Text>
        </>
      )}
    </>
  );

  const renderVerification = () => (
    <>
      <Text m={{ b: "1rem" }}>
        Введите 6-значный код подтверждения, отправленный по SMS
      </Text>
      <Input
        placeholder="123456"
        name="code"
        value={form.code}
        onChange={handleChange}
        m={{ b: "2rem" }}
      />
    </>
  );

  return (
    <SideDrawer
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setStep("form");
      }}
      w={{ xs: "100vw", md: "30rem" }}
    >
      <Text tag="h4" textSize="heading" m={{ b: "2rem" }}>
        {mode === "signin"
          ? "Вход"
          : step === "form"
          ? "Регистрация"
          : "Подтвердите Email"}
      </Text>

      {isSubmitting ? (
        <Text m={{ b: "2rem" }}>Загрузка...</Text>
      ) : (
        <>
          {step === "form" ? renderForm() : renderVerification()}

          <Div d="flex" justify="flex-end">
            <Button
              onClick={() => {
                onClose();
                setStep("form");
              }}
              bg="gray200"
              textColor="medium"
              m={{ r: "1rem" }}
            >
              Отмена
            </Button>
            <Button onClick={handleSubmit} bg="info700">
              {mode === "signin"
                ? "Войти"
                : step === "form"
                ? "Зарегистрироваться"
                : "Подтвердить"}
            </Button>
          </Div>
        </>
      )}
    </SideDrawer>
  );
};

export default AuthDrawer;
