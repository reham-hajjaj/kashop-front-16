import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
   
    resources: {
      en: {
        translation: {
          "Hom": "Hom",
          "Register":"Register",
          "Login":"Login",
          "Cart":"Cart",
          "Products":"Products",
          "Categories":"Categories",

        }
      },
      ar: {
        translation: {
          "Hom": "الرئيسية",
          "Register":"انشاء حساب",
          "Login":"تسجيل الدخول",
          "Cart":"السلة",
          "Products":"المنتجات",
          "Categories":"التصنيفات",

        }
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

  });
