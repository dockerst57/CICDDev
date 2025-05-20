'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const jwt = localStorage.getItem('token');
    if (!jwt) {
      router.push('/login'); // redirect ถ้าไม่มี token
    } else {
      setToken(jwt);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  if (!token) return null; // หรือแสดง loading

  return (
    <div className="max-w-2xl mx-auto mt-20 p-6 border rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-4">📊 Dashboard</h1>
      <p className="mb-4">You're logged in! 🎉</p>
      <p className="mb-2 text-sm break-all">Your token: <code className="text-blue-600">{token}</code></p>
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}
