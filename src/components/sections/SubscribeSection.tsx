export default function SubscribeSection() {
    return (
        <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-surface-dark to-accent/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(182,198,73,0.1),transparent_70%)]" />

            <div className="relative z-10 max-w-3xl mx-auto px-4 text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Stay Ahead with <span className="text-primary">INSHARO</span>
                </h2>
                <p className="text-muted text-lg max-w-xl mx-auto">
                    Subscribe Now for Insightful Articles, Updates, and Special Deals
                    Straight to Your Inbox.
                </p>
                <a
                    href="https://form.typeform.com/to/rSb4m9w2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-foreground/20 text-foreground hover:border-primary hover:text-primary px-8 py-3 rounded-full font-semibold transition-all duration-300"
                >
                    Subscribe now
                </a>
            </div>
        </section>
    );
}
