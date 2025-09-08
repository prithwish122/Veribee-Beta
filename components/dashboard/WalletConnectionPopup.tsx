import React from 'react';
import { Wallet, Shield, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

interface WalletConnectionPopupProps {
  onConnect: () => void;
  isConnecting: boolean;
}

export default function WalletConnectionPopup({ onConnect, isConnecting }: WalletConnectionPopupProps) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white rounded-3xl p-8 shadow-2xl max-w-sm w-full mx-4 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-t-3xl"></div>
        
        {/* Wallet illustration container */}
        <div className="relative z-10 flex justify-center mb-6">
          <div className="w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center relative">
            {/* Wallet icon with animation */}
            <motion.div
              animate={{ 
                rotate: isConnecting ? [0, -5, 5, 0] : 0,
              }}
              transition={{ 
                duration: 0.5, 
                repeat: isConnecting ? Infinity : 0,
                ease: "easeInOut" 
              }}
              className="relative"
            >
              <Wallet className="w-12 h-12 text-blue-600" />
              
              {/* Security indicators */}
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Shield className="w-3 h-3 text-white" />
              </div>
            </motion.div>
            
            {/* Connection animation dots */}
            {isConnecting && (
              <div className="absolute -bottom-2 -right-2">
                <div className="flex space-x-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-blue-500 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Connect Your Wallet
          </h2>
          
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            {isConnecting 
              ? "Connecting to your wallet..." 
              : "Connect your wallet to access your profile and start participating in surveys and earning rewards."
            }
          </p>

          {/* Security features */}
          <div className="bg-blue-50 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Lock className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Secure Connection</span>
            </div>
            <p className="text-xs text-blue-600">
              Your wallet data is encrypted and never stored on our servers
            </p>
          </div>

          {/* Connect button */}
          <motion.button
            whileHover={{ scale: isConnecting ? 1 : 1.02 }}
            whileTap={{ scale: isConnecting ? 1 : 0.98 }}
            onClick={onConnect}
            disabled={isConnecting}
            className={`
              w-full py-4 px-6 rounded-2xl font-semibold text-white text-lg
              transition-all duration-200 shadow-lg
              ${isConnecting 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl'
              }
            `}
          >
            {isConnecting ? (
              <div className="flex items-center justify-center space-x-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                <span>Connecting...</span>
              </div>
            ) : (
              'Connect Wallet'
            )}
          </motion.button>

          {/* Help text */}
          <p className="text-xs text-gray-500 mt-4">
            Don't have a wallet? 
            <a 
              href="https://metamask.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 ml-1 underline"
            >
              Get MetaMask
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}