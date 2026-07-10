import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      title: "Email",
      value: "gokulsiva1101@gmail.com",
      href: "mailto:gokulsiva1101@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      title: "Phone",
      value: "+91 9790885720",
      href: "tel:+919790885720",
    },
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      title: "Location",
      value: "Guduvanchery, Tamilnadu",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/GOKULSIVA123",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gokulsiva1101/",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "Twitter/X",
      url: "#",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "Email",
      url: "mailto:gokulsiva1101@gmail.com",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">Touch</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind, want to collaborate, or just want to say hello? Drop me a message below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Contact Details */}
          <div className="lg:col-span-5">
            <Card className="p-8 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-2xl h-full flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Let's Connect
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
                  I'm always excited about new opportunities, full-stack projects, and learning new tools. Reach out via the form, directly through email, or on social media!
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-xl border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-blue-200 dark:hover:border-blue-900/50 hover:shadow-[0_10px_20px_-10px_rgba(59,130,246,0.15)] transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-slate-450 dark:text-slate-400 uppercase tracking-wider">
                          {info.title}
                        </h4>
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Connections */}
              <div className="mt-8 pt-8 border-t border-slate-200/60 dark:border-slate-800/80">
                <h4 className="text-xs font-bold text-slate-450 dark:text-slate-400 uppercase tracking-wider mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white dark:bg-slate-905 border border-slate-250 dark:border-slate-800 flex items-center justify-center text-slate-650 dark:text-slate-300 hover:text-white dark:hover:text-white hover:bg-primary dark:hover:bg-primary hover:border-primary dark:hover:border-primary hover:scale-105 transition-all duration-200"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2"
                    >
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-850 focus:border-primary dark:focus:border-primary focus:bg-white dark:focus:bg-slate-900 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-850 focus:border-primary dark:focus:border-primary focus:bg-white dark:focus:bg-slate-900 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2"
                  >
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-850 focus:border-primary dark:focus:border-primary focus:bg-white dark:focus:bg-slate-900 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    placeholder="Project inquiry / Say hello"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-850 focus:border-primary dark:focus:border-primary focus:bg-white dark:focus:bg-slate-900 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none"
                    placeholder="Tell me more about your inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/95 text-white gap-2 rounded-xl py-6 font-semibold shadow-md shadow-primary/10 hover:shadow-lg transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;