export function Dialog() {
  return (
    <div
      role="dialog"
      id="radix-:r0:"
      aria-describedby="radix-:r2:"
      aria-labelledby="radix-:r1:"
      data-state="open"
      className="bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:max-w-[425px] sm:rounded-lg"
      data-id="8"
      tabIndex={-1}
    >
      <div
        className="flex flex-col space-y-1.5 text-center sm:text-left"
        data-id="9"
      >
        <h2
          id="radix-:r1:"
          className="whitespace-nowrap text-lg font-semibold leading-none tracking-tight"
          data-id="10"
        >
          Add New Stock
        </h2>
        <p
          id="radix-:r2:"
          className="text-muted-foreground text-sm"
          data-id="11"
        >
          Fill out the form to add a new stock to your portfolio.
        </p>
      </div>
      <div className="grid gap-4 py-4" data-id="12">
        <div className="grid grid-cols-4 items-center gap-4" data-id="13">
          <label
            className="text-right text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="name"
            data-id="14"
          >
            Name
          </label>
          <input
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring col-span-3 flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="name"
            placeholder="Enter stock name"
            data-id="15"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4" data-id="16">
          <label
            className="text-right text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="description"
            data-id="17"
          >
            Description
          </label>
          <textarea
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring col-span-3 flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="description"
            placeholder="Enter stock description"
            data-id="18"
          ></textarea>
        </div>
        <div className="grid grid-cols-4 items-center gap-4" data-id="19">
          <label
            className="text-right text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="ticker"
            data-id="20"
          >
            Ticker
          </label>
          <input
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring col-span-3 flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="ticker"
            placeholder="Enter stock ticker"
            data-id="21"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4" data-id="22">
          <label
            className="text-right text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="type"
            data-id="23"
          >
            Type
          </label>
          <button
            type="button"
            role="combobox"
            aria-controls="radix-:r15:"
            aria-expanded="false"
            aria-autocomplete="none"
            dir="ltr"
            data-state="closed"
            data-placeholder=""
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            data-id="25"
          >
            <span data-id="26">Select stock type</span>
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
              className="h-4 w-4 opacity-50"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-4 items-center gap-4" data-id="32">
          <label
            className="text-right text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="price"
            data-id="33"
          >
            Price
          </label>
          <input
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring col-span-3 flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="price"
            placeholder="Enter stock price"
            data-id="34"
            type="number"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4" data-id="35">
          <label
            className="text-right text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="minPriceAlert"
            data-id="36"
          >
            Min Price Alert
          </label>
          <input
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring col-span-3 flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="minPriceAlert"
            placeholder="Enter minimum price alert"
            data-id="37"
            type="number"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4" data-id="38">
          <label
            className="text-right text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="maxPriceAlert"
            data-id="39"
          >
            Max Price Alert
          </label>
          <input
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring col-span-3 flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="maxPriceAlert"
            placeholder="Enter maximum price alert"
            data-id="40"
            type="number"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4" data-id="41">
          <label
            className="text-right text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="currency"
            data-id="42"
          >
            Currency
          </label>
          <button
            type="button"
            role="combobox"
            aria-controls="radix-:r16:"
            aria-expanded="false"
            aria-autocomplete="none"
            dir="ltr"
            data-state="closed"
            data-placeholder=""
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            data-id="44"
          >
            <span data-id="45">Select currency</span>
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
              className="h-4 w-4 opacity-50"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-4 items-center gap-4" data-id="51">
          <label
            className="text-right text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="favorite"
            data-id="52"
          >
            Favorite
          </label>
          <button
            type="button"
            role="checkbox"
            aria-checked="false"
            data-state="unchecked"
            value="on"
            className="border-primary ring-offset-background focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground peer col-span-3 h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="favorite"
            data-id="53"
          ></button>
        </div>
      </div>
      <div
        className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"
        data-id="54"
      >
        <button
          className="ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          type="submit"
          data-id="55"
        >
          Save Stock
        </button>
      </div>
      <button
        type="button"
        className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none"
      >
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
          className="h-4 w-4"
        >
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
        <span className="sr-only">Close</span>
      </button>
    </div>
  );
}
