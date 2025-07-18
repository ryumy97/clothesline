import React from 'react';
import GridLayout from '../ui/GridLayout';
import { Link } from '../types/Link';
import Button from '../ui/Button';
import Richtext from '../ui/Richtext';

type Props = {
  title?: string;
  description?: string;
  button?: Link;
  text: string;
};

const RichtextBlock: React.FC<Props> = props => {
  const { title, description, button, text } = props;

  return (
    <GridLayout>
      <div className="col-start-1 col-end-5 md:col-start-1 md:col-end-7">
        <h2>{title}</h2>
        <p className="mt-6">{description}</p>
        {button?.href && (
          <Button asChild className="mt-8">
            <a href={button.href} target={button.target}>
              {button.label}
            </a>
          </Button>
        )}
      </div>
      <div className="col-start-1 col-end-5 md:col-start-7 md:col-end-13">
        <Richtext text={text} />
      </div>
    </GridLayout>
  );
};

export default RichtextBlock;
