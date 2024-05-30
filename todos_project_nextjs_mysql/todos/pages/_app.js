import React from "react";
import Header from "../components/Header";
// import { UserProvider } from "../utils/useContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <UserProvider> */}
      <Header />
      <div className="container mx-auto min-h-screen">
        <Component {...pageProps} />
      </div>
      {/* </UserProvider> */}
    </>
  );
}
