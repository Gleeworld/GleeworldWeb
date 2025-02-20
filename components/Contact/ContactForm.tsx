// src/components/ContactForm.tsx
'use client';

import { useState } from 'react';
import { contactFormSchema } from '@/app/lib/validation';
import { z } from 'zod';

type Props = {
  title: string;
  details: string;
  topText: string;
  subHeading: string;
}

export default function ContactForm({ title, details, topText, subHeading }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const validatedData = contactFormSchema.parse(formData);
      // Here you would typically send the data to your API
      console.log('Form submitted:', validatedData);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            errorMessages[err.path[0]] = err.message;
          }
        });
        setErrors(errorMessages);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <p className='text-center mb-8'> {`${topText}`}</p>
        <h2 className="text-3xl font-bold text-center mb-8">{`${title}`}</h2>
        <h3 className='text-xl font-bold text-center mb-8'>{`${subHeading}`}</h3>
        <p className="text-center mb-8">
       {`${details}`}
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors disabled:bg-orange-300"
          >
            {isSubmitting ? 'Sending...' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  );
}
