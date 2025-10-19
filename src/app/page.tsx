import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Eye, Briefcase, Code, Cpu, Database, Cloud, Wrench, Languages, Github, ExternalLink, Activity, BookOpen, Handshake, Linkedin, Mail, Phone, UserCheck } from "lucide-react";
import Image from "next/image";
import heroImage from "@/public/image/image.png";
import Link from "next/link";

const skills = [
    {
        category: "Languages",
        icon: <Languages className="h-6 w-6 text-primary" />,
        items: ["English (Fluent)", "Hindi (Fluent)", "Marathi (Native)", "German (Beginner)"],
    },
    {
        category: "Programming & Automation",
        icon: <Code className="h-6 w-6 text-primary" />,
        items: ["Python (Pandas, NumPy, SciPy, Scikit, Matplotlib, Statsmodels, Multivariate Regression)", "VBA (Macros)", "ERP Workflow Automation"],
    },
    {
        category: "Tools & Platforms",
        icon: <Wrench className="h-6 w-6 text-primary" />,
        items: ["Bloomberg Terminal", "Power BI", "Tableau", "SQL", "Excel (Advanced)", "Google Sheets", "MS Office", "PowerPoint"],
    },
    {
        category: "Interests & Activities",
        icon: <Activity className="h-6 w-6 text-primary" />,
        items: ["Reading", "Hiking", "Astronomy", "Gardening", "National Parks", "Antique Coin Collection", "Marathi Literature", "Indian Classical music", "TV Sitcom"],
    }
];

const experiences = [
    {
        role: "Business Analyst",
        company: "Bright Mind Enrichment and Schooling, New York, USA (Remote)",
        duration: "Jun 2025 - Aug 2025",
        tasks: [
            "Analyzed and streamlined 10+ core business processes, increasing overall operational efficiency.",
            "Spearheaded requirements analysis for multiple projects, producing 10+ business requirement documents (BRDs) that reduced project scope deviations by 30%.",
            "Led 5+ cross-functional stakeholder workshops, resulting in clearer project scopes and a 25% improvement in on-time delivery.",
            "Partnered with development and operations teams to align solutions with business goals and improving user satisfaction.",
        ],
    },
    {
        role: "Financial Compliance Associate",
        company: "InCorp Advisory Services Pvt. Ltd., Mumbai, IN",
        duration: "Nov 2023 - Jul 2024",
        tasks: [
            "Advised 25+ clients on financial compliance, supervised proposal development, and led onboarding for startups, SMEs, and MNCs along with clients resolving finance, accounting, and compliance inquiries generating over USD 50,000 in domestic and international cross-sell revenue.",
            "Managed departmental budgeting and year-end P&L analysis, delivering accurate monthly, quarterly, and annual financial reports.",
            "Led a Zoho CRM integration project that automated proposal workflows, standardizing templates and cutting preparation time by 50% and improved data accuracy for FP&A teams.",
            "Supported cross-border transaction advisory team, assisting senior professionals with valuation, fundraising, M&A, and compliance (e.g., Rights Issue, External Commercial Borrowings) for international clients.",
        ],
    },
    {
        role: "Financial Compliance Analyst",
        company: "InCorp Advisory Services Pvt. Ltd., Mumbai, IN",
        duration: "Apr 2023 - Oct 2023",
        tasks: [
            "Conducted in-depth research on country-specific laws, market-entry guidelines, and government/commercial incentives, producing presentations and research reports on financial-compliance topics.",
            "Leveraged advanced Excel functions for monthly MIS reporting and revenue reconciliation within an internal department.",
            "Guided clients on regulatory compliances such as Transfer Pricing, Permanent Establishments, and DTAA (India-Singapore).",
        ],
    },
];

const leadershipExperience = [
    {
        role: "Executive Member, Leadership Board",
        company: "W. P. Carey School of Business, Arizona State University",
        duration: "2024",
        tasks: [
            "Responsibility for planning and execution of six signature events for the entire academic year, ensuring efficient budget management of USD 18,000 and resource allocation.",
            "Served as a liaison between faculty and students, fostering strong relationships by enhancing the overall academic experience and maximizing student engagement through assisting in conflict resolutions.",
            "Collaborated with various clubs and organizations to coordinate joint initiatives by promoting interdisciplinary networking."
        ],
    }
];

