import Link from "next/link";

const cases = [
  {
    title: "Case Study 1",
    description: "A brief description of the case study.",
    link: "/case-studies/1",
  },
  {
    title: "Case Study 2",
    description: "A brief description of the case study.",
    link: "/case-studies/2",
  },
  {
    title: "Case Study 3",
    description: "A brief description of the case study.",
    link: "/case-studies/3",
  },
  {
    title: "Case Study 4",
    description: "A brief description of the case study.",
    link: "/case-studies/4",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-20 bg-neutral-950 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((caseItem, index) => (
            <div key={index} className="bg-neutral-800 rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4">{caseItem.title}</h3>
              <p className="text-neutral-400 mb-6">{caseItem.description}</p>
              <Link href={caseItem.link} className="text-indigo-400 hover:text-indigo-300 transition-colors">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
