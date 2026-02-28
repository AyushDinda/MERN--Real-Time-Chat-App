import { LoaderCircle, LoaderIcon, LoaderPinwheel } from "lucide-react";
function PageLoader() {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* <LoaderPinwheel className="size-10 animate-spin"  /> */}
      {/* <LoaderCircle className="size-10 animate-spin" /> */}
      <LoaderIcon className="size-10 animate-spin" />
    </div>
  );
}
export default PageLoader;

