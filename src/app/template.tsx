"use client";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@base/styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { Inter } from "next/font/google";
import createEmotionCache from "@base/lib/client-cache";
import { PropsWithChildren } from "react";
import { Provider as StoreProvider } from "react-redux";
import store from "@base/store";
import { FooterNavigation } from "@base/components/navigation/footer";
import style from "@base/styles/page.module.css";
import { HeaderNavigation } from "@base/components/navigation/header";
import { persistStore } from "redux-persist";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";

const clientSideEmotionCache = createEmotionCache();
const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export default function Template({ children }: PropsWithChildren) {
  setTimeout(() => persistStore(store), 500);

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <StoreProvider store={store}>
            <HeaderNavigation />
            <main className={style.main}>
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </main>
            <FooterNavigation />
          </StoreProvider>
        </ThemeProvider>
      </body>
    </CacheProvider>
  );
}
