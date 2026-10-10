import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <div className="max-w-[960px] mx-auto p-[1.5rem_1rem]">
      <h1 className="text-[1.4rem] font-bold mb-4">お問い合わせフォーム</h1>
      <form onSubmit={handleSubmit}>
        {/* ---------- name ---------- */}
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">
            名前
          </label>
          <input
            className="w-full border border-gray-300 rounded p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
          />
        </div>
        {/* ---------- email ---------- */}
        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">
            メールアドレス
          </label>
          <input
            className="w-full border border-gray-300 rounded p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
          />
        </div>
        {/*---------- message ---------- */}
        <div className="mb-4">
          <label className="block mb-1" htmlFor="message">
            本文
          </label>
          <textarea
            className="w-full border border-gray-300 rounded p-2"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button
          className="bg-gray-800 text-white rounded px-4 py-2"
          type="submit"
        >
          送信
        </button>
      </form>
    </div>
  );
}

export default Contact;
