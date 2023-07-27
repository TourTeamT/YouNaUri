import React from "react";
import { Outlet } from "react-router-dom";

export default function UserSelect() {
  return (
    <div>
      <div>유저</div>
      <Outlet />
    </div>
  )
}