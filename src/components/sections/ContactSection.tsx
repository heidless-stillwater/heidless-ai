"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();
  const [isMapActive, setIsMapActive] = useState(false);

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
    <section id="contact" className="space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold font-headline sm:text-4xl">Get In Touch</h2>
        <p className="text-muted-foreground md:text-lg">Have a question or a project in mind? We'd love to hear from you.</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column: Information & Map */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold font-headline mb-4">Our Information</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span>703a Seven Sisters Road</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:test@test.com" className="hover:text-primary">test@test.com</a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:01234567890" className="hover:text-primary">0123 456 7890</a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold font-headline mb-4">Our Location</h3>
            <div
              className="relative aspect-video w-full rounded-lg overflow-hidden bg-muted cursor-pointer"
              onClick={() => setIsMapActive(true)}
            >
              {isMapActive ? (
                <iframe
                  src="https://maps.google.com/maps?q=703a%20Seven%20Sisters%20Road&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map of 703a Seven Sisters Road"
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                    <p className="font-semibold">Click to load map</p>
                    <p className="text-xs text-muted-foreground">Map will open in this container</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-lg h-full">
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
            <div className="text-center pt-4">
              <Button type="submit" size="lg" className="w-full">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
