import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getJobTypes } from '@/data/mockData';
import { BriefcaseIcon } from 'lucide-react';

export default function PostJobPage() {
  const jobTypes = getJobTypes();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be connected to Supabase in the future
    alert('This feature will be implemented with Supabase integration.');
  };
  
  return (
    <div className="container py-8 md:py-12 max-w-3xl">
      <div className="flex flex-col gap-2 mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2 justify-center">
          <BriefcaseIcon className="h-6 w-6" />
          Post a Job
        </h1>
        <p className="text-muted-foreground">
          Reach thousands of qualified candidates with your job listing
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Job Details</CardTitle>
          <CardDescription>
            Fill out the form below to create your job listing
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Job Title</Label>
                <Input id="title" placeholder="e.g. Senior Frontend Developer" required />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="e.g. TechCorp" required />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="e.g. San Francisco, CA" required />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="type">Job Type</Label>
                  <Select required>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      {jobTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="salary">Salary Range</Label>
                <Input id="salary" placeholder="e.g. $80,000 - $100,000" required />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="description">Job Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe the role, responsibilities, and ideal candidate..." 
                  className="min-h-32"
                  required
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="requirements">Requirements (one per line)</Label>
                <Textarea 
                  id="requirements" 
                  placeholder="List the requirements for this position, one per line..."
                  className="min-h-24"
                  required
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="logo">Company Logo URL (optional)</Label>
                <Input id="logo" placeholder="https://example.com/logo.png" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-3">
            <Button type="submit" className="w-full sm:w-auto">Post Job</Button>
            <Button type="button" variant="outline" className="w-full sm:w-auto">
              Preview
            </Button>
          </CardFooter>
        </form>
      </Card>
      
      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>
          By posting a job, you agree to our{' '}
          <Link to="/terms" className="underline underline-offset-4 hover:text-primary">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link to="/privacy" className="underline underline-offset-4 hover:text-primary">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}

function Link(props: { to: string; className?: string; children: React.ReactNode }) {
  return <a href={props.to} className={props.className}>{props.children}</a>;
}