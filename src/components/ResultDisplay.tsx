
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export const ResultDisplay = ({ 
  prediction,
  isLoading
}: { 
  prediction: number | null;
  isLoading: boolean;
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">
        Estimated Premium
      </h3>
      
      {isLoading ? (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center py-6"
        >
          <span className="text-4xl font-bold text-blue-600">
            ${prediction?.toLocaleString(undefined, { 
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
          </span>
          <p className="text-sm text-gray-500 mt-2">per year</p>
        </motion.div>
      )}
      
      <p className="text-xs text-gray-500 text-center">
        This is an estimated premium based on the provided information.
        Actual premiums may vary.
      </p>
    </div>
  );
};
