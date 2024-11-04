import '@/app/components/filters/filters.scss';
import { Pill } from '../pill/pill';

export function Filters({ currentCategory }: { currentCategory?: string }) {
  const categories = [ 'business', 'productivity', 'marketing', 'design', 'video', 'code', 'media resources',
  'ecommerce', 'research', 'writing', 'communication', 'automation', 'files', 'website tools', 'education', 'hiring'];

  return (
    <section className="filters">
      <ul className="pills filters__pills">
        <li><Pill text="all" size="small" href="/directory" active={!currentCategory}></Pill></li>
        {categories.map((category, index) => (
          <li key={index}>
            <Pill text={category} size="small" href={`/directory/${category}`} active={currentCategory ? decodeURIComponent(currentCategory) == category : false}></Pill>
          </li>
        ))}
      </ul>
    </section>
  );
}

