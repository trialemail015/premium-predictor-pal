
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Heart,
  User,
  MapPin,
  Cigarette,
  Users,
  Scale,
  Shield,
  Activity,
  Briefcase,
} from 'lucide-react';

const regions = ['Northeast', 'Northwest', 'Southeast', 'Southwest'];
const medicalConditions = ['Diabetes', 'Heart Disease', 'High Blood Pressure'];
const exerciseFrequency = ['Frequently', 'Never', 'Occasionally', 'Rarely'];
const occupations = ['Blue Collar', 'Student', 'Unemployed', 'White Collar'];
const coverageLevels = ['Basic', 'Standard', 'Premium'];

export const PredictionForm = ({ 
  onSubmit,
  isLoading
}: {
  onSubmit: (data: any) => void;
  isLoading: boolean;
}) => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    bmi: '',
    children: '',
    smoker: '',
    region: '',
    medicalHistory: '',
    familyHistory: '',
    exerciseFrequency: '',
    occupation: '',
    coverageLevel: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Age & Gender */}
        <div className="space-y-2">
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            type="number"
            min="18"
            max="65"
            placeholder="18-65"
            value={formData.age}
            onChange={(e) => handleChange('age', e.target.value)}
            required
            className="bg-white/50 backdrop-blur-sm"
          />
        </div>
        <div className="space-y-2">
          <Label>Gender</Label>
          <Select onValueChange={(value) => handleChange('gender', value)}>
            <SelectTrigger className="bg-white/50 backdrop-blur-sm">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="male">Male</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* BMI & Children */}
        <div className="space-y-2">
          <Label htmlFor="bmi">BMI</Label>
          <Input
            id="bmi"
            type="number"
            min="18"
            max="50"
            step="0.1"
            placeholder="18-50"
            value={formData.bmi}
            onChange={(e) => handleChange('bmi', e.target.value)}
            required
            className="bg-white/50 backdrop-blur-sm"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="children">Number of Children</Label>
          <Input
            id="children"
            type="number"
            min="0"
            max="5"
            placeholder="0-5"
            value={formData.children}
            onChange={(e) => handleChange('children', e.target.value)}
            required
            className="bg-white/50 backdrop-blur-sm"
          />
        </div>

        {/* Smoker & Region */}
        <div className="space-y-2">
          <Label>Smoker</Label>
          <Select onValueChange={(value) => handleChange('smoker', value)}>
            <SelectTrigger className="bg-white/50 backdrop-blur-sm">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="yes">Yes</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Region</Label>
          <Select onValueChange={(value) => handleChange('region', value)}>
            <SelectTrigger className="bg-white/50 backdrop-blur-sm">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {regions.map((region) => (
                  <SelectItem key={region} value={region.toLowerCase()}>
                    {region}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Medical History & Exercise */}
        <div className="space-y-2">
          <Label>Medical History</Label>
          <Select onValueChange={(value) => handleChange('medicalHistory', value)}>
            <SelectTrigger className="bg-white/50 backdrop-blur-sm">
              <SelectValue placeholder="Select conditions" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {medicalConditions.map((condition) => (
                  <SelectItem key={condition} value={condition.toLowerCase()}>
                    {condition}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Exercise Frequency</Label>
          <Select onValueChange={(value) => handleChange('exerciseFrequency', value)}>
            <SelectTrigger className="bg-white/50 backdrop-blur-sm">
              <SelectValue placeholder="Select frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {exerciseFrequency.map((frequency) => (
                  <SelectItem key={frequency} value={frequency.toLowerCase()}>
                    {frequency}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Occupation & Coverage */}
        <div className="space-y-2">
          <Label>Occupation</Label>
          <Select onValueChange={(value) => handleChange('occupation', value)}>
            <SelectTrigger className="bg-white/50 backdrop-blur-sm">
              <SelectValue placeholder="Select occupation" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {occupations.map((occupation) => (
                  <SelectItem key={occupation} value={occupation.toLowerCase()}>
                    {occupation}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Coverage Level</Label>
          <Select onValueChange={(value) => handleChange('coverageLevel', value)}>
            <SelectTrigger className="bg-white/50 backdrop-blur-sm">
              <SelectValue placeholder="Select coverage" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {coverageLevels.map((level) => (
                  <SelectItem key={level} value={level.toLowerCase()}>
                    {level}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
        disabled={isLoading}
      >
        {isLoading ? 'Calculating...' : 'Predict Premium'}
      </Button>
    </form>
  );
};
