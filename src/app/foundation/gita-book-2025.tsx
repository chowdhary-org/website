"use client";

import { useEffect } from "react";

export default function Redirect() {
  useEffect(() => {
    window.location.href =
      "https://chowdhary-org.github.io/bhagavadgita-ka-saral-paath/";
  }, []);

  return (
    <>
      <meta
        httpEquiv="refresh"
        content="0; url=https://chowdhary-org.github.io/bhagavadgita-ka-saral-paath/"
      />
      <p>
        <a href="https://chowdhary-org.github.io/bhagavadgita-ka-saral-paath/">
          Redirecting...
        </a>
      </p>
    </>
  );
}
