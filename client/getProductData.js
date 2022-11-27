import { gql } from "@apollo/client";
import client from "./client";

const getProductData = async () => {  
  const { data } = await client.query({
    query: gql`
      query allProducts {
          allProducts {
            fields 
          }
      }
    `,
  });
  return data;
}

export default getProductData