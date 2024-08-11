import React from 'react';
import Header from "./Header";
import Footer from "@/components/Layout/footer";

function Index({children, path="./", packages= [] }) {
  return (
    <>
      <Header path={path} packages={packages} />
      {children}
      <Footer path={path}/>
    </>
  );
}

export default Index;