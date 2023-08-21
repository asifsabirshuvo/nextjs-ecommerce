import Product from "@/components/Product";
import { useProducts } from "@/hooks/useProduct";

export default function Home() {
  const { products } = useProducts();

  return (
    <div className="grid grid-cols-4 gap-4 p-[2%]">
      {
        products.map((product: IProduct) => {
          console.log(product);
          return < Product key={product.id} {...product} />
        })
      }
    </div>)
}
