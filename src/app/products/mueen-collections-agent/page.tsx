"use client";

import React from "react";
import ProductPage from "@/components/ProductPage";
import { MessageSquare, Clock, BarChart3, Shield, Zap, Search } from "lucide-react";

export default function MueenPage() {
    return (
        <ProductPage
            id="mueen"
            badge={{ en: "Financial AI", ar: "ذكاء اصطناعي مالي" }}
            title={{ en: "Automate Your Collections with", ar: "أتمت التحصيل مع" }}
            accentTitle={{ en: "Mueen", ar: "معين" }}
            description={{
                en: "Mueen is an autonomous AI agent that handles payment reminders, debt recovery, and customer follow-ups via WhatsApp and Voice, specifically designed for the Saudi market.",
                ar: "معين هو وكيل ذكاء اصطناعي ذاتي يتولى مهام التذكير بالدفع، وتحصيل الديون، ومتابعة العملاء عبر الواتساب والصوت، مصمم خصيصاً للسوق السعودي."
            }}
            benefits={[
                { en: "35% Faster Debt Recovery", ar: "تحصيل أسرع بنسبة ٣٥٪" },
                { en: "90% Response Rate on WhatsApp", ar: "معدل استجابة ٩٠٪ عبر الواتساب" },
                { en: "Native Arabic Support", ar: "دعم كامل للغة العربية" },
                { en: "Direct CRM Integration", ar: "ربط مباشر مع أنظمة إدارة العملاء" }
            ]}
            features={[
                {
                    title: { en: "Smart Reminders", ar: "تذكير ذكي" },
                    description: { en: "Automated, human-like payment reminders sent at optimal times to maximize recovery.", ar: "تذكيرات دفع مؤتمتة ومشابهة للبشر تُرسل في الأوقات المثالية لزيادة معدل التحصيل." },
                    icon: <Clock size={24} />
                },
                {
                    title: { en: "WhatsApp Recovery", ar: "التحصيل عبر واتساب" },
                    description: { en: "Engage customers where they are. 90% open rates compared to email or SMS.", ar: "تواصل مع العملاء حيث يتواجدون. معدلات فتح بنسبة ٩٠٪ مقارنة بالبريد أو الرسائل النصية." },
                    icon: <MessageSquare size={24} />
                },
                {
                    title: { en: "Real-time Analytics", ar: "تحليلات فورية" },
                    description: { en: "Track every riyal. Get detailed reports on collection performance and cash flow.", ar: "تتبع كل ريال. احصل على تقارير مفصلة عن أداء التحصيل والتدفق النقدي." },
                    icon: <BarChart3 size={24} />
                }
            ]}
        />
    );
}
