export interface WalletPassData {
  customerName: string;
  cardNumber: string;
  points: number;
  storeName: string;
  cardColor: string;
  textColor: string;
}

export const generateAppleWalletPass = (data: WalletPassData): void => {
  const passData = {
    formatVersion: 1,
    passTypeIdentifier: 'pass.com.servly.loyalty',
    serialNumber: data.cardNumber,
    teamIdentifier: 'SERVLY',
    organizationName: data.storeName,
    description: `${data.storeName} - بطاقة الولاء`,
    logoText: data.storeName,
    foregroundColor: data.textColor,
    backgroundColor: data.cardColor,
    storeCard: {
      headerFields: [
        {
          key: 'points',
          label: 'النقاط',
          value: data.points.toString()
        }
      ],
      primaryFields: [
        {
          key: 'name',
          label: 'اسم العميل',
          value: data.customerName
        }
      ],
      secondaryFields: [
        {
          key: 'card',
          label: 'رقم البطاقة',
          value: data.cardNumber
        }
      ],
      backFields: [
        {
          key: 'terms',
          label: 'الشروط والأحكام',
          value: 'هذه البطاقة صالحة للاستخدام في جميع فروع ' + data.storeName
        },
        {
          key: 'contact',
          label: 'للاستفسار',
          value: 'info@servly.com'
        }
      ]
    },
    barcode: {
      message: data.cardNumber,
      format: 'PKBarcodeFormatQR',
      messageEncoding: 'iso-8859-1'
    }
  };

  const passJson = JSON.stringify(passData, null, 2);
  const blob = new Blob([passJson], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${data.cardNumber}.pkpass.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  alert('تم تنزيل ملف البطاقة. يمكنك إضافتها إلى Apple Wallet من خلال مشاركة الملف مع جهاز iPhone/iPad');
};

export const shareToAppleWallet = async (data: WalletPassData): Promise<void> => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: `${data.storeName} - بطاقة الولاء`,
        text: `بطاقة الولاء الخاصة بـ ${data.customerName}\nالنقاط: ${data.points}\nرقم البطاقة: ${data.cardNumber}`,
        url: window.location.href
      });
    } catch (error) {
      console.error('Error sharing:', error);
      generateAppleWalletPass(data);
    }
  } else {
    generateAppleWalletPass(data);
  }
};
