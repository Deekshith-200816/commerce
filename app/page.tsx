import Logo from '../components/ui/Logo'

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <header className="flex items-center space-x-4 py-6">
        <Logo />
        <h1 className="text-4xl font-extrabold">Welcome to Trenza</h1>
      </header>

      <section className="mt-10">
        <p className="text-lg text-gray-600">
          Discover curated fashion collections with AI-generated models.
        </p>
        {/* Add more homepage content here */}
      </section>
    </main>
  )
}
