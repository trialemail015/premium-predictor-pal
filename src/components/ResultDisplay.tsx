
import { motion } from 'framer-motion';
import { Loader2, CheckCircle, DollarSign, AlertCircle } from 'lucide-react';

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
          <Loader2 className="w-12 h-12 animate-spin text-indigo-600 mb-4" />
          <p className="text-gray-600">Calculating your premium...</p>
        </div>
      ) : prediction ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="flex flex-col items-center py-6"
        >
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-24 h-24 bg-indigo-100 rounded-full"
              />
            </div>
            <div className="relative flex items-center justify-center">
              <DollarSign className="w-12 h-12 text-indigo-600" />
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Your Estimated Premium
          </h3>
          
          <div className="flex items-baseline">
            <span className="text-5xl font-bold text-indigo-600">
              ${prediction?.toLocaleString(undefined, { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </span>
            <span className="text-gray-500 ml-2">per year</span>
          </div>
          
          <div className="mt-6 flex items-center text-green-600">
            <CheckCircle className="w-5 h-5 mr-1" />
            <span className="text-sm">Calculation complete</span>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg w-full">
            <p className="text-sm text-gray-600">
              This is an estimated premium based on the provided information.
              Actual premiums may vary depending on additional factors and provider policies.
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-12 text-center"
        >
          <div className="bg-indigo-50 p-6 rounded-full mb-4">
            <AlertCircle className="w-12 h-12 text-indigo-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">
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
