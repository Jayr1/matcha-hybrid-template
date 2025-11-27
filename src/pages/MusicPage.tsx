import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { Play, Pause, Volume2 } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { SectionFrame, Doodle } from '@/components/ui/DecorativeElements';

const MusicPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const [playingTrack, setPlayingTrack] = useState<number | null>(null);


  const albums = [
    {
      id: 1,
      title: "Soft Rain",
      cover: 'linear-gradient(135deg, #a8d8a8 0%, #c8e6c9 100%)',
      description: "Cover art for a lo-fi chill track about gentle rainfall and cozy afternoons",
      year: "2024",
      tracks: [
        { id: 1, title: 'Morning Matcha', duration: '3:24' },
        { id: 2, title: 'Sunrise Meditation', duration: '4:15' },
        { id: 3, title: 'Dew Drops', duration: '3:45' },
        { id: 4, title: 'Fresh Start', duration: '4:02' },
      ],
    },
    {
      id: 2,
      title: "Garden Dreams",
      cover: 'linear-gradient(135deg, #f5d9b5 0%, #e8c9a5 100%)',
      description: "Album artwork featuring pastel florals and dreamy garden scenes",
      year: "2024",
      tracks: [
        { id: 5, title: 'Gentle Breeze', duration: '4:12' },
        { id: 6, title: 'Cloud Watching', duration: '3:38' },
        { id: 7, title: 'Golden Hour', duration: '4:25' },
        { id: 8, title: 'Tea Time', duration: '3:15' },
      ],
    },
    {
      id: 3,
      title: "Morning Brew",
      cover: 'linear-gradient(135deg, #d4a5a5 0%, #e8c5d5 100%)',
      description: "Single cover with matcha-inspired artwork and soft morning light",
      year: "2023",
      tracks: [
        { id: 9, title: 'Sunset Serenade', duration: '3:45' },
        { id: 10, title: 'Twilight Thoughts', duration: '4:30' },
        { id: 11, title: 'Moonlit Garden', duration: '5:10' },
        { id: 12, title: 'Peaceful Night', duration: '3:55' },
      ],
    },
    {
      id: 4,
      title: "Cloud Nine",
      description: "EP cover design with floating clouds and sky-inspired gradients",
      year: "2023",
      tracks: [
        { id: 9, title: 'Sunset Serenade', duration: '3:45' },
        { id: 10, title: 'Twilight Thoughts', duration: '4:30' },
        { id: 11, title: 'Moonlit Garden', duration: '5:10' },
        { id: 12, title: 'Peaceful Night', duration: '3:55' },
      ],
    },
    {
      id: 5,
      title: "Quiet Hours",
      description: "Playlist cover for late night studying and peaceful moments",
      year: "2023",
      tracks: [
        { id: 9, title: 'Sunset Serenade', duration: '3:45' },
        { id: 10, title: 'Twilight Thoughts', duration: '4:30' },
        { id: 11, title: 'Moonlit Garden', duration: '5:10' },
        { id: 12, title: 'Peaceful Night', duration: '3:55' },
      ],
    },
  ];

  const togglePlay = (trackId: number) => {
    if (playingTrack === trackId) {
      setPlayingTrack(null);
    } else {
      setPlayingTrack(trackId);
    }
  };


  useEffect(() => {
    if (!api) return;

    const updateProgress = () => {
      const progress = Math.max(0, Math.min(1, api.scrollProgress()));
      setScrollProgress(progress * 100);
    };

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    updateProgress();
    updateCurrent();
    
    api.on("scroll", updateProgress);
    api.on("select", updateCurrent);

    return () => {
      api.off("scroll", updateProgress);
      api.off("select", updateCurrent);
    };
  }, [api]);

  

  return (
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-4 font-bubbly">Music</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Cover designs and artwork for music projects that embrace calm and creativity
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full px-12 md:px-20"
            setApi={setApi}
          >
            <CarouselContent className="flex items-center">
              {albums.map((project, index) => {
                const isActive = index === current;
                return (
                  <CarouselItem 
                    key={project.id} 
                    className="basis-full md:basis-3/4 lg:basis-3/5 flex justify-center"
                  >
                    <div 
                      className={`transition-all duration-500 ease-out ${
                        isActive 
                          ? 'scale-100 opacity-100' 
                          : 'scale-75 opacity-40'
                      }`}
                      style={{ maxWidth: '500px', width: '100%' }}
                    >
                      <div className="dreamy-card">
                        <div className="aspect-square bg-gradient-matcha rounded-[2.5rem] mb-6 overflow-hidden shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.3)]">
                          <div className="w-full h-full flex items-center justify-center text-7xl">
                            🎵
                          </div>
                        </div>
                        <div className={`space-y-2 transition-opacity duration-500 ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-semibold">{project.title}</h3>
                            <span className="text-sm text-gray-500">{project.year}</span>
                          </div>
                          <p className="text-gray-700">{project.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:left-4 h-10 w-10 bg-background/80 backdrop-blur-sm hover:bg-background" />
            <CarouselNext className="right-0 md:right-4 h-10 w-10 bg-background/80 backdrop-blur-sm hover:bg-background" />
          </Carousel>

          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex gap-2">
              {albums.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === current ? 'w-8 bg-[#f28ba6]' : 'w-2 bg-[#f28ba6] opacity-30 hover:opacity-60'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="w-64">
              <Progress value={scrollProgress} className="h-1.5" />
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {albums.map((album) => (
            <SectionFrame key={album.id}>
              <div className="flex flex-col md:flex-row gap-8">
                {/* Album Cover */}
                <div className="relative flex-shrink-0">
                  <div
                    className="w-full md:w-64 h-64 rounded-2xl shadow-xl border-4 border-white"
                    style={{ background: album.cover }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <Volume2 className="w-20 h-20 text-white/40" />
                    </div>
                  </div>
                  <Doodle type="star" className="absolute -top-4 -right-4 w-8 h-8 opacity-60" />
                </div>

                {/* Album Details & Tracks */}
                <div className="flex-1">
                  <div className="mb-6">
                    <h2 className="text-[#9fae8f] mb-2">{album.title}</h2>
                    <p className="text-gray-500">Album • {album.year}</p>
                  </div>

                  <div className="space-y-3">
                    {album.tracks.map((track, index) => (
                      <div
                        key={track.id}
                        className="flex items-center justify-between bg-white/80 rounded-full px-4 py-3 border-2 border-[#f7d5df] hover:border-[#f4c4d0] transition-all hover:shadow-md"
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <button
                            onClick={() => togglePlay(track.id)}
                            className="w-10 h-10 bg-[#a8b89e] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                          >
                            {playingTrack === track.id ? (
                              <Pause className="w-4 h-4 text-white fill-white" />
                            ) : (
                              <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                            )}
                          </button>
                          <span className="text-sm text-gray-400 w-6">{index + 1}</span>
                          <span className="text-gray-700 flex-1">{track.title}</span>
                        </div>
                        <span className="text-gray-500 text-sm">{track.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionFrame>
          ))}
        </div>
      </main>
  );
}

export default MusicPage;
