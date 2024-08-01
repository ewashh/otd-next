import "@/app/global.scss";
import Header from "../components/header/header";

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
      {children}
    </>
  );
}
