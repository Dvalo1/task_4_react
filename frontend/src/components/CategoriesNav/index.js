import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";
import CATEGORIES_QUERY from "../../queries/category/categories";

// Categories navigation (Shown on /rate page, displays all available categories)

function Nav() {
  return (
    <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <div>
              <div className="categories">
                <div className="categories_wrapper">
                    {categories.map((category) => {
                      return (
                        <div className="category" key={category.id}>
                          <Link
                            className="nav-link"
                            to={`/category/${category.id}`}>
                            {category.name}
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    </div>
  );
}

export default Nav;
