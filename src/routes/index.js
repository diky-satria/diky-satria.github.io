import React from "react";
import { Routes, Route } from "react-router-dom";

import Index from "../views/Index";
import Facebook from "../views/socmed/privacy_policy/Facebook";
import Instagram from "../views/socmed/privacy_policy/Instagram";
import FacebookPage from "../views/socmed/page/Facebook";
import InstagramPage from "../views/socmed/page/Instagram";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/app/fb" element={<FacebookPage />} />
        <Route path="/app/ig" element={<InstagramPage />} />
        <Route path="/app/fb/privacy-policy" element={<Facebook />} />
        <Route path="/app/ig/privacy-policy" element={<Instagram />} />
      </Routes>
    </div>
  );
}
