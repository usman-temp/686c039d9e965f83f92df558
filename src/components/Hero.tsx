export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-background to-accent/10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
          Craft Culinary Magic in Your Kitchen
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover world-class recipes, professional techniques, and culinary inspiration from award-winning chefs
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-foreground text-background px-8 py-4 rounded-full hover:bg-opacity-90 transition-all font-[family-name:var(--font-geist-sans)] shadow-lg hover:shadow-xl">
            Explore Recipes
          </button>
          <button className="border-2 border-foreground text-foreground px-8 py-4 rounded-full hover:bg-foreground hover:text-background transition-all font-[family-name:var(--font-geist-sans)] shadow-lg hover:shadow-xl">
            Watch Tutorials
          </button>
        </div>
      </div>
    </section>
  );
}