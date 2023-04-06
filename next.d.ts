import type { NextPage, NextPageWithLayout } from "next";
import type { AppProps } from "next/app";
import type { ReactElement } from "react";

declare module "next" {
  export declare type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement, pageProps: P) => ReactNode;
  };
}
declare module "next/app" {
  export declare type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
  };
}
