const Cart: React.FC = () => {
  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-50 min-h-25 bg-white rounded-lg absolute top-17 right-14 lg:top-30 [box-shadow:0_4px_20px_rgba(0,0,0,0.1)]"
      ></div>
    </>
  );
};

export default Cart;
