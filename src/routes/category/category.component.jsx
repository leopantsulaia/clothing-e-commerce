import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";

import { CategoriesContext } from "../../contexts/categories.context";

import "./category.styles.scss";
import ProductCard from "../../components/product-card/product-card.component";

const CategoryItem = () => {
	const { category } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);
	const [products, setProducts] = useState(categoriesMap[category]);
	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<div className="category-container">
			{products && products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
};

export default CategoryItem;
