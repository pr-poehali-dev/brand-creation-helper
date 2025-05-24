import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10"></div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-montserrat">
            Создай свой{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              бренд
            </span>{" "}
            с нуля
          </h1>
          <p className="text-xl text-gray-600 mb-8 font-open-sans max-w-2xl mx-auto">
            Пошаговые гайды, практические инструменты и экспертная поддержка для
            тех, кто хочет создать успешный бренд без опыта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3"
            >
              <Icon name="Rocket" size={20} />
              Начать создание бренда
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-3"
            >
              <Icon name="Play" size={20} />
              Посмотреть гайд
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Как мы поможем
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Комплексная поддержка на каждом этапе создания бренда
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-purple-100 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Lightbulb" size={28} className="text-white" />
                </div>
                <CardTitle className="font-montserrat">
                  Стратегия бренда
                </CardTitle>
                <CardDescription className="font-open-sans">
                  Определим уникальную позицию, целевую аудиторию и ценности
                  вашего бренда
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Palette" size={28} className="text-white" />
                </div>
                <CardTitle className="font-montserrat">
                  Визуальная идентичность
                </CardTitle>
                <CardDescription className="font-open-sans">
                  Создадим логотип, цветовую палитру и фирменный стиль под ваш
                  бренд
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={28} className="text-white" />
                </div>
                <CardTitle className="font-montserrat">Продвижение</CardTitle>
                <CardDescription className="font-open-sans">
                  Научим эффективно продвигать бренд в социальных сетях и других
                  каналах
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Пошаговые гайды
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              От идеи до успешного запуска за 4 простых шага
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Исследование",
                desc: "Анализ рынка и конкурентов",
                icon: "Search",
              },
              {
                step: "02",
                title: "Концепция",
                desc: "Разработка идеи и позиционирования",
                icon: "Brain",
              },
              {
                step: "03",
                title: "Дизайн",
                desc: "Создание визуального образа",
                icon: "Brush",
              },
              {
                step: "04",
                title: "Запуск",
                desc: "Вывод бренда на рынок",
                icon: "Rocket",
              },
            ].map((guide, index) => (
              <Card
                key={index}
                className="bg-white border-none shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2 font-montserrat">
                    {guide.step}
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon
                      name={guide.icon as any}
                      size={24}
                      className="text-purple-600"
                    />
                  </div>
                  <CardTitle className="text-lg font-montserrat">
                    {guide.title}
                  </CardTitle>
                  <CardDescription className="font-open-sans">
                    {guide.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Истории успеха
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Реальные результаты наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                brand: "EcoStyle",
                result: "Рост продаж на 250% за 6 месяцев",
                text: "Благодаря профессиональной помощи смогла создать узнаваемый эко-бренд и найти свою аудиторию",
              },
              {
                name: "Михаил Козлов",
                brand: "TechStart",
                result: "Привлечён инвестиции $50k",
                text: "Сильный бренд помог выделиться среди конкурентов и привлечь внимание инвесторов",
              },
              {
                name: "Елена Сидорова",
                brand: "HandCraft",
                result: "Открыла 3 точки продаж",
                text: "От домашнего хобби до сети магазинов - правильный брендинг сделал это возможным",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-purple-100 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold font-montserrat">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-montserrat">
                        {testimonial.name}
                      </h4>
                      <p className="text-purple-600 font-open-sans">
                        {testimonial.brand}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3 font-open-sans italic">
                    "{testimonial.text}"
                  </p>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-purple-700 font-semibold font-open-sans">
                      {testimonial.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 font-montserrat">
            Готовы создать свой бренд?
          </h2>
          <p className="text-xl mb-8 font-open-sans opacity-90">
            Присоединяйтесь к сотням предпринимателей, которые уже построили
            успешные бренды с нашей помощью
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3"
          >
            <Icon name="ArrowRight" size={20} />
            Начать бесплатную консультацию
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
