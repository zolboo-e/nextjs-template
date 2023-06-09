//
import type { NextPageWithLayout } from "next";
import Link from "next/link";

//
import { MainLayout } from "@/lib/components";

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Link href="/about">{`About Page`}</Link>
    </>
  );
};
HomePage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
