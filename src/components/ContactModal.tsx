import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { MODAL_SHELL_CLASSNAME } from '@/components/modalShell';
import { sendForm } from '@/api/forms';
import { PLACEHOLDERS } from '@/lib/placeholders';

const CONTACT_MODAL_TEXT = {
  title: 'Оставьте заявку',
  description:
    'Кратко опишите объект и задачу — подготовим понятное решение и перезвоним в кратчайшие сроки.',
  placeholders: {
    name: 'Введите имя',
    phone: 'Введите номер телефона',
    message: 'Ваше сообщение',
  },
  consentPrefix: 'Я ознакомлен(-на) и согласен(-на) с',
  consentLink: 'политикой конфиденциальности',
  consentSuffix: 'и даю своё согласие на обработку персональных данных.',
  submit: 'Отправить',
  submitLoading: 'Отправляем заявку...',
  success: 'Ваша заявка успешно отправлена, мы вскоре свяжемся с вами!',
  messageFallback: 'Без дополнительного комментария',
  nameError: 'Укажите имя',
  phoneError: 'Введите номер в формате +7 (999) 999-99-99',
  phoneTitle: 'Формат: +7 (999) 999-99-99',
  fallbackError: 'Ой, кажется что-то пошло не так. Попробуйте повторить позже.',
} as const;

const RU_PHONE_MATRIX = '+7 (___) ___-__-__';
const RU_PHONE_REGEX = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

