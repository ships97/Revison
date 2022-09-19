import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Item } from "./Item";
import { PostPage } from "./PostPage";
import { ShowData } from "./ShowData";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/postpage" element={<PostPage />} />
      <Route path="/showdata" element={<ShowData />} />
      <Route path="/item/:id" element={<Item />} />
    </Routes>
  );
};
