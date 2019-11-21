import React, { useEffect } from "react";
import Link from "next/link";
import Header from "../components/header";
import netlifyIdentity from "netlify-identity-widget";

function Home() {
  useEffect(() => {
    netlifyIdentity.init();
  }, []);
  return (
    <>
      <Header />
      <Link href="/adddog">
        <a>Add dog</a>
      </Link>
    </>
  );
}

export default Home;