const education = [
    {
        university: "Cumberland University, Lebanon, TN",
        degree: "Master of Science in Information Technology Management (Online)",
        duration: "Dec 2026",
        details: "CGPA: 9.42/10.00",
        coursework: ["Information Security and Risk Management", "Procurement and Contract Management", "Database Design and Management", "Project Management"],
    },
    {
        university: "W. P. Carey School of Business at Arizona State University (ASU), Tempe, AZ",
        degree: "Master of Science in Finance",
        duration: "May 2025",
        details: "GPA: 3.87/4.00",
        awards: ["Beta Gamma Sigma Business Honor Society", "W. P. Carey School of Business - Finance Scholarship (2024-2025)", "Executive Member of Leadership Board at W. P. Carey School of Business, Arizona State University (2024-2025)"],
        coursework: ["Fixed Income", "Derivatives", "Corporate Finance", "Quantitative Finance", "Managerial Finance", "Risk Management"],
    }
]

const projects = [
    {
        title: "Capstone Project",
        description: "Built and actively managed a multi-asset portfolio on Bloomberg terminal for a Public Pension Fund integrating equity research, asset allocation, Monte Carlo simulations, Stress testing, & statistical analysis to quantify return, VaR and volatility.",
    },
    {
        title: "Comparative Analytics",
        description: "Applied regression, correlation, and Monte Carlo techniques to stock-price vs. net-income and revenue data for Amazon, Tesla, J&J, and Raytheon revealing higher sensitivity in new-age firms to guide allocation strategies.",
    },
    {
        title: "Corporate Finance Cases",
        description: "Developed FX-hedging frameworks for General Motors; globalized WACC and capital-budgeting for AES; and analyzed DFA’s small-cap fund philosophy, forecasting Harley-Davidson stock via DDM, CAPM, and H-model.",
    }
];

