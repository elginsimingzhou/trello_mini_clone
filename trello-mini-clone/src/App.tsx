import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Team from "./components/Team";
import Personal from "./components/Personal";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./contexts/context";

function App() {
  // const [isTeam, setIsTeam] = useState<boolean>(true);

  // const pageContent = isTeam ? <Team /> : <Personal />;

  const content = (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="team" element={<Team />} />
            <Route path="personal" element={<Personal />} />
          </Route>
          {/* <Header />
          {pageContent}
          <Footer /> */}
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
  return content;
}

export default App;
