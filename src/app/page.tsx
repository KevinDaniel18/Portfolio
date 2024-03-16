import { Header } from "./Components/Header";
import DownloadCv from "./Components/DownloadCv";
import Lema from "./Components/Lema";
import Footer from "./Components/Footer";
import SkillsInfo from "./Components/SkillsInfo";
import ExperienciesInfo from "./Components/ExperienciesInfo";
import ProjectsInfo from "./Components/ProjectsInfo";

export default function Home() {
  return (
    <div>
      <Header />
      <DownloadCv />
      <Lema />
      <div id="experiences">
        <ExperienciesInfo />
      </div>
      <div id="skills">
        <SkillsInfo />
      </div>
      <div id="projects">
        <ProjectsInfo />
      </div>
      <Footer />
    </div>
  );
}
