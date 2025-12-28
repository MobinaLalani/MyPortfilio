import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Hero from "./hero/page";
import About from "./about/page";
import FrontText from "../components/section/frontText/index"
import Skills from "./skills/page";
import Projects from "./projects/page";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div>
<Hero/>
<FrontText/>
<About/>
<Skills/>
<Projects/>
    </div>
  );
}
