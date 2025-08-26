// Import type ReportHandler từ thư viện web-vitals
import { ReportHandler } from 'web-vitals';

// Hàm báo cáo các chỉ số Web Vitals
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  // Kiểm tra callback có tồn tại và là function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Import động các hàm đo Web Vitals
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Đo Cumulative Layout Shift (CLS)
      getCLS(onPerfEntry);
      // Đo First Input Delay (FID) 
      getFID(onPerfEntry);
      // Đo First Contentful Paint (FCP)
      getFCP(onPerfEntry);
      // Đo Largest Contentful Paint (LCP)
      getLCP(onPerfEntry);
      // Đo Time to First Byte (TTFB)
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
