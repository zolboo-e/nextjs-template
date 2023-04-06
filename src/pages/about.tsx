//
import type { NextPageWithLayout } from "next";
import Link from "next/link";

//
import { MainLayout } from "@/lib/components";

const AboutPage: NextPageWithLayout = () => {
  return (
    <main>
      <Link href="/">{`Home Page`}</Link>
    </main>
  );
};
AboutPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default AboutPage;
