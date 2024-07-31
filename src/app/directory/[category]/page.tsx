import { ToolList } from "@/app/components/tool-list/tool-list";
import "@/app/global.scss";
export default async function Page({ params }: { params: { category: string } }) {
  return (
    <ToolList category={params.category} />
  );
}