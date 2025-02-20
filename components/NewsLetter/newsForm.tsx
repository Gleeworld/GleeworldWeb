// src/components/Newsletter.tsx
'use client';

import { useState } from 'react';
import { newsletterSchema } from '@/app/lib/validation';
import { z } from 'zod';


export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isSubscribing, setIsSubscribing] = useState(false);
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubscribing(true);
      
      try {
        const validatedData = newsletterSchema.parse({ email });
        // Here you would typically send the data to your API
        console.log('Newsletter subscription:', validatedData);
        setEmail('');
        setError('');
      } catch (error) {
        if (error instanceof z.ZodError) {
          setError(error.errors[0].message);
        }
      } finally {
        setIsSubscribing(false);
      }
    };
  
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter and join a community of health-conscious individuals on a
            journey towards better well-being.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={isSubscribing}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300"
            >
              {isSubscribing ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
      </section>
    );
  }