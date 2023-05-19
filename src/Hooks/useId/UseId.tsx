import React, { FC } from "react";
import "./card.css";
import { data } from "./cardData";

/**
 * TASK 1: Review the code and describe what is wrong with that string id generation (if any).
 *
 * TASK 2: Use useId Hook to generate a unique id for the aria-described attribute.
 *
 * TASK 3: Set up "identifierPrefix" to "actum-digital" value in the React root to get ids with that prefix by default.
 */

export const UseId: FC = () => {
  return (
    <>
      <Card />
    </>
  );
};

export const Card: FC = () => {
  return (
    <ul className="cards">
      {data.map(({ title, text, url }) => (
        <li key={title} className="card">
          <img
            src="https://satyr.dev/450x200?delay=1000"
            alt=""
            className="card__image"
          />
          <div className="card__content-wrapper">
            <h3 className="card__title">
              <a href={url} aria-describedby={`read-more-${title}`}>
                {title}
              </a>
            </h3>
            <p className="card__text">{text}</p>
            <span className="card__link" id={`read-more-${title}`}>
              Read more
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};
