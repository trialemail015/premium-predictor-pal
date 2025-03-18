
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 tracking-tight">
            Insurance Premium Predictor
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get an instant estimate of your insurance premium based on your profile
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <img 
            src="https://source.unsplash.com/random/900x300/?insurance,healthcare" 
            alt="Insurance Healthcare" 
            className="rounded-xl shadow-lg object-cover h-64 w-full max-w-4xl"
          />
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Form Section */}
          <div className="md:col-span-7">
            <Card className="backdrop-blur-md bg-white/70 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-center text-gray-800">Enter Your Details</CardTitle>
              </CardHeader>
              <CardContent>
                <PredictionForm onSubmit={handlePredict} isLoading={isLoading} />
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="md:col-span-5">
            <Card className="backdrop-blur-md bg-white/70 border-0 shadow-xl sticky top-8">
              <CardHeader>
                <CardTitle className="text-center text-gray-800">Your Estimate</CardTitle>
              </CardHeader>
              <CardContent>
                <ResultDisplay 
                  prediction={prediction} 
                  isLoading={isLoading} 
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 text-center py-6 border-t border-gray-200"
        >
          <p className="text-gray-600">Created by Harsh Jangid</p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
