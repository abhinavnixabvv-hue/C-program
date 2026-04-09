import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { 
  Play, 
  Copy, 
  Check, 
  BookOpen, 
  ChevronRight, 
  Code2, 
  FileText, 
  GraduationCap, 
  Search,
  Terminal
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { questionSets, QuestionSet } from "@/src/data/questions";
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
  const [activeSetId, setActiveSetId] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState("");

  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [isCompilerMode, setIsCompilerMode] = useState(false);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const activeSet = questionSets.find(s => s.id === activeSetId) || questionSets[0];

  const filteredSets = questionSets.filter(set => 
    set.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    set.questions.some(q => q.question.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="flex h-screen bg-grid overflow-hidden">
      {/* Sidebar */}
      <aside className="w-80 border-r border-zinc-200 bg-white/80 backdrop-blur-md flex flex-col">
        <div className="p-6 border-b border-zinc-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-zinc-950 rounded-lg">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg tracking-tight">C Program Master</h1>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Learning Hub</p>
            </div>
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
          <div className="space-y-1">
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
          <div className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200 bg-white">
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
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden bg-white/40 backdrop-blur-[2px]">
        <header className="h-16 border-b border-zinc-200 bg-white/80 backdrop-blur-md flex items-center justify-between px-8">
          <div className="flex items-center gap-2 text-sm font-medium text-zinc-500">
            <BookOpen className="w-4 h-4" />
            <span>Question Bank</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-zinc-950">{activeSet.title}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 mr-2">
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
            <Badge variant="outline" className="font-mono text-[10px] uppercase tracking-widest">
              {activeSet.questions.length} Questions
            </Badge>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          <div className={cn(
            "flex-1 overflow-y-auto custom-scrollbar transition-all duration-500",
            isCompilerMode ? "border-r border-zinc-200" : ""
          )}>
            <div className="max-w-4xl mx-auto p-8 lg:p-12">
              <motion.div
                key={activeSetId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
              </motion.div>
            </div>
          </div>

          <AnimatePresence>
            {isCompilerMode && (
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "40%", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-zinc-100 flex flex-col items-center justify-center p-8 text-center"
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
    </div>
  );
}
