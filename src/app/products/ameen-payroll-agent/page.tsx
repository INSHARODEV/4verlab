"use client";

import React from "react";
import ProductPage from "@/components/ProductPage";
import { Shield, Zap, Clock, BarChart3, CheckCircle2, UserCheck } from "lucide-react";

export default function AmeenPage() {
    return (
        <ProductPage
            id="ameen"
            badge={{ en: "HR & Compliance", ar: "الموارد البشرية والامتثال" }}
            title={{ en: "Automate ZATCA & Payroll with", ar: "أتمت الزكاة والرواتب مع" }}
            accentTitle={{ en: "Ameen", ar: "أمين" }}
            description={{
                en: "Ameen is your AI compliance officer, automating ZATCA Phase 2 (Wages Protection System) and GOSI filings for Saudi SMEs. Eliminate manual errors and guarantee zero penalties.",
                ar: "أمين هو مسؤول الامتثال بالذكاء الاصطناعي، يؤتمت المرحلة الثانية من نظام حماية الأجور (زاتكا) وعمليات التأمينات الاجتماعية (GOSI) للمنشآت السعودية. اقضِ على الأخطاء اليدوية واضمن عدم وجود غرامات."
            }}
            benefits={[
                { en: "100% ZATCA Phase 2 Compliant", ar: "متوافق بنسبة ١٠٠٪ مع المرحلة الثانية لزاتكا" },
                { en: "Zero Manual Data Entry", ar: "لا داعي للإدخال اليدوي للبيانات" },
                { en: "Automated GOSI Filings", ar: "أتمتة ملفات التأمينات الاجتماعية" },
                { en: "Overnight Processing Support", ar: "دعم معالجة الورديات الليلية" }
            ]}
            features={[
                {
                    title: { en: "Native Integration", ar: "ربط تقني متكامل" },
                    description: { en: "Seamlessly connects with your existing ERP and banking systems for instant wage protection compliance.", ar: "يتصل بسلاسة مع أنظمة تخطيط الموارد والبنوك للامتثال الفوري لنظام حماية الأجور." },
                    icon: <Zap size={24} />
                },
                {
                    title: { en: "Penalty Guard", ar: "حارس الغرامات" },
                    description: { en: "Proactive AI monitoring that alerts you or fixes errors before they turn into costly penalties.", ar: "مراقبة استباقية بالذكاء الاصطناعي تنبهك أو تصلح الأخطاء قبل أن تتحول إلى غرامات باهظة." },
                    icon: <Shield size={24} />
                },
                {
                    title: { en: "Employee Portal", ar: "بوابة الموظف" },
                    description: { en: "AI-powered self-service for employees to track their payments and compliance status autonomously.", ar: "خدمة ذاتية مدعومة بالذكاء الاصطناعي للموظفين لتتبع مدفوعاتهم وحالة الامتثال بشكل مستقل." },
                    icon: <UserCheck size={24} />
                }
            ]}
        />
    );
}
