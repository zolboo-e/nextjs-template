import "tailwindcss/tailwind.css";

import type { AppPropsWithLayout } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const App: React.FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>,
    pageProps
  );
};
export default App;
