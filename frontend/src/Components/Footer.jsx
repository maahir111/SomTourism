import { NavLink } from "react-router-dom";
function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-10 px-5 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <h2 className="text-3xl font-bold text-[#FF8126] flex items-center">
                SomTourist
            </h2>
            <p className="mt-4 text-gray-400">
              Tourista is a dynamic travel website designed to cater to the diverse needs of travelers across Asia, Europe, and America.
            </p>
            <p className="mt-5 font-semibold">Follow Us</p>
            <div className="flex items-center gap-2 mt-3">
                <a href="https://www.facebook.com"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2.4043H15C13.6739 2.4043 12.4021 2.93108 11.4645 3.86876C10.5268 4.80644 10 6.07821 10 7.4043V10.4043H7V14.4043H10V22.4043H14V14.4043H17L18 10.4043H14V7.4043C14 7.13908 14.1054 6.88473 14.2929 6.69719C14.4804 6.50965 14.7348 6.4043 15 6.4043H18V2.4043Z" stroke="#FF8126" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></a>
                <a href="https://www.instagram.com"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 2.4043H7C4.23858 2.4043 2 4.64287 2 7.4043V17.4043C2 20.1657 4.23858 22.4043 7 22.4043H17C19.7614 22.4043 22 20.1657 22 17.4043V7.4043C22 4.64287 19.7614 2.4043 17 2.4043Z" stroke="#FF8126" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.9997 11.7746C16.1231 12.6068 15.981 13.4568 15.5935 14.2036C15.206 14.9504 14.5929 15.556 13.8413 15.9343C13.0898 16.3125 12.2382 16.4442 11.4075 16.3105C10.5768 16.1769 9.80947 15.7847 9.21455 15.1898C8.61962 14.5948 8.22744 13.8275 8.09377 12.9968C7.96011 12.1662 8.09177 11.3145 8.47003 10.563C8.84829 9.81145 9.45389 9.19834 10.2007 8.81084C10.9475 8.42334 11.7975 8.28119 12.6297 8.4046C13.4786 8.53048 14.2646 8.92606 14.8714 9.5329C15.4782 10.1397 15.8738 10.9257 15.9997 11.7746Z" stroke="#FF8126" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 6.9043H17.5108" stroke="#FF8126" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></a>
                <a href="https://x.com/?lang=en"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_12368)">
