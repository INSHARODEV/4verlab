"use client";

import React from "react";
import ProductPage from "@/components/ProductPage";
import { Search, MapPin, Globe, MessageSquare, Zap, BarChart3 } from "lucide-react";

export default function HadiPage() {
    return (
        <ProductPage
            id="hadi"
            badge={{ en: "Local SEO & AI", ar: "تحسين محركات البحث المحلي والذكاء الاصطناعي" }}
            title={{ en: "Dominate Local Search with", ar: "تصدر نتائج البحث المحلي مع" }}
            accentTitle={{ en: "Hadi", ar: "هادي" }}
            description={{
                en: "Hadi is an LLM-powered GEO-SEO agent that ensures your Saudi clinic or pharmacy is the #1 choice when patients search for medical services in Arabic. Dominate Google Maps and AI search responses.",
                ar: "هادي هو وكيل ذكاء اصطناعي لتحسين محركات البحث الجغرافي (GEO-SEO) يضمن أن تكون عيادتك أو صيدليتك الخيار رقم ١ عندما يبحث المرضى عن الخدمات الطبية باللغة العربية. تصدر خرائط جوجل وإجابات البحث الذكية."
            }}
            benefits={[
                { en: "#1 KSA Local Search Rankings", ar: "المرتبة الأولى في نتائج البحث المحلية بالسعودية" },
                { en: "Arabic-First AI Optimization", ar: "تحسين الذكاء الاصطناعي للغة العربية أولاً" },
                { en: "Google Maps Domination", ar: "السيطرة على صدارة خرائط جوجل" },
                { en: "Higher Patient Conversion", ar: "معدلات تحويل أعلى للمرضى" }
            ]}
            features={[
                {
                    title: { en: "AI Search Answers", ar: "إجابات البحث الذكية" },
                    description: { en: "Train AI models to recommend your business first when patients ask health questions in Arabic.", ar: "تدريب نماذج الذكاء الاصطناعي لتوصية عملك أولاً عندما يطرح المرضى أسئلة صحية بالعربية." },
                    icon: <Search size={24} />
                },
                {
                    title: { en: "GEO-Optimization", ar: "تحسين جغرافي" },
                    description: { en: "Precision targeting that puts your medical practices at the top of local map searches in Riyadh, Jeddah, and across KSA.", ar: "استهداف دقيق يضع ممارساتك الطبية في صدارة عمليات البحث عن الخرائط المحلية في الرياض وجدة وجميع أنحاء المملكة." },
                    icon: <MapPin size={24} />
                },
                {
                    title: { en: "Sentiment Analytics", ar: "تحليل المشاعر" },
                    description: { en: "Understand what patients are saying about you and use AI to improve your local reputation instantly.", ar: "افهم ما يقوله المرضى عنك واستخدم الذكاء الاصطناعي لتحسين سمعتك المحلية على الفور." },
                    icon: <BarChart3 size={24} />
                }
            ]}
            videoEmbed="https://www.loom.com/embed/b1993f26b3ca4b20851b483ea63f5822"
        />
    );
}
