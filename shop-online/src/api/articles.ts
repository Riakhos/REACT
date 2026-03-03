// GET all articles
export const getArticles = async () => {
  const url = "https://dummyjson.com/products";
  const response = await fetch(url);
  if (!response.ok) throw new Error("Erreur lors du chargement des produits");
  const data = await response.json();
  return data.products; // tableau de produits
};

// GET article by id
export const getArticle = async (id: number | string) => {
  const url = `https://dummyjson.com/products/${id}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Erreur lors du chargement du produit");
  const data = await response.json();
  return data; // un produit
};