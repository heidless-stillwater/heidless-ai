"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold font-headline sm:text-4xl">Get In <span className="text-accent">Touch</span></h2>
        <p className="text-muted-foreground md:text-lg">Have a question or a project in mind? We'd love to hear from you.</p>
      </div>
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
            />
          </div>
          <div className="text-center">
            <Button type="submit" size="lg">Send Message</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
