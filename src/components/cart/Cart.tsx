const Cart: React.FC = () => {
  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-60 min-h-35 bg-white rounded-lg absolute top-17 right-14 lg:top-30 [box-shadow:0_4px_20px_rgba(0,0,0,0.1)] p-3 flex items-center"
      >
        {/* <h3 className="text-[13px] text-light-grey/70 text-center">
          თქვენი კალათა ცარიელია!
        </h3> */}
        <div className="w-full h-full flex ">
          <img
            className="w-18 h-18 rounded-lg mr-3"
            src="apples.jpg"
            alt="product image"
          />
          <div className="w-full  flex flex-col justify-between">
            <h4 className="text-[16px] text-dark font-normal">ვაშლი</h4>
            <div className="text-[12px] text-grey font-normal">
              <div className="flex gap-1">
                <div className="flex items-center">
                  <h5>4.50</h5>
                  <img
                    className="w-2.5 h-2.5 -mt-0.5"
                    src="lari.svg"
                    alt="lari icon"
                  />
                </div>
                <span className="font-bold">X</span>
                <h5>4</h5>
              </div>

              <div className="flex items-center text-[13px] text-dark font-bold">
                სულ: 18
                <img
                  className="w-2.5 h-2.5 -mt-0.5"
                  src="lari.svg"
                  alt="lari icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
