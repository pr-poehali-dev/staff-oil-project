import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  
  const [width, setWidth] = useState([20]);
  const [length, setLength] = useState([30]);
  const [height, setHeight] = useState([6]);
  const [material, setMaterial] = useState('standard');
  const [equipment, setEquipment] = useState('basic');
  
  const calculatePrice = () => {
    const basePrice = width[0] * length[0] * height[0] * 150;
    const materialMultiplier = material === 'premium' ? 1.4 : material === 'reinforced' ? 1.7 : 1;
    const equipmentPrice = equipment === 'full' ? 350000 : equipment === 'standard' ? 200000 : 100000;
    return Math.round((basePrice * materialMultiplier) + equipmentPrice);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Factory" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold">STAFF OIL</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#calculator" className="hover:text-primary transition-colors">Калькулятор</a>
            <a href="#advantages" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button variant="default" size="lg">
            <Icon name="Phone" size={18} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      <section id="home" className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/4931b8ef-c2d7-414f-9749-dd06e8ed95cc.jpg"
            alt="Надувной ангар"
            className="w-full h-full object-cover brightness-75"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl space-y-6 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Надувные ангары для вашего бизнеса
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Быстровозводимые складские и промышленные помещения. Установка за 48 часов.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary">
                Подробнее
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Калькулятор стоимости</h2>
            <p className="text-xl text-muted-foreground">Рассчитайте стоимость ангара под ваши задачи</p>
          </div>
          
          <Card className="max-w-4xl mx-auto shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Параметры ангара</CardTitle>
              <CardDescription>Настройте размеры и комплектацию под ваши потребности</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-3">
                      <Label className="text-base font-semibold">Ширина (м)</Label>
                      <span className="text-primary font-bold text-lg">{width[0]} м</span>
                    </div>
                    <Slider
                      value={width}
                      onValueChange={setWidth}
                      min={10}
                      max={40}
                      step={1}
                      className="cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>10 м</span>
                      <span>40 м</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-3">
                      <Label className="text-base font-semibold">Длина (м)</Label>
                      <span className="text-primary font-bold text-lg">{length[0]} м</span>
                    </div>
                    <Slider
                      value={length}
                      onValueChange={setLength}
                      min={15}
                      max={60}
                      step={1}
                      className="cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>15 м</span>
                      <span>60 м</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-3">
                      <Label className="text-base font-semibold">Высота (м)</Label>
                      <span className="text-primary font-bold text-lg">{height[0]} м</span>
                    </div>
                    <Slider
                      value={height}
                      onValueChange={setHeight}
                      min={3}
                      max={12}
                      step={0.5}
                      className="cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>3 м</span>
                      <span>12 м</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="material" className="text-base font-semibold">Материал покрытия</Label>
                    <Select value={material} onValueChange={setMaterial}>
                      <SelectTrigger id="material" className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Стандарт (ПВХ 650 г/м²)</SelectItem>
                        <SelectItem value="premium">Премиум (ПВХ 850 г/м²)</SelectItem>
                        <SelectItem value="reinforced">Усиленный (ПВХ 1050 г/м²)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="equipment" className="text-base font-semibold">Комплектация</Label>
                    <Select value={equipment} onValueChange={setEquipment}>
                      <SelectTrigger id="equipment" className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Базовая (каркас + покрытие)</SelectItem>
                        <SelectItem value="standard">Стандарт (+вентиляция, освещение)</SelectItem>
                        <SelectItem value="full">Полная (+отопление, ворота, окна)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="bg-primary/10 p-6 rounded-lg border-2 border-primary">
                    <div className="text-center space-y-2">
                      <p className="text-sm text-muted-foreground">Расчетная стоимость</p>
                      <p className="text-4xl font-bold text-primary">{calculatePrice().toLocaleString('ru-RU')} ₽</p>
                      <p className="text-xs text-muted-foreground">* Предварительный расчет</p>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Получить точный расчет
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{(width[0] * length[0]).toFixed(0)}</div>
                  <div className="text-sm text-muted-foreground">м² площадь</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{(width[0] * length[0] * height[0]).toFixed(0)}</div>
                  <div className="text-sm text-muted-foreground">м³ объем</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">48</div>
                  <div className="text-sm text-muted-foreground">часов монтаж</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">25</div>
                  <div className="text-sm text-muted-foreground">лет гарантия</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Преимущества надувных ангаров</h2>
            <p className="text-xl text-muted-foreground">Современное решение для вашего бизнеса</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'Clock', title: 'Быстрый монтаж', desc: 'Установка за 48 часов без фундамента' },
              { icon: 'DollarSign', title: 'Экономия средств', desc: 'На 40% дешевле металлоконструкций' },
              { icon: 'Zap', title: 'Энергоэффективность', desc: 'Снижение затрат на отопление до 60%' },
              { icon: 'Truck', title: 'Мобильность', desc: 'Легко перемещать и демонтировать' },
              { icon: 'Shield', title: 'Долговечность', desc: 'Срок службы более 25 лет' },
              { icon: 'Snowflake', title: 'Всесезонность', desc: 'Работа при температуре от -60°C до +70°C' }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon name={item.icon} size={32} className="text-primary group-hover:text-white" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">Оставьте заявку и получите консультацию специалиста</p>
            </div>

            <Card className="shadow-xl">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      placeholder="Иван Иванов"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      placeholder="ivan@example.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      placeholder="+7 (999) 123-45-67"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Расскажите о ваших потребностях..."
                      rows={5}
                      className="mt-2"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Factory" size={32} />
                <h3 className="text-2xl font-bold">STAFF OIL</h3>
              </div>
              <p className="text-gray-400">Надувные ангары для промышленности и складского хозяйства</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@staffoil.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>Москва, ул. Промышленная, 12</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-gray-400">
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб: 10:00 - 16:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 STAFF OIL. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
