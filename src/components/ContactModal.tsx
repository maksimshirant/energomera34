import { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

const CONTACT_MODAL_TEXT = {
  title: 'Оставьте заявку.',
  description:
    'Кратко опишите объект и задачу — подготовим понятное решение и перезвоним в кратчайшие сроки.',
  placeholders: {
    name: 'Имя',
    phone: 'Номер телефона',
    message: 'Ваше сообщение',
  },
  consentPrefix: 'Я ознакомлен(-на) и согласен(-на) с',
  consentLink: 'политикой конфиденциальности',
  consentSuffix: 'и даю своё согласие на обработку персональных данных.',
  submit: 'Отправить',
};

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    agree: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        showCloseButton={false}
        className="overflow-hidden border border-border/70 bg-white/95 p-0 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.35)] sm:max-w-[640px]"
      >
        <DialogHeader className="border-b border-border/70 p-6 pb-5">
          <DialogTitle className="text-center text-2xl font-semibold tracking-tight text-foreground">
            {CONTACT_MODAL_TEXT.title}
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-2 transition-colors hover:bg-secondary"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </DialogHeader>
        <div className="p-6 md:p-7">
          <p className="mb-6 text-sm leading-6 text-muted-foreground md:text-base">{CONTACT_MODAL_TEXT.description}</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder={CONTACT_MODAL_TEXT.placeholders.name}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-12 rounded-2xl bg-secondary/40"
            />
            <Input
              placeholder={CONTACT_MODAL_TEXT.placeholders.phone}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="h-12 rounded-2xl bg-secondary/40"
            />
            <Textarea
              placeholder={CONTACT_MODAL_TEXT.placeholders.message}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="min-h-[140px] resize-none rounded-[24px] bg-secondary/40"
            />
            <div className="flex items-start gap-3">
              <Checkbox
                id="agree"
                checked={formData.agree}
                onCheckedChange={(checked) => setFormData({ ...formData, agree: checked as boolean })}
                className="mt-1"
              />
              <label htmlFor="agree" className="text-sm leading-relaxed text-muted-foreground">
                {CONTACT_MODAL_TEXT.consentPrefix}{' '}
                <Link to="/privacy" className="text-foreground underline underline-offset-4 hover:text-primary">
                  {CONTACT_MODAL_TEXT.consentLink}
                </Link>{' '}
                {CONTACT_MODAL_TEXT.consentSuffix}
              </label>
            </div>
            <Button type="submit" disabled={!formData.agree} className="h-12 w-full">
              {CONTACT_MODAL_TEXT.submit}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
