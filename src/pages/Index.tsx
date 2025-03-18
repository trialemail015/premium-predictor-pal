
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PredictionForm } from '@/components/PredictionForm';
import { ResultDisplay } from '@/components/ResultDisplay';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
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

        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="results" disabled={prediction === null && !isLoading}>Results</TabsTrigger>
          </TabsList>
          
          <TabsContent value="calculator">
            <Card className="backdrop-blur-md bg-white/40 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-center text-gray-800">Enter Your Details</CardTitle>
              </CardHeader>
              <CardContent>
                <PredictionForm onSubmit={handlePredict} isLoading={isLoading} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="results">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="backdrop-blur-md bg-white/40 border-0 shadow-xl max-w-md mx-auto">
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
            </motion.div>
          </TabsContent>
        </Tabs>
        
        {prediction !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-gray-500">
              Want to see how changing your details affects your premium? Adjust your information and recalculate.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Index;
