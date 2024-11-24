import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <section className="flex flex-col items-center text-center py-20 px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          🚀 Welcome to <span className="text-blue-500">Cloud Cup</span>
        </h1>
        <p className="text-xl md:text-2xl dark:text-gray-300 mb-8 max-w-3xl">
          A blazing-fast, scalable, and configurable reverse proxy and load balancer built with modern applications in mind.
        </p>
        <div className="flex gap-6">
          <Link href={"/docs"} className="px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-md hover:bg-blue-600 transition">
            Get Started
          </Link>
          <Link href={"https://github.com/cloud-cup/cloud-cup"} className="px-6 py-3 border border-blue-500 text-blue-500 text-lg font-medium rounded-md hover:bg-blue-500 hover:text-white transition">
            GitHub
          </Link>
        </div>
      </section>
    </div>
  );
}
