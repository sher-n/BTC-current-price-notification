import { useState } from "react";

export default function Home() {
  const [mail, setMail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState(0);
  const [errMessage, setErrMessage] = useState<string | null>(null);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);

  const sendPrice = async (price: number) => {
    try {
      const resp = await fetch("http://localhost:3000/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `BTC price is ${price}`,
          to: mail,
        }),
      });
      const data = await resp.json();
      if (data.message) {
        await setErrMessage("Invalid email");
      } else {
        await setInfoMessage("BTC current price sent!");
        await setTimeout(() => setInfoMessage(null), 2000);
      }
    } catch (error: any) {
      setErrMessage(error.message);
    }
  };

  const getBTCPrice = async () => {
    await setIsLoading(true);
    const resp = await fetch(
      "https://www.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
    );
    const data = await resp.json();
    await setPrice(data.price);
    await setIsLoading(false);
  };

  const handleChange = (e: any) => {
    setMail(e.target.value);
  };
  const handleClick = async () => {
    await getBTCPrice();
    await sendPrice(price);
  };

  return (
    <main
      className={`flex  text-2xl min-h-screen flex-col items-center justify-center `}
    >
      <div className="relative flex place-items-center">
        {isLoading || infoMessage ? (
          <h2 className={`mb-3 font-semibold text-black`}>
            {infoMessage || "loading..."}
          </h2>
        ) : (
          <h2 className={`mb-3 text-2xl font-semibold text-black`}>
            BTC current price by Sher
          </h2>
        )}
      </div>
      <input
        onChange={handleChange}
        className="shadow mb-3 p-5 text-center m-5 w-2/5 appearance-none border border-red-500 rounded text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        value={mail}
        placeholder="yourmail@gmail.com"
      />
      <button
        onClick={handleClick}
        className="mt-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
      >
        SEND
      </button>
      {errMessage && (
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          {errMessage}
        </div>
      )}{" "}
    </main>
  );
}
