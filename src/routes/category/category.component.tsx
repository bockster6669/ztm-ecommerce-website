import ProductCard from '@/components/product-card/product-card.component';
import { useShopDataContext } from '@/contexts/categories.context';
import { TProduct } from '@/types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useShopDataContext();
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    setProducts(categoriesMap[category!]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category?.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
