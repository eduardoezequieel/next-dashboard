import { WidgetsGrid } from '@/app/components';

export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl">Hello Page Main</h1>
      <span className="text-xl">Información general</span>
      <WidgetsGrid />
    </div>
  );
}
