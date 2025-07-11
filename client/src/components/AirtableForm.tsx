import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { submitToAirtable } from "@/utils/airtable";
import { useLocation } from "wouter";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  description: z.string().min(10, "Please provide more details about your project"),
  timeline: z.string().min(1, "Please select a timeline"),
  budget: z.string().optional(),
  phone: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function AirtableForm() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      description: "",
      timeline: "",
      budget: "",
      phone: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      
      const submissionData = {
        ...data,
        timestamp: new Date().toISOString(),
        source: "contact_form",
        status: "New Lead"
      };

      await submitToAirtable(submissionData, "leads");
      
      toast({
        title: "Form Submitted Successfully!",
        description: "Thank you for your submission. We'll contact you within 24 hours.",
      });
      
      // Redirect to thank you page
      setTimeout(() => {
        setLocation("/thank-you");
      }, 1500);
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your form. Please try again or contact us directly at ops@fortyeightweb.com",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-slate-50 border border-gray-200">
      <CardHeader>
        <CardTitle className="text-xl font-jakarta font-bold fw-text">Start Your Project</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium fw-text">Name *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your full name" 
                      {...field} 
                      className="focus:ring-[hsl(186,64%,61%)] focus:border-[hsl(186,64%,61%)]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium fw-text">Email *</FormLabel>
                  <FormControl>
                    <Input 
                      type="email"
                      placeholder="your@email.com" 
                      {...field} 
                      className="focus:ring-[hsl(186,64%,61%)] focus:border-[hsl(186,64%,61%)]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium fw-text">Project Type *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="focus:ring-[hsl(186,64%,61%)] focus:border-[hsl(186,64%,61%)]">
                        <SelectValue placeholder="Select a package" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="starter">Starter - $250</SelectItem>
                      <SelectItem value="standard">Standard - $500</SelectItem>
                      <SelectItem value="advanced">Advanced - $750+</SelectItem>
                      <SelectItem value="ai">AI Logic Build</SelectItem>
                      <SelectItem value="automation">Automation System</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium fw-text">Project Description *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your project..."
                      className="h-32 focus:ring-[hsl(186,64%,61%)] focus:border-[hsl(186,64%,61%)]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="timeline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium fw-text">Timeline *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="focus:ring-[hsl(186,64%,61%)] focus:border-[hsl(186,64%,61%)]">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="asap">ASAP (48 hours)</SelectItem>
                      <SelectItem value="week">Within a week</SelectItem>
                      <SelectItem value="month">Within a month</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium fw-text">Phone (Optional)</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel"
                      placeholder="(555) 123-4567" 
                      {...field} 
                      className="focus:ring-[hsl(186,64%,61%)] focus:border-[hsl(186,64%,61%)]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              disabled={loading}
              className="w-full fw-primary hover:bg-[hsl(181,75%,40%)] transition-colors"
            >
              {loading ? "Submitting..." : "Submit Project Request"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
