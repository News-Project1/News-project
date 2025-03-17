import React, { useEffect,useState } from 'react';
import axios from 'axios';


const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});




  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    if (!validateInputs()) {
      setIsProcessing(false);
      return;
    }
    
    
    try {
      // إرسال البيانات إلى الخادم
      const response = await axios.post('http://localhost:8000/api/payment', {
        // const response = await axios.post('/api/payment', {
          cardNumber,
          cardHolder,
          expiryDate,
          cvv,
      // }, {
        //   headers: {
          //    'Authorization': `Bearer ${token}`, // إرسال التوكن مع الطلب
          //   },
        },
      {
        withCredentials: true // السماح بإرسال الكوكيز
      }

    );

      if (response.data.success) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Error during payment:", error);
    } finally {
      setIsProcessing(false);
    }
  };


  const validateInputs = () => {
    let validationErrors = {};
  
    if (!cardHolder.trim()) {
      validationErrors.cardHolder = "يرجى إدخال اسم حامل البطاقة.";
    }
  
    if (!cardNumber || !/^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber)) {
      validationErrors.cardNumber = "يرجى إدخال رقم بطاقة صالح (مثال: 1234 5678 9012 3456).";
    }
  
    if (!expiryDate || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
      validationErrors.expiryDate = "يرجى إدخال تاريخ انتهاء صالح (MM/YY).";
    }
  
    if (!cvv || !/^\d{3}$/.test(cvv)) {
      validationErrors.cvv = "يرجى إدخال رمز أمان (CVV) صالح.";
    }
  
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0; // إرجاع `true` إذا لم تكن هناك أخطاء
  };
  
  

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  
  
  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
          <div className="mb-4 flex justify-center">
            <div className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">تمت عملية الدفع بنجاح!</h2>
          <p className="text-gray-600 mb-6">شكراً لك، تم إتمام عملية الدفع بنجاح.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white py-2 px-4 rounded-md w-full hover:bg-blue-700"
          >
            العودة
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4" dir="rtl">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">صفحة الدفع</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardHolder">
              اسم حامل البطاقة
            </label>
            <input
              type="text"
              id="cardHolder"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="الاسم الكامل كما هو مكتوب على البطاقة"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              required
              />
              {errors.cardHolder && <p className="text-red-500 text-sm mt-1">{errors.cardHolder}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
              رقم البطاقة
            </label>
            <input
              type="text"
              id="cardNumber"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="XXXX XXXX XXXX XXXX"
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
              maxLength={19}
              required
              />
              {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
          </div>
          
          <div className="flex mb-4 gap-4">
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryDate">
                تاريخ الانتهاء
              </label>
              <input
                type="text"
                id="expiryDate"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                maxLength={5}
                required
                />
                {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
                رمز الأمان CVV
              </label>
              <input
                type="text"
                id="cvv"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="123"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                maxLength={3}
                required
                />
                {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              طريقة الدفع
            </label>
            <div className="flex gap-3">
              <div className="p-2 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer">
                <span className="text-2xl">💳</span>
              </div>
              <div className="p-2 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer">
                <span className="text-2xl">🏦</span>
              </div>
              <div className="p-2 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer">
                <span className="text-2xl">📱</span>
              </div>
            </div>
          </div>
          
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-4 rounded-md w-full hover:bg-blue-700 flex items-center justify-center"
            disabled={isProcessing}
            >
            {isProcessing ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                جاري المعالجة...
              </>
            ) : (
              'إتمام الدفع'
            )}
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-600">
          المعاملات مؤمنة ومشفرة 🔒
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;



// if (!cardNumber || !/^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber)) {
//   alert("يرجى إدخال رقم بطاقة صالح.");
//   setIsProcessing(false);
//   return;
// }

// if (!expiryDate || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
//   alert("يرجى إدخال تاريخ انتهاء صالح (MM/YY).");
//   setIsProcessing(false);
//   return;
// }

// if (!cvv || !/^\d{3}$/.test(cvv)) {
//   alert("يرجى إدخال رمز الأمان (CVV) صالح.");
//   setIsProcessing(false);
//   return;
// }