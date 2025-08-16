import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "../lib/utils";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success(
            "Thank you for your message. I'll get back to you soon."
          );
          setIsSubmitting(false); // reset
          form.current.reset(); // optional: clears inputs
        },
        () => {
          toast.error(
            "An error occurred while sending your message. Please try again later."
          );
          setIsSubmitting(false); // reset
          form.current.reset(); // optional: clears inputs
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      {" "}
      <div className="container mx-auto max-w-5xl">
        {" "}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Get In <span className="text-primary"> Touch</span>{" "}
        </h2>{" "}
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {" "}
          Have a project in mind or want to collaborate? feel free to reach out.
          I'm always open to discussing new opportunities.{" "}
        </p>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {" "}
          <div className="space-y-8">
            {" "}
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>{" "}
            <div className="space-y-6 justify-center">
              {" "}
              <div className="flex items-start space-x-4">
                {" "}
                <div className="p-3 rounded-full bg-primary/10">
                  {" "}
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="font-medium">Email</h4>{" "}
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                    href="mailto:parshotum.szabist@gmail.com"
                  >
                    {" "}
                    parshotum.szabist@gmail.com{" "}
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex items-start space-x-4">
                {" "}
                <div className="p-3 rounded-full bg-primary/10">
                  {" "}
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="font-medium">Phone</h4>{" "}
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                    href="tel:+923147267462"
                  >
                    {" "}
                    +92 314 7267462{" "}
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex items-start space-x-4">
                {" "}
                <div className="p-3 rounded-full bg-primary/10">
                  {" "}
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="font-medium"> Location</h4>{" "}
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    {" "}
                    Mir Hussainabad Phase 2{" "}
                  </a>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="pt-8 ">
              {" "}
              <h4 className="font-medium mb-4">Connect With Me</h4>{" "}
              <div className="flex space-x-4 justify-center">
                {" "}
                <a href="#" target="_blank">
                  {" "}
                  <Linkedin />{" "}
                </a>{" "}
                <a
                  target="_blank"
                  href="https://www.instagram.com/pashu__lohana/?hl=en"
                >
                  {" "}
                  <Instagram />{" "}
                </a>{" "}
                <a
                  target="_blank"
                  href="https://www.facebook.com/pashu.dulhani.1"
                >
                  {" "}
                  <Facebook />{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            {" "}
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>{" "}
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {" "}
              <div>
                {" "}
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  {" "}
                  Your Name{" "}
                </label>{" "}
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Pashu Dulhani..."
                />{" "}
              </div>{" "}
              <div>
                {" "}
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  {" "}
                  Your Email{" "}
                </label>{" "}
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />{" "}
              </div>{" "}
              <div>
                {" "}
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="message"
                >
                  {" "}
                  Your Message{" "}
                </label>{" "}
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello I'd like to talk about..."
                />{" "}
              </div>{" "}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {" "}
                {isSubmitting ? "Sending..." : "Send Message"}{" "}
                <Send size={16} />{" "}
              </button>{" "}
            </form>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default ContactSection;
