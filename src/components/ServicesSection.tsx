import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Flame, Zap, Droplets, HardHat, Hammer, ShieldCheck } from "lucide-react"

const services = [
  {
    icon: Flame,
    title: "Сварочное дело",
    description:
      "Обучаем ручной дуговой, полуавтоматической и аргонодуговой сварке. Курс включает теорию, практику на реальном оборудовании и подготовку к аттестации. Востребованная профессия с высоким уровнем дохода.",
  },
  {
    icon: Zap,
    title: "Электромонтаж",
    description:
      "Программа подготовки электромонтажников: монтаж электропроводки, щитов, розеток, светильников. По окончании выдаётся удостоверение установленного образца с присвоением группы допуска.",
  },
  {
    icon: Droplets,
    title: "Сантехника",
    description:
      "Практическое обучение монтажу систем водоснабжения, отопления и канализации. Студенты работают с реальными инструментами и материалами, осваивая навыки, которые сразу применимы на объектах.",
  },
  {
    icon: HardHat,
    title: "Строительные работы",
    description:
      "Курсы по кладке кирпича, штукатурке, шпаклёвке и отделочным работам. Подходит как для начинающих, так и для тех, кто хочет подтянуть и систематизировать свои навыки.",
  },
  {
    icon: Hammer,
    title: "Слесарное дело",
    description:
      "Обучаем работе с металлом: опиловка, сверление, нарезка резьбы, сборка узлов. Отличная база для работы на производстве, в ремонтных службах и сервисных центрах.",
  },
  {
    icon: ShieldCheck,
    title: "Охрана труда",
    description:
      "Специальный курс по технике безопасности и охране труда для рабочих профессий. Обязательный минимум для допуска к работам — оформляем все необходимые документы официально.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наши курсы
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Специальности, которым мы <span className="text-primary">обучаем</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Практические курсы с упором на реальные навыки. Каждая программа разработана совместно с работодателями и заточена под требования рынка труда.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}