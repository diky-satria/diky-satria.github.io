import React from "react";
import { Routes, Route } from "react-router-dom";

import Index from "../views/Index";
import Facebook from "../views/socmed/Facebook";
import Instagram from "../views/socmed/Instagram";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/app/fb/privacy-policy" element={<Facebook />} />
        <Route path="/app/ig/privacy-policy" element={<Instagram />} />
      </Routes>
    </div>
  );
}
