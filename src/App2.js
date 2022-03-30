import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { Character, Home, Characters, NotFound } from "./screens";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
