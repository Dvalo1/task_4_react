import gql from "graphql-tag";

// Get categories (name & id)

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      name
      id
    }
  }
`;

export default CATEGORIES_QUERY;
