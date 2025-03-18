
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { PredictionForm } from '@/components/PredictionForm';
import { ResultDisplay } from '@/components/ResultDisplay';

const Index = () => {
  const [prediction, setPrediction] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePredict = async (formData: any) => {
    setIsLoading(true);
    // Simulate API call for now
    await new Promise(resolve => setTimeout(resolve, 1500));
    setPrediction(5280.45);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Insurance Premium Predictor
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get an instant estimate of your insurance premium based on your profile
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <PredictionForm onSubmit={handlePredict} isLoading={isLoading} />
          </Card>

          {(prediction !== null || isLoading) && (
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg h-fit">
              <ResultDisplay 
                prediction={prediction} 
                isLoading={isLoading} 
              />
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
