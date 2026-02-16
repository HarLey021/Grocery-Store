import CartProduct from "../cartProduct/CartProduct";

const Cart: React.FC = () => {
  return (
    <>
      <div className="w-70 absolute top-17 right-14 lg:top-30 lg:right-30">
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-70 min-h-24 max-h-72 bg-white rounded-t-lg  [box-shadow:0_4px_20px_rgba(0,0,0,0.1)] flex flex-col  items-center divide-y divide-[#D1D5DB] overflow-hidden overflow-y-scroll [&::-webkit-scrollbar]:hidden border-b border-[#D1D5DB]"
        >
          {/* <h3 className="text-[13px] text-light-grey/70 text-center">
          თქვენი კალათა ცარიელია!
        </h3> */}
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </div>
        <div className="w-full h-12 bg-white rounded-b-lg"></div>
      </div>
    </>
  );
};

export default Cart;
