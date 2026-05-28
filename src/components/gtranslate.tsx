"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtranslateSettings?: {
      default_language: string;
      languages: string[];
      native_language_names: boolean;
      detect_browser_language: boolean;
      wrapper_selector: string;
      switcher_horizontal_position: string;
      switcher_vertical_position: string;
      flag_style: string;
    };
  }
}

export default function GTranslateWidget() {
  useEffect(() => {
    // remove old widget instances
    document.querySelectorAll(".gt_float_switcher").forEach((el) => el.remove());
    document.querySelectorAll(".gt_options").forEach((el) => el.remove());
    document.querySelectorAll(".gt-selected").forEach((el) => el.remove());

    const oldScript = document.getElementById("gtranslate-script");
    if (oldScript) oldScript.remove();

    const wrapper = document.querySelector(".gtranslate_wrapper");
    if (wrapper) wrapper.innerHTML = "";

     window.gtranslateSettings = {
      default_language: "en",
      languages: [
        "en",
  "hi",
  "as",
  "bn",
  "gu",
  "kn",
  // "ks",
  // "kok",
  "mai",
  "ml",
  "mr",
  "ne",
  "or",
  "pa",
  "sa",
  // "sat",
  "sd",
  "ta",
  "te",
  "ur",
  "doi",
  // "mni",
      ],
      native_language_names: false,
      detect_browser_language: false,
      wrapper_selector: ".gtranslate_wrapper",
      switcher_horizontal_position: "right",
      switcher_vertical_position: "bottom",
      flag_style: "none",
    };
     const fallbackLabels = [
       "English",
  "Hindi",
  "Assamese",
  "Bengali",
  "Gujarati",
  "Kannada",
  // "Kashmiri",
  // "Konkani",
  "Maithili",
  "Malayalam",
  "Marathi",
  "Nepali",
  "Odia",
  "Punjabi",
  "Sanskrit",
  // "Santali",
  "Sindhi",
  "Tamil",
  "Telugu",
  "Urdu",
  "Dogri",
  // "Manipuri",
    ];

    const languageMap: Record<string, string> = {
      en: "English",
    hi: "Hindi",
    as: "Assamese",
    bn: "Bengali",
    gu: "Gujarati",
    kn: "Kannada",
    // ks: "Kashmiri",
    // kok: "Konkani",
    mai: "Maithili",
    ml: "Malayalam",
    mr: "Marathi",
    ne: "Nepali",
    or: "Odia",
    pa: "Punjabi",
    sa: "Sanskrit",
    // sat: "Santali",
    sd: "Sindhi",
    ta: "Tamil",
    te: "Telugu",
    ur: "Urdu",
    doi: "Dogri",
    // mni: "Manipuri",
    };

    const replaceLabelsInEnglish = () => {
      const optionLinks = document.querySelectorAll(
        ".gt_float_switcher .gt_options a"
      );

      optionLinks.forEach((link, index) => {
        const anchor = link as HTMLAnchorElement;
        const href = anchor.getAttribute("href") || "";

        let langCode = "";
        const match =
          href.match(/\/([a-z-]{2,10})\//i) ||
          href.match(/[?&]lang=([a-z-]{2,10})/i) ||
          href.match(/\|([a-z-]{2,10})$/i);

        if (match) {
          langCode = match[1].toLowerCase();
        }

        const finalLabel =
          languageMap[langCode] || fallbackLabels[index] || "Language";

        anchor.textContent = finalLabel;
      });

      const currentLang = document.querySelector(
        ".gt_float_switcher .gt-selected .gt-current-lang"
      ) as HTMLElement | null;

      if (currentLang) {
        const currentText = (currentLang.textContent || "").trim().toLowerCase();

        if (!currentText || currentText === "undefined") {
          currentLang.textContent = "Select Language";
        } else {
          const matchedEntry = Object.entries(languageMap).find(
            ([, value]) => value.toLowerCase() === currentText
          );
          if (matchedEntry) {
            currentLang.textContent = matchedEntry[1];
          }
        }
      }
    };
    const script = document.createElement("script");
    script.id = "gtranslate-script";
    script.src = "/assets/js/translate-language.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.querySelectorAll(".gt_float_switcher").forEach((el) => el.remove());
      document.querySelectorAll(".gt_options").forEach((el) => el.remove());
      document.querySelectorAll(".gt-selected").forEach((el) => el.remove());

      const addedScript = document.getElementById("gtranslate-script");
      if (addedScript) addedScript.remove();

      const wrapperCleanup = document.querySelector(".gtranslate_wrapper");
      if (wrapperCleanup) wrapperCleanup.innerHTML = "";
    };
  }, []);

  return (
    <>
      <div className="gtranslate_wrapper" />

      <style jsx global>{`
        .gt_float_switcher img,
        .gt_options img,
        .gt-selected img,
        .nturl img {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
          opacity: 0 !important;
          visibility: hidden !important;
        }
        #gt_float_wrapper
        {   position: relative !important;
            top: 0px !important;
            right: inherit !important;
            display: flex;
            align-items: center;
        }
        .gt_float_switcher .gt_options.gt-open {
            opacity: 1;
            transform: translateX(0px);
           
        }
        .gt_float_switcher .gt_options{
            position: absolute !important;
            top: 20px;
            min-width: 14rem;
            right:0;
            border-radius: .25rem;
            background: var(--menu-dropdown-bg);
            border: 1px solid var(--border-color); 
            box-shadow: 0 0 10px #00000040;
        }
        .gt_float_switcher {
            font-size: initial !important;
            // width: 44px;
            color: currentColor !important;
            background: transparent !important;
        }    
         .gt_float_switcher .gt-selected .gt-current-lang{
            padding: inherit !important;
            color: currentColor !important;
            box-shadow: var(--box-shadow-2);
            font-weight:normal !important
        }   
        .gt_float_switcher .gt-selected{
           background: transparent !important;
           text-transform: capitalize !important;
        }
        .gt_float_switcher .gt-selected a,
        .gt_float_switcher .gt_options a {
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
          padding: 6px 15px !important;
           color: var(--lang-menu-color) !important;
        }
          .gt_float_switcher .gt_options a:hover {
            background: var(--menu-hover) !important;
            color: var(--color-white) !important;
        }
       
        .gt_float_switcher .gt-selected .gt-current-lang span.gt-lang-code {
          top: auto !important;
        }    
      `}</style>
    </>
  );
}