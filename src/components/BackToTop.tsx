"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
const BackToTop = () =>{
    const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

    return(
        <>
        <Link href="#" className={`back-to-top ${visible ? "d-flex justify-content-center" : "d-none"}`}
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}>
                <i className="bi bi-arrow-up"></i>
        </Link>
        </>
    )
}
export default BackToTop