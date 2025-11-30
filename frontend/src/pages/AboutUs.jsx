import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutUs() {
  React.useEffect(() => {
    document.title = "About Us — PrintO";
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Design & Print Custom Apparel With Ease
            </h1>
            <p className="mt-4 text-lg opacity-90">
              Upload your design, choose a product and we'll handle the rest — quality printing,
              fast shipping, and no minimums.
            </p>
            <div className="mt-6 flex gap-3">
              <Button variant="default" className="bg-white text-purple-600">
                Start Designing
              </Button>
              <Button variant="secondary" className="bg-white/10 border-white/20">
                View Products
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full h-64 md:h-56 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center">
              <div className="text-center opacity-90">
                <div className="w-36 h-40 bg-white/20 rounded-sm mx-auto" />
                <div className="mt-3">Your design, previewed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold">Our Story</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              PrintO started with a simple idea: make custom apparel printing approachable for
              everyone. From small brands to artists and teams, we provide high-quality garments,
              easy-to-use design tools, and reliable production so you can bring your ideas to life.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              We focus on sustainable sourcing, consistent print quality, and exceptional customer
              support — all backed by fast fulfillment and shipping.
            </p>
            <div className="mt-6">
              <Button variant="default">Learn More</Button>
            </div>
          </div>
          <div>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Why choose PrintO?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li>• No minimum orders — print 1 or 1000+</li>
                  <li>• Multiple print methods (DTG, screen, embroidery)</li>
                  <li>• Fast turnaround and worldwide shipping</li>
                  <li>• Quality checks on every order</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-center">How It Works</h3>
          <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
            A simple 3-step process to turn designs into products.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
              <div className="text-3xl">📤</div>
              <h4 className="mt-4 font-medium">1. Upload Your Design</h4>
              <p className="mt-2 text-gray-600">PNG, JPG, SVG — upload or use our design tool.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
              <div className="text-3xl">🛍️</div>
              <h4 className="mt-4 font-medium">2. Choose Products</h4>
              <p className="mt-2 text-gray-600">Pick garment, color, size and print options.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
              <div className="text-3xl">🚚</div>
              <h4 className="mt-4 font-medium">3. We Print & Ship</h4>
              <p className="mt-2 text-gray-600">We handle production, quality checks and shipping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular products preview */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold text-center">Popular Products</h3>
        <p className="text-center text-gray-600 mt-2">Best-sellers with the highest customer satisfaction</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* ...existing code for product cards would be used in real app; simple placeholders here */}
          {["Classic T-Shirt", "Premium Hoodie", "Tops", "Long Sleeve Tee"].map((p) => (
            <div key={p} className="bg-white p-4 rounded-lg border shadow-sm">
              <div className="h-32 bg-gray-100 rounded-md" />
              <div className="mt-3">
                <div className="font-medium">{p}</div>
                <div className="text-sm text-gray-500 mt-1">$24.99</div>
              </div>
              <div className="mt-3">
                <Button variant="secondary" className="w-full">Customize</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-center">What Our Customers Say</h3>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { name: "Jane Doe", role: "Graphic Designer", text: "PrintO exceeded my expectations — colors are vibrant and quality is great." },
              { name: "Mike Smith", role: "Small Business Owner", text: "Easy to use platform, fast shipping, and excellent support." },
              { name: "Amy Lee", role: "Artist", text: "My prints look amazing. Highly recommend!" },
            ].map((t) => (
              <div key={t.name} className="bg-white p-6 rounded-lg border shadow-sm">
                <div className="text-sm text-gray-700 font-medium">{t.name}</div>
                <div className="text-xs text-gray-400 mb-3">{t.role}</div>
                <div className="text-gray-600">"{t.text}"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h4 className="text-2xl font-semibold">Ready to Create Your Custom Apparel?</h4>
          <p className="mt-2 opacity-90">Join thousands of satisfied customers who brought their designs to life with PrintO.</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Button variant="default" className="bg-white text-purple-600">Start Designing Now</Button>
            <Button variant="secondary" className="bg-white/10 border-white/20">Contact Sales</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
