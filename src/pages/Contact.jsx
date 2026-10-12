import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setNameError("");
    setEmailError("");
    setMessageError("");

    if (name === "") {
      setNameError("名前が入力されていません");
      return;
    }

    if (name.length > 30) {
      setNameError("名前は30文字以内で入力してください");
      return;
    }

    if (email === "") {
      setEmailError("メールアドレスが入力されていません");
      return;
    }

    if (!emailPattern.test(email)) {
      setEmailError("メールアドレスの形式が正しくありません");
      return;
    }

    if (message === "") {
      setMessageError("メッセージを入力してください");
      return;
    }

    if (message.length > 500) {
      setMessageError("メッセージは500文字以内で入力してください");
      return;
    }
    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message,
          }),
        },
      );

      if (!res.ok) {
        throw new Error("送信に失敗しました");
      }

      setName("");
      setEmail("");
      setMessage("");
      alert("送信しました");
    } catch (error) {
      alert("送信に失敗しました、もう一度お試しください");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-[960px] mx-auto p-[1.5rem_1rem]">
      <h1 className="text-[1.4rem] font-bold mb-4">お問い合わせフォーム</h1>

      <form onSubmit={handleSubmit} noValidate>
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
            disabled={isSubmitting}
          />
          <p className="text-red-500 text-sm">{nameError}</p>
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
            disabled={isSubmitting}
          />
          <p className="text-red-500 text-sm">{emailError}</p>
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
            disabled={isSubmitting}
          ></textarea>
          <p className="text-red-500 text-sm">{messageError}</p>
        </div>

        <button
          className="bg-gray-800 text-white rounded px-4 py-2"
          type="submit"
          disabled={isSubmitting}
        >
          送信
        </button>
      </form>
    </div>
  );
}

export default Contact;
