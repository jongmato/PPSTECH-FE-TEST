import Portal from './Portal';
import React, { useState } from 'react';
import { combineClassName } from '../utils';

const Modal = (): JSX.Element => {
  const [quantity, setQuantity] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [roleType, setRoleType] = useState<string>('-');
  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setQuantity(parseInt(e.currentTarget.value));
  };
  const handleChangeRoleType = (e: React.MouseEvent<HTMLElement>): void => {
    const type = e.currentTarget.innerText;
    setRoleType(type);
  };
  const handleChangeAmount = (e: React.MouseEvent<HTMLElement>): void => {
    const type = e.currentTarget.innerText;
    if (type === '+') {
      setAmount((prev) => prev + 1);
      return;
    }
    if (type === '-') {
      if (amount === 0) {
        setAmount(0);
        return;
      }
      setAmount((prev) => prev - 1);
    }
  };
  const openKlaytnscope = (e: React.MouseEvent<HTMLElement>): void => {
    window.open('https://scope.klaytn.com/');
  };
  const openKlayswap = (e: React.MouseEvent<HTMLElement>): void => {
    window.open('https://klayswap.com/');
  };
  return (
    <Portal>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center overflow-hidden bg-black bg-opacity-40">
        <div className="flex h-[609px] w-[956px] rounded-[20px] border-4 border-[#5450D3] bg-white">
          <section className="h-full w-[355px] pt-10 pl-12 pb-12">
            <div className="flex h-full w-full flex-col justify-start">
              <div className="mb-[27px] aspect-auto h-[59px] w-40 bg-logo-color-1 bg-cover bg-no-repeat object-cover"></div>
              <p className="ml-1 mb-3 h-fit font-poppins text-sm font-bold leading-[21px] tracking-[-0.3px] text-[#2E313D]">
                Minting Block Number
              </p>
              <p className="ml-1 mb-4 h-fit font-poppins text-[40px] font-bold leading-[21px] tracking-[-0.8px] text-[#5450D3]">
                #83153301
              </p>
              <p className="ml-1 mb-2 w-[275px] break-words font-pretendard text-base font-medium tracking-[-0.2px] text-[#2E313D]">
                블록 정보는{' '}
                <span onClick={openKlaytnscope} className="cursor-pointer underline underline-offset-[3px]">
                  클레이튼스코프
                </span>{' '}
                or{' '}
                <span onClick={openKlayswap} className="cursor-pointer underline underline-offset-[3px]">
                  클레이스왑
                </span>
                을 확인해주세요.
              </p>
              <p className="ml-1 mb-[94px] w-[235px] break-words font-pretendard text-xs font-normal leading-[18px] text-[#2E313D]">
                Block Height information can be found on{' '}
                <span onClick={openKlaytnscope} className="cursor-pointer underline underline-offset-[3px]">
                  Klaytnscope
                </span>{' '}
                or{' '}
                <span onClick={openKlayswap} className="cursor-pointer underline underline-offset-[3px]">
                  Klayswap.
                </span>
              </p>
              <div className="ml-1 flex h-[160px] w-[269px] flex-col rounded-[10px] bg-[#F5F7FF] pt-4 pb-4 pl-4 pr-[18px]">
                <span className="font-pretendard text-xs font-bold leading-[18px] text-[#2E313D]">유의사항</span>
                <ul className="font-pretendard text-[10px] font-normal leading-[18px] tracking-[-0.2px] text-[#2E313D]">
                  <li>
                    <span className="break-words before:content-['∙']">
                      민팅은 PC에서만 진행 가능하며, 모바일 지원 불가
                    </span>
                  </li>
                  <li>
                    <span className="break-words before:content-['∙']">
                      OZ, KZ, WZ, JJZ Turn 참여 지갑 당 트랜잭션 1회, 최대 2개의 NFT 민팅 가능
                    </span>
                  </li>
                  <li>
                    <span className="break-words before:content-['∙']">
                      PUB(Public) Turn 참여 지갑 당 트랜잭션 1회, 최대 5개의 NFT 민팅 가능
                    </span>
                  </li>
                  <li>
                    <span className="break-words before:content-['∙']">
                      1회 트랜잭션 제출 이후, 추가 트랜잭션 시도 시 민팅 불가
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="h-full w-[600px] py-11">
            <div className="flex h-full w-full flex-col justify-start border-l border-[#D9DDEB] pl-9 pr-12">
              <div className="mt-1 mb-8 flex justify-between">
                <p className="text-sm font-bold leading-[21px] tracking-[-0.3px] text-[#2E313D]">My Role</p>
                <div className="flex space-x-2.5">
                  <div
                    onClick={handleChangeRoleType}
                    className="relative h-[18px] w-8 cursor-pointer font-poppins text-xs font-bold leading-[13px] tracking-[-0.225px] text-[#BDC1D1]"
                  >
                    <span className="absolute top-[3px] left-[2px] block h-[18px] w-8 rounded-[9px] border-2 border-[#BDC1D1] bg-[#D9DDEB]"></span>
                    <span className="absolute top-0 left-0 flex h-[18px] w-8 items-center justify-center rounded-[9px] border-2 border-[#BDC1D1] bg-white hover:bg-[#E94251] hover:text-white focus:bg-[#E94251] focus:text-white">
                      OZ
                    </span>
                  </div>
                  <div
                    onClick={handleChangeRoleType}
                    className="relative h-[18px] w-8 cursor-pointer font-poppins text-xs font-bold leading-[13px] tracking-[-0.225px] text-[#BDC1D1]"
                  >
                    <span className="absolute top-[3px] left-[2px] block h-[18px] w-8 rounded-[9px] border-2 border-[#BDC1D1] bg-[#D9DDEB]"></span>
                    <span className="absolute top-0 left-0 flex h-[18px] w-8 items-center justify-center rounded-[9px] border-2 border-[#BDC1D1] bg-white hover:bg-[#E94251] hover:text-white focus:bg-[#E94251] focus:text-white">
                      KZ
                    </span>
                  </div>
                  <div
                    onClick={handleChangeRoleType}
                    className="relative h-[18px] w-8 cursor-pointer font-poppins text-xs font-bold leading-[13px] tracking-[-0.225px] text-[#BDC1D1]"
                  >
                    <span className="absolute top-[3px] left-[2px] block h-[18px] w-8 rounded-[9px] border-2 border-[#BDC1D1] bg-[#D9DDEB]"></span>
                    <span className="absolute top-0 left-0 flex h-[18px] w-8 items-center justify-center rounded-[9px] border-2 border-[#BDC1D1] bg-white hover:bg-[#E94251] hover:text-white focus:bg-[#E94251] focus:text-white">
                      WZ
                    </span>
                  </div>
                  <div
                    onClick={handleChangeRoleType}
                    className="relative h-[18px] w-8 cursor-pointer font-poppins text-xs font-bold leading-[13px] tracking-[-0.225px] text-[#BDC1D1]"
                  >
                    <span className="absolute top-[3px] left-[2px] block h-[18px] w-8 rounded-[9px] border-2 border-[#BDC1D1] bg-[#D9DDEB]"></span>
                    <span className="absolute top-0 left-0 flex h-[18px] w-8 items-center justify-center rounded-[9px] border-2 border-[#BDC1D1] bg-white hover:bg-[#E94251] hover:text-white focus:bg-[#E94251] focus:text-white">
                      JJZ
                    </span>
                  </div>
                  <div
                    onClick={handleChangeRoleType}
                    className="relative h-[18px] w-8 cursor-pointer font-poppins text-xs font-bold leading-[13px] tracking-[-0.225px] text-[#BDC1D1]"
                  >
                    <span className="absolute top-[3px] left-[2px] block h-[18px] w-8 rounded-[9px] border-2 border-[#BDC1D1] bg-[#D9DDEB]"></span>
                    <span className="absolute top-0 left-0 flex h-[18px] w-8 items-center justify-center rounded-[9px] border-2 border-[#BDC1D1] bg-white hover:bg-[#E94251] hover:text-white focus:bg-[#E94251] focus:text-white">
                      PUB
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-6 flex h-[140px] w-full border-t border-b border-[#D9DDEB] py-6">
                <div className="flex h-full w-[159px] flex-col">
                  <p className="mb-2 font-poppins text-sm font-bold leading-[21px] tracking-[-0.3px] text-[#2E313D]">
                    Minting Turn
                  </p>
                  <div className="flex h-10 w-full items-center font-poppins text-[40px] font-bold leading-10 tracking-[-0.230769px] text-[#5450D3]">
                    {roleType}
                  </div>
                </div>
                <div className="mr-[31.5px] ml-[0.5px] mt-3 h-[80px] w-[1px] bg-[#D9DDEB]"></div>
                <div className="flex flex-col">
                  <p className="mb-[13px] font-poppins text-sm font-bold leading-[21px] tracking-[-0.3px] text-[#2E313D]">
                    Remaining Quantity
                  </p>
                  <div className="flex">
                    <div className="range-slider relative h-4 w-[258px] rounded-[12px]">
                      <input
                        id="quantity"
                        className="mr-2 h-4 w-[258px] appearance-none rounded-[12px] bg-[#F5F7FF] transition-colors duration-200 ease-in"
                        style={{
                          background: `linear-gradient(to right,#5450D3 0%,#5450D3 ${
                            (quantity / 4700) * 100
                          }%,#F5F7FF ${(quantity / 4700) * 100 + 5}%, #F5F7FF 100%)`,
                        }}
                        type="range"
                        min={0}
                        value={quantity}
                        max={4700}
                        onChange={handleChangeQuantity}
                      />
                      <div
                        className={`absolute top-[22px] flex flex-col items-center justify-center`}
                        style={
                          quantity !== 0
                            ? {
                                left: `${(quantity / 4700) * 100}%`,
                                transform: `translateX(-50%)`,
                              }
                            : { left: '2.5px' }
                        }
                      >
                        <div className="h-0 w-0 rounded-[1px] border-b-[10px] border-l-[5px] border-r-[5px] border-r-transparent border-l-transparent border-b-[#5450D3]"></div>
                        <div>{quantity}</div>
                      </div>
                      <div className="absolute top-2/4 right-1 h-2 w-2 -translate-y-1/4 rounded-full bg-[#9896E5]" />
                      <div className="absolute top-2/4 left-1 h-2 w-2 -translate-x-1/4 -translate-y-1/4 rounded-full bg-[#9896E5]" />
                    </div>
                    <label
                      htmlFor="quantity"
                      className="font-poppins text-2xl font-bold leading-[21px] tracking-[-0.8px] text-[#2E313D]"
                    >
                      4700
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="mb-4 font-poppins text-sm font-bold leading-[21px] tracking-[-0.3px] text-[#2E313D]">
                  Price
                </p>
                <div className="mb-9 flex">
                  <div className="aspect-auto h-9 w-9 bg-transparent  bg-klaytn-logo bg-cover bg-no-repeat object-cover"></div>
                  <span className="font-poppins text-[40px] font-bold leading-10 tracking-[-0.3px] text-[#5450D3]">
                    400 KLAY
                  </span>
                </div>
                <p className="mb-6 font-poppins text-sm font-bold leading-[21px] tracking-[-0.3px] text-[#2E313D]">
                  Amount (<span className="text-[#5450D3]">Max 2 NFTs</span> per Wallet)
                </p>
                <div className="mb-4 flex justify-between">
                  <div
                    onClick={handleChangeAmount}
                    className="relative h-7 w-10 cursor-pointer font-poppins text-base font-bold leading-[21px] tracking-[-0.3px] text-[#090A0D]"
                  >
                    <span className="absolute top-[4px] left-[3px] block h-7 w-10 rounded-[14px] border-2 border-[#090A0D] bg-[#585D6E]"></span>
                    <span className="absolute top-0 left-0 flex h-7 w-10 items-center justify-center rounded-[14px] border-2 border-[#090A0D] bg-white">
                      -
                    </span>
                  </div>
                  <span
                    className={combineClassName(
                      'font-poppins text-[32px] font-bold leading-10 tracking-[-0.24px]',
                      amount !== 0 ? 'text-[#090A0D]' : 'text-[#BDC1D1]',
                    )}
                  >
                    {amount}
                  </span>
                  <div
                    onClick={handleChangeAmount}
                    className="relative h-7 w-10 cursor-pointer font-poppins text-base font-bold leading-[21px] tracking-[-0.3px] text-[#090A0D]"
                  >
                    <span className="absolute top-[4px] left-[3px] block h-7 w-10 rounded-[14px] border-2 border-[#090A0D] bg-[#585D6E]"></span>
                    <span className="absolute top-0 left-0 flex h-7 w-10 items-center justify-center rounded-[14px] border-2 border-[#090A0D] bg-white">
                      +
                    </span>
                  </div>
                </div>
                <p className="mb-4 flex items-center justify-center font-pretendard text-xs font-medium leading-[21px] text-[#6F7486]">
                  Minting은 새로고침 없이 진행됩니다.
                </p>
                <button className="h-14 w-[516px] rounded-[10px] bg-[#F5F7FF] text-center font-poppins text-xl font-bold leading-6 text-[#D9DDEB]">
                  MINTING
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
