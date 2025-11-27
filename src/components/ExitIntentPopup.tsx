import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import CountdownTimer from "./CountdownTimer";

interface ExitIntentPopupProps {
  onAction: () => void;
}

const ExitIntentPopup = ({ onAction }: ExitIntentPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAction = () => {
    setIsOpen(false);
    onAction();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden border-4 border-red-500">
        <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 p-8">
          <DialogHeader className="text-center space-y-4">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center animate-pulse-glow">
              <Icon name="AlertCircle" size={40} className="text-white" />
            </div>
            
            <DialogTitle className="text-3xl font-bold">
              Стой! ⛔ Не упусти шанс!
            </DialogTitle>
          </DialogHeader>
          
          <div className="mt-6 space-y-6">
            <div className="text-center space-y-3">
              <p className="text-lg font-semibold text-foreground">
                Ты уходишь, но <span className="text-red-600">скидка 50%</span> всё ещё активна!
              </p>
              <p className="text-muted-foreground">
                Больше 500 человек уже присоединились. Не теряй возможность найти новых друзей и знакомых! 🎉
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-red-200">
              <div className="text-center space-y-4">
                <p className="text-sm text-red-600 font-bold">⏰ АКЦИЯ ИСТЕКАЕТ ЧЕРЕЗ:</p>
                <div className="flex justify-center">
                  <CountdownTimer targetHours={6} />
                </div>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-3xl text-muted-foreground line-through">799₽</span>
                  <Icon name="ArrowRight" size={24} className="text-red-500" />
                  <span className="text-5xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    399₽
                  </span>
                </div>
                <p className="text-sm font-semibold text-green-600">
                  💰 Экономия 400₽ прямо сейчас!
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full text-xl py-7 bg-gradient-to-r from-red-500 via-orange-500 to-red-600 hover:opacity-90 transition-opacity animate-pulse-glow shadow-xl"
                onClick={handleAction}
              >
                <Icon name="Zap" size={28} className="mr-3" />
                Да, хочу вступить за 399₽!
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-muted-foreground hover:text-foreground"
                onClick={handleClose}
              >
                Нет, я упущу эту возможность
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-4">
              <div className="text-center p-3 bg-white rounded-xl">
                <Icon name="Users" size={24} className="mx-auto text-primary mb-2" />
                <p className="text-xs text-muted-foreground">500+ участников</p>
              </div>
              <div className="text-center p-3 bg-white rounded-xl">
                <Icon name="Shield" size={24} className="mx-auto text-green-600 mb-2" />
                <p className="text-xs text-muted-foreground">Безопасно</p>
              </div>
              <div className="text-center p-3 bg-white rounded-xl">
                <Icon name="Clock" size={24} className="mx-auto text-orange-600 mb-2" />
                <p className="text-xs text-muted-foreground">Доступ сразу</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
