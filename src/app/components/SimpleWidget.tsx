import Link from 'next/link';
import { IoCafeOutline } from 'react-icons/io5';

interface Props {
  title: string;
  subTitle?: string;
  label?: string;
  icon?: React.ReactNode;
  href?: string;
}

export const SimpleWidget = ({ title, subTitle, label, icon, href }: Props) => {
  return (
    <div className="border-1 mx-2 min-w-full rounded-2xl border-gray-50  bg-white p-3 shadow-xl sm:min-w-[25%]">
      <div className="flex flex-col">
        <div>
          <h2 className="text-center font-bold text-gray-600">{title}</h2>
        </div>
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            <div id="icon">
              {/* Icono irá aquí */}
              {/* <IoCafeOutline size={50} /> */}
            </div>
            <div id="temp" className="text-center">
              <h4 className="text-4xl">{label}</h4>
              <p className="text-xs text-gray-500">{subTitle}</p>
            </div>
          </div>
        </div>
        {href && (
          <div className="mt-2 w-full place-items-end border-t-2 border-gray-100 text-right">
            <Link href={href} className="text-xs font-medium text-indigo-600">
              Más
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
