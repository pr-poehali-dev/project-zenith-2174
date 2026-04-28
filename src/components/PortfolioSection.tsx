import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Курс сварщика",
    category: "Металлообработка и сварка",
    image: "/placeholder.jpg",
    description:
      "Полный курс подготовки сварщика: от базовых швов до сложных конструкций. За 3 месяца студенты осваивают MMA, MIG/MAG и TIG сварку. 90% выпускников трудоустраиваются в течение месяца.",
    url: "#contact",
    tags: ["3 месяца", "Практика 70%", "Удостоверение", "Трудоустройство"],
  },
  {
    title: "Курс электромонтажника",
    category: "Электрика и монтаж",
    image: "/placeholder.jpg",
    description:
      "Профессиональная подготовка электромонтажника с получением группы допуска. Программа охватывает жилые и промышленные объекты. Выдаётся удостоверение государственного образца.",
    url: "#contact",
    tags: ["2 месяца", "Группа допуска", "Гос. удостоверение", "Практика"],
  },
  {
    title: "Курс сантехника",
    category: "Сантехника и отопление",
    image: "/placeholder.jpg",
    description:
      "Обучение монтажу систем водоснабжения, отопления и канализации. Работа с современными материалами — полипропилен, металлопластик, медь. Практика на учебном стенде и реальных объектах.",
    url: "#contact",
    tags: ["2 месяца", "Практика на объектах", "Современные материалы"],
  },
  {
    title: "Курс отделочника",
    category: "Строительство и отделка",
    image: "/placeholder.jpg",
    description:
      "Комплексный курс отделочных работ: штукатурка, шпаклёвка, укладка плитки, поклейка обоев. По завершении студент готов работать на строительных объектах и браться за частные заказы.",
    url: "#contact",
    tags: ["3 месяца", "Разряд", "Практика", "Частные заказы"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши программы обучения</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Каждый курс — это путь от нуля до готового специалиста. Практика, реальные инструменты и наставники с производственным опытом.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    Записаться на курс <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}