import "@/app/global.scss";
import Header from "./components/header/header";
import { Button } from "./components/button/button";
import { Pill } from "./components/pill/pill";
import { SubmitTool } from "./components/submit-tool/submit-tool";
import MainNav from "./components/main-nav/main-nav";
import MainFooter from "./components/footer/footer";

export default function Home() { 
  const categories = [ 'business', 'productivity', 'marketing', 'design', 'video', 'code', 'media',
  'resources', 'ecommerce', 'research', 'writing', 'communication', 'automation', 'files', 'website',
  'tools', 'education', 'hiring'];

  return (
    <main className="directory">
      <MainNav></MainNav>
      <Header
        title="Curated list of online tools and resources"
        paragraph="Get your work done better and faster than ever with the best tools on the internet."
      >
        <Button text="See latest tools"></Button>
        <ul className="pills main-header__pills">
          {categories.map((category) => (
            <li>
              <Pill text={category}></Pill>
            </li>
          ))}
        </ul>
      </Header>
      <SubmitTool />
      <MainFooter></MainFooter>
    </main>
  );
}
