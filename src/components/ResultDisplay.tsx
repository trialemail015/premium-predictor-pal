
import { motion } from 'framer-motion';
import { Loader2, CheckCircle, DollarSign, AlertCircle, LineChart, ArrowUpRight, Shield, Trophy } from 'lucide-react';

export const ResultDisplay = ({ 
  prediction,
  isLoading
}: { 
  prediction: number | null;
  isLoading: boolean;
}) => {
  return (
    <div className="py-4">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-12">
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 1.5, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity }
            }}
          >
            <Loader2 className="w-12 h-12 text-purple-600 mb-4" />
          </motion.div>
          <p className="text-gray-600 font-medium">Calculating your premium...</p>
          <motion.div 
            className="w-48 h-1 bg-gray-200 rounded-full mt-4 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div 
              className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </div>
      ) : prediction ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="flex flex-col items-center py-6"
        >
          <div className="relative mb-8">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-32 h-32 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full flex items-center justify-center shadow-md"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <DollarSign className="w-16 h-16 text-purple-600" />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -top-2 -right-2 bg-green-500 text-white p-2 rounded-full shadow-lg"
            >
              <CheckCircle className="w-5 h-5" />
            </motion.div>
            
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -bottom-2 -left-2 bg-indigo-500 text-white p-2 rounded-full shadow-lg"
            >
              <Trophy className="w-5 h-5" />
            </motion.div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Your Estimated Premium
          </h3>
          
          <div className="flex items-baseline mb-4">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
            >
              ${prediction?.toLocaleString(undefined, { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </motion.span>
            <span className="text-gray-500 ml-2">/ year</span>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-4 w-full"
          >
            <motion.div 
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex-1 min-w-[140px] bg-gradient-to-b from-white to-purple-50 rounded-xl shadow-md p-4 border border-purple-100"
            >
              <div className="flex items-center gap-2 text-purple-600 mb-1 font-medium">
                <LineChart className="w-4 h-4" />
                <span className="text-sm">Monthly</span>
              </div>
              <p className="text-lg font-semibold">${(prediction / 12).toFixed(2)}</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex-1 min-w-[140px] bg-gradient-to-b from-white to-indigo-50 rounded-xl shadow-md p-4 border border-indigo-100"
            >
              <div className="flex items-center gap-2 text-indigo-600 mb-1 font-medium">
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-sm">Savings</span>
              </div>
              <p className="text-lg font-semibold text-green-600">15%</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg w-full shadow-inner"
          >
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-indigo-500 mt-0.5" />
              <p className="text-sm text-gray-600">
                This is an estimated premium based on the provided information.
                Actual premiums may vary depending on additional factors.
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-12 text-center"
        >
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-full mb-6 shadow-inner">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, 0, -10, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <AlertCircle className="w-12 h-12 text-purple-500" />
            </motion.div>
          </div>
          <h3 className="text-xl font-medium text-gray-800 mb-3">
            No Prediction Yet
          </h3>
          <p className="text-gray-600 max-w-xs">
            Fill out the form with your details and click "Predict Premium" to see your estimated insurance cost.
          </p>
        </motion.div>
      )}
    </div>
  );
};
