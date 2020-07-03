import gql from "graphql-tag";

// Get images (id / title / description / date / image url & their category names and IDs - to be used to filter images by IDs, not done yet)

const IMAGES_QUERY = gql`
  query Images {
    images {
      id
      img_title
      img_desc
      img_date
      image_src {
        url
      }
      categories {
        id
        name
      }
    }
  }
`;

export default IMAGES_QUERY;
