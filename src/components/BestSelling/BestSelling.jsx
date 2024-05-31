

const BestSelling = () => {
    return (
        <div className="px-16 lg:px-0 mb-10 border lg:m-10 py-10 rounded-lg bg-base-300">
            <h1 className='border-b-[5px] text-blue-500 border-white pb-6 text-3xl lg:text-5xl mb-10 text-center font-semibold'>Best Selling Art</h1>

            <div className=" flex flex-col lg:flex-row justify-center gap-10 lg:gap-4 ">

                <div>
                    <img className=" mt-10 border-[15px] border-orange-600 w-80 h-80" src="https://i.ibb.co/PWT8VNy/photo-1579965342575-16428a7c8881-q-80-w-1962-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
                    <p className="mt-5 text-center text-3xl text-orange-800 font-bold">$100</p>
                </div>

                <div>
                    <img className="lg:mt-40 border-[15px] border-blue-500 w-80 h-96" src="https://i.ibb.co/2S7jgS8/photo-1560942485-b2a11cc13456-q-80-w-1936-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
                    <p className="mt-5 text-center text-3xl text-blue-800 font-bold">$150</p>
                </div>

                <div>
                    <img className="lg:mt-20 border-[15px] border-yellow-400 w-80 h-80" src="https://i.ibb.co/PcMGFjP/premium-photo-1666726721652-a15e685e48a0-q-80-w-2071-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
                    <p className="mt-5 text-center text-3xl text-yellow-600 font-bold">$75</p>
                </div>

                <div>
                    <img className=" border-[15px] border-cyan-500 w-80 h-80" src="https://i.ibb.co/KVj91Fq/photo-1501786223405-6d024d7c3b8d-q-80-w-1887-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
                    <p className="mt-5 text-center text-3xl text-cyan-600 font-bold">$275</p>

                </div>


            </div>
        </div>
    );
};

export default BestSelling;