import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

export default function Home() {
  const [mail, setMail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: any) => {
    setMail(e.target.value);
  };
  const handleClick = () => {
    setIsLoading(true);
    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        service_id: "service_a1b0lbu",
        template_id: "template_btmxaco",
        user_id: "_KnyogEhonTm2DIOo",
        template_params: {
          message: 20000,
          reply_to: mail,
        },
        accessToken: "9am_KfSEgVPPIc5EG4bJe",
      }),
    }).finally(() => setIsLoading(true));
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center mt-20 `}
    >
      <div className="relative flex place-items-center before:absolute before:h-[200px] before:w-[200px] ">
        {isLoading ? (
          <h2 className={`mb-3 text-2xl font-semibold text-black`}>loading</h2>
        ) : (
          <h2 className={`mb-3 text-2xl font-semibold text-black`}>
            BTC current price by Sher
          </h2>
        )}
      </div>
      <input
        onChange={handleChange}
        className="shadow appearance-none border border-red-500 rounded py-10 px-20 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        value={mail}
        placeholder="yourmail@gmail.com"
      />

      <button
        onClick={handleClick}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
      >
        Download
      </button>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