const isPhoneValid = (value: string) => RU_PHONE_REGEX.test(value);

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPrivacyPolicy: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onOpenPrivacyPolicy }) => {
  const phoneKeyCodeRef = useRef<number | null>(null);
  const successTimeoutRef = useRef<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    agree: false,
  });
  const [hasSubmitAttempted, setHasSubmitAttempted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  useEffect(() => {
    if (!isOpen) {
      if (successTimeoutRef.current) {
        window.clearTimeout(successTimeoutRef.current);
        successTimeoutRef.current = null;
      }
      setHasSubmitAttempted(false);
      setIsSubmitting(false);
      setSubmitState(null);
      setFormData({
        name: '',
        phone: '',
        message: '',
        agree: false,
      });
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (successTimeoutRef.current) {
        window.clearTimeout(successTimeoutRef.current);
      }
    };
  }, []);

  const applyPhoneMask = (
    input: HTMLInputElement,
    eventType: 'input' | 'focus' | 'blur' | 'keydown',
    keyCode?: number,
    preventDefault?: () => void,
  ) => {
    const position = input.selectionStart ?? input.value.length;

    if (position < 3 && eventType === 'keydown') {
      preventDefault?.();
    }

    let index = 0;
    const def = RU_PHONE_MATRIX.replace(/\D/g, '');
    const value = input.value.replace(/\D/g, '');

    let nextValue = RU_PHONE_MATRIX.replace(/[_\d]/g, (char) => {
      return index < value.length ? value.charAt(index++) || def.charAt(index) : char;
    });

    index = nextValue.indexOf('_');

    if (index !== -1) {
      if (index < 5) {
        index = 3;
      }
      nextValue = nextValue.slice(0, index);
    }

    let reg = RU_PHONE_MATRIX.slice(0, input.value.length)
      .replace(/_+/g, (char) => `\\d{1,${char.length}}`)
      .replace(/[+()]/g, '\\$&');

    reg = `^${reg}$`;

    if (!new RegExp(reg).test(input.value) || input.value.length < 5 || (!!keyCode && keyCode > 47 && keyCode < 58)) {
      input.value = nextValue;
    }

    if (eventType === 'blur' && input.value.length < 5) {
      input.value = '';
    }

    setFormData((current) => ({
      ...current,
      phone: input.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setHasSubmitAttempted(true);
    setSubmitState(null);

    if (!formData.name.trim() || !isPhoneValid(formData.phone)) {
      return;
    }

    const payload = {
      name: formData.name.trim(),
      phone: formData.phone,
      message: formData.message.trim() || CONTACT_MODAL_TEXT.messageFallback,
      consentToPrivacy: formData.agree,
      pageUrl: typeof window !== 'undefined' ? window.location.href : PLACEHOLDERS.website,
      submittedAt: new Date().toISOString(),
      source: 'contact-modal',
    };

    setIsSubmitting(true);

    try {
      const result = await sendForm(payload);

      if (!result.ok) {
        setSubmitState({
          type: 'error',
          message: CONTACT_MODAL_TEXT.fallbackError,
        });
        return;
      }

      setSubmitState({
        type: 'success',
        message: CONTACT_MODAL_TEXT.success,
      });

      successTimeoutRef.current = window.setTimeout(() => {
        onClose();
      }, 3000);

      setFormData({
        name: '',
        phone: '',
        message: '',
        agree: false,
      });
      setHasSubmitAttempted(false);
    } catch {
      setSubmitState({
        type: 'error',
        message: CONTACT_MODAL_TEXT.fallbackError,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneChange = (value: string) => {
    setFormData((current) => ({
      ...current,
      phone: value,
    }));
  };

  const nameHasError = hasSubmitAttempted && !formData.name.trim();
  const phoneHasError = hasSubmitAttempted && !isPhoneValid(formData.phone);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        showCloseButton={false}
        className={`${MODAL_SHELL_CLASSNAME} max-h-none md:h-auto md:max-h-none`}
      >
        <div className="relative flex flex-col bg-[linear-gradient(180deg,#ffffff,#f8fbfe)] px-4 pb-4 pt-5 md:px-7 md:pb-6 md:pt-6">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-white/80 p-2 transition-colors hover:bg-secondary"
            aria-label="Закрыть окно"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>

          <DialogHeader className="pr-10 text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700/70">Связаться с нами</p>
            <DialogTitle className="mt-2 text-left text-2xl font-semibold tracking-tight text-slate-900 md:text-[2rem]">
              {CONTACT_MODAL_TEXT.title}
            </DialogTitle>
            <p className="mt-2 max-w-md text-[13px] leading-5 text-slate-600 md:text-sm md:leading-6">
              {CONTACT_MODAL_TEXT.description}
            </p>
          </DialogHeader>

          {submitState?.type === 'success' ? (
            <div className="flex min-h-[320px] flex-1 items-center justify-center py-6">
              <p className="max-w-md text-center text-2xl font-semibold leading-9 text-slate-900 md:text-3xl md:leading-[1.35]">
                {submitState.message}
              </p>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-2.5">
            <div className="space-y-0.5">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Имя</label>
              <Input
                placeholder={CONTACT_MODAL_TEXT.placeholders.name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`h-10 rounded-none border-x-0 border-t-0 border-b bg-transparent px-0 text-sm shadow-none focus-visible:ring-0 ${nameHasError ? 'border-destructive' : 'border-slate-200'}`}
                aria-invalid={nameHasError}
              />
              {nameHasError ? <p className="text-[11px] leading-4 text-destructive">{CONTACT_MODAL_TEXT.nameError}</p> : null}
            </div>

            <div className="space-y-0.5">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Телефон</label>
              <Input
                placeholder={CONTACT_MODAL_TEXT.placeholders.phone}
                value={formData.phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                onInput={(e) => applyPhoneMask(e.currentTarget, 'input', phoneKeyCodeRef.current ?? undefined)}
                onFocus={(e) => applyPhoneMask(e.currentTarget, 'focus')}
                onBlur={(e) => applyPhoneMask(e.currentTarget, 'blur')}
                onKeyDown={(e) => {
                  phoneKeyCodeRef.current = e.keyCode;
                  applyPhoneMask(e.currentTarget, 'keydown', e.keyCode, e.preventDefault);
                }}
                inputMode="tel"
                autoComplete="tel"
                maxLength={18}
                title={CONTACT_MODAL_TEXT.phoneTitle}
                className={`h-10 rounded-none border-x-0 border-t-0 border-b bg-transparent px-0 text-sm shadow-none focus-visible:ring-0 ${phoneHasError ? 'border-destructive' : 'border-slate-200'}`}
                aria-invalid={phoneHasError}
              />
              {phoneHasError ? <p className="text-[11px] leading-4 text-destructive">{CONTACT_MODAL_TEXT.phoneError}</p> : null}
            </div>

            <div className="space-y-0.5">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Сообщение</label>
              <Textarea
                placeholder={CONTACT_MODAL_TEXT.placeholders.message}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[72px] resize-none rounded-none border-x-0 border-t-0 border-b border-slate-200 bg-transparent px-0 py-2 text-sm shadow-none focus-visible:ring-0 md:min-h-[88px]"
              />
            </div>

            <div className="flex items-start gap-2.5 pt-0.5">
              <Checkbox
                id="agree"
                checked={formData.agree}
                onCheckedChange={(checked) => setFormData({ ...formData, agree: checked as boolean })}
                className="mt-1 border-slate-300 data-[state=checked]:border-sky-600 data-[state=checked]:bg-sky-600 data-[state=checked]:text-white"
              />
              <label htmlFor="agree" className="text-[11px] leading-[1.35] text-slate-600 md:text-xs md:leading-5">
                {CONTACT_MODAL_TEXT.consentPrefix}{' '}
                <button
                  type="button"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    onOpenPrivacyPolicy();
                  }}
                  className="text-slate-900 underline underline-offset-4 hover:text-sky-700"
                >
                  {CONTACT_MODAL_TEXT.consentLink}
                </button>{' '}
                {CONTACT_MODAL_TEXT.consentSuffix}
              </label>
            </div>

            <div className="space-y-2 pt-1">
              <div className="min-h-5">
                {submitState?.type === 'error' ? (
                  <p className="text-sm text-destructive">{submitState.message}</p>
                ) : null}
              </div>
              <Button
                type="submit"
                disabled={!formData.agree || isSubmitting}
                className="h-10 w-full rounded-full px-8 text-sm font-semibold shadow-[0_18px_30px_-18px_rgba(2,132,199,0.8)]"
              >
                {isSubmitting ? CONTACT_MODAL_TEXT.submitLoading : CONTACT_MODAL_TEXT.submit}
              </Button>
            </div>
          </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