export default function PortfolioPage() {
    return (
        <div className="flex flex-col">
            <section id="home" className="min-h-screen flex items-center px-4 sm:px-8 lg:px-12">
                <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-center lg:text-left">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            MS in Finance Student
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins tracking-tighter">
                            Hi, I'm <span className="text-primary">Sumit Sanas</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                        A finance professional who earned an MS in Finance from the W. P. Carey School at Arizona State University (ASU), now sharpening my tech skills with an MS in IT Management at Cumberland University.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button asChild size="lg" className="bg-primary/90 hover:bg-primary">
                                <Link href="#projects">
                                    <Eye className="mr-2 h-5 w-5" /> View My Work
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="#contact">
                                    Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10 transform -translate-x-10 translate-y-10"></div>
                        <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                            <div className="absolute inset-0 border-4 border-primary rounded-full transform rotate-12"></div>
                            <Image
                                src={heroImage}
                                alt="Sumit Sanas"
                                width={400}
                                height={400}
                                className="rounded-full object-cover w-full h-full p-2"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="min-h-screen flex items-center justify-center bg-secondary/50 py-20 px-4 sm:px-8 lg:px-12">
                <div className="container mx-auto space-y-12">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">About Me</h2>
                        <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
                           As an MS in Finance student from the W. P. Carey School of Business, I am committed to honing my professional skills and advancing within the finance industry. My previous experience with global financial compliance, industry standards, and effective client relationship management has equipped me with a strong foundation for success. I am eager to apply these insights in roles such as Financial Analyst, Investment Banker, FP&A Analyst, or Private Equity Analyst. Recognized for my rapid learning ability, I remain dedicated to staying on the cutting edge of finance and contributing meaningfully to organizational objectives. I look forward to collaborating with industry professionals to explore opportunities and achieve shared success.
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-8">My Skills</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {skills.map((skillGroup) => (
                                <Card key={skillGroup.category} className="text-left bg-background/50 hover:border-primary transition-all duration-300">
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        {skillGroup.icon}
                                        <CardTitle className="text-xl font-poppins">{skillGroup.category}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {skillGroup.items.map(item => <Badge key={item} variant="secondary">{item}</Badge>)}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="experience" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-8 lg:px-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-12 text-center">Professional Experience</h2>
                    <div className="relative max-w-3xl mx-auto">
                        <div className="absolute left-4 top-0 h-full w-0.5 bg-border"></div>
                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative pl-12">
                                    <div className="absolute left-4 top-1 -translate-x-1/2 bg-primary h-4 w-4 rounded-full border-4 border-background flex items-center justify-center">
                                        <Briefcase className="h-2 w-2 text-primary-foreground" />
                                    </div>
                                    <Card className="text-left bg-secondary/50 hover:border-primary/50 transition-all duration-300">
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-bold font-poppins">{exp.role}</h3>
                                            <p className="text-primary font-medium mb-1">{exp.company}</p>
                                            <p className="text-sm text-muted-foreground mb-4">{exp.duration}</p>
                                            <ul className="space-y-2 text-sm">
                                                {exp.tasks.map((task, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <ArrowRight className="h-4 w-4 mr-2 mt-1 text-primary shrink-0" />
                                                        <span>{task}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="leadership" className="bg-secondary/50 py-20 px-4 sm:px-8 lg:px-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-12 text-center">Leadership Experience</h2>
                    <div className="relative max-w-3xl mx-auto">
                        <div className="absolute left-4 top-0 h-full w-0.5 bg-border"></div>
                        <div className="space-y-12">
                            {leadershipExperience.map((exp, index) => (
                                <div key={index} className="relative pl-12">
                                    <div className="absolute left-4 top-1 -translate-x-1/2 bg-primary h-4 w-4 rounded-full border-4 border-background flex items-center justify-center">
                                        <UserCheck className="h-2 w-2 text-primary-foreground" />
                                    </div>
                                    <Card className="text-left bg-background/50 hover:border-primary/50 transition-all duration-300">
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-bold font-poppins">{exp.role}</h3>
                                            <p className="text-primary font-medium mb-1">{exp.company}</p>
                                            <p className="text-sm text-muted-foreground mb-4">{exp.duration}</p>
                                            <ul className="space-y-2 text-sm">
                                                {exp.tasks.map((task, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <ArrowRight className="h-4 w-4 mr-2 mt-1 text-primary shrink-0" />
                                                        <span>{task}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="education" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-8 lg:px-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-12">Education</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {education.map((edu, index) => (
                            <Card key={index} className="flex flex-col text-left bg-background/50 hover:border-primary hover:scale-105 transition-all duration-300">
                                <CardHeader>
                                    <CardTitle className="font-poppins text-xl">{edu.university}</CardTitle>
                                    <p className="text-primary font-medium">{edu.degree}</p>
                                    <p className="text-sm text-muted-foreground">{edu.duration} | {edu.details}</p>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col">
                                    {edu.awards && edu.awards.length > 0 && (
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-sm mb-2">Awards:</h4>
                                            <ul className="space-y-1 text-sm text-muted-foreground">
                                                {edu.awards.map((award, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <ArrowRight className="h-3 w-3 mr-2 mt-1 text-primary shrink-0"/>
                                                        <span>{award}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="font-semibold text-sm mb-2">Relevant Coursework:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.coursework.map(course => <Badge key={course} variant="secondary">{course}</Badge>)}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section id="projects" className="py-20 px-4 sm:px-8 lg:px-12 bg-secondary/50">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-12">Projects (ASU)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <Card key={project.title} className="flex flex-col text-left bg-background/50 hover:border-primary hover:scale-105 transition-all duration-300">
                                <CardHeader>
                                    <CardTitle className="font-poppins text-xl">{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col">
                                    <p className="text-muted-foreground text-sm flex-grow">{project.description}</p>

                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="min-h-[60vh] flex items-center justify-center py-20 px-4 sm:px-8 lg:px-12">
                <div className="container mx-auto text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Get In Touch</h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground text-lg mb-12">
                        I am actively seeking new opportunities and collaborations in the finance industry. Please feel free to connect with me to discuss potential roles or projects.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                        <a href="https://www.linkedin.com/in/sumitsanas" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
                            <div className="p-4 bg-background/50 rounded-full border border-border group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                                <Linkedin className="h-8 w-8 text-primary" />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">LinkedIn</span>
                        </a>
                        <a href="mailto:sanassumit@gmail.com" className="flex flex-col items-center gap-3 group">
                            <div className="p-4 bg-background/50 rounded-full border border-border group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                                <Mail className="h-8 w-8 text-primary" />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">sanassumit@gmail.com</span>
                        </a>
                        <a href="tel:+16027842224" className="flex flex-col items-center gap-3 group">
                            <div className="p-4 bg-background/50 rounded-full border border-border group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                                <Phone className="h-8 w-8 text-primary" />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">(602) 784-2224</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
