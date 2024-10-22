import '@/app/components/tool-list/tool-list.scss';
import { ToolCard } from '../tool-card/tool-card';
import { query } from "../../lib/db";
import { Filters } from '../filters/filters';

interface Category {
  id: string;
  name: string;
}

interface Tool {
  id: string;
  name: string;
  description: string;
  link: string;
  icon: string | null;
  categories: Category[];
}

export async function ToolList({ category }: { category?: string }) {
  let tools: { rows: Tool[] };

  if (!category) {
    tools = await query(`SELECT 
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
        tool.created_at DESC, tool.name;`, []) as unknown as { rows: Tool[] }; // Cast to the expected type
  } else {
    tools = await query(`SELECT 
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
      WHERE LOWER(category.name) = LOWER($1)
      GROUP BY
        tool.id
      ORDER BY 
        tool.created_at DESC, tool.name;`, [decodeURIComponent(category)]) as unknown as { rows: Tool[] }; // Cast to the expected type
  }

  return (
    <>
      <Filters currentCategory={category} />
      <section className="tool-list">
        {tools.rows.map((tool) => (
          <ToolCard
            key={tool.id}
            icon={tool.icon}
            name={tool.name}
            description={tool.description}
            categories={tool.categories}
            href={tool.link}
          />
        ))}
      </section>
    </>
  );
}
