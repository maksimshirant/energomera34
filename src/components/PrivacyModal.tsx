import React from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import PrivacyPolicyBody from '@/components/PrivacyPolicyBody';
import { PRIVACY_POLICY_TEXT } from '@/lib/privacyPolicy';
import { MODAL_SHELL_CLASSNAME } from '@/components/modalShell';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        showCloseButton={false}
        className={`${MODAL_SHELL_CLASSNAME} top-2 translate-y-0 sm:top-4 sm:translate-y-0 md:top-1/2 md:-translate-y-1/2`}
      >
        <div className="relative flex h-[calc(100dvh-1rem)] min-h-0 flex-col overflow-hidden bg-[linear-gradient(180deg,#ffffff,#f8fbfe)] px-4 pb-4 pt-4 sm:h-[calc(100dvh-2rem)] sm:px-5 sm:pb-5 sm:pt-5 md:h-[min(720px,calc(100dvh-4rem))] md:px-7 md:pb-6 md:pt-6">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 z-10 rounded-full border border-slate-200 bg-white p-2 text-slate-600 shadow-sm transition-colors hover:bg-slate-50 sm:right-4 sm:top-4"
            aria-label="Закрыть политику конфиденциальности"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          <DialogHeader className="shrink-0 pr-10 text-left sm:pr-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700/70 sm:text-[11px] sm:tracking-[0.24em]">
              Политика конфиденциальности
            </p>
            <DialogTitle className="mt-1.5 text-left text-lg font-semibold leading-tight tracking-tight text-slate-900 sm:mt-2 sm:text-[1.55rem] md:text-[1.8rem]">
              {PRIVACY_POLICY_TEXT.title}
            </DialogTitle>
          </DialogHeader>

          <div className="mt-3 min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1 sm:mt-4">
            <PrivacyPolicyBody compact />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyModal;
