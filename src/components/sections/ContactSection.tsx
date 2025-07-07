"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone } from 'lucide-react';

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

  const address = '703a Seven Sisters Road';
  const contactEmail = 'test@test.com';
  const contactPhone = '0123 456 7890';
  const mapQuery = encodeURIComponent(address);
  const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold font-headline sm:text-4xl">Get In Touch</h2>
        <p className="text-muted-foreground md:text-lg">Have a question or a project in mind? We'd love to hear from you.</p>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column: Info + Map */}
          <div className="space-y-8 bg-card p-8 rounded-lg shadow-lg flex flex-col">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold font-headline mb-6">Our Information</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span>{address}</span>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <a href={`mailto:${contactEmail}`} className="hover:text-primary transition-colors">{contactEmail}</a>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <a href={`tel:${contactPhone}`} className="hover:text-primary transition-colors">{contactPhone}</a>
                </div>
              </div>
            </div>
            <div className="mt-auto pt-8">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-card p-8 rounded-lg shadow-lg flex flex-col">
            <form onSubmit={handleSubmit} className="flex flex-col flex-grow space-y-6">
              <div className="space-y-6 flex-grow">
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
              </div>
              <div className="text-center">
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}