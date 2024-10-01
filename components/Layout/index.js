import React from 'react';
import Header from "./Header";

function Index({children, path="./", packages= [] }) {
  return (
    <>
      <Header path={path} packages={packages} />
      {children}
    </>
  );
}

export default Index;