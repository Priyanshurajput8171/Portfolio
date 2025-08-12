import { ToastContainer, toast } from 'react-toastify';
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";



import { Button, Textarea, Label, TextInput } from "flowbite-react";
import { cn } from "@/lib/utils";
// import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import axios from "axios";

export const ContactSection = () => {
  //   const { toast } = useToast();
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});
console.log(formData)
let saveEnquiry = (e) => {
  e.preventDefault();
  axios
    .post("http://localhost:8000/api/website/enquiry/insert", formData)
    .then((response) => {
      console.log("Enquiry saved successfully:", response.data);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      toast.success("Enquiry saved successfully!");
    })
    .catch((error) => {
      console.error("Error saving enquiry:", error);
    });
};
let getChange = (e) => {
  let inputName = e.target.name;
  let inputValue = e.target.value;
  let oldData = { ...formData };
  oldData[inputName] = inputValue;
  setFormData(oldData);
};
 
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    priyanshurajput246@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+11234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9458236410
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Roorkee India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/priyanshu-rajput-9a6949248/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/priyanshu_rajpuutt/"
                  target="_blank"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
          >
            <ToastContainer/>
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form
              className="flex max-w-md flex-col gap-4"
              onSubmit={saveEnquiry}
            >
              <div>
                <div className="mb-2 block">
                  <Label className="text-white" htmlFor="name">
                    Your Name
                  </Label>
                </div>
                <TextInput
                  onChange={getChange}
                  value={formData?.name || ""}  
                  className="bg-transparent"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                </div>
                <TextInput
                  onChange={getChange}
                  value={formData?.email || ""}  
                  id="password1"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-2 block">
                <Label className="text-white" htmlFor="name">
                  Message
                </Label>
              </div>
              <Textarea
               onChange={getChange}
               value={formData?.message || ""}  
                id="comment"
                name="message"
                placeholder="Leave a comment..."
                required
                rows={4}
              />
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
