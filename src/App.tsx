import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { 
  PanelLeftClose,
  PanelLeftOpen,
  Menu,
  Bug,
  X,
  Play, 
  Copy, 
  Check, 
  BookOpen, 
  ChevronRight, 
  Code2, 
  FileText, 
  GraduationCap, 
  Search,
  Terminal,
  Home,
  Github,
  Info
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { questionSets, QuestionSet } from "@/src/data/questions";
import { db } from "@/src/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function App() {
  const [activeSetId, setActiveSetId] = useState<number>(0); // 0 for Home
  const [searchQuery, setSearchQuery] = useState("");

  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [isCompilerMode, setIsCompilerMode] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBugReportOpen, setIsBugReportOpen] = useState(false);
  const [bugForm, setBugForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleBugSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send directly to Firestore
      await addDoc(collection(db, "bug_reports"), {
        name: bugForm.name,
        email: bugForm.email,
        message: bugForm.message,
        createdAt: serverTimestamp()
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsBugReportOpen(false);
        setIsSubmitted(false);
        setBugForm({ name: '', email: '', message: '' });
      }, 2000);
    } catch (error) {
      console.error("Error submitting bug report:", error);
      setIsSubmitting(false);
      alert("Failed to send report. Please try again later.");
    }
  };

  const activeSet = questionSets.find(s => s.id === activeSetId) || questionSets[0];

  const filteredSets = questionSets.filter(set => 
    set.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    set.questions.some(q => q.question.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="flex h-screen bg-grid overflow-hidden relative">
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-zinc-950/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ 
          x: (typeof window !== 'undefined' && window.innerWidth < 1024)
            ? (isMobileMenuOpen ? 0 : -280)
            : 0,
          width: (typeof window !== 'undefined' && window.innerWidth < 1024)
            ? 280
            : (isSidebarCollapsed ? 0 : 320),
          opacity: 1
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "border-r border-zinc-200 bg-white/80 backdrop-blur-md flex flex-col overflow-hidden relative z-50",
          "fixed inset-y-0 left-0 lg:relative lg:translate-x-0",
          isMobileMenuOpen ? "w-[280px] translate-x-0" : ""
        )}
      >
        <div className="p-6 border-b border-zinc-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-950 rounded-lg">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-lg tracking-tight">C Program Master</h1>
                <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Learning Hub</p>
              </div>
            </div>
            <button 
              onClick={() => {
                setIsSidebarCollapsed(true);
                setIsMobileMenuOpen(false);
              }}
              className="p-2 hover:bg-zinc-100 rounded-md text-zinc-500 transition-colors lg:block hidden"
              title="Collapse Sidebar"
            >
              <PanelLeftClose className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-zinc-100 rounded-md text-zinc-500 transition-colors lg:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Search topics..." 
              className="w-full pl-10 pr-4 py-2 bg-zinc-100 border-none rounded-md text-sm focus:ring-2 focus:ring-zinc-950 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-1 px-4 pb-6 overflow-y-auto custom-scrollbar">
          <div className="space-y-1 mb-6">
            <button
              onClick={() => setActiveSetId(0)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all group",
                activeSetId === 0 
                  ? "bg-zinc-950 text-white shadow-lg shadow-zinc-200" 
                  : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
              )}
            >
              <Home className={cn("w-4 h-4", activeSetId === 0 ? "text-white" : "text-zinc-400")} />
              <span>Home</span>
            </button>
          </div>

          <div className="space-y-1">
            <p className="px-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">Question Sets</p>
            {filteredSets.map((set) => (
              <button
                key={set.id}
                onClick={() => setActiveSetId(set.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all group",
                  activeSetId === set.id 
                    ? "bg-zinc-950 text-white shadow-lg shadow-zinc-200" 
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
                )}
              >
                <span className={cn(
                  "flex-shrink-0 w-6 h-6 flex items-center justify-center rounded text-[10px] font-bold",
                  activeSetId === set.id ? "bg-zinc-800" : "bg-zinc-200 group-hover:bg-zinc-300"
                )}>
                  {set.id.toString().padStart(2, '0')}
                </span>
                <span className="truncate text-left">{set.title}</span>
                {activeSetId === set.id && (
                  <ChevronRight className="ml-auto w-4 h-4 opacity-50" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-zinc-200 bg-zinc-50/50">
          <div className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200 bg-white mb-4">
            <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-zinc-600" />
            </div>
            <div className="text-[10px]">
              <p className="font-bold text-zinc-900 uppercase tracking-tighter">Course Progress</p>
              <div className="w-32 h-1 bg-zinc-100 rounded-full mt-1 overflow-hidden">
                <div className="h-full bg-zinc-950" style={{ width: `${(activeSetId / 12) * 100}%` }}></div>
              </div>
            </div>
          </div>
          <div className="text-center">
            {/* Removed credit */}
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden bg-white/40 backdrop-blur-[2px] w-full">
        <header className="h-16 border-b border-zinc-200 bg-white/80 backdrop-blur-md flex items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-2 lg:gap-4 text-sm font-medium text-zinc-500 overflow-hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -ml-2 hover:bg-zinc-100 rounded-md text-zinc-950 transition-colors lg:hidden"
              title="Open Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            {(isSidebarCollapsed && !isMobileMenuOpen) && (
              <button 
                onClick={() => setIsSidebarCollapsed(false)}
                className="p-2 -ml-4 hover:bg-zinc-100 rounded-md text-zinc-950 transition-colors hidden lg:block"
                title="Expand Sidebar"
              >
                <PanelLeftOpen className="w-5 h-5" />
              </button>
            )}
            <div className="flex items-center gap-2 truncate">
              <BookOpen className="w-4 h-4 flex-shrink-0 hidden sm:block" />
              <span className="hidden sm:inline">Question Bank</span>
              <ChevronRight className="w-4 h-4 flex-shrink-0 hidden sm:block" />
              <span className="text-zinc-950 truncate">{activeSetId === 0 ? "Home" : activeSet.title}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            <div className="hidden sm:flex items-center gap-2 mr-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Compiler Mode</span>
              <button 
                onClick={() => setIsCompilerMode(!isCompilerMode)}
                className={cn(
                  "relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none",
                  isCompilerMode ? "bg-emerald-500" : "bg-zinc-200"
                )}
              >
                <span
                  className={cn(
                    "inline-block h-3 w-3 transform rounded-full bg-white transition-transform",
                    isCompilerMode ? "translate-x-5" : "translate-x-1"
                  )}
                />
              </button>
            </div>
            <Badge variant="outline" className="font-mono text-[10px] uppercase tracking-widest hidden xs:inline-flex">
              {activeSet.questions.length} Qs
            </Badge>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          <div className={cn(
            "flex-1 overflow-y-auto custom-scrollbar transition-all duration-500",
            isCompilerMode ? "border-r border-zinc-200" : ""
          )}>
            <div className="max-w-4xl mx-auto p-8 lg:p-12">
              <AnimatePresence mode="wait">
                {activeSetId === 0 ? (
                  <motion.div
                    key="home"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="space-y-12"
                  >
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Welcome to C Program Master</span>
                      </div>
                      <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.1]">
                        Your Journey to <span className="text-emerald-600">C Mastery</span> Starts Here.
                      </h2>
                      <p className="text-zinc-500 text-lg max-w-2xl leading-relaxed">
                        A comprehensive collection of C programming questions and solutions, 
                        designed to help you build a solid foundation in computer science.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-shadow bg-white/50 backdrop-blur-sm">
                        <CardHeader>
                          <div className="w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-zinc-200">
                            <Info className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="text-xl">About this Project</CardTitle>
                          <CardDescription className="text-zinc-500 leading-relaxed">
                            This platform is a dedicated resource for students and developers to practice C programming. 
                            It covers everything from basic syntax to advanced data structures.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="p-5 bg-zinc-50 rounded-2xl border border-zinc-100">
                            <p className="text-sm font-bold text-zinc-900">Developed by Abhinav N</p>
                            <p className="text-xs text-zinc-500 mt-1 font-medium">Part of Hexnic AI</p>
                            <a 
                              href="https://hexnicai.vercel.app/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="mt-4 inline-flex items-center justify-center w-full py-2 bg-emerald-600 text-white rounded-xl font-bold text-xs hover:bg-emerald-700 transition-all shadow-md shadow-emerald-100"
                            >
                              Visit Hexnic AI
                            </a>
                          </div>
                          <div className="flex items-center gap-4">
                            <a 
                              href="https://github.com/abhinavnixabvv-hue" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-bold text-zinc-950 hover:text-emerald-600 transition-colors"
                            >
                              <Github className="w-5 h-5" />
                              Connect on GitHub
                            </a>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-shadow bg-white/50 backdrop-blur-sm">
                        <CardHeader>
                          <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-100">
                            <Play className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="text-xl">Get Started</CardTitle>
                          <CardDescription className="text-zinc-500 leading-relaxed">
                            Select a topic from the sidebar to begin your practice. Each set contains curated questions with detailed solutions and runnable code.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <button 
                            onClick={() => setActiveSetId(1)}
                            className="w-full py-4 bg-zinc-950 text-white rounded-2xl font-bold text-sm hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200 active:scale-[0.98]"
                          >
                            Start Learning Now
                          </button>
                        </CardContent>
                      </Card>
                    </div>

                    <footer className="mt-20 pb-12 border-t border-zinc-100 pt-8 text-center">
                      {/* Removed credit */}
                    </footer>
                  </motion.div>
                ) : (
                  <motion.div
                    key={activeSetId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="mb-12">
                      <h2 className="text-4xl font-bold tracking-tight text-zinc-950 mb-4">
                        {activeSet.title}
                      </h2>
                      <p className="text-zinc-500 max-w-2xl leading-relaxed">
                        Master the core concepts of C programming through this curated set of questions. 
                        Each question is designed to test your understanding and provide practical insights.
                      </p>
                    </div>

                    {/* @ts-ignore */}
                    <Accordion type="single" collapsible className="space-y-4">
                      {activeSet.questions.map((q, index) => (
                        <AccordionItem 
                          key={q.id} 
                          value={q.id}
                          className="border border-zinc-200 rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                            <div className="flex items-start gap-4 text-left">
                              <span className="font-mono text-zinc-400 mt-1 text-xs">Q{index + 1}</span>
                              <span className="font-semibold text-zinc-900 group-hover:text-zinc-950 transition-colors">
                                {q.question}
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-6 pt-2">
                            <div className="pl-10 space-y-6">
                              <div className="flex gap-3">
                                <div className="mt-1">
                                  <FileText className="w-4 h-4 text-zinc-400" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-zinc-600 leading-relaxed text-sm">
                                    {q.answer}
                                  </p>
                                </div>
                              </div>

                              {q.code && (
                                <div className="rounded-lg overflow-hidden border border-zinc-200">
                                  <div className="bg-zinc-900 px-4 py-2 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                      <Code2 className="w-3 h-3 text-zinc-400" />
                                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">C Code Snippet</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <button 
                                        onClick={() => handleCopy(q.code || "", q.id)}
                                        className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-[10px] font-medium text-zinc-400 transition-colors"
                                      >
                                        {copiedId === q.id ? (
                                          <>
                                            <Check className="w-3 h-3 text-emerald-400" />
                                            Copied
                                          </>
                                        ) : (
                                          <>
                                            <Copy className="w-3 h-3" />
                                            Copy
                                          </>
                                        )}
                                      </button>
                                      <button 
                                        onClick={() => {
                                          handleCopy(q.code || "", q.id);
                                          window.open("https://www.programiz.com/c-programming/online-compiler/", "_blank");
                                        }}
                                        className="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-500/10 hover:bg-emerald-500/20 text-[10px] font-medium text-emerald-400 transition-colors"
                                      >
                                        <Play className="w-3 h-3" />
                                        Run Code
                                      </button>
                                    </div>
                                  </div>
                                  <SyntaxHighlighter 
                                    language="c" 
                                    style={vscDarkPlus}
                                    customStyle={{
                                      margin: 0,
                                      padding: '1.5rem',
                                      fontSize: '0.85rem',
                                      fontFamily: 'var(--font-mono)',
                                      backgroundColor: '#09090b'
                                    }}
                                  >
                                    {q.code}
                                  </SyntaxHighlighter>
                                </div>
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                    
                    {/* Footer CTA */}
                    <div className="mt-20 p-8 rounded-2xl bg-zinc-950 text-white flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Ready for the next set?</h3>
                      <p className="text-zinc-400 text-sm mb-8 max-w-md">
                        You've completed {activeSet.title}. Continue your journey to master C programming.
                      </p>
                      <button 
                        onClick={() => activeSetId < 12 && setActiveSetId(activeSetId + 1)}
                        disabled={activeSetId === 12}
                        className="px-8 py-3 bg-white text-zinc-950 rounded-full font-bold text-sm hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next Topic: {activeSetId < 12 ? questionSets[activeSetId].title : "All Sets Completed"}
                      </button>
                    </div>

                    <footer className="mt-20 pb-12 border-t border-zinc-100 pt-8 text-center">
                      {/* Removed credit */}
                    </footer>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <AnimatePresence>
            {isCompilerMode && (
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "40%", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-zinc-100 hidden lg:flex flex-col items-center justify-center p-8 text-center"
              >
                <div className="max-w-xs">
                  <div className="w-16 h-16 bg-zinc-950 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Terminal className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950 mb-3">Compiler Workspace</h3>
                  <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
                    Click "Run Code" on any question to automatically copy the solution and open the Programiz compiler.
                  </p>
                  <a 
                    href="https://www.programiz.com/c-programming/online-compiler/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-950 text-white rounded-full font-bold text-sm hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200"
                  >
                    <Play className="w-4 h-4" />
                    Open Programiz
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Bug Report FAB */}
      <button 
        onClick={() => setIsBugReportOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-zinc-950 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-[60] group"
        title="Report a Bug"
      >
        <Bug className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-zinc-950 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Report Bug
        </span>
      </button>

      {/* Bug Report Modal */}
      <AnimatePresence>
        {isBugReportOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBugReportOpen(false)}
              className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-zinc-100 flex items-center justify-between bg-zinc-50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-zinc-950 rounded-lg">
                    <Bug className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="font-bold text-zinc-950">Report a Bug</h2>
                    <p className="text-xs text-zinc-500">Help us improve C Program Master</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsBugReportOpen(false)}
                  className="p-2 hover:bg-zinc-200 rounded-full text-zinc-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-950 mb-2">Report Sent!</h3>
                    <p className="text-zinc-500">Thank you for your feedback. We'll look into it.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleBugSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Name</label>
                        <input 
                          required
                          type="text"
                          value={bugForm.name}
                          onChange={(e) => setBugForm({ ...bugForm, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-950/5 focus:border-zinc-950 transition-all text-sm"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Email</label>
                        <input 
                          required
                          type="email"
                          value={bugForm.email}
                          onChange={(e) => setBugForm({ ...bugForm, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-950/5 focus:border-zinc-950 transition-all text-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Issue Description</label>
                      <textarea 
                        required
                        rows={4}
                        value={bugForm.message}
                        onChange={(e) => setBugForm({ ...bugForm, message: e.target.value })}
                        placeholder="Describe the bug or suggest an improvement..."
                        className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-950/5 focus:border-zinc-950 transition-all text-sm resize-none"
                      />
                    </div>
                    <button 
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full py-3 bg-zinc-950 text-white rounded-xl font-bold text-sm hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Submit Report"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
