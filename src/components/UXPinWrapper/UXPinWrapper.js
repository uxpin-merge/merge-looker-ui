// eslint-disable-next-line no-unused-vars
import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import boilerplateTheme from "./boilerplate-theme";
import { ComponentsProvider, ExtendComponentsThemeProvider } from '@looker/components';

const theme = createTheme(boilerplateTheme);

export default function UXPinWrapper({ children }) {

  return (<ComponentsProvider >
    <ExtendComponentsThemeProvider
          themeCustomizations={theme}
        >{children}
          </ExtendComponentsThemeProvider></ComponentsProvider>);
}