<path d="M4 4.4043L15.733 20.4043H20L8.267 4.4043H4Z" stroke="#FF8126" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 20.4043L10.768 13.6363M13.228 11.1763L20 4.4043" stroke="#FF8126" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_12368">
<rect width="24" height="24" fill="white" transform="translate(0 0.404297)"/>
</clipPath>
</defs>
                </svg></a>
                <a href="https://youtube.com/"><svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1747 8.4293C28.0263 7.83606 27.7238 7.29251 27.2981 6.85355C26.8723 6.4146 26.3382 6.09578 25.7497 5.9293C23.5997 5.4043 14.9997 5.4043 14.9997 5.4043C14.9997 5.4043 6.39974 5.4043 4.24974 5.9793C3.6613 6.14578 3.12721 6.4646 2.70142 6.90355C2.27563 7.34251 1.97322 7.88606 1.82474 8.4793C1.43126 10.6612 1.23878 12.8747 1.24974 15.0918C1.23571 17.3256 1.4282 19.5559 1.82474 21.7543C1.98844 22.3291 2.29762 22.852 2.72242 23.2724C3.14721 23.6928 3.67326 23.9966 4.24974 24.1543C6.39974 24.7293 14.9997 24.7293 14.9997 24.7293C14.9997 24.7293 23.5997 24.7293 25.7497 24.1543C26.3382 23.9878 26.8723 23.669 27.2981 23.23C27.7238 22.7911 28.0263 22.2475 28.1747 21.6543C28.5652 19.4888 28.7576 17.2922 28.7497 15.0918C28.7638 12.858 28.5713 10.6277 28.1747 8.4293Z" stroke="#FF8126" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.1875 19.1789L19.375 15.0914L12.1875 11.0039V19.1789Z" stroke="#FF8126" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></a>

            </div>
            
          </div>
          
          {/* About Us Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About us</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/upcoming" className="hover:text-white">Our story</a></li>
              <li><a href="/upcoming" className="hover:text-white">Travel Blog & Trips</a></li>
              <li><a href="/upcoming" className="hover:text-white">Working with us</a></li>
              <li><a href="/upcoming" className="hover:text-white">Terms & Condition</a></li>
              <li><a href="/upcoming" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
  
          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/upcoming" className="hover:text-white">Customer support</a></li>
              <li><a href="/upcoming" className="hover:text-white">Privacy & Policy</a></li>
              <li><a href="/contact" className="hover:text-white">Contact us</a></li>
            </ul>
          </div>
  
          {/* Payment Security */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Pay Safely With Us</h3>
            <p className="text-gray-400 mb-3">
              The payment is encrypted and transmitted securely with an SSL protocol.
            </p>
            <div className="flex mt-5 space-x-4 text-white text-2xl">
                <svg width="159" height="24" viewBox="0 0 159 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_12960)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.6875 22.133C11.7601 19.1019 21.684 16.3546 34.8273 19.1055L34.9651 15.7718C21.0983 14.2578 11.1482 18.6743 4.6875 21.8043V22.133Z" fill="#E7A83A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0813 13.3446L15.1466 3.23741H17.8818L14.8162 13.3446H12.0813ZM10.8586 3.24017L8.39832 7.52462C7.77201 8.64674 7.40592 9.21352 7.22987 9.92264H7.19241C7.23598 9.02368 7.1106 7.92008 7.09877 7.29633L6.82711 3.24017H2.2231L2.17578 3.51202C3.35862 3.51202 4.06005 4.10621 4.25305 5.32158L5.15043 13.3446H7.98393L13.7132 3.24017H10.8586ZM32.1283 13.3446L32.0528 11.8414L28.6375 11.8386L27.9391 13.3444H24.9697L30.3538 3.25653H33.9986L34.9104 13.3444L32.1283 13.3446ZM31.8147 7.38268C31.7843 6.63571 31.7589 5.62182 31.8097 5.00832H31.7693C31.6029 5.51004 30.8879 7.01679 30.5735 7.75784L29.5558 9.9733H31.9538L31.8147 7.38268ZM20.7531 13.6318C18.8221 13.6318 17.5407 13.0193 16.6258 12.4732L17.9287 10.4835C18.75 10.9428 19.3948 11.4729 20.8785 11.4729C21.3556 11.4729 21.8153 11.3489 22.0763 10.8969C22.4568 10.2394 21.9886 9.88577 20.9201 9.28094L20.3925 8.93792C18.8087 7.85562 18.1237 6.82773 18.8692 5.03336C19.3463 3.88561 20.6047 3.01562 22.6806 3.01562C24.1122 3.01562 25.4543 3.63484 26.2364 4.23987L24.7385 5.99659C23.9754 5.37934 23.3427 5.06707 22.6188 5.06707C22.0416 5.06707 21.6032 5.28964 21.4518 5.58988C21.1669 6.1543 21.5438 6.53911 22.3762 7.05582L23.0035 7.45483C24.9264 8.66764 25.3845 9.93939 24.9025 11.1283C24.0737 13.1749 22.4509 13.6318 20.7531 13.6318ZM35.6585 4.80073H35.4783V3.70502H35.8941C36.1586 3.70502 36.2937 3.79768 36.2937 4.02006C36.2937 4.21838 36.1717 4.30039 36.0076 4.31892L36.3146 4.80073H36.1109L35.8278 4.33233H35.6585V4.80073ZM35.8594 4.17875C35.9946 4.17875 36.1135 4.16555 36.1135 4.00665C36.1135 3.87437 35.9838 3.8584 35.8756 3.8584H35.6583V4.17875H35.8594ZM35.8541 5.22419C35.2853 5.22419 34.8804 4.79817 34.8804 4.23435C34.8804 3.63879 35.3301 3.2445 35.8541 3.2445C36.3731 3.2445 36.8228 3.63879 36.8228 4.23435C36.8228 4.82971 36.3731 5.22419 35.8541 5.22419ZM35.8541 3.41661C35.4255 3.41661 35.0921 3.75254 35.0921 4.23435C35.0921 4.68422 35.3833 5.05209 35.8541 5.05209C36.2775 5.05209 36.6111 4.71872 36.6111 4.23435C36.6111 3.75254 36.2775 3.41661 35.8541 3.41661Z" fill="#1D5B99"/>
</g>
<g clip-path="url(#clip1_1_12960)">
<path d="M74.4364 4.10352H70.8961C70.7789 4.10344 70.6655 4.14417 70.5764 4.21836C70.4873 4.29255 70.4283 4.39532 70.41 4.50816L68.9781 13.3564C68.9716 13.3975 68.9742 13.4394 68.9858 13.4794C68.9975 13.5194 69.0179 13.5564 69.0456 13.588C69.0734 13.6195 69.1078 13.6448 69.1466 13.6622C69.1853 13.6795 69.2275 13.6885 69.2701 13.6884H70.9603C71.0776 13.6885 71.191 13.6477 71.2801 13.5734C71.3693 13.4991 71.4282 13.3962 71.4464 13.2833L71.8326 10.8967C71.8507 10.7839 71.9096 10.6811 71.9986 10.6068C72.0876 10.5325 72.2009 10.4917 72.3181 10.4916H73.4389C75.771 10.4916 77.1169 9.39168 77.4684 7.21203C77.6268 6.25844 77.4751 5.50919 77.017 4.98446C76.5138 4.40826 75.6214 4.10352 74.4364 4.10352ZM74.8449 7.33514C74.6512 8.5733 73.6806 8.5733 72.7421 8.5733H72.2079L72.5827 6.26096C72.5936 6.19331 72.629 6.1317 72.6824 6.08721C72.7359 6.04272 72.8038 6.01828 72.8741 6.01827H73.119C73.7583 6.01827 74.3614 6.01827 74.673 6.37348C74.8588 6.58539 74.9158 6.90022 74.8449 7.33514ZM85.0191 7.29528H83.3237C83.2534 7.29529 83.1855 7.31973 83.132 7.36422C83.0786 7.40871 83.0432 7.47032 83.0323 7.53797L82.9572 8.00014L82.8387 7.83263C82.4716 7.31345 81.6532 7.13988 80.8363 7.13988C78.9629 7.13988 77.3628 8.52285 77.0512 10.4628C76.8891 11.4306 77.1195 12.3559 77.6827 13.0012C78.1993 13.5946 78.9386 13.8418 79.8181 13.8418C81.3276 13.8418 82.1647 12.8958 82.1647 12.8958L82.0891 13.3549C82.0823 13.396 82.0848 13.4379 82.0963 13.478C82.1079 13.518 82.1281 13.5551 82.1558 13.5868C82.1834 13.6184 82.2178 13.6438 82.2565 13.6613C82.2952 13.6788 82.3374 13.6878 82.38 13.6879H83.9071C84.0244 13.688 84.1378 13.6472 84.227 13.5729C84.3161 13.4986 84.3751 13.3957 84.3932 13.2828L85.3095 7.62728C85.3162 7.58632 85.3138 7.54442 85.3023 7.50448C85.2908 7.46454 85.2705 7.4275 85.2429 7.39594C85.2153 7.36437 85.181 7.33902 85.1423 7.32164C85.1037 7.30427 85.0616 7.29527 85.0191 7.29528ZM82.6559 10.5113C82.4923 11.4553 81.7236 12.089 80.7431 12.089C80.2508 12.089 79.8574 11.9351 79.6048 11.6435C79.3542 11.3539 79.259 10.9417 79.3387 10.4825C79.4914 9.54658 80.2731 8.89218 81.2386 8.89218C81.72 8.89218 82.1113 9.04808 82.3691 9.34224C82.6274 9.63941 82.7299 10.0542 82.6559 10.5113ZM94.0482 7.29528H92.3446C92.2642 7.29541 92.1851 7.31464 92.1141 7.3513C92.0431 7.38796 91.9824 7.44096 91.9372 7.50568L89.5875 10.8791L88.5915 7.63737C88.5609 7.5385 88.4985 7.45185 88.4135 7.39024C88.3284 7.32863 88.2253 7.29533 88.1194 7.29528H86.4452C86.3982 7.29516 86.3519 7.30598 86.3101 7.32684C86.2682 7.34771 86.2321 7.378 86.2047 7.41522C86.1773 7.45243 86.1594 7.49549 86.1526 7.5408C86.1457 7.58611 86.15 7.63236 86.1652 7.67571L88.0417 13.0431L86.2775 15.4705C86.2462 15.5135 86.2276 15.5641 86.2238 15.6168C86.22 15.6694 86.2311 15.7221 86.256 15.769C86.2808 15.8159 86.3184 15.8552 86.3647 15.8826C86.411 15.9101 86.4641 15.9246 86.5182 15.9246H88.2198C88.2992 15.9247 88.3775 15.906 88.4479 15.8701C88.5184 15.8343 88.5788 15.7823 88.6241 15.7187L94.2905 7.74686C94.3212 7.70373 94.3392 7.65323 94.3426 7.60083C94.3459 7.54843 94.3345 7.49614 94.3095 7.44961C94.2846 7.40309 94.247 7.36411 94.201 7.33691C94.1549 7.3097 94.1021 7.29531 94.0482 7.29528Z" fill="#253B80"/>
<path d="M99.6885 4.10402H96.1476C96.0305 4.10407 95.9173 4.14485 95.8282 4.21903C95.7392 4.29321 95.6803 4.39591 95.6621 4.50867L94.2302 13.3569C94.2235 13.3979 94.2261 13.4398 94.2376 13.4798C94.2492 13.5197 94.2695 13.5567 94.2971 13.5883C94.3248 13.6198 94.3591 13.6452 94.3978 13.6625C94.4365 13.6799 94.4785 13.6889 94.5211 13.6889H96.3381C96.4201 13.6888 96.4993 13.6602 96.5616 13.6082C96.6238 13.5562 96.665 13.4843 96.6777 13.4054L97.0841 10.8973C97.1022 10.7844 97.1611 10.6816 97.2501 10.6073C97.3391 10.533 97.4525 10.4922 97.5697 10.4921H98.6899C101.022 10.4921 102.368 9.39218 102.72 7.21254C102.879 6.25894 102.726 5.50969 102.268 4.98496C101.765 4.40877 100.873 4.10402 99.6885 4.10402ZM100.097 7.33565C99.9038 8.57381 98.9332 8.57381 97.9941 8.57381H97.4604L97.8357 6.26147C97.8465 6.19381 97.8817 6.13215 97.9351 6.08763C97.9885 6.04312 98.0564 6.01869 98.1267 6.01878H98.3715C99.0103 6.01878 99.6139 6.01878 99.9255 6.37398C100.111 6.58589 100.168 6.90073 100.097 7.33565ZM110.271 7.29579H108.576C108.506 7.2956 108.438 7.31999 108.385 7.36452C108.331 7.40906 108.296 7.47078 108.285 7.53848L108.21 8.00064L108.091 7.83313C107.724 7.31395 106.906 7.14039 106.089 7.14039C104.216 7.14039 102.616 8.52335 102.305 10.4633C102.143 11.4311 102.373 12.3564 102.936 13.0017C103.453 13.5951 104.192 13.8423 105.071 13.8423C106.581 13.8423 107.418 12.8963 107.418 12.8963L107.342 13.3554C107.335 13.3965 107.338 13.4386 107.349 13.4787C107.361 13.5188 107.381 13.556 107.409 13.5877C107.437 13.6193 107.471 13.6447 107.51 13.6621C107.549 13.6795 107.591 13.6885 107.634 13.6884H109.161C109.278 13.6883 109.391 13.6475 109.48 13.5732C109.569 13.4989 109.628 13.3961 109.646 13.2833L110.563 7.62778C110.57 7.58669 110.567 7.54472 110.555 7.50475C110.543 7.46477 110.523 7.42774 110.495 7.3962C110.467 7.36466 110.433 7.33936 110.394 7.32202C110.355 7.30469 110.313 7.29574 110.271 7.29579ZM107.907 10.5118C107.745 11.4558 106.975 12.0895 105.995 12.0895C105.503 12.0895 105.109 11.9356 104.856 11.644C104.606 11.3544 104.512 10.9422 104.59 10.483C104.744 9.54708 105.525 8.89268 106.49 8.89268C106.971 8.89268 107.363 9.04859 107.621 9.34274C107.88 9.63992 107.983 10.0547 107.907 10.5118ZM112.269 4.34671L110.816 13.3569C110.81 13.3979 110.812 13.4398 110.824 13.4798C110.835 13.5197 110.856 13.5567 110.883 13.5883C110.911 13.6198 110.945 13.6452 110.984 13.6625C111.022 13.6799 111.065 13.6889 111.107 13.6889H112.568C112.811 13.6889 113.017 13.5174 113.054 13.2838L114.487 4.43601C114.494 4.395 114.491 4.35307 114.48 4.3131C114.468 4.27314 114.448 4.23609 114.42 4.20449C114.392 4.1729 114.358 4.14751 114.319 4.13008C114.281 4.11265 114.239 4.10359 114.196 4.10352H112.56C112.49 4.10376 112.422 4.12836 112.369 4.17293C112.316 4.21749 112.28 4.27909 112.269 4.34671Z" fill="#179BD7"/>
<path d="M54.2746 15.4078L54.5454 13.7317L53.9423 13.718H51.0625L53.0638 1.35006C53.0698 1.31227 53.0894 1.27783 53.1193 1.25301C53.1491 1.22819 53.1871 1.21464 53.2263 1.21485H58.0821C59.6941 1.21485 60.8065 1.54179 61.3873 2.18711C61.6596 2.48984 61.8331 2.80619 61.9169 3.15433C62.0049 3.51962 62.0065 3.95605 61.9205 4.48835L61.9143 4.5272V4.86828L62.1866 5.01863C62.3945 5.12128 62.5813 5.26013 62.7379 5.42832C62.9709 5.68716 63.1215 6.01612 63.1852 6.40614C63.2509 6.80725 63.2292 7.28456 63.1215 7.82493C62.9973 8.44653 62.7964 8.98791 62.5252 9.4309C62.2858 9.82775 61.964 10.1715 61.5804 10.44C61.2201 10.6892 60.792 10.8784 60.308 10.9995C59.839 11.1186 59.3043 11.1787 58.7177 11.1787H58.3398C58.0696 11.1787 57.8072 11.2735 57.6011 11.4435C57.3954 11.6154 57.2589 11.8528 57.216 12.1136L57.1875 12.2644L56.7092 15.2186L56.6875 15.327C56.6818 15.3614 56.6719 15.3785 56.6574 15.3901C56.6434 15.4013 56.6259 15.4075 56.6077 15.4078H54.2746Z" fill="#253B80"/>
<path d="M62.4445 4.56641C62.43 4.65672 62.4134 4.74905 62.3948 4.84391C61.7544 8.04829 59.5637 9.15527 56.7657 9.15527H55.3411C54.9989 9.15527 54.7105 9.39745 54.6572 9.72642L53.9278 14.2351L53.7213 15.5131C53.713 15.5638 53.7162 15.6156 53.7305 15.665C53.7448 15.7144 53.7699 15.7602 53.8041 15.7992C53.8383 15.8383 53.8807 15.8696 53.9285 15.8911C53.9764 15.9126 54.0284 15.9238 54.0811 15.9238H56.6078C56.907 15.9238 57.1612 15.7119 57.2083 15.4243L57.2331 15.2991L57.7089 12.3566L57.7394 12.1952C57.786 11.9066 58.0407 11.6947 58.3399 11.6947H58.7178C61.1658 11.6947 63.0822 10.7259 63.6423 7.92266C63.8763 6.7516 63.7552 5.77379 63.1361 5.08609C62.9398 4.87335 62.7055 4.69725 62.4445 4.56641Z" fill="#179BD7"/>
<path d="M61.7756 4.30623C61.5711 4.24858 61.3631 4.20359 61.1528 4.17152C60.7373 4.10928 60.3174 4.07941 59.897 4.08221H56.0911C55.9463 4.0821 55.8062 4.1325 55.6961 4.2243C55.5861 4.31609 55.5134 4.44323 55.4911 4.58272L54.6815 9.58077L54.6582 9.72659C54.6834 9.56748 54.7662 9.42242 54.8917 9.31766C55.0171 9.2129 55.1769 9.15536 55.342 9.15544H56.7667C59.5646 9.15544 61.7554 8.04796 62.3958 4.84408C62.4149 4.74922 62.431 4.65689 62.4455 4.56658C62.2765 4.48021 62.1004 4.40781 61.919 4.35013C61.8714 4.33475 61.8236 4.32011 61.7756 4.30623Z" fill="#222D65"/>
<path d="M55.4905 4.58373C55.5125 4.4442 55.5852 4.317 55.6953 4.22525C55.8054 4.1335 55.9456 4.08329 56.0904 4.08373H59.8963C60.3472 4.08373 60.7681 4.11248 61.1522 4.17303C61.4121 4.21285 61.6684 4.2724 61.9188 4.35114C62.1078 4.41219 62.2833 4.48434 62.4453 4.56759C62.6358 3.38341 62.4438 2.57715 61.7868 1.84707C61.0626 1.04332 59.7555 0.699219 58.0829 0.699219H53.2272C52.8856 0.699219 52.5941 0.941402 52.5413 1.27087L50.5188 13.766C50.5094 13.824 50.513 13.8833 50.5293 13.9399C50.5457 13.9964 50.5744 14.0488 50.6135 14.0935C50.6526 14.1382 50.7012 14.1741 50.7559 14.1987C50.8106 14.2234 50.8701 14.2362 50.9303 14.2362H53.9282L54.6808 9.58178L55.4905 4.58373Z" fill="#253B80"/>
</g>
<g clip-path="url(#clip2_1_12960)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M142.774 17.1823C143.699 16.3377 144.439 15.3089 144.944 14.1619C145.448 13.0148 145.708 11.7749 145.706 10.5217C145.708 9.26844 145.449 8.02853 144.944 6.88151C144.439 5.73449 143.699 4.70567 142.774 3.86104C141.19 2.41585 139.09 1.53516 136.785 1.53516C131.859 1.53516 127.865 5.55851 127.865 10.5217C127.865 15.4847 131.859 19.5082 136.785 19.5082C139.09 19.5082 141.191 18.6275 142.774 17.1823Z" fill="#3A9BD9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M148.763 1.53516C146.458 1.53516 144.358 2.41585 142.775 3.86104C142.452 4.156 142.151 4.47399 141.874 4.81249H143.675C143.922 5.11463 144.149 5.4325 144.355 5.7641H141.194C141.004 6.07075 140.832 6.38852 140.68 6.71572H144.869C145.013 7.0254 145.139 7.34307 145.247 7.66717H140.302C140.198 7.97934 140.112 8.29697 140.043 8.61863H145.506C145.64 9.24414 145.707 9.88204 145.707 10.5217C145.707 11.5194 145.545 12.4793 145.247 13.3761H140.302C140.41 13.7002 140.536 14.018 140.68 14.3277H144.869C144.717 14.6549 144.545 14.9727 144.355 15.2793H141.194C141.4 15.6109 141.627 15.9287 141.874 16.2309H143.675C143.398 16.5696 143.097 16.8876 142.775 17.1825C144.358 18.6277 146.458 19.5084 148.763 19.5084C153.689 19.5084 157.683 15.4849 157.683 10.5219C157.683 5.55851 153.689 1.53516 148.763 1.53516Z" fill="#CC2131"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M156.494 15.5287C156.494 15.3683 156.623 15.2383 156.782 15.2383C156.942 15.2383 157.07 15.3683 157.07 15.5287C157.07 15.6887 156.942 15.8187 156.782 15.8187C156.706 15.8185 156.632 15.7878 156.578 15.7334C156.524 15.679 156.494 15.6053 156.494 15.5287ZM156.782 15.7489C156.903 15.7489 157.001 15.6506 157.001 15.5285C157.001 15.4064 156.903 15.3078 156.782 15.3078C156.661 15.3078 156.563 15.4064 156.563 15.5285C156.563 15.6506 156.661 15.7489 156.782 15.7489ZM156.743 15.6558H156.684V15.4005H156.791C156.814 15.4005 156.836 15.4012 156.856 15.4136C156.866 15.4208 156.874 15.4303 156.88 15.4415C156.885 15.4526 156.888 15.4649 156.888 15.4773C156.888 15.506 156.871 15.5331 156.844 15.5433L156.891 15.6557H156.825L156.787 15.5548H156.744L156.743 15.6558L156.744 15.5114H156.776C156.788 15.5114 156.801 15.5121 156.812 15.5062C156.817 15.5029 156.821 15.4985 156.823 15.4934C156.826 15.4883 156.827 15.4826 156.827 15.4769C156.827 15.4717 156.825 15.4667 156.823 15.4622C156.82 15.4578 156.817 15.4539 156.813 15.451C156.803 15.4448 156.786 15.4464 156.775 15.4464H156.744V15.6558H156.743Z" fill="#CC2131"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M154.609 12.4692C154.609 12.3089 154.738 12.1788 154.897 12.1788C155.056 12.1788 155.185 12.3089 155.185 12.4692C155.185 12.6295 155.056 12.7593 154.897 12.7593C154.738 12.7593 154.609 12.6294 154.609 12.4692ZM154.897 12.6895C155.018 12.6895 155.116 12.5908 155.116 12.469C155.116 12.347 155.018 12.2483 154.897 12.2483C154.776 12.2483 154.678 12.347 154.678 12.469C154.678 12.5908 154.776 12.6895 154.897 12.6895ZM154.858 12.5964H154.799V12.3414H154.906C154.928 12.3414 154.951 12.3417 154.97 12.3545C154.981 12.3616 154.989 12.3711 154.994 12.3821C155 12.3932 155.003 12.4055 155.003 12.4179C155.003 12.4469 154.986 12.4737 154.959 12.4839L155.006 12.5962H154.94L154.901 12.4953H154.858L154.858 12.5964L154.858 12.452H154.891C154.903 12.452 154.916 12.453 154.927 12.4471C154.931 12.4437 154.935 12.4393 154.938 12.4342C154.94 12.4291 154.942 12.4235 154.942 12.4177C154.942 12.4125 154.94 12.4075 154.938 12.4029C154.935 12.3983 154.932 12.3945 154.927 12.3916C154.917 12.3857 154.901 12.387 154.89 12.387H154.858V12.5964H154.858ZM135.672 12.7593H134.562L135.222 9.2569L133.703 12.7593H132.691L132.506 9.27698L131.844 12.7593H130.836L131.697 8.20328H133.429L133.521 11.0239L134.742 8.20328H136.548L135.672 12.7593ZM148.08 12.7138C147.776 12.7978 147.538 12.834 147.282 12.834C146.714 12.834 146.404 12.547 146.404 12.0204C146.404 11.9162 146.415 11.8053 146.436 11.688L146.504 11.3257L146.556 11.0325L147.071 8.20312H148.175L148.015 9.05401H148.581L148.429 9.95479H147.86L147.567 11.5007C147.557 11.5512 147.55 11.6026 147.549 11.6542C147.549 11.8456 147.663 11.9288 147.927 11.9288C148.054 11.9288 148.152 11.9173 148.227 11.8942L148.08 12.7138ZM151.322 9.08445C151.229 9.04748 151.207 9.04748 151.197 9.04445C151.138 9.03138 151.106 9.02373 151.101 9.02278C151.064 9.01633 151.027 9.01323 150.989 9.01353C150.625 9.01353 150.362 9.17705 150.022 9.61517L150.12 9.0537H149.115L148.438 12.7591H149.549C149.946 10.493 150.117 10.0962 150.65 10.0962C150.69 10.0962 150.736 10.0993 150.79 10.1056L150.92 10.1322L151.322 9.08445ZM143.679 10.2246C143.679 10.6927 143.94 11.0151 144.534 11.2573C144.989 11.4435 145.059 11.498 145.059 11.6663C145.059 11.8969 144.859 12.001 144.414 12.001C144.079 12.001 143.768 11.9555 143.408 11.8543L143.254 12.7091L143.303 12.7175L143.509 12.7554C143.576 12.7669 143.673 12.7779 143.803 12.7878C144.07 12.8087 144.277 12.8186 144.422 12.8186C145.607 12.8186 146.155 12.4273 146.155 11.5821C146.155 11.0736 145.926 10.7754 145.363 10.5508C144.892 10.3633 144.838 10.3217 144.838 10.1487C144.838 9.94905 145.025 9.84641 145.387 9.84641C145.608 9.84641 145.909 9.86729 146.195 9.90203L146.355 9.04429C146.064 9.00445 145.623 8.97178 145.366 8.97178C144.11 8.97194 143.675 9.54122 143.679 10.2246ZM139.282 12.7593H138.359L138.38 12.3752C138.099 12.6793 137.725 12.8233 137.216 12.8233C136.614 12.8233 136.201 12.4106 136.201 11.8113C136.201 10.9086 136.919 10.3825 138.152 10.3825C138.278 10.3825 138.438 10.3926 138.604 10.4111C138.638 10.2893 138.648 10.2367 138.648 10.1704C138.648 9.92514 138.454 9.83335 137.936 9.83335C137.619 9.83335 137.26 9.87351 137.013 9.93662L136.859 9.97598L136.76 9.99989L136.914 9.16685C137.467 9.02405 137.832 8.97002 138.243 8.97002C139.197 8.97002 139.701 9.34646 139.701 10.0569C139.701 10.2397 139.684 10.3786 139.611 10.791L139.379 12.1055L139.34 12.3414L139.312 12.5298L139.293 12.6587L139.282 12.7593ZM138.472 11.1085C138.389 11.0982 138.306 11.0931 138.223 11.0932C137.594 11.0932 137.276 11.2827 137.276 11.6569C137.276 11.8875 137.431 12.0348 137.674 12.0348C138.126 12.0349 138.453 11.6564 138.472 11.1085ZM142.924 12.6793C142.553 12.7799 142.17 12.8304 141.786 12.8295C140.545 12.8286 139.898 12.2593 139.898 11.1695C139.898 9.89757 140.721 8.9611 141.838 8.9611C142.752 8.9611 143.336 9.4856 143.336 10.308C143.336 10.581 143.296 10.8471 143.2 11.2228H140.992C140.985 11.2612 140.982 11.3001 140.981 11.3391C140.981 11.7686 141.311 11.9877 141.955 11.9877C142.352 11.9877 142.71 11.9152 143.108 11.7533L142.924 12.6793ZM142.332 10.4745C142.338 10.3974 142.342 10.3343 142.342 10.2855C142.342 9.98459 142.147 9.80801 141.817 9.80801C141.463 9.80801 141.211 10.0448 141.108 10.4723L142.332 10.4745ZM154.773 11.0793C154.607 12.3119 153.753 12.8586 152.617 12.8586C151.361 12.8586 150.854 12.091 150.854 11.1506C150.854 9.83733 151.713 8.94755 153.04 8.94755C154.191 8.94755 154.803 9.67923 154.803 10.6198C154.803 10.8487 154.803 10.8638 154.773 11.0793ZM153.63 10.6052C153.63 10.2176 153.474 9.85167 153.019 9.85167C152.452 9.85167 152.101 10.5263 152.101 11.1219C152.101 11.6242 152.342 11.9618 152.738 11.9546C152.979 11.9546 153.492 11.6244 153.594 11.0476C153.618 10.9131 153.63 10.7655 153.63 10.6052Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1_12960">
<rect width="38" height="23" fill="white" transform="translate(0.5 0.015625)"/>
</clipPath>
<clipPath id="clip1_1_12960">
<rect width="64" height="16.5926" fill="white" transform="translate(50.5 0.015625)"/>
</clipPath>
<clipPath id="clip2_1_12960">
<rect width="32" height="20.48" fill="white" transform="translate(126.5 0.015625)"/>
</clipPath>
</defs>
                </svg>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center text-gray-500  border-t border-gray-700 pt-4">
          &copy; Copyright SomTourista
        </div>
      </footer>
    );
  }

export default Footer