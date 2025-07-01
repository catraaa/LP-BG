import { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabase";

export default function LoginAdmin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Login gagal: " + error.message);
    } else {
      localStorage.setItem("isAdmin", "true");
      router.push("/admin/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white-500 p-6 rounded shadow w-80">
        <h2 className="text-lg font-bold mb-4 text-center">Login Admin</h2>
        <input
          type="email"
          className="w-full px-4 py-2 border rounded mb-4"
          placeholder="Masukkan Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="w-full px-4 py-2 border rounded mb-4"
          placeholder="Masukkan Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white-500 py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
