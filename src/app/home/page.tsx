export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <section className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">My Stocks</h1>
          <button>Add Stock</button>
        </section>
      </div>
      <section className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 md:p-6 lg:grid-cols-4">
        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-950">
          <div className="p-4 md:p-6">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Apple Inc.</h3>
              <button className="text-primary hover:text-primary-500 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </button>
            </div>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              AAPL
            </p>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">$132.45</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                3:45 PM, May 22
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-950">
          <div className="p-4 md:p-6">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Microsoft Corporation</h3>
              <button className="text-primary hover:text-primary-500 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </button>
            </div>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              MSFT
            </p>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">$280.12</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                3:30 PM, May 22
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-950">
          <div className="p-4 md:p-6">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Amazon.com, Inc.</h3>
              <button className="text-primary hover:text-primary-500 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </button>
            </div>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              AMZN
            </p>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">$3,145.78</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                3:15 PM, May 22
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-950">
          <div className="p-4 md:p-6">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Tesla, Inc.</h3>
              <button className="text-primary hover:text-primary-500 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </button>
            </div>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              TSLA
            </p>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">$675.32</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                3:00 PM, May 22
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-950">
          <div className="p-4 md:p-6">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Alphabet Inc. (Google)</h3>
              <button className="text-primary hover:text-primary-500 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </button>
            </div>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              GOOGL
            </p>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">$2,450.67</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                2:45 PM, May 22
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-950">
          <div className="p-4 md:p-6">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Meta Platforms, Inc.</h3>
              <button className="text-primary hover:text-primary-500 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </button>
            </div>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              META
            </p>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">$205.89</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                2:30 PM, May 22
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-950">
          <div className="p-4 md:p-6">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-semibold">NVIDIA Corporation</h3>
              <button className="text-primary hover:text-primary-500 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </button>
            </div>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              NVDA
            </p>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">$650.12</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                2:15 PM, May 22
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-950">
          <div className="p-4 md:p-6">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Coinbase Global, Inc.</h3>
              <button className="text-primary hover:text-primary-500 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </button>
            </div>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              COIN
            </p>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">$65.78</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                2:00 PM, May 22
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
