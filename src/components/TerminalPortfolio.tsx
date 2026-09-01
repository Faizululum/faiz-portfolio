"use client";

import { useState, useEffect } from "react";

const terminalCommands = [
  {
    cmd: "whoami",
    outputText: "Muhammad Faizul Ulum, Full-Stack Developer",
  },
  {
    cmd: "education",
    outputText: "Bachelor of Informatics, UPN 'Veteran' Jawa Timur",
  },
  {
    cmd: "status",
    hasDot: true,
    outputText: "Available for full-time opportunities",
  },
  {
    cmd: "skills --top 4",
    outputText: "Next.js · TypeScript · Node.js · Figma",
  },
];

export default function TerminalPortfolio() {
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState<"cmd" | "output">("cmd");
  const [displayedCmd, setDisplayedCmd] = useState("");
  const [displayedOutput, setDisplayedOutput] = useState("");

  // Logic Animation
  useEffect(() => {
    if (step >= terminalCommands.length) return;

    const currentItem = terminalCommands[step];
    const targetText = phase === "cmd" ? currentItem.cmd : currentItem.outputText;
    const currentDisplayed = phase === "cmd" ? displayedCmd : displayedOutput;

    if (currentDisplayed.length < targetText.length) {
      const timeout = setTimeout(() => {
        if (phase === "cmd") {
          setDisplayedCmd(targetText.slice(0, currentDisplayed.length + 1));
        } else {
          setDisplayedOutput(targetText.slice(0, currentDisplayed.length + 1));
        }
      }, 30);
      
      return () => clearTimeout(timeout);
    } else {
      if (phase === "cmd") {
        const timeout = setTimeout(() => setPhase("output"), 150);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setStep((s) => s + 1);
          setPhase("cmd");
          setDisplayedCmd("");
          setDisplayedOutput("");
        }, 300);
        return () => clearTimeout(timeout);
      }
    }
  }, [step, phase, displayedCmd, displayedOutput]);

  return (
    <div className="w-full lg:col-span-5">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/90 p-5 shadow-2xl backdrop-blur-md">
        
        {/* Header macOS Dots */}
        <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ef4444]" />
            <span className="h-3 w-3 rounded-full bg-[#eab308]" />
            <span className="h-3 w-3 rounded-full bg-[#22c55e]" />
          </div>
          <span className="font-mono text-xs text-muted">~/portfolio</span>
          <div className="w-10" />
        </div>

        {/* Terminal Body */}
        <div className="space-y-5 font-mono text-xs sm:text-sm min-h-55">
          {terminalCommands.map((item, index) => {
            if (index > step) return null;

            const isCurrentStep = index === step;
            const isCmdPhase = isCurrentStep && phase === "cmd";
            const isOutputPhase = isCurrentStep && phase === "output";
            const isFinished = index < step;

            return (
              <div key={index} className="space-y-1.5">
                <div className="flex items-center">
                  <span className="text-primary mr-2">$</span>
                  <span className="text-foreground font-medium">
                    {isFinished || isOutputPhase ? item.cmd : displayedCmd}
                  </span>
                  {isCmdPhase && (
                    <span className="ml-1 inline-block h-4 w-2 bg-foreground animate-pulse align-middle" />
                  )}
                </div>

                {/* Output */}
                {(isFinished || isOutputPhase) && (
                  <div className="flex items-center gap-2 text-muted ml-3">
                    <span>→</span>
                    {item.hasDot && (
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                    <span>
                      {isFinished ? item.outputText : displayedOutput}
                    </span>
                    {isOutputPhase && (
                      <span className="ml-1 inline-block h-4 w-2 bg-muted animate-pulse align-middle" />
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {step >= terminalCommands.length && (
            <div className="flex items-center">
              <span className="text-primary mr-2">$</span>
              <span className="inline-block h-4 w-2 bg-foreground animate-pulse align-middle" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}