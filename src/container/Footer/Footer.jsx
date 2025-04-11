import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { images } from '@/constants';
import AppWrapper from '@/wrapper/AppWrapper';
import supabase from '@/utils/supabase';

const Footer = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const { error } = await supabase.from('messages').insert([{ name, email, message }]);

    if (!error) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <footer className="py-16 px-4 md:px-16">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Take a coffee & chat with me
      </h2>

      {/* Contact Info Boxes */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
        <div className="flex items-center gap-4 bg-blue-100 shadow-md rounded-xl px-6 py-4 w-full md:w-[290px]">
          <img src={images.mobile} className="h-10" />
          <div>
            <p className="text-gray-700 font-semibold">Phone</p>
            <p className="text-gray-500 text-sm">+212 6 13 43 52 61</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-pink-100 shadow-md rounded-xl px-7 py-4 w-full md:w-[300px]">
          <img src={images.email} className="h-10" />
          <div>
            <p className="text-gray-700 font-semibold">Email</p>
            <p className="text-gray-500 text-sm">soghriothmae2002@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Contact Form or Thank You Message */}
      <div className="max-w-2xl mx-auto p-6 rounded-xl bg-white shadow space-y-4 text-center">
        {submitted ? (
          <div className="text-2xl font-semibold text-green-600">
            🎉 Thank you for your message!
            <p className="text-base font-normal text-gray-500 mt-2">
              I'll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder="Your Message..."
              className="min-h-[120px]"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        )}
      </div>
    </footer>
  );
};

export default AppWrapper(Footer, 'contact');