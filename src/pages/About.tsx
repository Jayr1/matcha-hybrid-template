import { SectionFrame, CuteButton } from '@/components/ui/DecorativeElements';

export function About() {


  const funFacts = [
    'I drink at least 3 cups of matcha latte daily ☕',
    'My studio playlist has 847 songs and counting 🎧',
    'I collect vintage tea cups from flea markets 🫖',
    'Morning is my favorite time to create 🌅',
    'I believe every mistake is a happy accident 💚',
  ];

    return <div>
              <main className="container mx-auto px-4 pt-32 pb-20">
 {/* Hero Section */}
                  <section className="max-w-6xl mx-auto px-6 py-16">
                    <SectionFrame>
                      <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="relative flex-shrink-0">
                          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                            <img
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                              alt="Artist portrait"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                          <h1 className="text-[#9fae8f] mb-4">Hello, I'm Luna!</h1>
                          <p className="text-xl text-gray-600 mb-6">
                            Artist, musician, and matcha enthusiast creating whimsical art that celebrates life's gentle moments
                          </p>
                          <div className="flex gap-4 justify-center md:justify-start">
                            <CuteButton onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
                              Get in Touch
                            </CuteButton>
                            <CuteButton variant="secondary">
                              Download Resume
                            </CuteButton>
                          </div>
                        </div>
                      </div>
                    </SectionFrame>
                  </section>



                  <div className="dreamy-card">
                    <h2 className="text-2xl font-semibold mb-4 text-[#2f6b3c]">What is Matcha Days?</h2>
                    <div className="space-y-4 text-gray-700">
                  <p>
                    Welcome to Matcha Days! I'm Luna, and I've been creating art for as long as I can remember. 
                    What started as doodling in the margins of my school notebooks has blossomed into a full-time 
                    creative practice that brings me endless joy.
                  </p>
                  <p>
                    My work is inspired by the small, beautiful moments we often overlook – the way morning light 
                    filters through curtains, the gentle steam rising from a warm drink, the colors of changing 
                    seasons. I believe that art doesn't have to be grand or complex to be meaningful. Sometimes, 
                    the simplest observations create the most touching pieces.
                  </p>
                  <p>
                    When I'm not painting, you'll find me composing ambient music, writing in my journal, or 
                    exploring local cafés in search of the perfect matcha latte. I live by the philosophy that 
                    creativity is not a talent but a practice – something we nurture daily through curiosity, 
                    playfulness, and gentle persistence.
                  </p>
                </div>

                  </div>

      {/* Fun Facts Section */}
                  <section className="max-w-6xl mx-auto px-6 py-16">
                    <SectionFrame>
                      <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-3 mb-4">
                          <h2 className="text-[#9fae8f]">Fun Facts About Me</h2>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {funFacts.map((fact, index) => (
                          <div
                            key={index}
                            className="bg-gradient-to-br from-[#f7d5df]/20 to-[#b4c4a8]/20 rounded-2xl p-5 border-2 border-white/80"
                          >
                            <p className="text-gray-700">{fact}</p>
                          </div>
                        ))}
                      </div>
                    </SectionFrame>
                  </section>
              </main>
          </div>
    
}
