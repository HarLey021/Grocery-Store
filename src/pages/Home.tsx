import SearchBar from "../components/searchBar/SearchBar";
import Product from "../components/product/Product";
import { products } from "../data";

const Home: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-screen px-6 py-12 lg:px-12 flex flex-wrap gap-12 justify-center">
        <SearchBar />

        {products.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </>
  );
};

export default Home;
