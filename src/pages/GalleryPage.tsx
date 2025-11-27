export function GalleryPage() {

      const artworks = [
    { id: 1, title: "Spring Meadow", description: "Watercolor illustration" },
    { id: 2, title: "Cloudy Dreams", description: "Digital painting" },
    { id: 3, title: "Garden Tea", description: "Mixed media" },
    { id: 4, title: "Soft Morning", description: "Acrylic on paper" },
    { id: 5, title: "Gentle Rain", description: "Ink illustration" },
    { id: 6, title: "Pastel Sky", description: "Digital art" },
    { id: 7, title: "Cozy Corner", description: "Watercolor" },
    { id: 8, title: "Dreamy Landscape", description: "Oil painting" },
  ];
  
    return <div>
         <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-4">Gallery</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A collection of illustrations and paintings inspired by gentle moments and dreamy scenes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="dreamy-card group cursor-pointer">
              <div className="aspect-square bg-gradient-matcha rounded-[1.5rem] mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-4xl">
                  🎨
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
              <p className="text-sm text-gray-600">{artwork.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>;
}
