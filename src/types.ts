/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface StatItem {
  id: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  icon?: string;
}

export interface ModalityItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface PremiumPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: {
    text: string;
    included: boolean;
  }[];
  popular: boolean;
  trialDays?: number;
  tagline: string;
}

export interface StructureFeature {
  id: string;
  name: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}
