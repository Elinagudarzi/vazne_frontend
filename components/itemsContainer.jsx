import Items from "./items";
import React from "react";
import {فروشگاه} from "./Menus";
import {مجله} from "./Menus";
import {درباره} from "./Menus";
import {مربی} from "./Menus";

const itemsContainer = () => {
  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 text-center">
      <Items Links={فروشگاه} title="فروشگاه"/>
      <Items Links={مجله} title="مجله"/>
      <Items Links={مربی} title="مربی"/>
      <Items Links={درباره} title="درباره ما"/>
    </div>
    
  )
}

export default itemsContainer
