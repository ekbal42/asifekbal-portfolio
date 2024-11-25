import React from "react";
import { getGitHubFileContent } from "./actions/gitFile";
import { Projects } from "./components/Projects";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
export default async function Home() {
  const decodedContent = await getGitHubFileContent("projects.json");
  const data = JSON.parse(decodedContent || "{}");
  return (
    <div className="p-4 xl:px-0 ">
      <Hero />
      <Projects data={data} />
      <Skills data={data} />
    </div>
  );
}
