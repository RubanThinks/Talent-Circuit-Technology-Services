"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Upload, CheckCircle2, ChevronRight, Loader2, FileText, Smartphone, Mail, User, MapPin, Briefcase } from "lucide-react";
import { submitCVAction } from "@/app/actions/submit-cv";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function SubmitCVForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const result = await submitCVAction(formData);

        if (result.success) {
            setStatus("success");
        } else {
            setStatus("error");
            alert(result.message);
            setStatus("idle");
        }
    };

    if (status === "success") {
        return (
            <div className="text-center py-24 bg-white border border-slate-100 p-10 animate-fade-in">
                <div className="w-20 h-20 bg-sky-600 flex items-center justify-center text-white mx-auto mb-8">
                    <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="font-heading text-4xl font-black text-slate-950 uppercase tracking-tighter mb-4">
                    Application <span className="text-sky-600">Transmitted</span>
                </h2>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] mb-10 max-w-sm mx-auto leading-relaxed">
                    Your profile and documentation have been securely delivered. Our recruitment team will evaluate
                    the data within the next business cycle.
                </p>
                <Button asChild className="rounded-none bg-slate-950 py-6 px-10 h-14 font-bold uppercase tracking-widest text-[11px]">
                    <Link href="/">Return to Professional Portal</Link>
                </Button>
            </div>
        );
    }

    return (
        <Card className="rounded-none border-[10px] border-slate-50 shadow-2xl p-0 overflow-hidden">
            <CardContent className="p-0">
                <form onSubmit={handleFormSubmit} className="grid lg:grid-cols-5 h-full">
                    {/* Form Header / Guidance */}
                    <div className="lg:col-span-2 bg-slate-950 p-10 md:p-14 text-white flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 bg-sky-600 flex items-center justify-center mb-10">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="font-heading text-3xl font-black uppercase tracking-tight mb-6">
                                CV Submission <br /> & <span className="text-sky-600">Profile Registry</span>
                            </h3>
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-loose mb-10 max-w-[240px]">
                                Architect your professional trajectory by providing high-fidelity experience data.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-5 items-start">
                                    <div className="w-1 bg-sky-600 h-full self-stretch" />
                                    <div>
                                        <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-1">Vector Identification</h4>
                                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Specify your target industry sector.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 items-start">
                                    <div className="w-1 bg-white/20 h-full self-stretch" />
                                    <div>
                                        <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-1">Documentation Protocol</h4>
                                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">PDF or DOCX standard files only.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-20 pt-10 border-t border-white/5">
                            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">
                                Professional integrity assured by TCTS.
                            </span>
                        </div>
                    </div>

                    {/* Actual Inputs */}
                    <div className="lg:col-span-3 p-10 md:p-14 bg-white space-y-8">
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                                    <User className="w-3 h-3 text-sky-600" /> Full Legal Name *
                                </label>
                                <Input name="name" required placeholder="Full Name" className="rounded-none border-slate-200 h-14 bg-slate-50 focus:border-sky-600 focus:bg-white transition-all text-xs font-bold uppercase tracking-widest" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                                    <Mail className="w-3 h-3 text-sky-600" /> Professional Email *
                                </label>
                                <Input name="email" type="email" required placeholder="email@address.com" className="rounded-none border-slate-200 h-14 bg-slate-50 focus:border-sky-600 focus:bg-white transition-all text-xs font-bold uppercase tracking-widest" />
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                                    <Smartphone className="w-3 h-3 text-sky-600" /> Contact Number *
                                </label>
                                <Input name="phone" type="tel" required placeholder="+91 00000 00000" className="rounded-none border-slate-200 h-14 bg-slate-50 focus:border-sky-600 focus:bg-white transition-all text-xs font-bold uppercase tracking-widest" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                                    Current Role
                                </label>
                                <Input name="role" placeholder="Current Job Title" className="rounded-none border-slate-200 h-14 bg-slate-50 focus:border-sky-600 focus:bg-white transition-all text-xs font-bold uppercase tracking-widest" />
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                                    <MapPin className="w-3 h-3 text-sky-600" /> Location Preference
                                </label>
                                <Input name="location" placeholder="City or Remote" className="rounded-none border-slate-200 h-14 bg-slate-50 focus:border-sky-600 focus:bg-white transition-all text-xs font-bold uppercase tracking-widest" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                                    <Briefcase className="w-3 h-3 text-sky-600" /> Experiences
                                </label>
                                <Input name="experience" placeholder="e.g., 5 Years" className="rounded-none border-slate-200 h-14 bg-slate-50 focus:border-sky-600 focus:bg-white transition-all text-xs font-bold uppercase tracking-widest" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Profile Narrative (Optional)</label>
                            <Textarea name="message" placeholder="Briefly architect your career summary..." className="rounded-none border-slate-200 min-h-[140px] bg-slate-50 focus:border-sky-600 focus:bg-white transition-all text-xs font-bold uppercase tracking-widest leading-loose" />
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] block mb-4">
                                CV Attached (.pdf, .docx) *
                            </label>
                            <div className="relative">
                                <input
                                    type="file"
                                    name="cv"
                                    id="cv-upload"
                                    required
                                    accept=".pdf,.doc,.docx"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                                <label
                                    htmlFor="cv-upload"
                                    className="flex items-center justify-between w-full h-14 border-2 border-dashed border-slate-200 px-6 cursor-pointer hover:border-sky-600 transition-all bg-slate-50 group"
                                >
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-sky-600 truncate max-w-[200px]">
                                        {fileName || "Select CV File"}
                                    </span>
                                    <Upload className="w-4 h-4 text-slate-400 group-hover:text-sky-600" />
                                </label>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full h-16 bg-slate-950 text-white hover:bg-sky-600 transition-all font-black uppercase tracking-[0.3em] rounded-none text-xs group"
                        >
                            {status === "loading" ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                                <>
                                    Transpose Application <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-2" />
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
