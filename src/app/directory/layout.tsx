import "@/app/global.scss";
import Header from "../components/header/header";
import { Input } from "../components/input/input";

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
        <Input type="text" placeholder="Search..." id="header-search" value="" />
      </Header>
      {children}
    </>
  );
}
