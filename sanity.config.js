import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "cfe3x79l",
  dataset: "production",
  title: "Studio",
  apiVersion: "2023-11-04",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
