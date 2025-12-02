import type { Metadata } from "next";
import { ReactNode } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

export const metadata: Metadata = {
  title: "Video Flow",
};

const theme = createTheme({
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
