import DirectoryItem from "../directory-item/directory-item.component";

import "./directory.styles.scss";
const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "shoes",
    imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "women",
    imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
    imgDesc: "Floral blouse and dress category",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "men",
    imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
    imgDesc: "Men's jackets and tops category",
    route: "shop/mens",
  },
];
const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
