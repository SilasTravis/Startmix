import { categories } from '../config-data/categories';
import type { Product, Category } from '../config-data/categories';

export const getCategoryById = (categoryId: number | string | undefined): Category | null => {
  if (categoryId === undefined || categoryId === null) return null;
  
  const categoryIdNum = typeof categoryId === 'string' ? parseInt(categoryId, 10) : categoryId;
  if (isNaN(categoryIdNum)) return null;
  
  return categories.find(cat => cat.id === categoryIdNum) || null;
};

export const findProductInCategory = (
  categoryId: number | string | undefined, 
  productId: string | undefined
): { product: Product | null; category: Category | null } => {
  if (!productId) return { product: null, category: null };
  
  const category = getCategoryById(categoryId);
  if (!category) return { product: null, category: null };
  
  const productIdNum = parseInt(productId, 10);
  if (isNaN(productIdNum)) return { product: null, category };
  
  const product = category.products.find(p => p.id === productIdNum) || null;
  return { product, category };
};

// Kept for backward compatibility
export const findProductById = (productId: string | undefined) => {
  if (!productId) return { product: null, categoryId: null };
  
  const productIdNum = parseInt(productId, 10);
  if (isNaN(productIdNum)) return { product: null, categoryId: null };
  
  for (const category of categories) {
    const product = category.products.find(p => p.id === productIdNum);
    if (product) {
      return { product, categoryId: category.id };
    }
  }
  
  return { product: null, categoryId: null };
};
