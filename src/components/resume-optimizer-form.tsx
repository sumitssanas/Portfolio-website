'use client';

import { useState } from 'react';
import { Download, Loader2, UploadCloud, Wand2, FileText, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { handleOptimizeResume } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { jsPDF } from 'jspdf';

// Helper component to render highlighted text
const HighlightedText = ({ text, highlights }: { text: string, highlights: string[] }) => {
    if (!highlights.length) {
      return <>{text}</>;
    }
    const regex = new RegExp(`(${highlights.join('|')})`, 'gi');
    const parts = text.split(regex);
  
    return (
      <>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <mark key={i} className="bg-yellow-200 px-1 rounded">
              {part}
            </mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
};


export function ResumeOptimizerClient() {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState('');
  const [optimizedResume, setOptimizedResume] = useState<string | null>(null);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [isSatisfied, setIsSatisfied] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setOptimizedResume(null);
      setKeywords([]);
      setIsSatisfied(false);
    }
  };

  const handleJobDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJobDescription(e.target.value);
    setOptimizedResume(null);
    setKeywords([]);
    setIsSatisfied(false);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast({
        variant: 'destructive',
        title: 'No Resume File',
        description: 'Please upload your resume.',
      });
      return;
    }
    if (!jobDescription.trim()) {
        toast({
          variant: 'destructive',
          title: 'No Job Description',
          description: 'Please paste the job description.',
        });
        return;
      }

    setLoading(true);
    setOptimizedResume(null);
    setKeywords([]);
    setIsSatisfied(false);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const resumeDataUri = reader.result as string;
      const response = await handleOptimizeResume({
        resumeDataUri,
        jobDescription,
      });

      setLoading(false);
      if (response.success && response.data) {
        setOptimizedResume(response.data.optimizedResume);
        setKeywords(response.data.extractedKeywords);
        toast({
            title: 'Optimization Complete!',
            description: 'Your resume has been optimized with relevant keywords.',
          });
      } else {
        toast({
          variant: 'destructive',
          title: 'Optimization Failed',
          description: response.error,
        });
      }
    };
    reader.onerror = () => {
        setLoading(false);
        toast({
            variant: 'destructive',
            title: 'File Read Error',
            description: 'Could not read the uploaded file.',
          });
    }
  };

  const handleDownloadPdf = () => {
    if (!optimizedResume) return;
  
    const doc = new jsPDF({
        unit: 'pt',
        format: 'a4',
    });
  
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(10);
    
    // We need to get the text content with highlights to generate the PDF correctly.
    // A better approach would be to convert markdown to HTML and then use that with jsPDF's html method.
    // For now, let's try a simpler text approach that loses formatting.
    // For a more robust solution, especially with complex markdown, a library like `marked` would be better.
    const container = document.createElement('div');
    
    // To handle highlights, we can't just use the raw string. We need HTML.
    // Let's create the HTML content from the highlighted text logic.
    const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
    const parts = optimizedResume.split(regex);
    const htmlContent = parts.map((part) =>
      keywords.length > 0 && regex.test(part) ? `<mark style="background-color: #fefcbf; padding: 1px; border-radius: 2px;">${part}</mark>` : `<span>${part}</span>`
    ).join('').replace(/\n/g, '<br/>'); // Preserve line breaks

    container.innerHTML = htmlContent;

    doc.html(container, {
      async callback(doc) {
        doc.save('optimized-resume.pdf');
      },
      x: 35,
      y: 35,
      width: 525,
      windowWidth: 650, // a reasonable width for rendering
      html2canvas: {
        scale: 0.6, // Adjust scale to fit content
        useCORS: true,
      }
    });
  };

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle className="font-headline">Input</CardTitle>
          <CardDescription>Provide your resume and the job description.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="resume-upload">Your Resume</Label>
              <div className="flex items-center gap-2">
                <Input id="resume-upload" type="file" onChange={handleFileChange} accept=".txt,.pdf,.doc,.docx" />
              </div>
               {file && <p className="text-sm text-muted-foreground flex items-center gap-2 pt-2"><FileText className="h-4 w-4"/>Selected: {file.name}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="job-description">Job Description</Label>
              <Textarea
                id="job-description"
                placeholder="Paste the full job description here..."
                value={jobDescription}
                onChange={handleJobDescriptionChange}
                rows={10}
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full bg-accent hover:bg-accent/90">
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="mr-2 h-4 w-4" />
              )}
              Optimize with AI
            </Button>
          </form>
        </CardContent>
      </Card>
      
      <div className="lg:col-span-2 grid gap-6">
        <Card className={!loading && keywords.length === 0 ? "hidden" : ""}>
          <CardHeader>
            <CardTitle className="font-headline">Extracted Keywords</CardTitle>
            <CardDescription>These are the key skills and terms the AI focused on.</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
                <div className="flex flex-col items-center justify-center h-24 rounded-lg border-2 border-dashed border-muted">
                    <Loader2 className="h-6 w-6 animate-spin text-accent" />
                    <p className="mt-2 text-muted-foreground text-sm">Extracting keywords...</p>
                </div>
            ) : (
                <div className="flex flex-wrap gap-2">
                    {keywords.map((keyword, index) => (
                        <Badge key={index} variant="secondary">{keyword}</Badge>
                    ))}
                </div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Optimized Resume</CardTitle>
            <CardDescription>Your AI-enhanced resume will appear here. Added keywords are highlighted.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
              {loading && !optimizedResume && (
                  <div className="flex flex-col items-center justify-center h-96 rounded-lg border-2 border-dashed border-muted">
                      <Loader2 className="h-8 w-8 animate-spin text-accent" />
                      <p className="mt-4 text-muted-foreground">AI is working its magic...</p>
                  </div>
              )}
              {optimizedResume && (
                  <div className="space-y-4">
                      <div id="resume-output" className="p-3 rounded-md border bg-background h-96 overflow-y-auto text-sm prose prose-sm max-w-none">
                        <HighlightedText text={optimizedResume} highlights={keywords} />
                      </div>
                      
                      <div className="flex items-center space-x-2 p-4 bg-muted/50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <Label htmlFor="satisfied-checkbox" className="flex-1 text-sm font-medium">I'm satisfied with the changes</Label>
                          <Input
                            id="satisfied-checkbox"
                            type="checkbox"
                            checked={isSatisfied}
                            onChange={(e) => setIsSatisfied(e.target.checked)}
                            className="h-4 w-4"
                          />
                      </div>

                      <Button onClick={handleDownloadPdf} className="w-full" disabled={!isSatisfied}>
                          <Download className="mr-2 h-4 w-4" />
                          Download as PDF
                      </Button>
                  </div>
              )}
              {!loading && !optimizedResume && (
                  <div className="flex flex-col items-center justify-center h-96 rounded-lg border-2 border-dashed border-muted">
                      <UploadCloud className="h-8 w-8 text-muted-foreground" />
                      <p className="mt-4 text-muted-foreground">Your result will be shown here.</p>
                  </div>
              )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
