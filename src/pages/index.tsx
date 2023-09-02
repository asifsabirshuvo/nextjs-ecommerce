import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import ProductSkeleton from "@/components/ProductSkeleton";
import { useProducts } from "@/hooks/useProduct";

export default function Products() {

  const { products } = useProducts();

  return (
    <div className="bg-slate-100 dark:bg-slate-900">
      <Navbar />
      <div className="grid grid-cols-4 gap-4 p-[1.5%]">
        {
          products.map((product: IProduct) => {
            return < Product key={product.id} {...product} />
          })
        }
        {
          products.length == 0 &&
          Array.from({ length: 10 }, (v, i) => <ProductSkeleton key={i} />)

        }
      </div>
    </div>)
}
