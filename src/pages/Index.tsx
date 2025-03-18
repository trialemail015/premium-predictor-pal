
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PredictionForm } from '@/components/PredictionForm';
import { ResultDisplay } from '@/components/ResultDisplay';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { Shield, Heart, HeartPulse } from 'lucide-react';

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
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8" />
            <h1 className="text-2xl font-bold">InsurePro</h1>
          </div>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2 hover:bg-white/10 rounded-md transition-colors flex items-center gap-2" href="#">
                  <Heart className="h-4 w-4" />
                  <span>Life Insurance</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2 hover:bg-white/10 rounded-md transition-colors flex items-center gap-2" href="#">
                  <HeartPulse className="h-4 w-4" />
                  <span>Health Insurance</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

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
          {/* Form Section - Enhanced visual appeal */}
          <div className="md:col-span-7">
            <Card className="backdrop-blur-md bg-gradient-to-br from-white to-purple-50 border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-100 to-indigo-100 border-b border-purple-200">
                <CardTitle className="flex items-center gap-2 text-center text-purple-900">
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <Shield className="h-6 w-6 text-purple-700" />
                  </motion.div>
                  Enter Your Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <PredictionForm onSubmit={handlePredict} isLoading={isLoading} />
                </motion.div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section - Enhanced visual appeal */}
          <div className="md:col-span-5">
            <Card className="backdrop-blur-md bg-gradient-to-br from-white to-indigo-50 border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl sticky top-8 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-indigo-100 to-purple-100 border-b border-indigo-200">
                <CardTitle className="flex items-center gap-2 text-center text-indigo-900">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.7 }}
                  >
                    <HeartPulse className="h-6 w-6 text-indigo-700" />
                  </motion.div>
                  Your Estimate
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <ResultDisplay 
                    prediction={prediction} 
                    isLoading={isLoading} 
                  />
                </motion.div>
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
