import type { NextPage } from 'next';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import Popup from '../components/Popup';

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  const handleClosePopup = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    setOpenPopup(false);
  };

  useEffect(() => {
    setOpenModal(true);

    return () => setOpenModal(false);
  }, []);

  useEffect(() => {
    setOpenPopup(true);
    const timer = setTimeout(() => {
      setOpenPopup(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="aspect-auto h-screen w-full bg-main-bg bg-cover bg-no-repeat object-cover">
      <header className="flex items-center justify-between">
        <Link href={'/'}>
          <a className="z-10 ml-[175px] mt-[14px] h-9 w-[100px] bg-logo-white">
            <h1 className=" absolute m-[-1px] h-[1px] w-[1px] overflow-hidden">Main Logo</h1>
          </a>
        </Link>
        <button className="z-10 mt-[14px] mr-[116px] h-9 w-[146px] cursor-pointer rounded-[18px] border-2 border-white bg-transparent font-poppins text-sm font-bold leading-[21px] text-white">
          Connect Wallet
        </button>
      </header>
      {openModal && <Modal />}
      {openPopup && <Popup onClose={handleClosePopup} />}
    </main>
  );
};

export default Home;
