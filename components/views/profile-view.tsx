"use client"

import { User, Twitter, Link, Heart, Trophy, Package, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import GlassButton from "@/components/glass-button"
import { useAppKitAccount } from "@reown/appkit/react"
import { useEffect, useState } from "react"
import AuthButton from "../AuthButton"
import { LoginButton, useOCAuth } from "@opencampus/ocid-connect-js"

export default function ProfileView() {
  const { address } = useAppKitAccount();
  const { isInitialized, authState, ocAuth } = useOCAuth();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
  });

  // Add loading state for OCID initialization
  if (!isInitialized) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white">Loading OCID...</div>
      </div>
    );
  }

  // Handle OCID error state
  if (authState.error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-400">Error: {authState.error.message}</div>
      </div>
    );
  }

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
  };

  const handleTwitterConnect = () => {
    console.log("Connecting to Twitter...");
  };

  const handleOcidConnect = () => {
    console.log("Connecting to Ocid...");
  };

  const handleOcidDisconnect = async () => {
    try {
      await ocAuth.logout();
      console.log("Disconnected from OCID");
    } catch (error) {
      console.error("Error disconnecting from OCID:", error);
    }
  };

  const handleFollowTwitter = () => {
    console.log("Following Twitter page...");
    window.open("https://twitter.com/yourhandle", "_blank");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="space-y-8"
    >
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Profile Settings</h1>
        <p className="text-gray-300">Manage your account information and social connections</p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Left Column - Personal Information (Takes 2 columns on XL screens) */}
        <div className="xl:col-span-2 space-y-6">
          
          {/* Personal Information Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <User className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Personal Information</h2>
                <p className="text-gray-400 text-sm">Update your basic profile details</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full p-4 bg-black/20 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                  disabled={loading}
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full p-4 bg-black/20 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                  disabled={loading}
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="City, Country"
                  className="w-full p-4 bg-black/20 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                  disabled={loading}
                />
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <GlassButton onClick={handleSave} disabled={loading} className="px-8">
                {loading ? "Saving..." : "Save Changes"}
              </GlassButton>
            </div>
          </motion.div>

          {/* OCID Authentication Status Card */}
          {authState.isAuthenticated && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <User className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">OCID Account</h2>
                  <p className="text-gray-400 text-sm">Your connected OCID information</p>
                </div>
              </div>

              <div className="bg-black/20 rounded-lg p-4 mb-4">
                <pre className="text-green-400 text-sm whitespace-pre-wrap overflow-auto">
                  {JSON.stringify(ocAuth.getAuthState(), null, 2)}
                </pre>
              </div>

              <div className="flex justify-end">
                <GlassButton onClick={handleOcidDisconnect} className="px-6">
                  Disconnect OCID
                </GlassButton>
              </div>
            </motion.div>
          )}

          {/* NFT Collection Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Trophy className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">NFT Collection</h2>
                  <p className="text-gray-400 text-sm">Your earned digital assets</p>
                </div>
              </div>
            </div>

            {/* Empty State */}
            <div className="text-center py-12">
              <div className="mb-6">
                <div className="mx-auto w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mb-4">
                  <Package className="w-12 h-12 text-gray-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2">No NFTs Yet</h3>
                <p className="text-gray-500 text-sm max-w-xs mx-auto">
                  Complete tasks and engage with the platform to earn your first NFT rewards.
                </p>
              </div>
              <GlassButton onClick={() => console.log("Browse opportunities")}>
                Explore Opportunities
              </GlassButton>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Social & Actions */}
        <div className="space-y-6">
          

          {/* Social Connections */}
          <div className="space-y-4">
            
            {/* Twitter Connection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Twitter className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">Twitter</h3>
                  <p className="text-gray-400 text-xs">Not connected</p>
                </div>
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Connect your Twitter account to unlock social features.
              </p>
              <GlassButton onClick={handleTwitterConnect} className="w-full text-sm">
                Connect Account
              </GlassButton>
            </motion.div>

            {/* Ocid Connection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Link className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">OCID</h3>
                  <p className="text-gray-400 text-xs">
                    {authState.isAuthenticated ? "Connected" : "Not connected"}
                  </p>
                </div>
                <div className={`w-2 h-2 rounded-full ${
                  authState.isAuthenticated ? "bg-green-400" : "bg-red-400"
                }`}></div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                {authState.isAuthenticated 
                  ? "Your OCID account is connected and ready to use."
                  : "Connect with OCID for advanced integrations."
                }
              </p>
              
              {authState.isAuthenticated ? (
                <div className="space-y-2">
                  <div className="text-xs text-gray-400 break-all">
                    Connected as: {ocAuth.getAuthState()?.idToken?.edu_username || 'User'}
                  </div>
                  <GlassButton onClick={handleOcidDisconnect} className="w-full text-sm">
                    Disconnect
                  </GlassButton>
                </div>
              ) : (
                <LoginButton />
              )}
            </motion.div>
          </div>

          {/* Special Offer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-6 border border-pink-400/20 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-pink-500 text-white text-xs px-3 py-1 rounded-bl-lg font-medium">
              LIMITED
            </div>
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-pink-500/20 rounded-lg">
                <Heart className="w-5 h-5 text-pink-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Follow & Earn</h3>
                <p className="text-gray-400 text-xs">Social reward</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm mb-4">
              Follow our Twitter page and claim your welcome bonus!
            </p>
            
            <div className="bg-black/20 rounded-lg p-4 mb-4 text-center">
              <div className="text-2xl font-bold text-pink-400 mb-1">5 VB</div>
              <div className="text-xs text-gray-400">Welcome Tokens</div>
            </div>
            
            <GlassButton onClick={handleFollowTwitter} className="w-full text-sm">
              Follow & Claim Reward
            </GlassButton>
          </motion.div>
        </div>
      </div>

      {/* Connection Status Alerts */}
      {!address && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-amber-500/10 backdrop-blur-xl rounded-2xl p-6 border border-amber-400/20 shadow-2xl"
        >
          <div className="flex items-center space-x-3">
            <AlertCircle className="w-6 h-6 text-amber-400" />
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Wallet Not Connected</h3>
              <p className="text-gray-300 text-sm">
                Please connect your wallet to access and update your profile information.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {!authState.isAuthenticated && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-500/10 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/20 shadow-2xl"
        >
          <div className="flex items-center space-x-3">
            <Link className="w-6 h-6 text-blue-400" />
            <div>
              <h3 className="text-lg font-bold text-white mb-1">OCID Not Connected</h3>
              <p className="text-gray-300 text-sm">
                Connect your OCID account to unlock additional features and integrations.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}