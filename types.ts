import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingPlan {
  name: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  institute: string;
  content: string;
  image: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type ViewState = 
  | 'landing'
  | 'login'
  | 'admin-dashboard' 
  | 'admin-test-builder' 
  | 'admin-question-bank'
  | 'student-dashboard' 
  | 'student-test'
  | 'super-admin-dashboard'
  | 'super-admin-centers';

export interface DashboardStat {
  label: string;
  value: string;
  change?: string;
  positive?: boolean;
  icon: LucideIcon;
  color: string;
}

export interface StudentResult {
  id: string;
  name: string;
  avatar: string;
  score: number;
  rank: number;
  trend: 'up' | 'down' | 'same';
}

export interface RecentTest {
  id: string;
  name: string;
  date: string;
  attempts: number;
  avgScore: number;
  status: 'Live' | 'Closed' | 'Draft';
}

export interface Question {
  id: string;
  text: string;
  type: 'mcq' | 'descriptive';
  marks: number;
  options?: string[];
  correctOption?: number;
}

export interface StudentTest {
  id: string;
  title: string;
  subject: string;
  duration: number; // minutes
  questions: number;
  status: 'upcoming' | 'live' | 'completed';
  dueDate: string;
}

export interface StudentHistory {
  id: string;
  testName: string;
  date: string;
  score: number;
  totalMarks: number;
  rank: number;
}

export interface CoachingCenter {
  id: string;
  name: string;
  ownerName: string;
  email: string;
  phone: string;
  plan: 'Free' | 'Starter' | 'Growth' | 'Enterprise';
  status: 'active' | 'inactive';
  joinedDate: string;
  studentCount: number;
}