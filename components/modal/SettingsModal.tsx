'use client';

import { Dialog, DialogHeader, DialogContent } from '@/components/ui/dialog';
import { ModeToggle } from '@/components/mode-toggle';
import { Label } from '../ui/label';
import { useSettings } from '@/hooks/useSetting';

export const SettingsModal = () => {
  const settings = useSettings();

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogHeader className='border-b pb-3'>
          <h2 className='text-lg font-medium'>My settings</h2>
        </DialogHeader>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-x-1'>
            <Label>Appearance</Label>
            <span className='text-[0.8rem] text-muted-foreground'>
              Customize how Notion looks on your device
            </span>
          </div>
          <ModeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
};
