'use client'

import { ThemeProvider as NextThemesProvider } from "next-themes"
import React, { ReactNode } from 'react';

interface ThemeProviderProps {
    children: ReactNode;
    [key: string]: any; 
  }

  export function ThemeProvider({ children, ...props }: Readonly<ThemeProviderProps>) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}