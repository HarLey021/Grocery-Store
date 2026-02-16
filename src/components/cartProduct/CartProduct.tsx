const CartProduct: React.FC = () => {
  return (
    <>
      <div className="w-full h-full p-3 flex">
        <img
          className="w-18 h-18 rounded-lg mr-5"
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

        <button>
          <svg
            className="cursor-pointer hover:text-red"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M8.33334 9.1665V14.1665"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.6667 9.1665V14.1665"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.8333 5V16.6667C15.8333 17.1087 15.6577 17.5326 15.3452 17.8452C15.0326 18.1577 14.6087 18.3333 14.1667 18.3333H5.83332C5.3913 18.3333 4.96737 18.1577 4.65481 17.8452C4.34225 17.5326 4.16666 17.1087 4.16666 16.6667V5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.5 5H17.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.66666 4.99984V3.33317C6.66666 2.89114 6.84225 2.46722 7.15481 2.15466C7.46737 1.8421 7.8913 1.6665 8.33332 1.6665H11.6667C12.1087 1.6665 12.5326 1.8421 12.8452 2.15466C13.1577 2.46722 13.3333 2.89114 13.3333 3.33317V4.99984"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default CartProduct;
