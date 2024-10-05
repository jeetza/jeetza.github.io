import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Pizza, Rocket, CoinsIcon, Twitter } from "lucide-react"

export default function Component() {
  // This would be calculated based on actual market data
  const progressPercentage = 42

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-200">
      <header className="p-4 bg-orange-500 text-white">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Pizza className="h-8 w-8" />
            <span className="text-2xl font-bold">$JEETZA</span>
          </div>
          <div className="space-x-4">
            <Button variant="ghost">About</Button>
            {/* <Button variant="ghost">Tokenomics</Button>
            <Button variant="ghost">Roadmap</Button> */}
            <Button variant="outline">Buy $JEETZA</Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-6xl font-extrabold mb-4 text-orange-800">$JEETZA</h1>
          <p className="text-2xl mb-8 text-orange-700">The cheesiest memecoin on Solana!</p>
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-2 text-orange-600">Progress to 10,000 BTC Market Cap</h2>
            <Progress value={progressPercentage} className="h-6 mb-2" />
            <p className="text-orange-600">{progressPercentage}% - We're on our way to the moon! 🚀🍕</p>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Rocket className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">To the Moon!</h3>
            <p>$JEETZA is not just a memecoin, it's a delicious journey to financial freedom.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <CoinsIcon className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tasty Tokenomics</h3>
            <p>With a supply as cheesy as our jokes, $JEETZA is the perfect recipe for gains.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Pizza className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p>Join our vibrant community of pizza-loving crypto enthusiasts!</p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-orange-800">Ready to grab a slice?</h2>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">Buy $JEETZA Now</Button>
        </section>
      </main>

      <footer className="bg-orange-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2024 $JEETZA. All rights reserved. Not financial advice. 🍕</p>
          <div className="flex space-x-4">
            <Twitter className="h-6 w-6" />
            <Pizza className="h-6 w-6" />
          </div>
        </div>
      </footer>
    </div>
  )
}