import "@/app/global.scss";
import Header from "../components/header/header";
import { Pill } from "../components/pill/pill";

export default async function DirectoryLayout({children}: { children: React.ReactNode }
) { 
  const categories = [ 'business', 'productivity', 'marketing', 'design', 'video', 'code', 'media resources',
  'ecommerce', 'research', 'writing', 'communication', 'automation', 'files', 'website tools', 'education', 'hiring'];


  return (
    <>
      <Header
        title="Directory"
        paragraph="Browse our latest additions, filter by category or simply search for what you need."
      >
        <input type="text" placeholder="Search..." className="main-header__search search-input"></input>
      </Header>
      <section className="filters">
        <ul className="pills filters__pills">
          <li><Pill text="all" size="small" href="/directory"></Pill></li>
          {categories.map((category) => (
            <li>
              <Pill text={category} size="small" href={`/directory/${category}`}></Pill>
            </li>
          ))}
        </ul>
      </section>
      {children}
    </>
  );
}
