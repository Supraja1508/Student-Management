import clg from "../image/clg.jpg"
export const DashboardDesign = () => {
  return (
    <>
      <div className=" font-serif">
        <div className="grid justify-center items-center mt-10 mx-auto max-w-5xl p-8 ">
          <div className="flex justify-between gap-6">
            {/* {clg profile box} */}
            <div className="p-8  text-black shadow-2xl ">
         <div className="flex justify-between" >
              <h1 className="font-bold text-2xl">HELLO !</h1>
              <img src={clg} alt="clg logo" className="w-20 h-20  shadow-gray-950" />
        </div>
              <h2 className="mt-2 capitalize w-1/2">welcome to our mangayarkarasi college of engineering,paravai,madurai.</h2>
            </div>
            <div className=" p-8 font-bold text-2xl text-black shadow-2xl">
                CALENDER
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
