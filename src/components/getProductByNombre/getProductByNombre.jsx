import { useLocation, useParams } from "react-router-dom";

export async function getProductByNombre(_id) {
  const query = `/nombre/?nombre=${nombre}`;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nombre = queryParams.get("nombre");
  console.log(_id);
  try {
    const response = await fetch(
      "http://localhost:4030/api/products/".concat(query)
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
