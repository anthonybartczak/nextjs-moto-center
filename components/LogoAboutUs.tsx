import React from "react";
import { motion } from 'framer-motion';

const bgVariant= {
  hidden : {
    opacity : 0,
    pathLength : 0,
    size : 0,
  },
  visible : {
    opacity : 1,
    pathLength: 1,
    size: 1,
    transition: {
      type:"spring",
      duration: 3,
      ease: "easeInOut"
    }
  }
}

function LogoAboutUs() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 888.516 743.976"
      variants={bgVariant}
      initial="hidden"
      animate="visible"
    >
      <circle cx="249.509" cy="102.717" r="65.617" fill="#F7E634"></circle>
      <motion.path
        fill="#3f3d56"
        d="M632.671 121.848L553.963 121.848 553.963 50.296 632.671 121.848z"
      ></motion.path>
      <path fill="#e6e6e6" d="M245.916 119.506H641.867V666.535H245.916z"></path>
      <path fill="#fff" d="M285.419 157.86H332.001V256.016H285.419z"></path>
      <path fill="#fff" d="M357.472 157.86H404.054V256.016H357.472z"></path>
      <path
        fill="#fff"
        d="M279.28 296.983H325.86199999999997V395.139H279.28z"
      ></path>
      <path fill="#fff" d="M357.472 296.983H404.054V395.139H357.472z"></path>
      <path
        fill="#fff"
        d="M279.28 425.709H325.86199999999997V523.865H279.28z"
      ></path>
      <path fill="#fff" d="M355.718 423.955H402.3V522.111H355.718z"></path>
      <path
        fill="#ccc"
        d="M423.423 568.599H470.005V666.7550000000001H423.423z"
      ></path>
      <path fill="#fff" d="M493.802 423.955H540.384V522.111H493.802z"></path>
      <path fill="#fff" d="M571.994 423.955H618.576V522.111H571.994z"></path>
      <path fill="#fff" d="M495.556 295.944H542.138V394.1H495.556z"></path>
      <path fill="#fff" d="M573.748 295.944H620.33V394.1H573.748z"></path>
      <path fill="#fff" d="M495.556 157.86H542.138V256.016H495.556z"></path>
      <path fill="#fff" d="M573.748 157.86H620.33V256.016H573.748z"></path>
      <path fill="#3f3d56" d="M245.916 245.944H641.867V260.917H245.916z"></path>
      <path
        fill="#3f3d56"
        d="M245.916 362.4H641.867V370.71799999999996H245.916z"
      ></path>
      <path fill="#3f3d56" d="M245.916 335.781H641.867V344.099H245.916z"></path>
      <path
        fill="#3f3d56"
        d="M403.322 571.009H469.868V579.327H403.322z"
        transform="rotate(90 397.73 458.292)"
      ></path>
      <path
        fill="#3f3d56"
        d="M449.904 571.009H516.45V579.327H449.904z"
        transform="rotate(90 444.313 458.292)"
      ></path>
      <path
        fill="#3f3d56"
        d="M496.487 571.009H563.033V579.327H496.487z"
        transform="rotate(90 490.895 458.292)"
      ></path>
      <path
        fill="#3f3d56"
        d="M543.069 571.009H609.615V579.327H543.069z"
        transform="rotate(90 537.478 458.292)"
      ></path>
      <path
        fill="#3f3d56"
        d="M589.652 571.009H656.1980000000001V579.327H589.652z"
        transform="rotate(90 584.06 458.292)"
      ></path>
      <path
        fill="#3f3d56"
        d="M636.234 571.009H702.7800000000001V579.327H636.234z"
        transform="rotate(90 630.643 458.292)"
      ></path>
      <path
        fill="#3f3d56"
        d="M682.817 571.009H749.363V579.327H682.817z"
        transform="rotate(90 677.225 458.292)"
      ></path>
      <path
        fill="#3f3d56"
        d="M729.399 571.009H795.945V579.327H729.399z"
        transform="rotate(90 723.808 458.292)"
      ></path>
      <path
        fill="#3f3d56"
        d="M404.154 444.571H470.7V452.889H404.154z"
        transform="rotate(90 398.562 331.853)"
      ></path>
      <path
        fill="#3f3d56"
        d="M450.736 444.571H517.282V452.889H450.736z"
        transform="rotate(90 445.145 331.853)"
      ></path>
      <path
        fill="#3f3d56"
        d="M497.319 444.571H563.865V452.889H497.319z"
        transform="rotate(90 491.727 331.853)"
      ></path>
      <path
        fill="#3f3d56"
        d="M543.901 444.571H610.447V452.889H543.901z"
        transform="rotate(90 538.31 331.853)"
      ></path>
      <path
        fill="#3f3d56"
        d="M590.484 444.571H657.0300000000001V452.889H590.484z"
        transform="rotate(90 584.892 331.853)"
      ></path>
      <path
        fill="#3f3d56"
        d="M637.066 444.571H703.6120000000001V452.889H637.066z"
        transform="rotate(90 631.475 331.853)"
      ></path>
      <path
        fill="#3f3d56"
        d="M683.649 444.571H750.195V452.889H683.649z"
        transform="rotate(90 678.057 331.853)"
      ></path>
      <path
        fill="#3f3d56"
        d="M730.231 444.571H796.777V452.889H730.231z"
        transform="rotate(90 724.64 331.853)"
      ></path>
      <path
        fill="#3f3d56"
        d="M404.154 296.505H470.7V304.823H404.154z"
        transform="rotate(90 398.562 183.788)"
      ></path>
      <path
        fill="#3f3d56"
        d="M450.736 296.505H517.282V304.823H450.736z"
        transform="rotate(90 445.145 183.788)"
      ></path>
      <path
        fill="#3f3d56"
        d="M497.319 296.505H563.865V304.823H497.319z"
        transform="rotate(90 491.727 183.788)"
      ></path>
      <path
        fill="#3f3d56"
        d="M543.901 296.505H610.447V304.823H543.901z"
        transform="rotate(90 538.31 183.788)"
      ></path>
      <path
        fill="#3f3d56"
        d="M590.484 296.505H657.0300000000001V304.823H590.484z"
        transform="rotate(90 584.892 183.788)"
      ></path>
      <path
        fill="#3f3d56"
        d="M637.066 296.505H703.6120000000001V304.823H637.066z"
        transform="rotate(90 631.475 183.788)"
      ></path>
      <path
        fill="#3f3d56"
        d="M683.649 296.505H750.195V304.823H683.649z"
        transform="rotate(90 678.057 183.788)"
      ></path>
      <path
        fill="#3f3d56"
        d="M730.231 296.505H796.777V304.823H730.231z"
        transform="rotate(90 724.64 183.788)"
      ></path>
      <path fill="#3f3d56" d="M245.916 212.671H641.867V220.989H245.916z"></path>
      <path fill="#3f3d56" d="M245.916 186.052H641.867V194.37H245.916z"></path>
      <path
        fill="#3f3d56"
        d="M245.916 390.682H641.867V405.65500000000003H245.916z"
      ></path>
      <path fill="#3f3d56" d="M227.696 113.351H660.088V135.663H227.696z"></path>
      <path
        fill="#fff"
        d="M332.09 589.824L332.09 568.599 306.62 568.599 306.62 589.824 329.967 589.824 332.09 589.824z"
      ></path>
      <path
        fill="#fff"
        d="M329.967 606.803L306.62 606.803 306.62 628.028 332.09 628.028 332.09 606.803 329.967 606.803z"
      ></path>
      <path
        fill="#fff"
        d="M349.07 568.599H374.53999999999996V589.8240000000001H349.07z"
      ></path>
      <path
        fill="#fff"
        d="M349.07 606.803H374.53999999999996V628.028H349.07z"
      ></path>
      <path
        fill="#fff"
        d="M539.823 589.824L539.823 568.599 514.353 568.599 514.353 589.824 537.7 589.824 539.823 589.824z"
      ></path>
      <path
        fill="#fff"
        d="M537.7 606.803L514.353 606.803 514.353 628.028 539.823 628.028 539.823 606.803 537.7 606.803z"
      ></path>
      <path
        fill="#fff"
        d="M556.802 568.599H582.272V589.8240000000001H556.802z"
      ></path>
      <path fill="#fff" d="M556.802 606.803H582.272V628.028H556.802z"></path>
      <path fill="#3f3d56" d="M245.916 517.12H641.867V532.093H245.916z"></path>
      <path fill="#3f3d56" d="M245.916 490.502H641.867V498.82H245.916z"></path>
      <path
        fill="#3f3d56"
        d="M245.916 463.883H641.867V472.20099999999996H245.916z"
      ></path>
      <path
        fill="#4F46E5"
        d="M365.788 659.405q0-.695-.02-1.382c-.355-12.264-12.52-15.59-19.043-9.785a11.314 11.314 0 00-14.836 0c-6.55-5.714-18.473-2.624-18.867 9.5q-.022.688-.023 1.382a71.13 71.13 0 00.468 7.63h51.859a70.394 70.394 0 00.462-7.345zM571.897 659.405q.002-.695-.019-1.382c-.355-12.264-12.521-15.59-19.043-9.785a11.314 11.314 0 00-14.836 0c-6.55-5.714-18.473-2.624-18.867 9.5q-.022.688-.024 1.382a71.133 71.133 0 00.468 7.63h51.86a70.394 70.394 0 00.461-7.345z"
      ></path>
      <path
        fill="#e6e6e6"
        d="M856.314 667.579L848.294 667.579 850.967 510.911 853.641 510.911 856.314 667.579z"
      ></path>
      <path
        fill="#e6e6e6"
        d="M862.997 412.277l12.947-20.008a299.962 299.962 0 00-13.283-31.093l-8.371 6.762 6.628-10.244c-6.317-12.436-11.287-20.27-11.287-20.27s-25.965 40.916-34.64 84.236l16.614 25.675-18.392-14.854a121.357 121.357 0 00-1.009 15.217c0 51.306 16.756 92.898 37.427 92.898s37.426-41.592 37.426-92.898c0-15.905-3.598-32.546-8.562-47.939z"
      ></path>
      <path
        fill="#4F46E5"
        d="M828.074 448.447L656.97 448.447 656.97 574.433 657.074 574.433 657.074 599.516 682.157 574.433 828.074 574.433 828.074 448.447z"
      ></path>
      <path
        fill="#e6e6e6"
        d="M459.892 717.512H611.6949999999999V723.512H459.892z"
      ></path>
      <path
        fill="#e6e6e6"
        d="M735.892 717.512H888.5160000000001V723.512H735.892z"
      ></path>
      <path fill="#e6e6e6" d="M183.892 717.512H335.892V723.512H183.892z"></path>
      <path fill="#3f3d56" d="M0 666.619H887.892V668.292H0z"></path>
      <path
        fill="#3f3d56"
        d="M852.136 770.691H870.012V773.528H852.136z"
        transform="rotate(-179.969 783.192 733.124)"
      ></path>
      <path
        fill="#4F46E5"
        d="M567.15 693.314l3.688.854 140.169.075 1.26-2.937a29.642 29.642 0 002.18-16.028c-.604-4.056-2.117-8.086-5.553-9.836l-6.22-41.43-77.548-.139-30.003 24.2s-14.153-.255-21.842 9.317a22.468 22.468 0 00-4.7 12.375l-.303 4.98z"
      ></path>
      <circle cx="597.936" cy="692.621" r="17.308" fill="#3f3d56"></circle>
      <circle cx="597.936" cy="692.621" r="9.11" fill="#ccc"></circle>
      <circle cx="683.343" cy="692.667" r="17.308" fill="#3f3d56"></circle>
      <circle cx="683.343" cy="692.667" r="9.11" fill="#ccc"></circle>
      <path
        fill="#fff"
        d="M607.043 645.244L648.913 645.262 654.024 645.262 662.653 645.268 662.653 644.638 662.659 637.051 662.665 628.53 656.925 628.53 651.813 628.524 642.76 628.518 637.649 628.518 627.197 628.512 607.043 645.244z"
      ></path>
      <path
        fill="#fff"
        d="M669.466 645.274L691.594 645.286 691.6 640.944 691.6 633.356 691.606 628.548 688.366 628.548 683.255 628.542 669.472 628.536 669.466 645.274z"
      ></path>
      <path
        fill="#3f3d56"
        d="M815.551 735.767H818.388V741.158H815.551z"
        transform="rotate(-180 739.087 699.48)"
      ></path>
      <path
        fill="#3f3d56"
        d="M770.015 726.805H772.852V732.1959999999999H770.015z"
        transform="rotate(90.03 732.548 612.668)"
      ></path>
      <path
        fill="#3f3d56"
        d="M616.402 651.318h-.312a5.93 5.93 0 01-5.927-5.933 5.93 5.93 0 015.933-5.927h.312l-.006 11.86zM568.278 674.744a9.166 9.166 0 005.003-17.354 22.468 22.468 0 00-4.7 12.375z"
      ></path>
      <path
        fill="#f2f2f2"
        d="M651.813 628.524L662.653 644.638 662.659 637.051 656.925 628.53 651.813 628.524z"
      ></path>
      <path
        fill="#f2f2f2"
        d="M683.255 628.542L691.6 640.944 691.6 633.356 688.366 628.548 683.255 628.542z"
      ></path>
      <path
        fill="#f2f2f2"
        d="M637.649 628.518L648.913 645.262 654.024 645.262 642.76 628.518 637.649 628.518z"
      ></path>
      <path
        fill="#e6e6e6"
        d="M410.397 1.048l-.116.063a8.551 8.551 0 01-8.153.029l-.216-.116a8.592 8.592 0 00-8.144.028l-.108.06a8.551 8.551 0 01-8.153.028l-.224-.12a8.543 8.543 0 00-8.064-.014c-3.793 2.042-8.92 5.534-8.897 9.477a4.587 4.587 0 00.026.467c.441 4.096 13.8 5.14 21.137 3.21a37.358 37.358 0 0016.621 0c7.307 1.96 20.936.837 21.335-3.306a4.588 4.588 0 00.021-.467c-.023-3.945-5.195-7.4-9.011-9.414a8.535 8.535 0 00-8.054.075zM778.397 136.264l-.116.063a8.551 8.551 0 01-8.153.029l-.216-.116a8.592 8.592 0 00-8.144.028l-.108.06a8.551 8.551 0 01-8.153.028l-.224-.12a8.543 8.543 0 00-8.064-.014c-3.793 2.042-8.92 5.534-8.897 9.477a4.587 4.587 0 00.026.467c.441 4.096 13.8 5.14 21.137 3.209a37.358 37.358 0 0016.621 0c7.307 1.961 20.936.838 21.335-3.305a4.588 4.588 0 00.02-.467c-.022-3.946-5.194-7.4-9.01-9.414a8.535 8.535 0 00-8.054.075zM133.967 143.812l-.116.063a8.551 8.551 0 01-8.153.029l-.215-.116a8.592 8.592 0 00-8.145.028l-.108.06a8.551 8.551 0 01-8.153.028l-.224-.12a8.543 8.543 0 00-8.064-.014c-3.793 2.042-8.92 5.534-8.897 9.477a4.587 4.587 0 00.026.467c.441 4.096 13.8 5.14 21.137 3.21a37.358 37.358 0 0016.621 0c7.307 1.96 20.936.837 21.335-3.306a4.591 4.591 0 00.021-.467c-.023-3.945-5.195-7.4-9.01-9.414a8.535 8.535 0 00-8.055.075z"
      ></path>
      <path
        fill="#3f3d56"
        d="M92.278 726.679H110.15400000000001V729.516H92.278z"
      ></path>
      <path
        fill="#4F46E5"
        d="M239.398 727.315l-3.688.853-140.168.075-1.26-2.937a29.642 29.642 0 01-2.18-16.028c.604-4.055 2.116-8.086 5.552-9.836l6.22-41.43 77.548-.138 30.003 24.199s14.153-.254 21.842 9.318a22.468 22.468 0 014.7 12.374l.303 4.98z"
      ></path>
      <circle cx="208.612" cy="726.622" r="17.308" fill="#3f3d56"></circle>
      <circle cx="208.612" cy="726.622" r="9.11" fill="#ccc"></circle>
      <circle cx="123.206" cy="726.668" r="17.308" fill="#3f3d56"></circle>
      <circle cx="123.206" cy="726.668" r="9.11" fill="#ccc"></circle>
      <path
        fill="#fff"
        d="M199.505 679.244L157.635 679.263 152.524 679.263 143.895 679.269 143.895 678.639 143.889 671.051 143.883 662.531 149.624 662.531 154.735 662.524 163.788 662.518 168.899 662.518 179.351 662.512 199.505 679.244z"
      ></path>
      <path
        fill="#fff"
        d="M137.082 679.275L114.954 679.287 114.948 674.945 114.948 667.357 114.942 662.549 118.182 662.549 123.293 662.543 137.076 662.537 137.082 679.275z"
      ></path>
      <path
        fill="#3f3d56"
        d="M143.901 691.756H146.738V697.1469999999999H143.901z"
      ></path>
      <path
        fill="#3f3d56"
        d="M345.179 760.805H348.01599999999996V766.1959999999999H345.179z"
        transform="rotate(89.969 307.754 646.582)"
      ></path>
      <path
        fill="#3f3d56"
        d="M190.143 673.457h.312a5.93 5.93 0 015.93 5.93 5.93 5.93 0 01-5.93 5.93h-.312v-11.86zM238.27 708.745a9.166 9.166 0 01-5.003-17.354 22.468 22.468 0 014.7 12.374z"
      ></path>
      <path
        fill="#f2f2f2"
        d="M154.735 662.524L143.895 678.639 143.889 671.051 149.624 662.531 154.735 662.524z"
      ></path>
      <path
        fill="#f2f2f2"
        d="M123.293 662.543L114.948 674.945 114.948 667.357 118.182 662.549 123.293 662.543z"
      ></path>
      <path
        fill="#f2f2f2"
        d="M168.899 662.518L157.635 679.263 152.524 679.263 163.788 662.518 168.899 662.518z"
      ></path>
      <path
        fill="#fff"
        d="M736.528 538.291L714.678 510.199 727.384 500.316 737.729 513.617 772.679 476.725 784.366 487.797 736.528 538.291z"
      ></path>
      <path
        fill="#4F46E5"
        d="M6.34 480.325L177.444 480.325 177.444 606.311 177.34 606.311 177.34 631.394 152.257 606.311 6.34 606.311 6.34 480.325z"
      ></path>
      <path
        fill="#fff"
        d="M87.042 573.169L65.192 545.077 77.899 535.193 88.244 548.495 123.193 511.603 134.88 522.674 87.042 573.169z"
      ></path>
    </motion.svg>
  );
}

export default LogoAboutUs;