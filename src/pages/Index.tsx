import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";
import CountdownTimer from "@/components/CountdownTimer";

const Index = () => {
  const [onlineCount, setOnlineCount] = useState(0);
  const [registeredCount, setRegisteredCount] = useState(0);

  useEffect(() => {
    const baseOnline = 47;
    const baseRegistered = 523;
    
    const updateOnline = () => {
      const variance = Math.floor(Math.random() * 8) - 4;
      setOnlineCount(baseOnline + variance);
    };
    
    const updateRegistered = () => {
      const variance = Math.floor(Math.random() * 5);
      setRegisteredCount(baseRegistered + variance);
    };
    
    updateOnline();
    updateRegistered();
    
    const onlineInterval = setInterval(updateOnline, 5000);
    const registeredInterval = setInterval(updateRegistered, 10000);
    
    return () => {
      clearInterval(onlineInterval);
      clearInterval(registeredInterval);
    };
  }, []);

  const handleTelegramClick = () => {
    window.open('https://t.me/your_bot_username', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50 to-pink-50">
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  🎉 Приморский край
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  {onlineCount} онлайн
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Знакомства
                </span>
                <br />
                <span className="text-foreground">
                  в Артёме
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl">
                Встречай новых друзей, общайся с интересными людьми и находи единомышленников в нашем активном сообществе! 🚀
              </p>
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 bg-red-50 border-2 border-red-200 px-6 py-3 rounded-2xl">
                  <span className="text-sm font-semibold text-red-600">⚡ АКЦИЯ! Скидка 50%</span>
                </div>
                <div className="inline-flex items-baseline gap-4 bg-gradient-to-r from-accent/10 to-secondary/10 px-6 py-4 rounded-2xl border-2 border-accent/20">
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground line-through">799₽</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-accent">399₽</span>
                      <span className="text-lg text-muted-foreground">навсегда</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-gradient-to-r from-red-500 to-orange-500 hover:opacity-90 transition-opacity animate-pulse-glow shadow-xl"
                  onClick={handleTelegramClick}
                >
                  <Icon name="Zap" size={24} className="mr-2" />
                  Купить за 399₽ вместо 799₽
                </Button>
              </div>
              
              <div className="flex items-center gap-6 pt-4 flex-wrap">
                <div>
                  <div className="text-3xl font-bold text-primary">{registeredCount}</div>
                  <div className="text-sm text-muted-foreground">Зарегистрировано</div>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div>
                  <div className="text-3xl font-bold text-secondary">150+</div>
                  <div className="text-sm text-muted-foreground">Встреч в месяц</div>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div>
                  <div className="text-3xl font-bold text-green-600 flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    {onlineCount}
                  </div>
                  <div className="text-sm text-muted-foreground">Сейчас онлайн</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-20 blur-3xl rounded-full"></div>
              <img 
                src="https://cdn.poehali.dev/projects/228a6e66-d0c6-4f1c-9259-7a7dd6ddd784/files/b8ef62a9-8432-451d-82b8-4144b7d5e1b4.jpg"
                alt="Молодёжь Артёма"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary opacity-50" />
        </div>
      </section>

      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Почему <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">выбирают нас?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Самое активное сообщество в Приморском крае
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Users",
                title: "Активное сообщество",
                description: "Ежедневно в группе общаются сотни человек. Всегда найдутся те, с кем интересно поговорить!",
                gradient: "from-primary to-purple-400"
              },
              {
                icon: "Calendar",
                title: "Регулярные встречи",
                description: "Организуем офлайн-мероприятия: прогулки, кафе, квизы, вечеринки и многое другое!",
                gradient: "from-secondary to-pink-400"
              },
              {
                icon: "Sparkles",
                title: "Безопасная среда",
                description: "Модерация 24/7, проверенные участники. Комфортное общение без токсичности!",
                gradient: "from-accent to-orange-400"
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon name={feature.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <Card className="border-4 border-primary/20 shadow-2xl animate-scale-in">
            <CardContent className="p-12 text-center space-y-8">
              <div className="inline-block">
                <div className="w-20 h-20 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                  <Icon name="Heart" size={40} className="text-white" />
                </div>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold">
                Готов к новым <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">знакомствам?</span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Присоединяйся к нашей группе в Telegram прямо сейчас и начни общение с классными людьми из Артёма и всего Приморского края!
              </p>
              
              <div className="space-y-6">
                <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-red-50 to-orange-50 px-10 py-6 rounded-3xl border-4 border-red-200 shadow-xl">
                  <div className="flex items-center gap-2 text-red-600 font-bold text-lg">
                    <Icon name="AlertCircle" size={24} />
                    <span>Акция заканчивается через:</span>
                  </div>
                  <CountdownTimer targetHours={6} />
                  <div className="flex items-baseline gap-4">
                    <span className="text-2xl text-muted-foreground line-through">799₽</span>
                    <span className="text-6xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">399₽</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Экономия 400₽!</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button 
                  size="lg" 
                  className="text-xl px-12 py-7 bg-gradient-to-r from-red-500 via-orange-500 to-red-600 hover:opacity-90 transition-opacity animate-pulse-glow shadow-2xl"
                  onClick={handleTelegramClick}
                >
                  <Icon name="Zap" size={28} className="mr-3" />
                  Успеть купить за 399₽!
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-6 pt-8 text-sm text-muted-foreground flex-wrap">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-green-600" />
                  <span>399₽ вместо 799₽</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-green-600" />
                  <span>Без спама</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-green-600" />
                  <span>Навсегда доступ</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Знакомства Артём
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Приморский край • 2024
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <Button variant="ghost" size="icon" onClick={handleTelegramClick}>
                <Icon name="Send" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} fallback="Image" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;