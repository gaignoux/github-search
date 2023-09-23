"use client";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@base/styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { Inter } from "next/font/google";
import createEmotionCache from "@base/lib/client-cache";
import { PropsWithChildren } from "react";

const clientSideEmotionCache = createEmotionCache();
const inter = Inter({ subsets: ["latin"] });

export default function Template({ children }: PropsWithChildren) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </CacheProvider>
  );
}
