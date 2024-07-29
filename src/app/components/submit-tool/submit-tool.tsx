import '@/app/components/submit-tool/submit-tool.scss';
import { ToolCard } from '../tool-card/tool-card';
import { Button } from '../button/button';

export function SubmitTool() {
  return (
    <section className="submit-tool">
      <form>
        <div className="submit-tool__form-content">
          <header className="submit-tool__header">Submit a tool</header>
          <input type="url" id="submit-link" placeholder="Link" />
          <input type="text" id="submit-tool__name" placeholder="Name"/>
          <input type="text" id="submit-tool__description" placeholder="Description" />
          <input type="url" id="submit-link" placeholder="Icon" />
          <input type="url" id="submit-link" placeholder="Categories" />
          <Button text="Submit to directory" />
        </div>
      </form>
      <ToolCard name="Name" description="Description" categories={['other']}/>
    </section>
  );
}
