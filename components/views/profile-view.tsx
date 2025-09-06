"use client"


import { User, Settings } from "lucide-react"
import { motion } from "framer-motion"
import GlassButton from "@/components/glass-button"
import { useAppKitAccount } from "@reown/appkit/react"
import { useEffect, useState } from "react"

export default function ProfileView() {
  const { address } = useAppKitAccount();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
  });

  // Fetch user info on mount/address change using GET /api/profiles/[address]
  useEffect(() => {
    if (!address) return;
    setLoading(true);
    console.log("Fetching profile for address:", address);
    fetch(`/api/profiles/${address}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API response for profile fetch:", data);
        if (data?.profile) {
          setForm((prev) => ({
            ...prev,
            ...data.profile,
          }));
        } else {
          // If not found, clear the form
          setForm({ name: "", email: "", location: "" });
        }
      })
      .finally(() => setLoading(false));
  }, [address]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    if (!address) return;
    setLoading(true);
    const res = await fetch("/api/additional-info", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address, ...form }),
    });
    const data = await res.json();
    setLoading(false);
    // Optionally show a toast or message here
    // e.g. toast.success("Profile updated!")
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Profile Settings</h1>
        <p className="text-blue-200">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl"
        >
          <div className="flex items-center space-x-3 mb-6">
            <User className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-bold text-white">Personal Information</h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400/50 focus:outline-none"
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400/50 focus:outline-none"
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Enter your location"
                className="w-full p-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400/50 focus:outline-none"
                disabled={loading}
              />
            </div>
          </div>

          <div className="mt-6">
            <GlassButton onClick={handleSave} disabled={loading}>
              {loading ? "Saving..." : "Save Changes"}
            </GlassButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Settings className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-bold text-white">Preferences</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg border border-white/20">
              <span className="text-white">Email Notifications</span>
              <input type="checkbox" className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg border border-white/20">
              <span className="text-white">Survey Reminders</span>
              <input type="checkbox" className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg border border-white/20">
              <span className="text-white">Data Analytics</span>
              <input type="checkbox" className="w-4 h-4" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
