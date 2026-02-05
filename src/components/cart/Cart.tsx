const Cart: React.FC = () => {
  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-60 min-h-35 bg-white rounded-lg absolute top-17 right-14 lg:top-30 [box-shadow:0_4px_20px_rgba(0,0,0,0.1)] p-3 flex justify-center items-center"
      >
        {/* <h3 className="text-[13px] text-light-grey/70 text-center">
          თქვენი კალათა ცარიელია!
        </h3> */}
        <div className="flex">
          <img
            className="w-10 h-10 rounded-sm"
            src="apples.jpg"
            alt="product image"
          />
          <div>
            <h4 className="text-[13px] text-dark font-normal">ვაშლი</h4>
            <div className="text-[10px] text-grey flex gap-1">
              <h5>
                <img className="w-3 h-3" src="lari.svg" alt="" /> 4.50
              </h5>
              <span>X</span>
              <h5>3</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
