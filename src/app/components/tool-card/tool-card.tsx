import '@/app/components/tool-card/tool-card.scss';
import Image, { StaticImageData } from 'next/image';
import defaultIcon from '../../../../public/tool-icons/default.svg'
import { Pill } from '../pill/pill';

type Category = {
  id: string;
  name: string;
};

interface ToolCardProps {
  name: string;
  description: string;
  categories: Category[];
  icon?: string | StaticImageData | null;
  href: string;
}

export function ToolCard({ name, description, categories, icon, href }: ToolCardProps) {
  return (
    <a className={`tool-card`} href={`${href}?ref="onlinetool.directory"`}>
      <header className="tool-card__header">
        <div className="tool-card__image-wrapper">
          <Image
            src={ icon ? `/tool-icons/${icon}` : defaultIcon}
            width={30}
            height={30}
            alt={`${name} icon`}
            className="tool-card__image"
          />
        </div>
        <span className="tool-card__name">{name}</span>
      </header>
      <div className="tool-card__content">
        <p className="tool-card__description">{description}</p>
        {categories && 
          <ul className="tool-card__categories">
            {categories.map(({id, name}) => (
              <li key={id}>
                <Pill text={name} size="small" href={`/directory/${name}`}></Pill>
              </li>
            ))}
          </ul>
        }
      </div>
    </a>
  );
}
