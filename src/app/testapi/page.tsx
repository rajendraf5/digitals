"use client";

import { useEffect, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
export default function TestApi() {
  const [products, setProducts] = useState<any[]>([]);
  const [color, setColor] = useState("red");  
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products); // array
    }

    fetchData();
  }, []);

  return (
    <>
       <section className="overflow-hidden position-relative">
            <div className="theme-gradient banner-technology-inner h-100" style={{ background: "url('/assets/images/main-banner4.jpg') no-repeat center center", backgroundSize: "cover" }}>
              <div className="container">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-12">
                    <div className="hero-content text-center">
                      <h1 className="fw-bolder">About</h1>
                      <Breadcrumbs />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-shape-image">
              <img className="img-fluid" src="/assets/images/background-shape.svg" alt="Bg images" />
            </div>
      </section>
   
        <div className="container">
            <div className="row">
              
          {products.length > 0 ? (
            products.map((item) => (
              <div className="col-lg-4" key={item.id} style={{ marginBottom: "20px" }}>
                <h3>
                  Name: {item.title} | Price: {item.price}
                </h3>
                <p>{item.description}</p>
                <img src={item.thumbnail} width={200} />
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
          </div>
        <h1>My favorite color is {color}</h1>
        <button type="button" onClick={() => setColor("blue")}>Change color to blue</button>
        <button type="button" onClick={() => setColor("green")}>Change color to green</button>
        <button type="button" onClick={() => setColor("red")}>Change color to red</button>
        <button type="button" onClick={() => setColor("purple")}>Change color to purple</button>


        </div>
    </>    
  );
}