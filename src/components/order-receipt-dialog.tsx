
'use client';
import { useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Download } from 'lucide-react';
import type { CartItem, Translations } from '@/lib/types';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface OrderReceiptDialogProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  total: number;
  dictionary: Translations['cart'];
  restaurantName: string;
  address: string;
  phone: string;
}

export function OrderReceiptDialog({ isOpen, onClose, cart, total, dictionary, restaurantName, address, phone }: OrderReceiptDialogProps) {
  const receiptRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = () => {
    const input = receiptRef.current;
    if (input) {
      html2canvas(input, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a6');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('qmenu-receipt.pdf');
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-sm p-0">
        <DialogHeader className="p-4 pb-0">
            <DialogTitle>Order Receipt</DialogTitle>
        </DialogHeader>
        <div ref={receiptRef} className="bg-white text-black p-6 font-mono">
            <div className="text-center">
                <h2 className="text-xl font-bold">{restaurantName}</h2>
                <p className="text-xs">{new Date().toLocaleString()}</p>
            </div>
            <div className="border-t border-dashed border-black my-4"></div>
            <div>
            {cart.map(item => (
                <div key={item.id} className="text-sm mb-2">
                    <div className="flex justify-between">
                        <span>{item.quantity}x {item.menuItem.name}</span>
                        <span>{item.totalPrice.toFixed(2)}</span>
                    </div>
                    {item.selectedSize && (
                        <p className="text-xs pl-4 capitalize text-gray-600">  - {item.selectedSize}</p>
                    )}
                    {item.selectedAddOns && Object.keys(item.selectedAddOns).length > 0 && (
                        <ul className="text-xs pl-4 text-gray-600">
                        {Object.keys(item.selectedAddOns).map(addOn => (
                            <li key={addOn}>  - {addOn}</li>
                        ))}
                        </ul>
                    )}
                </div>
            ))}
            </div>
            <div className="border-t border-dashed border-black my-4"></div>
            <div className="flex justify-between font-bold text-lg">
                <span>{dictionary.total}</span>
                <span>{total.toFixed(2)} {dictionary.currency}</span>
            </div>
            <div className="border-t border-dashed border-black my-4"></div>
            <div className="text-center mt-6 text-xs">
                <p>Thank you for your order!</p>
                <p className='mt-2'>{address}</p>
                <p>{phone}</p>
                <p className='font-bold mt-4'>Created by QMenu</p>
            </div>
        </div>
        <DialogFooter className='p-4 border-t bg-background'>
            <Button onClick={handleDownloadPdf} className="w-full" size="lg">
                <Download className="me-2" /> Download PDF
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
