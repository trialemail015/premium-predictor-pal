
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 tracking-tight">
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
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="https://source.unsplash.com/random/900x300/?health,protection" 
              alt="Insurance Healthcare" 
              className="object-cover w-full h-64 transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-indigo-900/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-6 py-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-purple-800">Protect Your Future</h2>
                <p className="text-gray-700">Smart coverage for what matters most</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Form Section */}
          <div className="md:col-span-7">
            <Card className="backdrop-blur-md bg-white/80 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-purple-100/50">
                <CardTitle className="text-center text-gray-800">Enter Your Details</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <PredictionForm onSubmit={handlePredict} isLoading={isLoading} />
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="md:col-span-5">
            <Card className="backdrop-blur-md bg-white/80 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl sticky top-8 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-purple-100/50">
                <CardTitle className="text-center text-gray-800">Your Estimate</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
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
          className="mt-16 text-center py-8 border-t border-purple-100"
        >
          <p className="text-gray-600 font-medium">Created by Harsh Jangid</p>
          <div className="flex justify-center gap-4 mt-3">
            <div className="w-2 h-2 rounded-full bg-purple-400"></div>
            <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
            <div className="w-2 h-2 rounded-full bg-purple-400"></div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
