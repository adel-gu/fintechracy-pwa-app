import React from 'react';
import FooterBtn from './footer-buttons/FooterBtn';
import receipts from '../../assets/white-theme/receipts/secondary.svg';
import cards from '../../assets/white-theme/cards/secondary.svg';
import sratistics from '../../assets/white-theme/sratistics/secondary.svg';
import offers from '../../assets/white-theme/offers/secondary.svg';
import accounts from '../../assets/white-theme/accounts/secondary.svg';

const btns = [
  { name: 'Receipts ', link: '/', src: receipts },
  { name: 'Sratistics ', link: '/', src: sratistics },
  { name: 'Cards ', link: '/', src: cards },
  { name: 'Offers ', link: '/', src: offers },
  { name: 'Account ', link: '/', src: accounts },
];

function Footer() {
  return (
    <footer className="border-t border-[#E9E8FF] w-full flex py-2">
      {btns.map((btn) => (
        <FooterBtn
          key={btn.name}
          name={btn.name}
          link={btn.link}
          src={btn.src}
        />
      ))}
    </footer>
  );
}

export default Footer;
