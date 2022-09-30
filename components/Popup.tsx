import Portal from './Portal';

interface Props {
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
}

const Popup = ({ onClose }: Props): JSX.Element => {
  return (
    <Portal>
      <div className="fixed left-14 bottom-[71px] flex h-[117px] w-[370px] flex-col rounded-[15px] border-[3px] border-[#5450D3] bg-[#F5F7FF] pt-[22px] pl-5 pr-5 pb-6">
        <div className="mb-4 flex w-full justify-between">
          <div className="aspect-auto h-[29px] w-20 bg-logo-color-2 bg-cover bg-no-repeat object-cover"></div>
          <button className="h-5 w-5 bg-[#F5F7FF]" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 text-[#6F7486]"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="font-pretendard text-base font-bold tracking-[-0.2px] text-[#2E313D]">민팅 시작 전입니다.</p>
      </div>
    </Portal>
  );
};

export default Popup;
