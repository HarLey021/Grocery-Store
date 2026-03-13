import { stats } from "../data/stats";
import { orders } from "../data/orders";
import { statusColors } from "../data/statusColors";

const Dashboard = () => {
  return (
    <>
      <div className="max-w-7xl w-full h-screen mx-auto p-4 pb-30 lg:p-6">
        <div className="space-y-5">
          <div>
            <h1 className="text-xl lg:text-2xl font-normal text-dark">
              მთავარი
            </h1>
            <p className="text-sm text-light-grey mt-0.5">
              Monday, March 9, 2025
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-4"
              >
                <div className="text-xl lg:text-2xl font-normal text-green">
                  {s.value}
                  {s.label === "დღევანდელი შემოსავალი" ? "ლ" : ""}
                </div>
                <div className="text-xs lg:text-sm font-semibold text-dark mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm ">
            <div className="px-5 py-3.5 border-b border-gray-100">
              <h2 className="font-normal text-dark">ბოლო შეკვეთები</h2>
            </div>

            {orders.map((o) => (
              <div
                key={o.id}
                className="px-4 py-3.5 border-b border-gray-50 last:border-0 hover:bg-gray-50/60 transition-colors"
              >
                <div className="flex items-start lg:items-center justify-between gap-3">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4 min-w-0 flex-1">
                    <span className="font-mono text-xs font-semibold text-green shirnk-0">
                      {o.id}
                    </span>
                    <span className="font-semibold text-dark text-sm truncate">
                      {o.customer}
                    </span>
                    <span className="text-xs text-light-grey lg:ml-auto shirnk-0">
                      {o.time}
                    </span>
                  </div>
                  <div className="flex flex-col lg:flex-row items-end lg:items-center gap-2 shirnk-0">
                    <span className="font-normal text-dark text-sm">
                      {o.total} {o.total ? "ლ" : ""}
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap bg-blue-100 ${statusColors[o.status as StatusType]}`}
                    >
                      {o.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
