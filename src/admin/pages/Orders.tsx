const Orders: React.FC = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto w-full h-screen p-4 pb-30 lg:p-6">
        <div className="space-y-5">
          <div>
            <h1 className="text-xl lg:text-2xl font-bold text-dark">
              შეკვეთები
            </h1>
            <p className="text-sm text-light-grey mt-0.5">7 შეკვეთა სულ</p>
          </div>
          <div className="flex gap-2 overflow-x-auto lg:flex-wrap pb-1 scrollbar-width: none">
            <button className="shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer bg-green text-white border-green">
              ყველა
            </button>
            <button className="shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer bg-white text-grey border-gray-200 hover:border-green">
              ახალი
            </button>
            <button className="shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer bg-white text-grey border-gray-200 hover:border-green">
              მიღებული
            </button>
            <button className="shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer bg-white text-grey border-gray-200 hover:border-green">
              მზადების პროცესშია
            </button>
            <button className="shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer bg-white text-grey border-gray-200 hover:border-green">
              მიტანის პროცესშია
            </button>
            <button className="shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer bg-white text-grey border-gray-200 hover:border-green">
              მიტანილი
            </button>
            <button className="shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer bg-white text-grey border-gray-200 hover:border-green">
              გაუქმებული
            </button>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm ">
            <div className="hidden lg:grid grid-cols-[auto_1fr_auto_auto_auto_auto_auto_auto] gap-x-4 px-4 py-3 border-b border-gray-100">
              <span className="text-xs font-semibold text-light-grey uppercase tracking-wide whitespace-nowrap">
                შეკვ. ID
              </span>
              <span className="text-xs font-semibold text-light-grey uppercase tracking-wide whitespace-nowrap">
                მომხმარებელი
              </span>
              <span className="text-xs font-semibold text-light-grey uppercase tracking-wide whitespace-nowrap">
                პოზიციები
              </span>
              <span className="text-xs font-semibold text-light-grey uppercase tracking-wide whitespace-nowrap">
                სულ
              </span>
              <span className="text-xs font-semibold text-light-grey uppercase tracking-wide whitespace-nowrap">
                დრო
              </span>
              <span className="text-xs font-semibold text-light-grey uppercase tracking-wide whitespace-nowrap">
                სტატუსი
              </span>
              <span className="text-xs font-semibold text-light-grey uppercase tracking-wide whitespace-nowrap"></span>
            </div>
            <div className="px-4 py-3.5 border-b border-gray-50 last:border-0 hover:bg-gray-50/60 transition-colors cursor-pointer lg:cursor-default">
              <div className="flex items-start justify-between gap-2 lg:hidden">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-semibold text-green">
                      ORD-001
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap bg-green-100 text-green-700">
                      მიტანილი
                    </span>
                  </div>
                  <p className="font-semibold text-dark text-sm">
                    Anna Johnson
                  </p>
                  <p className="text-xs text-light-grey mt-0.5">
                    +1 555-0101 · 2 პოზ. · ბარათი
                  </p>
                  <p className="text-xs text-light-grey mt-0.5">
                    Mar 9, 08:14 AM
                  </p>
                </div>
                <span className="font-bold text-dark text-sm shrink-0">
                  ლ10.45
                </span>
              </div>
              <div className="hidden lg:grid grid-cols-[auto_1fr_auto_auto_auto_auto_auto_auto] gap-x-4 items-center">
                <span className="font-mono text-xs font-semibold text-green whitespace-nowrap">
                  ORD-001
                </span>
                <div>
                  <p className="font-semibold text-dark text-sm">
                    Anna Johnson
                  </p>
                  <p className="text-xs text-light-grey">+1 555-0101</p>
                </div>
                <span className="text-sm text-light-grey whitespace-nowrap">
                  2 პოზ.
                </span>
                <span className="font-semibold text-dark whitespace-nowrap">
                  ლ10.45
                </span>
                <span className="text-sm text-light-grey">ბარათი</span>
                <span className="text-xs text-light-grey whitespace-nowrap">
                  Mar 9, 08:14 AM
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap bg-green-100 text-green-700">
                  მიტანილი
                </span>
              </div>
            </div>
            <div className="px-4 py-3.5 border-b border-gray-50 last:border-0 hover:bg-gray-50/60 transition-colors cursor-pointer lg:cursor-default">
              <div className="flex items-start justify-between gap-2 lg:hidden">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-semibold text-green">
                      ORD-002
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap bg-purple-100 text-purple-700">
                      მიტანის პროცესშია
                    </span>
                  </div>
                  <p className="font-semibold text-dark text-sm">Marcus Lee</p>
                  <p className="text-xs text-light-grey mt-0.5">
                    +1 555-0202 · 2 პოზ. · ნაღდი
                  </p>
                  <p className="text-xs text-light-grey mt-0.5">
                    Mar 9, 09:02 AM
                  </p>
                </div>
                <span className="font-bold text-dark text-sm shrink-0">
                  ლ17.48
                </span>
              </div>
              <div className="hidden lg:grid grid-cols-[auto_1fr_auto_auto_auto_auto_auto_auto] gap-x-4 items-center">
                <span className="font-mono text-xs font-semibold text-green whitespace-nowrap">
                  ORD-002
                </span>
                <div>
                  <p className="font-semibold text-dark text-sm">Marcus Lee</p>
                  <p className="text-xs text-light-grey">+1 555-0202</p>
                </div>
                <span className="text-sm text-light-grey whitespace-nowrap">
                  2 პოზ.
                </span>
                <span className="font-semibold text-dark whitespace-nowrap">
                  ლ17.48
                </span>
                <span className="text-sm text-light-grey">ნაღდი</span>
                <span className="text-xs text-light-grey whitespace-nowrap">
                  Mar 9, 09:02 AM
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap bg-purple-100 text-purple-700">
                  მიტანის პროცესშია
                </span>
              </div>
            </div>
            <div className="px-4 py-3.5 border-b border-gray-50 last:border-0 hover:bg-gray-50/60 transition-colors cursor-pointer lg:cursor-default">
              <div className="flex items-start justify-between gap-2 lg:hidden">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-semibold text-green">
                      ORD-003
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap bg-orange-100 text-orange-700">
                      მზადების პროცესშია
                    </span>
                  </div>
                  <p className="font-semibold text-dark text-sm">Sofia Reyes</p>
                  <p className="text-xs text-light-grey mt-0.5">
                    +1 555-0303 · 2 პოზ. · ბარათი
                  </p>
                  <p className="text-xs text-light-grey mt-0.5">
                    Mar 9, 09:45 AM
                  </p>
                </div>
                <span className="font-bold text-dark text-sm shrink-0">
                  ლ8.94
                </span>
              </div>
              <div className="hidden lg:grid grid-cols-[auto_1fr_auto_auto_auto_auto_auto_auto] gap-x-4 items-center">
                <span className="font-mono text-xs font-semibold text-green whitespace-nowrap">
                  ORD-003
                </span>
                <div>
                  <p className="font-semibold text-dark text-sm">Sofia Reyes</p>
                  <p className="text-xs text-light-grey">+1 555-0303</p>
                </div>
                <span className="text-sm text-light-grey whitespace-nowrap">
                  2 პოზ.
                </span>
                <span className="font-semibold text-dark whitespace-nowrap">
                  ლ8.94
                </span>
                <span className="text-sm text-light-grey">ბარათი</span>
                <span className="text-xs text-light-grey whitespace-nowrap">
                  Mar 9, 09:45 AM
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap bg-orange-100 text-orange-700">
                  მზადების პროცესშია
                </span>
              </div>
            </div>
            <div className="px-4 py-3.5 border-b border-gray-50 last:border-0 hover:bg-gray-50/60 transition-colors cursor-pointer lg:cursor-default">
              <div className="flex items-start justify-between gap-2 lg:hidden">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-semibold text-green">
                      ORD-004
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap bg-yellow-100 text-yellow-700">
                      მიღებული
                    </span>
                  </div>
                  <p className="font-semibold text-dark text-sm">David Park</p>
                  <p className="text-xs text-light-grey mt-0.5">
                    +1 555-0404 · 2 პოზ. · ონლაინ
                  </p>
                  <p className="text-xs text-light-grey mt-0.5">
                    Mar 9, 10:11 AM
                  </p>
                </div>
                <span className="font-bold text-dark text-sm shrink-0">
                  ლ10.45
                </span>
              </div>
              <div className="hidden lg:grid grid-cols-[auto_1fr_auto_auto_auto_auto_auto_auto] gap-x-4 items-center">
                <span className="font-mono text-xs font-semibold text-green whitespace-nowrap">
                  ORD-004
                </span>
                <div>
                  <p className="font-semibold text-dark text-sm">David Park</p>
                  <p className="text-xs text-light-grey">+1 555-0404</p>
                </div>
                <span className="text-sm text-light-grey whitespace-nowrap">
                  2 პოზ.
                </span>
                <span className="font-semibold text-dark whitespace-nowrap">
                  ლ10.45
                </span>
                <span className="text-sm text-light-grey">ონლაინ</span>
                <span className="text-xs text-light-grey whitespace-nowrap">
                  Mar 9, 10:11 AM
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap bg-yellow-100 text-yellow-700">
                  მიღებული
                </span>
              </div>
            </div>
            <div className="px-4 py-3.5 border-b border-gray-50 last:border-0 hover:bg-gray-50/60 transition-colors cursor-pointer lg:cursor-default">
              <div className="flex items-start justify-between gap-2 lg:hidden">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-semibold text-green">
                      ORD-005
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap bg-blue-100 text-blue-700">
                      ახალი
                    </span>
                  </div>
                  <p className="font-semibold text-dark text-sm">Emma Wilson</p>
                  <p className="text-xs text-light-grey mt-0.5">
                    +1 555-0505 · 2 პოზ. · ბარათი
                  </p>
                  <p className="text-xs text-light-grey mt-0.5">
                    Mar 9, 10:33 AM
                  </p>
                </div>
                <span className="font-bold text-dark text-sm shrink-0">
                  ლ11.99
                </span>
              </div>
              <div className="hidden lg:grid grid-cols-[auto_1fr_auto_auto_auto_auto_auto_auto] gap-x-4 items-center">
                <span className="font-mono text-xs font-semibold text-green whitespace-nowrap">
                  ORD-005
                </span>
                <div>
                  <p className="font-semibold text-dark text-sm">Emma Wilson</p>
                  <p className="text-xs text-light-grey">+1 555-0505</p>
                </div>
                <span className="text-sm text-light-grey whitespace-nowrap">
                  2 პოზ.
                </span>
                <span className="font-semibold text-dark whitespace-nowrap">
                  ლ11.99
                </span>
                <span className="text-sm text-light-grey">ბარათი</span>
                <span className="text-xs text-light-grey whitespace-nowrap">
                  Mar 9, 10:33 AM
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap bg-blue-100 text-blue-700">
                  ახალი
                </span>
              </div>
            </div>
            <div className="px-4 py-3.5 border-b border-gray-50 last:border-0 hover:bg-gray-50/60 transition-colors cursor-pointer lg:cursor-default">
              <div className="flex items-start justify-between gap-2 lg:hidden">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-semibold text-green">
                      ORD-006
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap bg-red-100 text-red-700">
                      გაუქმებული
                    </span>
                  </div>
                  <p className="font-semibold text-dark text-sm">James Brown</p>
                  <p className="text-xs text-light-grey mt-0.5">
                    +1 555-0606 · 1 პოზ. · ნაღდი
                  </p>
                  <p className="text-xs text-light-grey mt-0.5">
                    Mar 9, 11:05 AM
                  </p>
                </div>
                <span className="font-bold text-dark text-sm shrink-0">
                  ლ6.49
                </span>
              </div>
              <div className="hidden lg:grid grid-cols-[auto_1fr_auto_auto_auto_auto_auto_auto] gap-x-4 items-center">
                <span className="font-mono text-xs font-semibold text-green whitespace-nowrap">
                  ORD-006
                </span>
                <div>
                  <p className="font-semibold text-dark text-sm">James Brown</p>
                  <p className="text-xs text-light-grey">+1 555-0606</p>
                </div>
                <span className="text-sm text-light-grey whitespace-nowrap">
                  1 პოზ.
                </span>
                <span className="font-semibold text-dark whitespace-nowrap">
                  ლ6.49
                </span>
                <span className="text-sm text-light-grey">ნაღდი</span>
                <span className="text-xs text-light-grey whitespace-nowrap">
                  Mar 9, 11:05 AM
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap bg-red-100 text-red-700">
                  გაუქმებული
                </span>
              </div>
            </div>
            <div className="px-4 py-3.5 border-b border-gray-50 last:border-0 hover:bg-gray-50/60 transition-colors cursor-pointer lg:cursor-default">
              <div className="flex items-start justify-between gap-2 lg:hidden">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-semibold text-green">
                      ORD-007
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap bg-blue-100 text-blue-700">
                      ახალი
                    </span>
                  </div>
                  <p className="font-semibold text-dark text-sm">Lily Chen</p>
                  <p className="text-xs text-light-grey mt-0.5">
                    +1 555-0707 · 2 პოზ. · ბარათი
                  </p>
                  <p className="text-xs text-light-grey mt-0.5">
                    Mar 9, 11:22 AM
                  </p>
                </div>
                <span className="font-bold text-dark text-sm shrink-0">
                  ლ10.45
                </span>
              </div>
              <div className="hidden lg:grid grid-cols-[auto_1fr_auto_auto_auto_auto_auto_auto] gap-x-4 items-center">
                <span className="font-mono text-xs font-semibold text-green whitespace-nowrap">
                  ORD-007
                </span>
                <div>
                  <p className="font-semibold text-dark text-sm">Lily Chen</p>
                  <p className="text-xs text-light-grey">+1 555-0707</p>
                </div>
                <span className="text-sm text-light-grey whitespace-nowrap">
                  2 პოზ.
                </span>
                <span className="font-semibold text-dark whitespace-nowrap">
                  ლ10.45
                </span>
                <span className="text-sm text-light-grey">ბარათი</span>
                <span className="text-xs text-light-grey whitespace-nowrap">
                  Mar 9, 11:22 AM
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap bg-blue-100 text-blue-700">
                  ახალი
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
