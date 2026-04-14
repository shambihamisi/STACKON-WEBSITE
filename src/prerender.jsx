import React from "react";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";

export async function prerender() {
  const helmetContext = {};

  const html = renderToString(
      <HelmetProvider context={helmetContext}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </HelmetProvider>
  );

  const { helmet } = helmetContext;

  const head = {
    lang: "en",
    title: helmet?.title?.toString()?.replace(/<\/?title>/g, "") || "StackOn Technologies",
    elements: new Set([
      {
        type: "meta",
        props: {
          name: "description",
          content:
            "Stackon is a Kenya-based company that offers Website Development, Data Analytics, Cloud Services and Branding services",
        },
      },
    ]),
  };

  return { html, head };
}