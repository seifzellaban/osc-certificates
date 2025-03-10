'use client';
import html2canvas from 'html2canvas'; // Ensure html2canvas is installed
import { useRef, useState } from 'react';

const CertificateComponent = () => {
  const [recipientName, setRecipientName] = useState('[Recipient Name]');
  const [currentDate, setCurrentDate] = useState('[Current Date]');
  const certificateRef = useRef(null);

  // Function to handle image conversion
  const handleConvertToImage = () => {
    const certificateElement = certificateRef.current.querySelector('.certificate');

    if (!certificateElement) {
      console.error('Certificate element not found.');
      return;
    }

    html2canvas(certificateElement, {
      scale: 3, // Higher quality
      useCORS: true,
      allowTaint: true,
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = `${recipientName.replace(/\s+/g, '-')}-certificate.png`;
        link.href = imgData;
        link.click();
      })
      .catch((error) => {
        console.error('Error converting to image:', error);
      });
  };

  return (
    <div className="flex flex-col items-center p-4 w-full">
      {/* Controls */}
      <div className="bg-gray-100 p-4 rounded mb-4 w-full max-w-lg">
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">Recipient Name:</label>
          <input
            type="text"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">Date:</label>
          <input
            type="text"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          onClick={handleConvertToImage}
          className="bg-blue-600 text-white p-2 rounded mt-2"
        >
          Convert to Image
        </button>
      </div>

      {/* Certificate with original HTML/CSS */}
      <div className="w-full overflow-auto" ref={certificateRef}>
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap');

                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                .cert-body {
                    background-color: #000000;
                    color: #D4AF37;
                    font-family: 'Cormorant Garamond', serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    padding: 20px;
                }

                .certificate {
                    position: relative;
                    width: 1000px;
                    max-width: 100%;
                    background-color: #0a0a0a;
                    border: 8px double #D4AF37;
                    padding: 50px;
                    box-shadow: 0 0 30px rgba(212, 175, 55, 0.2);
                    overflow: hidden;
                }

                /* Eerie texture background */
                .certificate::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='%23D4AF37' fill-opacity='0.07' fill-rule='evenodd'/%3E%3C/svg%3E");
                    opacity: 0.5;
                    z-index: 0;
                }

                /* Eerie corner decorations */
                .corner {
                    position: absolute;
                    width: 100px;
                    height: 100px;
                    border: 2px solid #D4AF37;
                    opacity: 0.5;
                }

                .top-left {
                    top: 20px;
                    left: 20px;
                    border-right: none;
                    border-bottom: none;
                }

                .top-right {
                    top: 20px;
                    right: 20px;
                    border-left: none;
                    border-bottom: none;
                }

                .bottom-left {
                    bottom: 20px;
                    left: 20px;
                    border-right: none;
                    border-top: none;
                }

                .bottom-right {
                    bottom: 20px;
                    right: 20px;
                    border-left: none;
                    border-top: none;
                }

                .content {
                    position: relative;
                    z-index: 1;
                }

                .header {
                    text-align: center;
                    margin-bottom: 40px;
                }

                .title {
                    font-family: 'Cinzel', serif;
                    font-size: 42px;
                    font-weight: 700;
                    color: #D4AF37;
                    margin-bottom: 10px;
                    text-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
                    letter-spacing: 2px;
                }

                .subtitle {
                    font-size: 18px;
                    color: #B8860B;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                }

                .divider {
                    width: 200px;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #D4AF37, transparent);
                    margin: 20px auto;
                }

                .recipient-section {
                    text-align: center;
                    margin-bottom: 40px;
                }

                .presented-to {
                    font-size: 20px;
                    color: #B8860B;
                    margin-bottom: 15px;
                }

                .recipient-name {
                    font-family: 'Cinzel', serif;
                    font-size: 36px;
                    font-weight: 700;
                    color: #D4AF37;
                    margin-bottom: 30px;
                    text-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
                    letter-spacing: 1px;
                }

                .message {
                    text-align: center;
                    font-size: 20px;
                    line-height: 1.6;
                    margin-bottom: 40px;
                    color: #D4AF37;
                }

                .encouragement {
                    text-align: center;
                    font-style: italic;
                    font-size: 22px;
                    color: #B8860B;
                    margin-bottom: 50px;
                }

                .signature-section {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 60px;
                }

                .date, .signature {
                    text-align: center;
                    width: 200px;
                }

                .signature-line {
                    width: 100%;
                    height: 1px;
                    background-color: #D4AF37;
                    margin-bottom: 10px;
                }

                .signature-name {
                    font-weight: 600;
                    font-size: 18px;
                    color: #D4AF37;
                }

                .signature-title {
                    font-size: 16px;
                    color: #B8860B;
                }

                @media print {
                    .cert-body {
                        background-color: #0a0a0a !important;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }

                    .certificate {
                        border: 8px double #D4AF37 !important;
                        box-shadow: none;
                    }
                }
              </style>

              <div class="cert-body">
                <div class="certificate">
                    <!-- Corner decorations for eerie effect -->
                    <div class="corner top-left"></div>
                    <div class="corner top-right"></div>
                    <div class="corner bottom-left"></div>
                    <div class="corner bottom-right"></div>

                    <div class="content">
                        <div class="header">
                            <h1 class="title">Certificate of Appreciation</h1>
                            <div class="divider"></div>
                        </div>

                        <div class="recipient-section">
                            <p class="presented-to">This Certificate is Proudly Presented to</p>
                            <h2 class="recipient-name">${recipientName}</h2>
                        </div>

                        <div class="message">
                            For your outstanding dedication and exceptional performance that has not gone unnoticed.
                            While you were so close to being recognized as one of our best members this month,
                            your commitment and hard work are truly commendable.
                        </div>

                        <div class="encouragement">
                            We encourage you to continue your excellent work and wish you the best of luck
                            for next month's awards. Your contributions are valuable to our team!
                        </div>

                        <div class="signature-section">
                            <div class="signature">
                                <div class="signature-line"></div>
                                <p class="signature-name">Seif Zakaria</p>
                                <p class="signature-title">Head of HR</p>
                            </div>

                            <div class="date">
                                <div class="signature-line"></div>
                                <p class="signature-name">Date</p>
                                <p class="signature-title">${currentDate}</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            `,
          }}
        />
      </div>
    </div>
  );
};

export default CertificateComponent;
