"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMail, FiLock, FiEye, FiEyeOff, FiAlertCircle } from "react-icons/fi";
import SquareReveal from "../components/SquareReveal";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [stayLogged, setStayLogged] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples
    if (!username || !password) {
      setError("Preencha todos os campos");
      return;
    }

    setLoading(true);

    // Simulação de login (substitua por sua API real)
    setTimeout(() => {
      setLoading(false);
      if (username === "geds235" && password === "admin123") {
        alert("Login bem-sucedido!"); // Substitua por redirecionamento real
      } else {
        setError("Credenciais inválidas");
      }
    }, 1500);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-4">
      <SquareReveal gridSize={12}>
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-20 pointer-events-none"></div>
        <div className="relative z-10 w-full max-w-md p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Entrar</h2>

          {error && (
            <div className="flex items-center gap-2 bg-red-500/10 text-red-400 border border-red-500/20 p-3 rounded-lg mb-6">
              <FiAlertCircle />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">Usuário</label>
              <div className="relative group">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all"
                  placeholder="Seu usuário"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">Senha</label>
              <div className="relative group">
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all"
                  placeholder="Sua senha"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="stayLogged"
                  checked={stayLogged}
                  onChange={() => setStayLogged(!stayLogged)}
                  className="h-4 w-4 bg-white/5 border-white/10 rounded text-cyan-500 focus:ring-cyan-500/20 focus:ring-offset-0"
                />
                <label htmlFor="stayLogged" className="ml-2 text-sm text-gray-400">
                  Manter Conectado
                </label>
              </div>

              <Link href="/esqueci-senha" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                Esqueci a Senha?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 py-3 rounded-lg font-semibold transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Carregando..." : "Login"}
            </button>
          </form>

          <p className="text-center text-sm mt-8 text-gray-400">
            Não tem conta?{" "}
            <Link href="/cadastro" className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
              Cadastre-se
            </Link>
          </p>
        </div>
      </SquareReveal>
    </main>
  );
}