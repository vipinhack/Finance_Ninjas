
import React from "react";

const NewsDisplay = ({ news }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold text-secondary">News Headlines</h3>
      <ul className="mt-4 list-disc list-inside">
        {news.map((article, index) => (
          <li key={index} className="text-gray-700">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsDisplay;
