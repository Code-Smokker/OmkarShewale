import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Timeline() {
  const timelineItems = [
   {
  "title": "Finzo",
  "role": "Lead Developer",
  "period": "2025 - Present",
  "description": "Leading the development of Finzo — a gamified personal finance app for Gen Z, built using the MERN stack with full API architecture, payment gateway integration, and parent-approval flows.",
  "tags": ["MERN", "React", "Node.js", "MongoDB", "APIs", "Payments", "UPI", "Fintech"],
  "type": "experience"
},
{
  "title": "PW Meet Engage",
  "role": "Extension Developer",
  "period": "2025",
  "description": "Created a Google Meet engagement extension enabling real-time polls, quizzes, leaderboards, and host controls using React, Tailwind, and Chrome Extension APIs (Manifest V3).",
  "tags": ["React", "Vite", "TailwindCSS", "Chrome Extensions", "Manifest V3"],
  "type": "project"
}
,
{
  "title": "VibeXCraft",
  "role": "Full-Stack Developer",
  "period": "2025 - Present",
  "description": "Built an AI-powered coding workspace with live pair programming, GitHub integration, AI copilots, project management tools, and a real-time collaborative editor using React, TypeScript, Supabase, Clerk, and Node.js.",
  "tags": ["React", "TypeScript", "Supabase", "Node.js", "Clerk", "TailwindCSS", "AI"],
  "type": "project"
}
,
{
  "title": "Career Sarthi",
  "role": "Full-Stack Developer (Lead)",
  "period": "2025",
  "description": "Developed CareerSathi for Smart India Hackathon 2025—an AI-driven platform offering academic tracking, career planning, college & scholarship discovery, counselor network, and profile-based recommendations with Clerk authentication and MERN stack.",
  "tags": ["React", "Node.js", "MongoDB", "Express", "Clerk", "AI", "TailwindCSS", "Career Tech"],
  "type": "experience"
}
,
    
    {
  "title": "Budget Master",
  "role": "Frontend Developer",
  "period": "2024",
  "description": "Built a modern personal finance web app for expense tracking, savings visualization, and financial goal planning with interactive charts using vanilla JavaScript and Chart.js.",
  "tags": ["HTML", "CSS", "JavaScript", "Chart.js", "Vercel"],
  "type": "project"
}
,
   {
  "title": "Mediqo",
  "role": "Full-Stack Developer",
  "period": "2024",
  "description": "Developed a full-stack healthcare platform with user, doctor, and admin dashboards, online appointment booking, automation workflows through BOLT, and secure authentication using the MERN stack.",
  "tags": ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Automation", "Healthcare"],
  "type": "project"
}

  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "experience":
        return "border-l-blue-500"
      case "event":
        return "border-l-green-500"
      case "project":
        return "border-l-purple-500"
      default:
        return "border-l-gray-500"
    }
  }

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Timeline Activity</h2>

      <div className="space-y-4">
        {timelineItems.map((item, index) => (
          <Card key={index} className={`border-l-4 ${getTypeColor(item.type)}`}>
            <CardHeader className="pb-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.role}</CardDescription>
                </div>
                <Badge variant="outline" className="self-start sm:self-center">
                  {item.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="px-2 py-0.5 text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
