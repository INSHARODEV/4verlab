export default function ComparisonSection() {
  const features = [
    { name: "AI-Powered Solutions", us: true, others: true },
    { name: "MVP Development", us: true, others: false },
    { name: "Talent Management", us: true, others: true },
    { name: "Cost-Effective", us: true, others: false },
    { name: "24/7 Support", us: true, others: true },
  ];

  return (
    <section className="py-20 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Insharo is Different
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-800 rounded-lg shadow-lg">
            <div className="grid grid-cols-3 font-bold text-lg p-4 border-b border-neutral-700">
              <div>Feature</div>
              <div className="text-center">Insharo</div>
              <div className="text-center">Others</div>
            </div>
            {features.map((feature, index) => (
              <div key={index} className="grid grid-cols-3 items-center p-4 border-b border-neutral-700 last:border-b-0">
                <div>{feature.name}</div>
                <div className="text-center">{feature.us ? "✅" : "❌"}</div>
                <div className="text-center">{feature.others ? "✅" : "❌"}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
