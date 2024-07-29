import "@/app/global.scss";
import Header from "../components/header/header";
import { Pill } from "../components/pill/pill";
import { ToolCard } from "../components/tool-card/tool-card";
import Select from "../components/select/select";
import { query } from "../lib/db";
import { SubmitTool } from "../components/submit-tool/submit-tool";
import MainNav from "../components/main-nav/main-nav";

export default async function Directory() { 
  const categories = [ 'business', 'productivity', 'marketing', 'design', 'video', 'code', 'media',
  'resources', 'ecommerce', 'research', 'writing', 'communication', 'automation', 'files', 'website',
  'tools', 'education', 'hiring'];

  const handleSelect = (value: string) => {
    console.log('Selected:', value);
  };

  const tools = await query(`SELECT 
  tool.id AS id,
  tool.name AS name,
  tool.description,
  tool.link,
  tool.icon,
  json_agg(
      json_build_object(
          'id', category.id,
          'name', category.name
      )
  ) AS categories
  FROM 
    tool
  JOIN 
    tool_category ON tool.id = tool_category.tool_id
  JOIN 
    category ON tool_category.category_id = category.id
  GROUP BY
    tool.id
  ORDER BY 
    tool.created_at DESC, tool.name;`, []);

  return (
    <main>
      <MainNav></MainNav>
      <Header
        title="Directory"
        paragraph="Browse our latest additions, filter by category or simply search for what you need."
      >
        <input type="text" placeholder="Search..." className="main-header__search search-input"></input>
        {/* <Select options={['Latest', 'Alphabetical']} ></Select> */}
      </Header>
      <section className="filters">
        <ul className="pills filters__pills">
          <li><Pill text="all" size="small"></Pill></li>
          {categories.map((category) => (
            <li>
              <Pill text={category} size="small"></Pill>
            </li>
          ))}
        </ul>
      </section>
      <section className="tool-list">
        {tools.rows.map((tool) => (
          <ToolCard
            icon={tool.icon}
            key={tool.id}
            name={tool.name}
            description={tool.description}
            categories={tool.categories}
            href={tool.link}
          />
        ))}
      </section>
    </main>
  );
}
