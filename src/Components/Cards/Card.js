import React from "react";
import "../Cards/Card.css"

export default function Card(props) {
  return (
    <>
      <div className="rounded overflow-hidden shadow-lg bg-slate-200 home-card">
        <img src={props.img} className="w-full h-60"></img>
        <div className="mt-3">
          <div className="text-sm text-center font-semibold">{props.title}</div>
        </div>
      </div>
    </>
  );
}
