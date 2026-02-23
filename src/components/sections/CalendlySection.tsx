import Script from 'next/script';

export default function CalendlySection() {
  const calendlyUrl = "https://calendly.com/product-insharo/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=F9FBE9&text_color=333333&primary_color=9aab36";

  return (
    <section id="calendly" className="py-12 bg-surface md:py-24">
      <div className="container mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-foreground">Ready to book a call?</h2>
        <div className="calendly-inline-widget" data-url={calendlyUrl} style={{ minWidth: '320px', height: '700px' }}></div>
        <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>
      </div>
    </section>
  );
}
