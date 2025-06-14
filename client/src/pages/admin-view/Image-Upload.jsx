import { useRef } from "react";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { CloudUpload, FileIcon, XIcon } from "lucide-react";
import { Button } from "../../components/ui/button";

function ProductImageUpload({
  imageFile,
  setImageFile,
  uploadImageUrl,
  setuploadImageUrl,
}) {
  const InputRef = useRef(null);
  function handleImageFileChange(event) {
    event.preventDefault;
    console.log(event.target.files);
    const ImageFile = event.target?.files?.[0];
    if (ImageFile) setImageFile(ImageFile);
  }
  function handleDragOver(event) {
    event.preventDefault();
  }
  function handleDrop(event) {
    event.preventDefault();
    const DropFiles = event.dataTransfer.files?.[0];
    if (DropFiles) setImageFile(DropFiles);
  }
  function handleremoveFile() {
    setImageFile(null);
    if (InputRef.current) {
      InputRef.current.value = "";
    }
  }
  return (
    <div className="w-full max-w-md mx-auto">
      <Label className="text-lg font-semibold ml-5 block cursor-pointer mb-5">
        IMAGE UPLOAD
      </Label>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border-2 p-4 border-dashed bg-muted-foreground mt-5"
      >
        <Input
          type="file"
          id="file-upload"
          className="hidden"
          ref={InputRef}
          onChange={handleImageFileChange}
        />
        {!imageFile ? (
          <Label
            className="flex flex-col justify-center items-center h-32"
            htmlFor="file-upload"
          >
            <CloudUpload />
            <span>Drag & Drop or Click to Upload Images</span>
          </Label>
        ) : (
          <div className="flex items-center justify-between">
            <FileIcon size={28} />
            <p className="font-medium">
              {imageFile.name.length > 20
                ? imageFile.name.slice(0, 26) + "..."
                : imageFile.name}
            </p>
            <Button
              onClick={handleremoveFile}
              className="cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition h-6"
              variant="ghost"
            >
              <XIcon className="w-4 h-4" />
              <span className="sr-only">Remove Item</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
export default ProductImageUpload;
