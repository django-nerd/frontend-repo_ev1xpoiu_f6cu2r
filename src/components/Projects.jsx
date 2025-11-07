import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Experience',
    description: 'A playful web experience integrating Spline 3D with smooth, accessible UI components.',
    tags: ['React', 'Spline', 'Tailwind'],
    links: { github: '#', live: '#' },
  },
  {
    title: 'SaaS Dashboard',
    description: 'Clean, fast, and responsive admin dashboard for growth teams with charts and theming.',
    tags: ['React', 'FastAPI', 'Charts'],
    links: { github: '#', live: '#' },
  },
  {
    title: 'Design System',
    description: 'Reusable, consistent component library with tokens, docs, and accessibility baked in.',
    tags: ['Design', 'Storybook', 'A11y'],
    links: { github: '#', live: '#' },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected work</h2>
          <p className="mt-3 text-gray-600">A few projects that represent my focus on clarity, performance, and playfulness.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-100 to-blue-100 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-gray-100 text-gray-700 text-xs px-2.5 py-1">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-3 text-sm">
                <a href={p.links.github} className="inline-flex items-center gap-1 text-gray-700 hover:text-gray-900">
                  <Github className="h-4 w-4" /> Code
                </a>
                <a href={p.links.live} className="inline-flex items-center gap-1 text-gray-700 hover:text-gray-900">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
