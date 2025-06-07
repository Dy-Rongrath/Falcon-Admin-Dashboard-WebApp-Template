import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FileText,
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Globe,
  CreditCard,
} from "lucide-react";

const BasicForms = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-falcon-text-dark font-poppins flex items-center gap-2">
          <FileText className="h-6 w-6 text-falcon-blue" />
          Basic Forms
        </h1>
        <p className="text-falcon-text-light font-poppins">
          Essential form elements and layouts
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic Input Fields */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Input Fields</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="text-input">Text Input</Label>
              <Input
                id="text-input"
                placeholder="Enter your text"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="email-input">Email Input</Label>
              <Input
                id="email-input"
                type="email"
                placeholder="Enter your email"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="password-input">Password Input</Label>
              <Input
                id="password-input"
                type="password"
                placeholder="Enter your password"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="number-input">Number Input</Label>
              <Input
                id="number-input"
                type="number"
                placeholder="Enter a number"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="tel-input">Phone Input</Label>
              <Input
                id="tel-input"
                type="tel"
                placeholder="Enter your phone number"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="url-input">URL Input</Label>
              <Input
                id="url-input"
                type="url"
                placeholder="https://example.com"
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Input with Icons */}
        <Card>
          <CardHeader>
            <CardTitle>Input with Icons</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name-icon">Name</Label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-falcon-text-light" />
                <Input
                  id="name-icon"
                  placeholder="Your name"
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email-icon">Email</Label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-falcon-text-light" />
                <Input
                  id="email-icon"
                  type="email"
                  placeholder="your@email.com"
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone-icon">Phone</Label>
              <div className="relative mt-1">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-falcon-text-light" />
                <Input
                  id="phone-icon"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="date-icon">Date</Label>
              <div className="relative mt-1">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-falcon-text-light" />
                <Input id="date-icon" type="date" className="pl-10" />
              </div>
            </div>

            <div>
              <Label htmlFor="location-icon">Location</Label>
              <div className="relative mt-1">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-falcon-text-light" />
                <Input
                  id="location-icon"
                  placeholder="Your location"
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="website-icon">Website</Label>
              <div className="relative mt-1">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-falcon-text-light" />
                <Input
                  id="website-icon"
                  type="url"
                  placeholder="https://your-website.com"
                  className="pl-10"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Select Dropdowns */}
        <Card>
          <CardHeader>
            <CardTitle>Select Dropdowns</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="country-select">Country</Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                  <SelectItem value="fr">France</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="language-select">Language</Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                  <SelectItem value="it">Italian</SelectItem>
                  <SelectItem value="pt">Portuguese</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="category-select">Category</Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web">Web Development</SelectItem>
                  <SelectItem value="mobile">Mobile Development</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Textarea & File Upload */}
        <Card>
          <CardHeader>
            <CardTitle>Textarea & File Upload</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Enter your message here..."
                className="mt-1"
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter a detailed description..."
                className="mt-1"
                rows={6}
              />
            </div>

            <div>
              <Label htmlFor="file-upload">File Upload</Label>
              <Input id="file-upload" type="file" className="mt-1" />
            </div>

            <div>
              <Label htmlFor="multiple-files">Multiple Files</Label>
              <Input
                id="multiple-files"
                type="file"
                multiple
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Checkboxes & Radio Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>Checkboxes & Radio Buttons</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-base font-semibold">
                Checkbox Options
              </Label>
              <div className="space-y-3 mt-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" />
                  <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">
                    I agree to the terms and conditions
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="marketing" />
                  <Label htmlFor="marketing">
                    Receive marketing communications
                  </Label>
                </div>
              </div>
            </div>

            <div>
              <Label className="text-base font-semibold">Payment Method</Label>
              <RadioGroup defaultValue="card" className="mt-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card">Credit Card</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal">PayPal</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bank" id="bank" />
                  <Label htmlFor="bank">Bank Transfer</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        {/* Switches & Toggle */}
        <Card>
          <CardHeader>
            <CardTitle>Switches & Toggles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="notifications">Email Notifications</Label>
                <p className="text-sm text-falcon-text-light">
                  Receive email notifications for important updates
                </p>
              </div>
              <Switch id="notifications" />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="dark-mode">Dark Mode</Label>
                <p className="text-sm text-falcon-text-light">
                  Enable dark mode for the interface
                </p>
              </div>
              <Switch id="dark-mode" />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="auto-save">Auto Save</Label>
                <p className="text-sm text-falcon-text-light">
                  Automatically save changes
                </p>
              </div>
              <Switch id="auto-save" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="public-profile">Public Profile</Label>
                <p className="text-sm text-falcon-text-light">
                  Make your profile visible to others
                </p>
              </div>
              <Switch id="public-profile" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sample Contact Form */}
      <Card>
        <CardHeader>
          <CardTitle>Sample Contact Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="John" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Doe" className="mt-1" />
              </div>
            </div>

            <div>
              <Label htmlFor="contact-email">Email</Label>
              <Input
                id="contact-email"
                type="email"
                placeholder="john@example.com"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="contact-phone">Phone</Label>
              <Input
                id="contact-phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="subject">Subject</Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="support">Technical Support</SelectItem>
                  <SelectItem value="sales">Sales Question</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="contact-message">Message</Label>
              <Textarea
                id="contact-message"
                placeholder="Enter your message here..."
                className="mt-1"
                rows={4}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="contact-terms" />
              <Label htmlFor="contact-terms">
                I agree to the privacy policy and terms of service
              </Label>
            </div>

            <div className="flex gap-4">
              <Button
                type="submit"
                className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90"
              >
                Send Message
              </Button>
              <Button type="button" variant="outline">
                Reset Form
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BasicForms;
