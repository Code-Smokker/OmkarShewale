import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function OpenSource() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Open Source & Hackathons</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* ---------- OPEN SOURCE ---------- */}
        <Card>
          <CardHeader>
            <CardTitle>Open Source Contributions</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">

              {/* Hacktoberfest */}
              <div className="flex items-center gap-4">
                <div className="bg-card border border-border rounded-md p-2">
                          <img 
      src="/HF.png" 
      alt="HF Logo" 
      className="w-12 h-12 object-contain"
    />
                </div>

                <div>
                  <h3 className="font-semibold">Hacktoberfest 2025</h3>
                  <p className="text-sm text-muted-foreground">
                    Contributed through discussions, issue reports, and community support.
                  </p>

                  <div className="flex mt-2">
                    <Badge variant="outline">October 2025</Badge>
                  </div>
                </div>
              </div>

              {/* GSoC Placeholder */}
              <div className="flex items-center gap-4">
                <div className="bg-card border border-border rounded-md p-2">
                        <img 
      src="/Gsoc.png" 
      alt="Gsoc Logo" 
      className="w-12 h-12 object-contain"
    />
                    
                </div>

                <div>
                  <h3 className="font-semibold">Google Summer of Code</h3>
                  <p className="text-sm text-muted-foreground">
                    Exploring GSoC opportunities and open-source organizations.
                  </p>

                  <div className="flex mt-2">
                    <Badge variant="secondary" className="mr-2">Aspirant</Badge>
                    <Badge variant="outline">2025</Badge>
                  </div>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* ---------- HACKATHONS ---------- */}
        <Card>
          <CardHeader>
            <CardTitle>Hackathons & Events</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">

              {/* SIH 2025 */}
              <div className="flex items-center gap-4">
                <div className="bg-card border border-border rounded-md p-2">
                              <img 
      src="/sih.png" 
      alt="sih.logo" 
      className="w-12 h-12 object-contain"
    />
                </div>

                <div>
                  <h3 className="font-semibold">Smart India Hackathon 2025</h3>
                  <p className="text-sm text-muted-foreground">
                    Shortlisted from college to represent the team at SIH 2025.
                  </p>

                  <div className="flex mt-2">
                    <Badge variant="secondary" className="mr-2">Shortlisted</Badge>
                    <Badge variant="outline">2025</Badge>
                  </div>
                </div>
              </div>

              {/* VibeThon 2025 */}
              <div className="flex items-center gap-4">
                <div className="bg-card border border-border rounded-md p-2">
                   <img 
      src="/vibethon.png" 
      alt="VibeThon Logo" 
      className="w-12 h-12 object-contain"
    />
                </div>

                <div>
                  <h3 className="font-semibold">VibeThon 2025</h3>
                  <p className="text-sm text-muted-foreground">
 Ranked in the Top 10 out of 367 teams and 13,000+ participants across India.
                  </p>

                  <div className="flex mt-2">
                    <Badge variant="secondary" className="mr-2">Top 10</Badge>
                    <Badge variant="outline">2025</Badge>
                  </div>
                </div>
              </div>

              {/* Mumbai Hacks 2025 */}
              <div className="flex items-center gap-4">
                <div className="bg-card border border-border rounded-md p-2">
                              <img 
                              src="/MUm.png" 
alt="Mumbai Hacks Logo" 
      className="w-12 h-12 object-contain"
    />
                </div>

                <div>
                  <h3 className="font-semibold">Mumbai Hacks 2025</h3>
                  <p className="text-sm text-muted-foreground">
                    Shortlisted to participate in Mumbai Hacks 2025.
                  </p>

                  <div className="flex mt-2">
                    <Badge variant="secondary" className="mr-2">Shortlisted</Badge>
                    <Badge variant="outline">2025</Badge>
                  </div>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  )
}
